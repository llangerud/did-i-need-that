function usedForm (event) {
  event.preventDefault();

  const purchase = document.querySelector("#flexCheckChecked").value.trim();
  console.log(purchase);
  document.location.replace("/");
};









document.querySelector('#did-i-use-form').addEventListener('submit', usedForm);