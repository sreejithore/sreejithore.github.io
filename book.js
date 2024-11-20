document.addEventListener("DOMContentLoaded", function () {
    const flightsTab = document.getElementById("flights-tab");
    const hotelsTab = document.getElementById("hotels-tab");
    const trainsTab = document.getElementById("trains-tab");
    const searchTab = document.getElementById("search-option")
    const cruiseTab = document.getElementById("cruise-tab");

    function resetTabs() {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".form-content").forEach((form) => form.classList.add("hidden"));
    }
  
    flightsTab.addEventListener("click", function () {
      resetTabs();
      flightsTab.classList.add("active");
      flightsForm.classList.remove("hidden");
    });
  
    hotelsTab.addEventListener("click", function () {
      resetTabs();
      alert("Sorryyy.....Hotel option is currently under development!");
    });
  
    trainsTab.addEventListener("click", function () {
      resetTabs();
      alert("Trains option is currently under development!");
    });

    cruiseTab.addEventListener("click", function () {
      resetTabs();
      alert("Sorryyy.....cruise option is currently under development!");
    });

    searchTab.addEventListener("click", function () {
        resetTabs();
        alert("Sorry dear customer, our platform is currently under development! and will be avilable soon for our customers.");
      });
});
  
