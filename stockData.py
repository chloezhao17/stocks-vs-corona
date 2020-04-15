import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from pprint import pprint

import yfinance as yf

def refresh(dbLocation):
    engine = create_engine(dbLocation)





    # Create a list of ticker symbols
    stocks = ["DAL", "AAL", "LUV", "UAL", "MSFT", "AAPL", "V", "INTC", "UBER", "BKNG", "LYFT", "TCOM", "ZM"]
    
    for stockTicker in stocks:
        print(f"Getting data for ticker:'{stockTicker}'")

        try:
            # stockData = yf.download("", start="2020-01-01", end="2020-04-10")
            # can also use 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo and ytd
            stockData = yf.download(tickers=stockTicker, period="ytd", auto_adjust=True, prepost=False, threads=True, proxy=None)

            pprint(stockData)
        except Error as e:
            print(f"The API failed for the stock '{stockTicker}'. Please try again later.  The error was:/n{e}")
        finally:
            print("The update process has completed.")
        # End Try
    # Next stockTicker
# End refresh()

if __name__ == '__main__':
    refresh(r"sqlite:///static/data/stocks.sqlite")


    

refresh()

