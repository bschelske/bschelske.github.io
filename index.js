var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");

// Check if the user has visited before using session storage
var visitedBefore = sessionStorage.getItem("visited");

// If the user hasn't visited before, increment the counter and set the session storage flag
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

  // Set a session storage flag to mark the user as visited during this session
  sessionStorage.setItem("visited", true);
}

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  // Reset the counter (if needed)
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = 1;

  // Remove the session storage flag to allow counting again in the next session
  sessionStorage.removeItem("visited");
});
