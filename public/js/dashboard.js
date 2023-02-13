const addPurchase = async (event) => {
    event.preventDefault();

    const category = document.querySelector('#inputGroupSelect01').value.trim();
    const name = document.querySelector('#name').value.trim();
    const price = document.querySelector('#price').value.trim();
    const mood = document.querySelector('#mood').value.trim();

    console.log(category, name, price, mood);

    if (category && name && price && mood) {
      
      const response = await fetch('/api/purchases/addnew', {
        method: 'POST',
        body: JSON.stringify({ category, name, price, mood }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, refreshes the dashboard to the main page
        alert("purchase added!");
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#purchase-form').addEventListener('submit', addPurchase);

  document.querySelector("#update-purchase").addEventListener('click', function viewList () {
    document.location.replace('/api/purchases/byuser')
  });

  document.querySelector("#total-spent").addEventListener('click', function viewList () {
    document.location.replace('/api/purchases/totalspent')
  });
