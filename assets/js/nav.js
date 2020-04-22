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
    // console.log(ticker);
  });

function handleClick() {
  etf = event.target.innerHTML;
  console.log(event.target.innerHTML);
  d3.selectAll("." + etf).classed("active")
    ? d3.selectAll("." + etf).classed("active", false)
    : d3.selectAll("." + etf).classed("active", true);
}
function stockClickHandler(stock) {
  fetch()
    .then()
    .then((data) => {
      drawGraph(stock, data);
      coronaUpdater(stock, data);
    });
}
d3.select("body").selectAll(".etf").on("click", handleClick);

// // Make list collapsible
// const collapsibleLists = function () {
//   function apply(doNotRecurse) {
//     [].forEach.call(document.getElementsByTagName("ul"), (node) => {
//       if (node.classList.contains("collapsibleList")) {
//         applyTo(node, true);

//         if (!doNotRecurse) {
//           [].forEach.call(node.getElementsByTagName("ul"), (subnode) => {
//             subnode.classList.add("collapsibleList");
//           });
//         }
//       }
//     });
//   }

//   function applyTo(node, doNotRecurse) {
//     [].forEach.call(node.getElementsByTagName("li"), (li) => {
//       if (!doNotRecurse || node === li.parentNode) {
//         li.style.userSelect = "none";
//         li.style.MozUserSelect = "none";
//         li.style.msUserSelect = "none";
//         li.style.WebkitUserSelect = "none";

//         li.addEventListener("click", handleClick.bind(null, li));

//         toggle(li);
//       }
//     });
//   }

//   // Handles a click
//   // function handleClick(node, e) {
//   //   let li = e.target;
//   //   while (li.nodeName !== "LI") {
//   //     li = li.parentNode;
//   //   }

//   //   if (li === node) {
//   //     toggle(node);
//   //   }
//   // }

//   // Opens or closes the unordered list elements directly within the specified element
//   function toggle(node) {
//     const open = node.classList.contains("collapsibleListClosed");
//     const uls = node.getElementsByTagName("ul");

//     [].forEach.call(uls, (ul) => {
//       let li = ul;
//       while (li.nodeName !== "LI") {
//         li = li.parentNode;
//       }

//       if (li === node) {
//         ul.style.display = open ? "block" : "none";
//       }
//     });

//     node.classList.remove("collapsibleListOpen");
//     node.classList.remove("collapsibleListClosed");

//     if (uls.length > 0) {
//       node.classList.add("collapsibleList" + (open ? "Open" : "Closed"));
//     }
//   }

//   return { apply, applyTo };
// };

// collapsibleLists.apply();
