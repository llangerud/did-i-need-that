const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const password = document.querySelector('#password-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    if (email && password) {
      console.log(JSON.stringify({ email, password }))
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the main page
        
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);