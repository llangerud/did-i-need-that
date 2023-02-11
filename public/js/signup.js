const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const user_name = document.querySelector('#user_name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    console.log("Signup",user_name,password)

    if (user_name && password && email) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, password, email }),
        headers: { 'Content-Type': 'application/json' },
        loggedIn: true
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  document.querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
