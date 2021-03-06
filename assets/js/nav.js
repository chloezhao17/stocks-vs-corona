// Get data using API calls
fetch("http://127.0.0.1:5000/api/v1.0/getetfstocks")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    Object.entries(data).forEach(([key, value]) => {
      // Append "li" element to create the list
      var li = d3.select("#nav-list").append("li");

      // Add etfs to the list as categories
      li.append("span")
        .classed("etf", true)
        .classed(key, true)
        .text(key)
        .on("click", handleClick);
      var ul = li.append("ul");

      // Loop through each ticker and add it to the list
      value.forEach((ticker) => {
        ul.append("li")
          .text(ticker)
          .classed(key, true)
          .classed("nav-stocks", true)
          .on("click", function () {
            stockClickHandler(ticker);
            d3.select(this).classed("selected", true);
          });
      });
    });
    //Initialize first stock
    stockClickHandler(d3.select(".nav-stocks").text());
    d3.select(".nav-stocks").classed("selected", true);
  });

// when etf is clicked, do following:
function handleClick() {
  etf = event.target.innerHTML;
  // When clicked, make all stocks under the same etf active
  d3.selectAll("." + etf).classed("active")
    ? d3.selectAll("." + etf).classed("active", false)
    : d3.selectAll("." + etf).classed("active", true);
  // Make the clicked etf active
  d3.select(".etf" + etf)
    ? d3.select(".etf" + etf).classed("active", false)
    : d3.select(".etf" + etf).classed("active", true);

  // When next etf clicked, clear stock info at the top
  // d3.select("#stock-container").select("h3").remove();
}

// When etf is clicked, draw graph, change the ticker name and append etf info
// (LISTS INCLUDE ETF, COMMENTED OUT)
// fetch("http://127.0.0.1:5000/api/v1.0/byticker/" + selectetf)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // drawetf(selectetf, data);
//     d3.select(".company-info").remove();
//     d3.select("#stock-container")
//       .append("div")
//       .classed("company-info", true)
//       .text(data[0].company);
//     d3.select("#stock-container").select("h3").text(data[0].ticker);
//   });

// when stock is clicked, do following:
function stockClickHandler(stock) {
  d3.selectAll(".nav-stocks").classed("selected", false);
  fetch("http://127.0.0.1:5000/api/v1.0/byticker/" + stock)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      // change top bar to the stock name when clicked
      d3.select("#stock-container").select("h3").remove();
      d3.select("#stock-container")
        .select("div")
        .append("h3")
        .text(data[0].company + " (" + data[0].ticker + ")");
      date = "2020-03-11";
      coronaUpdater(date, stock, data);
      try {
        am4core.ready(
          buildGraph("http://127.0.0.1:5000/api/v1.0/byticker/" + stock)
        );
      } catch (e) {}
    });
}
d3.select("body").selectAll(".etf").on("click", handleClick);
