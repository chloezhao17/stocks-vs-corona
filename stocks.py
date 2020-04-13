import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///static/data/stocks.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Stocks = Base.classes.stocks

def jsonifyData(queryResults):
    # Create a dictionary from the row data and append to a list of all_passengers
    all_stocks = []
    for date, name, low, high, open, close in queryResults:
        stocks_dict = {}
        stocks_dict["date"] = date
        stocks_dict["name"] = name
        stocks_dict["low"] = low
        stocks_dict["high"] = high
        stocks_dict["open"] = open
        stocks_dict["close"] = close
        all_stocks.append(stocks_dict)

    return jsonify(all_stocks)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br>"
        f"/api/v1.0/all<br>"
        f"/api/v1.0/bycategory"
    )


@app.route("/api/v1.0/all")
def all():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all stocks
    results = session.query(Stocks.date, Stocks.name, Stocks.low, Stocks.high, Stocks.open, Stocks.close).all()

    session.close()

    return jsonifyData(results)

@app.route("/api/v1.0/bycategory/<category>")
def by_category(category):
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all airline stocks by category
    results = session.query(Stocks.date, Stocks.name, Stocks.low, Stocks.high, Stocks.open, Stocks.close).filter(Stocks.category == category).all()

    session.close()

    return jsonifyData(results)

if __name__ == '__main__':
    app.run(debug=True)
