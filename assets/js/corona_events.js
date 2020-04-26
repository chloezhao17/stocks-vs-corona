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
