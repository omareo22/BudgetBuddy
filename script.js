(function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  let totalBudget = 0;
  let billsValue = 0;
  let foodValue = 0;
  let clothingValue = 0;
  let entertainmentValue = 0;
  let totalSpent = 0;

  // PIECHART
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Categories", "Amount Spent"],
      ["Bills", billsValue],
      ["Food", foodValue],
      ["Clothing", clothingValue],
      ["Entertainment", entertainmentValue],
    ]);

    var options = {
      title: "Total Budget",
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );

    chart.draw(data, options);
  }

  document.getElementById("budget-submit").addEventListener("click", (e) => {
    const budgetValue = document.getElementById("budgetValue").value;
    updateBudget(budgetValue);
  });

  document.getElementById("debit-submit").addEventListener("click", (e) => {
    const categoryValue = document.getElementById("category").value;
    const amountValue = document.getElementById("total-amount").value;
    e.preventDefault();
    updateCategory(categoryValue, amountValue);
  });

  window.addEventListener("resize", function(){
    drawChart() }, true);

  function updateCategory(category, money) {
    if (isNaN(parseFloat(money))) {
      window.alert("Please enter a number");
    } else if (parseFloat(money) > totalBudget) {
      window.alert("You don't have enough money for this");
    } else {
      totalSpent += parseFloat(money);
      totalBudget -= parseFloat(money);
      updateBudget(totalBudget);
      updateSpent(totalSpent);
      switch (category) {
        case "bills":
          billsValue += parseFloat(money);
          updateTotal("Bills", billsValue);
          drawChart();
          break;
        case "entertainment":
          entertainmentValue += parseFloat(money);
          updateTotal("Entertainment", entertainmentValue);
          drawChart();
          break;
        case "food":
          foodValue += parseFloat(money);
          updateTotal("Food", foodValue);
          drawChart();
          break;
        case "clothing":
          clothingValue += parseFloat(money);
          updateTotal("Clothing", clothingValue);
          drawChart();
          break;
      }
    }
  }

  function updateBudget(budget) {
    const floatBudget = parseFloat(budget).toFixed( 2 )
    const budgetExists = document.getElementById("Budget");
    const budgetNumber = document.createElement("h3");
    const budgetNode = document.createTextNode(`$${floatBudget}`);
    if (budgetExists === null) {
      budgetNumber.appendChild(budgetNode);
      budgetNumber.setAttribute("id", "Budget");
      document.getElementById("remaining-container").appendChild(budgetNumber);
      totalBudget = parseFloat(floatBudget);
    } else {
      const newBudget = document.getElementById("Budget");
      newBudget.innerText = `$${budget.toFixed( 2 )}`;
      budgetNumber.setAttribute("id", "Budget");
      totalBudget = parseFloat(floatBudget);
    }
  }

  function updateSpent(spent) {
    const floatSpent = parseFloat(spent).toFixed( 2 )
    const spentExists = document.getElementById("Spent");
    const spentNumber = document.createElement("h3");
    const spentNode = document.createTextNode(`$${floatSpent}`);
    if (spentExists === null) {
      spentNumber.appendChild(spentNode);
      spentNumber.setAttribute("id", "Spent");
      document.getElementById("spent-container").appendChild(spentNumber);
      totalSpent = parseFloat(spent);
    } else {
      const newSpent = document.getElementById("Spent");
      newSpent.innerText = `$${floatSpent}`;
      spentNumber.setAttribute("id", "Budget");
      totalSpent = parseFloat(spent);
    }
  }

  function updateTotal(category, values) {
    const floatValues = parseFloat(values).toFixed( 2 )
    const nameLI = `${category}Name`;
    const nameExist = document.getElementById(nameLI);
    const nameList = document.createElement("li");
    const nameNode = document.createTextNode(`${category}`);

    if (nameExist === null) {
      nameList.appendChild(nameNode);
      nameList.setAttribute("id", nameLI);
      document.getElementById("name-list").appendChild(nameList);
    }

    const updateExists = document.getElementById(category);
    const updateNumber = document.createElement("li");
    const updateNode = document.createTextNode(`$${floatValues}`);
    if (updateExists === null) {
      updateNumber.appendChild(updateNode);
      updateNumber.setAttribute("id", category);
      document.getElementById("number-list").appendChild(updateNumber);
    } else {
      const newUpdate = document.getElementById(category);
      newUpdate.innerText = `$${floatValues}`;
      updateNumber.setAttribute("id", category);
    }
  }

  // PIE CHART
})();
