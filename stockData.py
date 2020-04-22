import sqlite3
import time
import pandas as pd

from sqlite3 import Error
from pprint import pprint

# https://medium.com/alpha-vantage/get-started-with-alpha-vantage-data-619a70c7f33a
from alpha_vantage.timeseries import TimeSeries
from alpha_vantage.techindicators import TechIndicators

# Import API key
from api_keys import api_key

# Technically, these are all constants
old_to_new = {"1. open": "open", "2. high": "high", "3. low": "low", "4. close": "close", "5. volume": "volume"}
reorder = ["date", "ticker", "open", "high", "low", "close", "volume"]

# Create a list of ticker symbols
stocks = ["DAL", "AAL", "LUV", "UAL", "MSFT", "AAPL", "V", "INTC", "NEE", "D", "DUK", "SO", "FB", "GOOG", "GOOGL", "TMUS", "UBER", "BKNG", "LYFT", "TCOM", "ZM"]

# The SQL for pulling stocks is basically the same except for the value passed in.
baseSQL = "SELECT date(stocks.date) as date, stocks.ticker, company, open, high, low, close, volume FROM stocks LEFT JOIN categories ON categories.ticker = stocks.ticker"


def delTable(tableName):
    retVal = False
    
    try:
        # get our connection
        conn = sqlite3.connect(r"static/data/stocks.sqlite")
        
        # create our cursor
        cur = conn.cursor()
        cur.execute(f"DROP TABLE IF EXISTS {tableName}")
        retVal = True
    except Error as e:
            print(f"Could not drop the table named '{tableName}'./n/n  Error is:  {e}")
            retVal = False
    finally:
        # make sure we close our connection
        conn.close()
        return retVal
    # end try
# end delTable(tableName)


# Function to get tickers from category
# returns tuple
def getStocks(category):
    mygetStocks = []
    
    try:
        conn = sqlite3.connect(r"static/data/stocks.sqlite")

        cur = conn.cursor()
        cur.execute(f"SELECT ticker FROM categories WHERE category = '{category}'")
        rows = cur.fetchall()
        conn.close()
        for row in rows:
            mygetStocks.append(row[0])
        # next row
        
    except Error as e:
        print(f"The API failed for the category '{category}'. Please try again later./n/n  Error is:  {e}")
    finally:
        conn.close()
    # end try
    
    return mygetStocks
# end getStocks()


# Function to get category from ticker
# returns string
def getCategory(ticker):
    mygetCategory = ""
    
    try:
        conn = sqlite3.connect(r"static/data/stocks.sqlite")

        cur = conn.cursor()
        cur.execute(f"SELECT category FROM categories WHERE ticker = '{ticker}'")
        rows = cur.fetchall()
        conn.close()
        
        for row in rows:
            mygetCategory = row[0]
        # next row
        
    except Error as e:
        print(f"The API failed for the stock '{ticker}'. Please try again later./n/n  Error is:  {e}")
    finally:
        conn.close()
    # end try
    
    return mygetCategory
# end getCategory(ticker)


def storeData(df_Stock):
    try:
        # store the ticker sykmbol
        ticker = df_Stock["ticker"][0]
        
        # get our connection
        conn = sqlite3.connect(r"static/data/stocks.sqlite")
        
        # create our cursor
        cur = conn.cursor()
        
        # first check to see if our table exists
        cur.execute("SELECT count(name) FROM sqlite_master WHERE type='table' AND name='stocks'")

        # if the count is 1, then our table exists
        if cur.fetchone()[0]==1:
            cur.execute(f"DELETE FROM stocks WHERE ticker = '{ticker}'")
        # end if
        
        # add this stock data to our database
        df_Stock.to_sql(name="stocks", con=conn, if_exists="append", index=True)
    
    except Error as e:
            print(f"Save failed for the stock: '{ticker}'. Please try again later./n/n  Error is:  {e}")
    finally:
        # make sure we close our connection
        conn.close()
    # end try
# end storeData()


def refresh():
    # Delete the stocks table.  We'll add it back as we add data
    if (delTable("stocks") == True):
        for stockTicker in stocks:
            print(f"Getting data for ticker:'{stockTicker}'")

            try:
                # Chose your output format, or default to JSON (python dict)
                ts = TimeSeries(api_key, output_format='pandas')

                # aapl_data is a pandas dataframe, aapl_meta_data is a dict
                stockData, meta_data = ts.get_daily(symbol=stockTicker)

                # add the ticker column
                stockData["ticker"] = stockTicker

                # because "date" is not a field but rather an index
                # reset the index so "date" is a field
                stockData.reset_index(inplace=True)

                # rename the columns
                stockData.rename(columns=old_to_new, inplace=True)

                # reorder the columns
                stockData = stockData[reorder]  

                # convert to datetime
                stockData["date"] = pd.to_datetime(stockData["date"])

                # set the index
                stockData.set_index("date", inplace=True)

                # convert the numeric fields to float
                stockData[["open", "high", "low", "close", "volume"]] = stockData[["open", "high", "low", "close", "volume"]].apply(pd.to_numeric)
                
                # stick all the data into our SQLite database
                storeData(stockData)

                time.sleep(12)
            except Error as e:
                print(f"The API failed for the stock '{stockTicker}'. Please try again later./n/n  Error is:  {e}")
            finally:
                print("The update process has completed.")
            # End Try
        # Next stockTicker
    # end if
# end refresh()


def runQuery(SQL):    
    retVal = []
    try:
        conn = sqlite3.connect(r"static/data/stocks.sqlite")

        cur = conn.cursor()
        cur.execute(SQL)
        rows = cur.fetchall()
        conn.close()
        
        for row in rows:
            retVal.append({
                "date": row[0],
                "ticker": row[1],
                "company": row[2],
                "open": row[3],
                "high": row[4], 
                "low": row[5],
                "close": row[6],
                "volume": row[7]
            })
#         next row
        
    except Error as e:
        print(f"The database query failed for the following statement:/n/n '{SQL}'./n/n  Error is:  {e}")
    finally:
        conn.close()
    # end try
    
    return retVal
# end runQuery(SQL)

def getStockDataByCategory(category):
    mySQL = f"{baseSQL} WHERE categories.category = '{category}'"
    return (runQuery(mySQL))
# end getStockDataByCategory(category)


def getStockDataByTicker(ticker):
    mySQL = f"{baseSQL} WHERE stocks.ticker = '{ticker}'"
    return (runQuery(mySQL))
# end getStockDataByCategory(category)


def getCovidDates():
    retVal = []
    SQL = "SELECT date(date) as date, description FROM covid19"
    try:
        conn = sqlite3.connect(r"static/data/stocks.sqlite")

        cur = conn.cursor()
        cur.execute(SQL)
        rows = cur.fetchall()
        conn.close()
        
        for row in rows:
            retVal.append({
                "date": row[0],
                "label": row[1]
            })
#         next row
        
    except Error as e:
        print(f"The database query failed for the following statement:/n/n '{SQL}'./n/n  Error is:  {e}")
    finally:
        conn.close()
    # end try
    
    return retVal
# end getCovidDates()


def getStocksList():
    SQL = "SELECT category, ticker FROM categories"
    try:
        conn = sqlite3.connect(r"static/data/stocks.sqlite")
        print("test")
        cur = conn.cursor()
        cur.execute(SQL)
        rows = cur.fetchall()
        conn.close()
        etfDict = {}
        for row in rows:
            if(row[0] in etfDict):
                etfDict[row[0]].append(row[1])
            else:
                etfDict[row[0]] = [row[1]]
#         next row

    except Error as e:
        print(
            f"The database query failed for the following statement:/n/n '{SQL}'./n/n  Error is:  {e}")
    finally:
        conn.close()
    # end try
    return etfDict
# end getStocksList()


# if __name__ == '__main__':
#     refresh(r"sqlite:///static/data/stocks.sqlite")

# refresh()