import numpy as np
import stockData as stockData
from flask import Flask, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/api/v1.0/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br>"
        f"/api/v1.0/refresh<br>"
        f"/api/v1.0/byticker/<ticker><br>"
        f"/api/v1.0/bycategory/<category><br>"
        f"/api/v1.0/getcovid19dates<br>"
        f"/api/v1.0/getetfstocks"
    )
# End welcome()


# test - http://127.0.0.1:5000/api/v1.0/byticker/AAPL
@app.route("/api/v1.0/byticker/<ticker>")
def byTicker(ticker):
    return jsonify(stockData.getStockDataByTicker(ticker.upper()))
# End byTicker()


# test - http://127.0.0.1:5000/api/v1.0/bycategory/JETS
@app.route("/api/v1.0/bycategory/<category>")
def byCategory(category):
    return jsonify(stockData.getStockDataByCategory(category.upper()))
# End byCategory()


# test - http://127.0.0.1:5000/api/v1.0/refresh
@app.route("/api/v1.0/refresh")
def refreshStocks(category):
    stockData.refresh()
    return "success!"
# End byCategory()


# test - http://127.0.0.1:5000/api/v1.0/getcovid19dates
@app.route("/api/v1.0/getcovid19dates")
def getCovidDatesList():
    return jsonify(stockData.getCovidDates())
# End byCategory()


# test - http://127.0.0.1:5000/api/v1.0/getetfstocks
@app.route("/api/v1.0/getetfstocks")
def getETFStocksList():
    return jsonify(stockData.getStocksList())
# End byCategory()


if __name__ == '__main__':
    app.run(debug=True)
