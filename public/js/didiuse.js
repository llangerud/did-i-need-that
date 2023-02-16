
async function usedForm (event) {
  event.preventDefault();
//gets all of the input boxes, then, if the box is checked pushes it into the checkedarray
  const allBoxes = document.querySelectorAll(".form-check-input");
  let checkedArray = [];
  for (const box of allBoxes) {
    if (box.checked) {
      checkedArray.push(box.value);
    }
  }
//sends the checked boxes to update used so xused property is +1 for only the checked boxes
  const response = await fetch('/api/purchases/updateused', {
    method: 'PUT',
    body: JSON.stringify(checkedArray),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the main page
      alert('purchases updated!')
       document.location.replace('/dashboard');
 
  } else {
    alert(response.statusText);
  }
};
  //the above works, captures if boxes are checked or not
















document.querySelector('#did-i-use-form').addEventListener('submit', usedForm);