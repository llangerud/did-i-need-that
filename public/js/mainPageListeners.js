
//dashboard
const dashboardLink = document.querySelector('#dashboard');
dashboardLink.addEventListener('click', function goTodashboard () {
    document.location.replace('/dashboard');
});

//home
const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', function goToHome () {
    document.location.replace('/');
});

//logout
const logoutLink = document.querySelector('#logout');
if (logoutLink) {
logoutLink.addEventListener('click', async function goTologout () {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('logged out')  
        document.location.replace('/login');
      } else {
        alert('did not log out');
      }
});
    

}
else {
//login
const loginLink = document.querySelector('#login');
loginLink.addEventListener('click', function goTologin () {
    document.location.replace('/login');
});

//signup
const signupLink = document.querySelector('#signup');
signupLink.addEventListener('click', function goTosignup() {
    document.location.replace('/signup');
});

};

