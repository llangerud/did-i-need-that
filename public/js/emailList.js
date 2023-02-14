document.querySelector('#email-me').addEventListener('click', async function sendEmail () {
    console.log("listener working");
    const response = await fetch('/api/purchases/unusedemail', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        // If successful, redirect the browser to the main page
          alert('check your email!')
           document.location.replace('/dashboard');
     
      } else {
        alert(response.statusText);
      }
    

});