// NOTES
// Fix css styling
// How to link filter to chart (API calls)
// Add onClick (event listener)

// get data using API calls
var tickerList = [];
var sectorList = [];
fetch("http://127.0.0.1:5000/api/v1.0/getetfstocks")
  .then((response) => response.json())
  .then((data) => {
    Object.entries(data).forEach(([key, value]) => {
      var li = d3.select("#nav-list").append("li");

      li.append("span").classed("etf", true).text(key).on("click", handleClick);
      var ul = li.append("ul");
      value.forEach((ticker) => {
        ul.append("li")
          .text(ticker)
          .classed(key, true)
          .classed("nav-stocks", true)
          .on("click", () => {
            stockClickHandler(ticker);
          });
      });
    });
  });

function handleClick() {
  etf = event.target.innerHTML;
  console.log(event.target.innerHTML);
  d3.selectAll("." + etf).classed("active")
    ? d3.selectAll("." + etf).classed("active", false)
    : d3.selectAll("." + etf).classed("active", true);
}
function stockClickHandler(stock) {
  fetch("http://127.0.0.1:5000/api/v1.0/getetfstocks")
    .then((response) => response.json())
    .then((data) => {
      drawGraph(stock, data);
      coronaUpdater(stock, data);
    });
}
d3.select("body").selectAll(".etf").on("click", handleClick);
