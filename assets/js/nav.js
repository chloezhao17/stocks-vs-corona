// NOTES:
// add categories/ETF
// Fix API
// Fix css styling
// How to link filter to chart (API calls)
// Add filter

//Append and create elements
function addElement(element) {
  return document.createElement(element);
}

function append(parent, child) {
  return parent.appendChild(child);
}

// get data using API calls
// &output=json
fetch("http://127.0.0.1:5000/api/v1.0/getetfstocks")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var tickers = data.ticker;
    return tickers.map(function (ticker) {
      var li = addElement("li");
      append(ul, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

// Make list collapsible
const collapsibleLists = function () {
  function apply(doNotRecurse) {
    [].forEach.call(document.getElementsByTagName("ul"), (node) => {
      if (node.classList.contains("collapsibleList")) {
        applyTo(node, true);

        if (!doNotRecurse) {
          [].forEach.call(node.getElementsByTagName("ul"), (subnode) => {
            subnode.classList.add("collapsibleList");
          });
        }
      }
    });
  }

  // Handles a click
  function handleClick(node, e) {
    let li = e.target;
    while (li.nodeName !== "LI") {
      li = li.parentNode;
    }

    if (li === node) {
      toggle(node);
    }
  }

  // Opens or closes the unordered list elements directly within the specified element
  function toggle(node) {
    const open = node.classList.contains("collapsibleListClosed");
    const uls = node.getElementsByTagName("ul");

    [].forEach.call(uls, (ul) => {
      let li = ul;
      while (li.nodeName !== "LI") {
        li = li.parentNode;
      }

      if (li === node) {
        ul.style.display = open ? "block" : "none";
      }
    });

    node.classList.remove("collapsibleListOpen");
    node.classList.remove("collapsibleListClosed");

    if (uls.length > 0) {
      node.classList.add("collapsibleList" + (open ? "Open" : "Closed"));
    }
  }

  return { apply };
};

collapsibleLists.apply();
