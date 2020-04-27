function buildGraph(data) {
  fetch(data)
    .then((data) => data.json())
    .then((data) => {
      // Themes begin
      am4core.useTheme(am4themes_dark);
      am4core.useTheme(am4themes_animated);
      // Themes end
      // data.push({
      //   close: 29.49,
      //   company: "Uber Technologies, Inc.",
      //   date: "2020-04-",
      //   high: 29.59,
      //   low: 28.14,
      //   open: 28.51,
      //   ticker: "UBER",
      //   volume: 20517263.0,
      // });
      // data = data.json();
      // console.log(data.reverse());
      // Create chart
      listData = [];
      test = new Date(data[0]["date"]).toLocaleString("en-GB", {
        timeZone: "UTC",
      });
      console.log(test);
      data.forEach((obj, index) => {
        obj["date"] = new Date(data[index]["date"]).toLocaleString("en-GB", {
          timeZone: "UTC",
        });
        // console.log(obj["date"]);

        mdy = obj["date"].split("/");
        var month = parseInt(mdy[0]);
        var day = parseInt(mdy[1]);
        var year = parseInt(mdy[2]);
        var formattedDate = year + "-" + day + "-" + month + " 00:00:00";
        // console.log(formattedDate);
        obj["date"] = Date.parse(formattedDate);
        listData.push(obj);
        // console.log(obj);
        // console.log(index + obj["date"]);
        // if (index == data.length - 1) {
        //   obj["date"] = new Date(obj["date"]);
        //   listData.push(obj);
        // } else if (
        //   new Date(obj["date"]).getDate() - 1 !=
        //     new Date(data[index + 1]["date"]).getDate() &&
        //   new Date(obj["date"]).getDate() - 1 !== 0
        // ) {
        //   console.log(new Date(obj["date"]).getDate() - 1);
        //   console.log(new Date(data[index + 1]["date"]).getDate());
        //   date = new Date(obj["date"]);
        //   date2 = new Date(obj["date"]);
        //   console.log(date);
        //   date = date.setDate(date.getDate() - 1);
        //   obj["date"] = new Date(date);
        //   console.log(obj["date"]);
        //   listData.push(obj);
        //   console.log(obj);
        //   date2 = date2.setDate(date2.getDate() - 2);
        //   obj["date"] = new Date(date2);
        //   listData.push(obj);
        //   console.log(obj["date"]);
        //   // console.log(obj);
        // } else {
        //   obj["date"] = new Date(obj["date"]);
        //   listData.push(obj);
        // }
        // // console.log(new Date(obj["date"]));
        // // data[index]["date"] = new Date(obj["date"]);
        // // console.log(listData);
      });
      var chart = am4core.create("candlestick", am4charts.XYChart);
      chart.padding(0, 15, 0, 15);
      //COMMENT THIS OUT
      listData = [
        {
          date: "2019-12-02",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 267.27,
          high: 268.25,
          low: 263.45,
          close: 264.16,
          volume: 23693550.0,
        },
        {
          date: "2019-12-03",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 258.31,
          high: 259.53,
          low: 256.29,
          close: 259.45,
          volume: 29377268.0,
        },
        {
          date: "2019-12-04",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 261.07,
          high: 263.31,
          low: 260.68,
          close: 261.74,
          volume: 16810388.0,
        },
        {
          date: "2019-12-05",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 263.79,
          high: 265.89,
          low: 262.73,
          close: 265.58,
          volume: 18661343.0,
        },
        {
          date: "2019-12-06",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 267.48,
          high: 271.0,
          low: 267.3,
          close: 270.71,
          volume: 26547493.0,
        },
        [
          {
            date: "2019-12-07",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 267.48,
            high: 271.0,
            low: 267.3,
            close: 270.71,
            volume: 0.0,
          },
          {
            date: "2019-12-08",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 267.48,
            high: 271.0,
            low: 267.3,
            close: 270.71,
            volume: 0.0,
          },
        ],
        {
          date: "2019-12-09",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 270.0,
          high: 270.8,
          low: 264.91,
          close: 266.92,
          volume: 32182645.0,
        },
        {
          date: "2019-12-10",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 268.6,
          high: 270.07,
          low: 265.86,
          close: 268.48,
          volume: 22632383.0,
        },
        {
          date: "2019-12-11",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 268.81,
          high: 271.1,
          low: 268.5,
          close: 270.77,
          volume: 19723391.0,
        },
        {
          date: "2019-12-12",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 267.78,
          high: 272.5599,
          low: 267.321,
          close: 271.46,
          volume: 34437042.0,
        },
        {
          date: "2019-12-13",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 271.46,
          high: 275.3,
          low: 270.93,
          close: 275.15,
          volume: 33432806.0,
        },
        [
          {
            date: "2019-12-14",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 271.46,
            high: 275.3,
            low: 270.93,
            close: 275.15,
            volume: 0.0,
          },
          {
            date: "2019-12-15",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 271.46,
            high: 275.3,
            low: 270.93,
            close: 275.15,
            volume: 0.0,
          },
        ],
        {
          date: "2019-12-16",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 277.0,
          high: 280.79,
          low: 276.98,
          close: 279.86,
          volume: 32081105.0,
        },
        {
          date: "2019-12-17",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 279.57,
          high: 281.77,
          low: 278.8,
          close: 280.41,
          volume: 28575798.0,
        },
        {
          date: "2019-12-18",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 279.8,
          high: 281.9,
          low: 279.12,
          close: 279.74,
          volume: 29024687.0,
        },
        {
          date: "2019-12-19",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 279.5,
          high: 281.18,
          low: 278.95,
          close: 280.02,
          volume: 24626947.0,
        },
        {
          date: "2019-12-20",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 282.23,
          high: 282.65,
          low: 278.56,
          close: 279.44,
          volume: 69032743.0,
        },
        [
          {
            date: "2019-12-21",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 282.23,
            high: 282.65,
            low: 278.56,
            close: 279.44,
            volume: 0.0,
          },
          {
            date: "2019-12-22",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 282.23,
            high: 282.65,
            low: 278.56,
            close: 279.44,
            volume: 0.0,
          },
        ],
        {
          date: "2019-12-23",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 280.53,
          high: 284.25,
          low: 280.3735,
          close: 284.0,
          volume: 24677883.0,
        },
        {
          date: "2019-12-24",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 284.69,
          high: 284.89,
          low: 282.9197,
          close: 284.27,
          volume: 12119714.0,
        },
        [
          {
            date: "2019-12-25",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 284.69,
            high: 284.89,
            low: 282.9197,
            close: 284.27,
            volume: 0.0,
          },
        ],
        {
          date: "2019-12-26",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 284.82,
          high: 289.98,
          low: 284.7,
          close: 289.91,
          volume: 23334004.0,
        },
        {
          date: "2019-12-27",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 291.12,
          high: 293.97,
          low: 288.12,
          close: 289.8,
          volume: 36592936.0,
        },
        [
          {
            date: "2019-12-28",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 291.12,
            high: 293.97,
            low: 288.12,
            close: 289.8,
            volume: 0.0,
          },
          {
            date: "2019-12-29",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 291.12,
            high: 293.97,
            low: 288.12,
            close: 289.8,
            volume: 0.0,
          },
        ],
        {
          date: "2019-12-30",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 289.46,
          high: 292.69,
          low: 285.22,
          close: 291.52,
          volume: 36059614.0,
        },
        {
          date: "2019-12-31",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 289.93,
          high: 293.68,
          low: 289.52,
          close: 293.65,
          volume: 25247625.0,
        },
        [
          {
            date: "2020-01-01",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 289.93,
            high: 293.68,
            low: 289.52,
            close: 293.65,
            volume: 0.0,
          },
        ],
        {
          date: "2020-01-02",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 296.24,
          high: 300.6,
          low: 295.19,
          close: 300.35,
          volume: 33911864.0,
        },
        {
          date: "2020-01-03",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 297.15,
          high: 300.58,
          low: 296.5,
          close: 297.43,
          volume: 36633878.0,
        },
        [
          {
            date: "2020-01-04",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 297.15,
            high: 300.58,
            low: 296.5,
            close: 297.43,
            volume: 0.0,
          },
          {
            date: "2020-01-05",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 297.15,
            high: 300.58,
            low: 296.5,
            close: 297.43,
            volume: 0.0,
          },
        ],
        {
          date: "2020-01-06",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 293.79,
          high: 299.96,
          low: 292.75,
          close: 299.8,
          volume: 29644644.0,
        },
        {
          date: "2020-01-07",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 299.84,
          high: 300.9,
          low: 297.48,
          close: 298.39,
          volume: 27877655.0,
        },
        {
          date: "2020-01-08",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 297.16,
          high: 304.4399,
          low: 297.156,
          close: 303.19,
          volume: 33090946.0,
        },
        {
          date: "2020-01-09",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 307.235,
          high: 310.43,
          low: 306.2,
          close: 309.63,
          volume: 42621542.0,
        },
        {
          date: "2020-01-10",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 310.6,
          high: 312.67,
          low: 308.25,
          close: 310.33,
          volume: 35217272.0,
        },
        [
          {
            date: "2020-01-11",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 310.6,
            high: 312.67,
            low: 308.25,
            close: 310.33,
            volume: 0.0,
          },
          {
            date: "2020-01-12",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 310.6,
            high: 312.67,
            low: 308.25,
            close: 310.33,
            volume: 0.0,
          },
        ],
        {
          date: "2020-01-13",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 311.64,
          high: 317.07,
          low: 311.15,
          close: 316.96,
          volume: 30028742.0,
        },
        {
          date: "2020-01-14",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 316.7,
          high: 317.57,
          low: 312.17,
          close: 312.68,
          volume: 40653457.0,
        },
        {
          date: "2020-01-15",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 311.85,
          high: 315.5,
          low: 309.55,
          close: 311.34,
          volume: 30480882.0,
        },
        {
          date: "2020-01-16",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 313.59,
          high: 315.7,
          low: 312.09,
          close: 315.24,
          volume: 27207254.0,
        },
        {
          date: "2020-01-17",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 316.27,
          high: 318.74,
          low: 315.0,
          close: 318.73,
          volume: 34454117.0,
        },
        [
          {
            date: "2020-01-18",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 316.27,
            high: 318.74,
            low: 315.0,
            close: 318.73,
            volume: 0.0,
          },
          {
            date: "2020-01-19",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 316.27,
            high: 318.74,
            low: 315.0,
            close: 318.73,
            volume: 0.0,
          },
        ],
        {
          date: "2020-01-21",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 317.19,
          high: 319.02,
          low: 316.0,
          close: 316.57,
          volume: 27235039.0,
        },
        {
          date: "2020-01-22",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 318.58,
          high: 319.99,
          low: 317.31,
          close: 317.7,
          volume: 25458115.0,
        },
        {
          date: "2020-01-23",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 317.92,
          high: 319.56,
          low: 315.65,
          close: 319.23,
          volume: 26117993.0,
        },
        {
          date: "2020-01-24",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 320.25,
          high: 323.33,
          low: 317.5188,
          close: 318.31,
          volume: 36634380.0,
        },
        [
          {
            date: "2020-01-25",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 320.25,
            high: 323.33,
            low: 317.5188,
            close: 318.31,
            volume: 0.0,
          },
          {
            date: "2020-01-26",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 320.25,
            high: 323.33,
            low: 317.5188,
            close: 318.31,
            volume: 0.0,
          },
        ],
        {
          date: "2020-01-27",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 310.06,
          high: 311.77,
          low: 304.88,
          close: 308.95,
          volume: 40485005.0,
        },
        {
          date: "2020-01-28",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 312.6,
          high: 318.4,
          low: 312.19,
          close: 317.69,
          volume: 40558486.0,
        },
        {
          date: "2020-01-29",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 324.45,
          high: 327.85,
          low: 321.38,
          close: 324.34,
          volume: 54149928.0,
        },
        {
          date: "2020-01-30",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 320.5435,
          high: 324.09,
          low: 318.75,
          close: 323.87,
          volume: 31685808.0,
        },
        {
          date: "2020-01-31",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 320.93,
          high: 322.68,
          low: 308.29,
          close: 309.51,
          volume: 49897096.0,
        },
        [
          {
            date: "2020-02-01",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 320.93,
            high: 322.68,
            low: 308.29,
            close: 309.51,
            volume: 0.0,
          },
          {
            date: "2020-02-02",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 320.93,
            high: 322.68,
            low: 308.29,
            close: 309.51,
            volume: 0.0,
          },
        ],
        {
          date: "2020-02-03",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 304.3,
          high: 313.49,
          low: 302.22,
          close: 308.66,
          volume: 43496401.0,
        },
        {
          date: "2020-02-04",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 315.31,
          high: 319.64,
          low: 313.6345,
          close: 318.85,
          volume: 34154134.0,
        },
        {
          date: "2020-02-05",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 323.52,
          high: 324.76,
          low: 318.95,
          close: 321.45,
          volume: 29706718.0,
        },
        {
          date: "2020-02-06",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 322.57,
          high: 325.22,
          low: 320.2648,
          close: 325.21,
          volume: 26356385.0,
        },
        {
          date: "2020-02-07",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 322.37,
          high: 323.4,
          low: 318.0,
          close: 320.03,
          volume: 29421012.0,
        },
        [
          {
            date: "2020-02-08",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 322.37,
            high: 323.4,
            low: 318.0,
            close: 320.03,
            volume: 0.0,
          },
          {
            date: "2020-02-09",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 322.37,
            high: 323.4,
            low: 318.0,
            close: 320.03,
            volume: 0.0,
          },
        ],
        {
          date: "2020-02-10",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 314.18,
          high: 321.55,
          low: 313.85,
          close: 321.55,
          volume: 27337215.0,
        },
        {
          date: "2020-02-11",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 323.6,
          high: 323.9,
          low: 318.71,
          close: 319.61,
          volume: 23580780.0,
        },
        {
          date: "2020-02-12",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 321.47,
          high: 327.22,
          low: 321.47,
          close: 327.2,
          volume: 28432573.0,
        },
        {
          date: "2020-02-13",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 324.19,
          high: 326.22,
          low: 323.35,
          close: 324.87,
          volume: 23686892.0,
        },
        {
          date: "2020-02-14",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 324.73,
          high: 325.98,
          low: 322.85,
          close: 324.95,
          volume: 20028447.0,
        },
        [
          {
            date: "2020-02-15",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 324.73,
            high: 325.98,
            low: 322.85,
            close: 324.95,
            volume: 0.0,
          },
          {
            date: "2020-02-16",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 324.73,
            high: 325.98,
            low: 322.85,
            close: 324.95,
            volume: 0.0,
          },
        ],
        {
          date: "2020-02-18",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 315.36,
          high: 319.75,
          low: 314.61,
          close: 319.0,
          volume: 38190545.0,
        },
        {
          date: "2020-02-19",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 320.0,
          high: 324.57,
          low: 320.0,
          close: 323.62,
          volume: 23495991.0,
        },
        {
          date: "2020-02-20",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 322.63,
          high: 324.65,
          low: 318.21,
          close: 320.3,
          volume: 25141489.0,
        },
        {
          date: "2020-02-21",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 318.62,
          high: 320.45,
          low: 310.5,
          close: 313.05,
          volume: 32426415.0,
        },
        [
          {
            date: "2020-02-22",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 318.62,
            high: 320.45,
            low: 310.5,
            close: 313.05,
            volume: 0.0,
          },
          {
            date: "2020-02-23",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 318.62,
            high: 320.45,
            low: 310.5,
            close: 313.05,
            volume: 0.0,
          },
        ],
        {
          date: "2020-02-24",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 297.26,
          high: 304.18,
          low: 289.23,
          close: 298.18,
          volume: 55548828.0,
        },
        {
          date: "2020-02-25",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 300.95,
          high: 302.53,
          low: 286.13,
          close: 288.08,
          volume: 57668364.0,
        },
        {
          date: "2020-02-26",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 286.53,
          high: 297.88,
          low: 286.5,
          close: 292.65,
          volume: 49678431.0,
        },
        {
          date: "2020-02-27",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 281.1,
          high: 286.0,
          low: 272.96,
          close: 273.52,
          volume: 80151381.0,
        },
        {
          date: "2020-02-28",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 257.26,
          high: 278.41,
          low: 256.37,
          close: 273.36,
          volume: 106721230.0,
        },
        [
          {
            date: "2020-02-29",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 257.26,
            high: 278.41,
            low: 256.37,
            close: 273.36,
            volume: 0.0,
          },
          {
            date: "2020-03-01",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 257.26,
            high: 278.41,
            low: 256.37,
            close: 273.36,
            volume: 0.0,
          },
        ],
        {
          date: "2020-03-02",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 282.28,
          high: 301.44,
          low: 277.72,
          close: 298.81,
          volume: 85349339.0,
        },
        {
          date: "2020-03-03",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 303.67,
          high: 304.0,
          low: 285.8,
          close: 289.32,
          volume: 79868852.0,
        },
        {
          date: "2020-03-04",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 296.44,
          high: 303.4,
          low: 293.13,
          close: 302.74,
          volume: 54794568.0,
        },
        {
          date: "2020-03-05",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 295.52,
          high: 299.55,
          low: 291.41,
          close: 292.92,
          volume: 46893219.0,
        },
        {
          date: "2020-03-06",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 282.0,
          high: 290.82,
          low: 281.23,
          close: 289.03,
          volume: 56544246.0,
        },
        [
          {
            date: "2020-03-07",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 282.0,
            high: 290.82,
            low: 281.23,
            close: 289.03,
            volume: 0.0,
          },
          {
            date: "2020-03-08",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 282.0,
            high: 290.82,
            low: 281.23,
            close: 289.03,
            volume: 0.0,
          },
        ],
        {
          date: "2020-03-09",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 263.75,
          high: 278.09,
          low: 263.0,
          close: 266.17,
          volume: 71686208.0,
        },
        {
          date: "2020-03-10",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 277.14,
          high: 286.44,
          low: 269.37,
          close: 285.34,
          volume: 71322520.0,
        },
        {
          date: "2020-03-11",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 277.39,
          high: 281.22,
          low: 271.86,
          close: 275.43,
          volume: 64094970.0,
        },
        {
          date: "2020-03-12",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 255.94,
          high: 270.0,
          low: 248.0,
          close: 248.23,
          volume: 104618517.0,
        },
        {
          date: "2020-03-13",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 264.89,
          high: 279.92,
          low: 252.95,
          close: 277.97,
          volume: 92683032.0,
        },
        [
          {
            date: "2020-03-14",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 264.89,
            high: 279.92,
            low: 252.95,
            close: 277.97,
            volume: 0.0,
          },
          {
            date: "2020-03-15",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 264.89,
            high: 279.92,
            low: 252.95,
            close: 277.97,
            volume: 0.0,
          },
        ],
        {
          date: "2020-03-16",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 241.95,
          high: 259.08,
          low: 240.0,
          close: 242.21,
          volume: 80605865.0,
        },
        {
          date: "2020-03-17",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 247.51,
          high: 257.61,
          low: 238.4,
          close: 252.86,
          volume: 81013965.0,
        },
        {
          date: "2020-03-18",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 239.77,
          high: 250.0,
          low: 237.12,
          close: 246.67,
          volume: 75058406.0,
        },
        {
          date: "2020-03-19",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 247.385,
          high: 252.84,
          low: 242.61,
          close: 244.78,
          volume: 67964255.0,
        },
        {
          date: "2020-03-20",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 247.18,
          high: 251.83,
          low: 228.0,
          close: 229.24,
          volume: 100423346.0,
        },
        [
          {
            date: "2020-03-21",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 247.18,
            high: 251.83,
            low: 228.0,
            close: 229.24,
            volume: 0.0,
          },
          {
            date: "2020-03-22",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 247.18,
            high: 251.83,
            low: 228.0,
            close: 229.24,
            volume: 0.0,
          },
        ],
        {
          date: "2020-03-23",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 228.08,
          high: 228.4997,
          low: 212.61,
          close: 224.37,
          volume: 84188208.0,
        },
        {
          date: "2020-03-24",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 236.36,
          high: 247.69,
          low: 234.3,
          close: 246.88,
          volume: 71882773.0,
        },
        {
          date: "2020-03-25",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 250.75,
          high: 258.25,
          low: 244.3,
          close: 245.52,
          volume: 75900510.0,
        },
        {
          date: "2020-03-26",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 246.52,
          high: 258.68,
          low: 246.36,
          close: 258.44,
          volume: 63140169.0,
        },
        {
          date: "2020-03-27",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 252.75,
          high: 255.87,
          low: 247.05,
          close: 247.74,
          volume: 51054153.0,
        },
        [
          {
            date: "2020-03-28",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 252.75,
            high: 255.87,
            low: 247.05,
            close: 247.74,
            volume: 0.0,
          },
          {
            date: "2020-03-29",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 252.75,
            high: 255.87,
            low: 247.05,
            close: 247.74,
            volume: 0.0,
          },
        ],
        {
          date: "2020-03-30",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 250.74,
          high: 255.52,
          low: 249.4,
          close: 254.81,
          volume: 41994110.0,
        },
        {
          date: "2020-03-31",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 255.6,
          high: 262.49,
          low: 252.0,
          close: 254.29,
          volume: 49250501.0,
        },
        {
          date: "2020-04-01",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 246.5,
          high: 248.72,
          low: 239.13,
          close: 240.91,
          volume: 44054638.0,
        },
        {
          date: "2020-04-02",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 240.34,
          high: 245.15,
          low: 236.9,
          close: 244.93,
          volume: 41483493.0,
        },
        {
          date: "2020-04-03",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 242.8,
          high: 245.7,
          low: 238.9741,
          close: 241.41,
          volume: 32470017.0,
        },
        [
          {
            date: "2020-04-04",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 242.8,
            high: 245.7,
            low: 238.9741,
            close: 241.41,
            volume: 0.0,
          },
          {
            date: "2020-04-05",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 242.8,
            high: 245.7,
            low: 238.9741,
            close: 241.41,
            volume: 0.0,
          },
        ],
        {
          date: "2020-04-06",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 250.9,
          high: 263.11,
          low: 249.38,
          close: 262.47,
          volume: 50455071.0,
        },
        {
          date: "2020-04-07",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 270.8,
          high: 271.7,
          low: 259.0,
          close: 259.43,
          volume: 50721831.0,
        },
        {
          date: "2020-04-08",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 262.74,
          high: 267.37,
          low: 261.23,
          close: 266.07,
          volume: 42223821.0,
        },
        {
          date: "2020-04-09",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 268.7,
          high: 270.07,
          low: 264.7,
          close: 267.99,
          volume: 40529123.0,
        },
        [
          {
            date: "2020-04-10",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 268.7,
            high: 270.07,
            low: 264.7,
            close: 267.99,
            volume: 0.0,
          },
          {
            date: "2020-04-11",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 268.7,
            high: 270.07,
            low: 264.7,
            close: 267.99,
            volume: 0.0,
          },
          {
            date: "2020-04-12",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 268.7,
            high: 270.07,
            low: 264.7,
            close: 267.99,
            volume: 0.0,
          },
        ],
        {
          date: "2020-04-13",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 268.31,
          high: 273.7,
          low: 265.83,
          close: 273.25,
          volume: 32755731.0,
        },
        {
          date: "2020-04-14",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 280.0,
          high: 288.25,
          low: 278.05,
          close: 287.05,
          volume: 48748672.0,
        },
        {
          date: "2020-04-15",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 282.4,
          high: 286.33,
          low: 280.63,
          close: 284.43,
          volume: 32788641.0,
        },
        {
          date: "2020-04-16",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 287.38,
          high: 288.1975,
          low: 282.3502,
          close: 286.69,
          volume: 39281290.0,
        },
        {
          date: "2020-04-17",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 284.69,
          high: 286.945,
          low: 276.86,
          close: 282.8,
          volume: 53812478.0,
        },
        [
          {
            date: "2020-04-18",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 284.69,
            high: 286.945,
            low: 276.86,
            close: 282.8,
            volume: 0.0,
          },
          {
            date: "2020-04-19",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 284.69,
            high: 286.945,
            low: 276.86,
            close: 282.8,
            volume: 0.0,
          },
        ],
        {
          date: "2020-04-20",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 277.95,
          high: 281.68,
          low: 276.85,
          close: 276.93,
          volume: 32503750.0,
        },
        {
          date: "2020-04-21",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 276.28,
          high: 277.25,
          low: 265.43,
          close: 268.37,
          volume: 45247893.0,
        },
        {
          date: "2020-04-22",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 273.61,
          high: 277.9,
          low: 272.2,
          close: 276.1,
          volume: 29264342.0,
        },
        {
          date: "2020-04-23",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 275.87,
          high: 281.75,
          low: 274.87,
          close: 275.03,
          volume: 31203582.0,
        },
        {
          date: "2020-04-24",
          ticker: "AAPL",
          company: "Apple Inc.",
          open: 277.2,
          high: 283.01,
          low: 277.0,
          close: 282.97,
          volume: 31274973.0,
        },
        [
          {
            date: "2020-04-25",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 277.2,
            high: 283.01,
            low: 277.0,
            close: 282.97,
            volume: 0.0,
          },
          {
            date: "2020-04-26",
            ticker: "AAPL",
            company: "Apple Inc.",
            open: 277.2,
            high: 283.01,
            low: 277.0,
            close: 282.97,
            volume: 0.0,
          },
        ],
      ];
      // Load data
      chart.data = listData;

      // chart.data[]["research"] = 123;
      // chart.invalidateData();
      // chart.dataSource.url = data;
      // chart.dataSource.parser = new am4core.JSONParser();
      // // chart.dataSource.parser.options.useColumnNames = true;
      // chart.dataSource.parser.options.reverse = true;
      // chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
      // the following line makes value axes to be arranged vertically.
      chart.leftAxesContainer.layout = "vertical";

      // uncomment this line if you want to change order of axes
      //chart.bottomAxesContainer.reverseOrder = true;

      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.ticks.template.length = 8;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.ticks.template.disabled = false;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
      dateAxis.renderer.minLabelPosition = 0.01;
      dateAxis.renderer.maxLabelPosition = 0.99;
      dateAxis.keepSelection = true;
      dateAxis.minHeight = 30;

      dateAxis.groupData = true;
      dateAxis.minZoomCount = 5;

      // these two lines makes the axis to be initially zoomed-in
      // dateAxis.start = 0.7;
      // dateAxis.keepSelection = true;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = false;
      valueAxis.zIndex = 1;
      valueAxis.renderer.baseGrid.disabled = true;
      // height of axis
      valueAxis.height = am4core.percent(50);

      valueAxis.renderer.gridContainer.background.fill = am4core.color("#fff");
      valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.verticalCenter = "bottom";
      valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

      //valueAxis.renderer.maxLabelPosition = 0.95;
      valueAxis.renderer.fontSize = "0.8em";

      var series = chart.series.push(new am4charts.CandlestickSeries());
      series.dataFields.dateX = "date";
      series.dataFields.openValueY = "open";
      series.dataFields.valueY = "close";
      series.dataFields.lowValueY = "low";
      series.dataFields.highValueY = "high";
      // series.clustered = false;
      series.simplifiedProcessing = true;
      series.tooltipText =
        "open: ${openValueY.value}\nlow: ${lowValueY.value}\nhigh: ${highValueY.value}\nclose: ${valueY.value}";
      // series.name = "MSFT";
      series.defaultState.transitionDuration = 0;

      var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.tooltip.disabled = true;
      // height of axis
      valueAxis2.height = am4core.percent(20);
      valueAxis2.zIndex = 3;
      // this makes gap between panels
      valueAxis2.marginTop = 50;
      valueAxis2.renderer.baseGrid.disabled = true;
      valueAxis2.renderer.inside = true;
      valueAxis2.renderer.labels.template.verticalCenter = "bottom";
      valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
      //valueAxis.renderer.maxLabelPosition = 0.95;
      valueAxis2.renderer.fontSize = "0.8em";

      valueAxis2.renderer.gridContainer.background.fill = am4core.color("#fff");
      valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

      var series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.dateX = "date";
      series2.clustered = false;
      series2.dataFields.valueY = "volume";
      series2.yAxis = valueAxis2;
      series2.tooltipText = "{valueY.value}";
      series2.name = "Series 2";
      // volume should be summed
      series2.groupFields.valueY = "sum";
      series2.defaultState.transitionDuration = 0;

      chart.cursor = new am4charts.XYCursor();

      var scrollbarX = new am4charts.XYChartScrollbar();

      var valueAxis3 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis3.tooltip.disabled = true;
      // height of axis
      valueAxis3.height = am4core.percent(30);
      valueAxis3.zIndex = 3;
      // this makes gap between panels
      valueAxis3.marginTop = 50;
      valueAxis3.renderer.baseGrid.disabled = true;
      valueAxis3.renderer.inside = true;
      valueAxis3.renderer.labels.template.verticalCenter = "bottom";
      valueAxis3.renderer.labels.template.padding(2, 2, 2, 2);
      //valueAxis.renderer.maxLabelPosition = 0.95;
      valueAxis3.renderer.fontSize = "0.8em";

      valueAxis3.renderer.gridContainer.background.fill = am4core.color("#fff");
      valueAxis3.renderer.gridContainer.background.fillOpacity = 0.05;

      fetch("https://pomber.github.io/covid19/timeseries.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var cSeries = chart.series.push(new am4charts.LineSeries());
          cSeries.data = data["US"];
          cSeries.dateFormatter.inputDateFormat = "yyyy-MM-dd";
          cSeries.dataFields.valueY = "confirmed";
          cSeries.yAxis = valueAxis3;
          cSeries.dataFields.dateX = "date";
          cSeries.tooltipText = "{valueY.value} Confirmed Cases";
          chart.series.push(cSeries);
        });

      var sbSeries = chart.series.push(new am4charts.LineSeries());
      sbSeries.dataFields.valueY = "close";
      sbSeries.dataFields.dateX = "date";
      scrollbarX.series.push(sbSeries);
      sbSeries.disabled = true;
      scrollbarX.marginBottom = 20;
      chart.scrollbarX = scrollbarX;
      scrollbarX.scrollbarChart.xAxes.getIndex(0).minHeight = undefined;

      /**
       * Set up external controls
       */

      // Date format to be used in input fields
      var inputFieldFormat = "yyyy-MM-dd";

      document.getElementById("b1m").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.add(date, "month", -1);
        zoomToDates(date);
      });

      document.getElementById("b3m").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.add(date, "month", -3);
        zoomToDates(date);
      });

      // document.getElementById("b6m").addEventListener("click", function () {
      //   var max = dateAxis.groupMax["day1"];
      //   var date = new Date(max);
      //   am4core.time.add(date, "month", -6);
      //   zoomToDates(date);
      // });

      // document.getElementById("b1y").addEventListener("click", function () {
      //   var max = dateAxis.groupMax["day1"];
      //   var date = new Date(max);
      //   am4core.time.add(date, "year", -1);
      //   zoomToDates(date);
      // });

      document.getElementById("bytd").addEventListener("click", function () {
        var max = dateAxis.groupMax["day1"];
        var date = new Date(max);
        am4core.time.round(date, "year", 1);
        zoomToDates(date);
      });

      document.getElementById("bmax").addEventListener("click", function () {
        var min = dateAxis.groupMin["day1"];
        var date = new Date(min);
        zoomToDates(date);
      });

      dateAxis.events.on("selectionextremeschanged", function () {
        updateFields();
      });

      dateAxis.events.on("extremeschanged", updateFields);

      function updateFields() {
        var minZoomed =
          dateAxis.minZoomed +
          am4core.time.getDuration(
            dateAxis.mainBaseInterval.timeUnit,
            dateAxis.mainBaseInterval.count
          ) *
            0.5;
        document.getElementById("fromfield").value = chart.dateFormatter.format(
          minZoomed,
          inputFieldFormat
        );
        document.getElementById("tofield").value = chart.dateFormatter.format(
          new Date(dateAxis.maxZoomed),
          inputFieldFormat
        );
      }

      document
        .getElementById("fromfield")
        .addEventListener("keyup", updateZoom);
      document.getElementById("tofield").addEventListener("keyup", updateZoom);

      var zoomTimeout;
      function updateZoom() {
        if (zoomTimeout) {
          clearTimeout(zoomTimeout);
        }
        zoomTimeout = setTimeout(function () {
          var start = document.getElementById("fromfield").value;
          var end = document.getElementById("tofield").value;
          if (
            start.length < inputFieldFormat.length ||
            end.length < inputFieldFormat.length
          ) {
            return;
          }
          var startDate = chart.dateFormatter.parse(start, inputFieldFormat);
          var endDate = chart.dateFormatter.parse(end, inputFieldFormat);

          if (startDate && endDate) {
            dateAxis.zoomToDates(startDate, endDate);
          }
        }, 500);
      }

      function zoomToDates(date) {
        var min = dateAxis.groupMin["day1"];
        var max = dateAxis.groupMax["day1"];
        dateAxis.keepSelection = true;
        //dateAxis.start = (date.getTime() - min)/(max - min);
        //dateAxis.end = 1;
        dateAxis.zoom({ start: (date.getTime() - min) / (max - min), end: 1 });
      }
    });
}
// am4core.ready(
//   buildGraph(
//     "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv"
//     // "https://pomber.github.io/covid19/timeseries.json"
//   )
// ); // end am4core.ready()
