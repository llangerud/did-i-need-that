const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const user_name = document.querySelector('#user_name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (user_name && password && email) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/addcategory');

      } else {
        alert(response.statusText);
      }
    }
  };
  document.querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
