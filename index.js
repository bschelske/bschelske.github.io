var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");

// Check if the user has visited before using a cookie
var visitedBefore = document.cookie.includes("visited=true");

// If the user hasn't visited before, increment the counter and set the cookie
if (!visitedBefore) {
  var visitCount = localStorage.getItem("page_view");

  // Check if page_view entry is present
  if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
  }

  counterContainer.innerHTML = visitCount;

  // Set a cookie to mark the user as visited
  document.cookie = "visited=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
}

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  // Reset the counter and remove the "visited" cookie
  localStorage.setItem("page_view", 1);
  document.cookie = "visited=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  counterContainer.innerHTML = 1;
});
