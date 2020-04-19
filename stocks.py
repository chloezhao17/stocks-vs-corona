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
        f"/api/v1.0/bycategory/<category>"
    )
# End welcome()


@app.route("/api/v1.0/byticker/<ticker>")
def byTicker(ticker):
    return jsonify(stockData.getStockDataByTicker(ticker.upper()))
# End byTicker()


@app.route("/api/v1.0/bycategory/<category>")
def byCategory(category):
    return jsonify(stockData.getStockDataByCategory(category.upper()))
# End byCategory()


@app.route("/api/v1.0/refresh")
def refreshStocks(category):
    stockData.refresh()
    return "Success!"
# End byCategory()


if __name__ == '__main__':
    app.run(debug=True)
