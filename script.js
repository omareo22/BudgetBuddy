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

const totalBudget = 0;
document.getElementById("budget-submit").addEventListener("click", (e) => {
  const budgetValue = document.getElementById("budgetValue").value
  console.log(budgetValue)
  updateBudget(budgetValue);
});

function updateBudget(budget) {
  const budgetExists = document.getElementById("Budget");
  const budgetNumber = document.createElement('h3');
  const budgetNode = document.createTextNode(budget);
  if (budgetExists === null) { 
    budgetNumber.appendChild(budgetNode)
    budgetNumber.setAttribute("id", "Budget");
    document.getElementById("remaining-container").appendChild(budgetNumber);
  } else {
    const newBudget = document.getElementById("Budget");
    newBudget.innerText = budget;
    budgetNumber.setAttribute("id", "Budget");
  }
}


})();