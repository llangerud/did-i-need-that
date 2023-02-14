
async function usedForm (event) {
  event.preventDefault();

  const allBoxes = document.querySelectorAll(".form-check-input");
  let checkedArray = [];
  for (const box of allBoxes) {
    if (box.checked) {
      checkedArray.push(box.value);
    }
  }

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