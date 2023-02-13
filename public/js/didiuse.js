
function usedForm (event) {
  event.preventDefault();

  const allBoxes = document.querySelectorAll(".form-check-input");
  let checkedArray = [];
  for (const box of allBoxes) {
    if (box.checked) {
      checkedArray.push(box.value);
    }
  }

  console.log(checkedArray);
  //the above works, captures if boxes are checked or not

  //code that sends a PUT request to purchase and updates xused by one for each purchase from this array or maybe it needs to be in objects
  //redirect to dashboard
 // document.location.replace("/dashboard");


};









document.querySelector('#did-i-use-form').addEventListener('submit', usedForm);