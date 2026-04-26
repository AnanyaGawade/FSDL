// NAVIGATION
function goToPlans(){
  window.location.href = "subscribe.html";
}

function goToHome(){
  window.location.href = "index.html";
}

// TOGGLE LOGIC
const toggle = document.getElementById("planToggle");

if(toggle){
  toggle.addEventListener("change", () => {

    const prices = document.querySelectorAll(".price");
    const monthlyLabel = document.getElementById("monthlyLabel");
    const yearlyLabel = document.getElementById("yearlyLabel");

    prices.forEach(p => {
      if(toggle.checked){
        p.textContent = "₹" + p.getAttribute("data-year");
        monthlyLabel.classList.remove("active");
        yearlyLabel.classList.add("active");
      } else {
        p.textContent = "₹" + p.getAttribute("data-month");
        yearlyLabel.classList.remove("active");
        monthlyLabel.classList.add("active");
      }
    });

  });
}