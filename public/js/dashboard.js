const renderAddPurchase = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const password = document.querySelector('#password-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    if (email && password) {
      
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the main page
        
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#add-purchase').addEventListener('submit', renderAddPurchase);