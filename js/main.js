/**
 * REVIEW ACTIONS
 */
const addReviewButton = document.getElementById("addReview");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("reviewDialog");
function openCheck(dialog) {
  if (dialog.open) {
    console.log("");
  } else {
    console.log("CERRADO");
  }
}

addReviewButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

cancelButton.addEventListener("click", () => {
  dialog.close("Not review");
  openCheck(dialog);
});
