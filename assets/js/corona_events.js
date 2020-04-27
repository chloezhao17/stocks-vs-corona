// Update selection
function handleChange() {
  d3.select("#dropdown-info").html("");
  d3.select("#dropdown-info").html(event.target.value);
}

// Get data from API
fetch("http://127.0.0.1:5000/api/v1.0/getcovid19dates")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    // Create dropdown
    var dropdown = d3
      .select("#dropdown")
      .append("select")
      .on("change", handleChange);

    // Populate dropdown options
    data.forEach((event) => {
      // console.log(event);

      // Append option with event info
      dropdown
        .append("option")
        .attr("value", event.label)
        .text(event.date)
        .style("width", "100%");

      // Initialize default selection
      d3.select("#dropdown-info").html(dropdown.node().value);
    });
  });

function coronaUpdater(stock, data) {
  var coronaCost = 0;
  data.forEach((obj) => {
    //corona hits us soil 2020-01-21
    if (obj["date"] == "2020-03-11") {
      coronaCost = obj["close"];
    }
  });
  // console.log(data[0]["close"]);
  // console.log(coronaCost);
  var difference = data[0]["close"] - coronaCost;
  var percentDifference = (difference * 100) / coronaCost;
  // console.log(difference);
  if (difference < 0) {
    // difference = "-$" + Math.abs(Math.round(difference * 100) / 100);
    // d3.select("#corona-difference-container")
    //   .select("h3")
    //   .text(difference)
    //   .style("color", "red");
    percentDifference =
      "-" + Math.abs(Math.round(percentDifference * 100) / 100) + "%";
    d3.select("#corona-difference-container")
      .select("h3")
      .text(percentDifference)
      .style("color", "red");
  } else {
    // difference = "+$" + Math.abs(Math.round(difference * 100) / 100);
    // d3.select("#corona-difference-container")
    //   .select("h3")
    //   .text(difference)
    //   .style("color", "red");
    percentDifference =
      "+" + Math.abs(Math.round(percentDifference * 100) / 100) + "%";
    d3.select("#corona-difference-container")
      .select("h3")
      .text(percentDifference)
      .style("color", "#00ff00");
  }
}
