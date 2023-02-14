
async function getCategories(event) {
event.preventDefault();
    const name1 = document.querySelector('#one').value.trim();
    const name2 = document.querySelector('#two').value.trim();
    const name3 = document.querySelector('#three').value.trim();
    const name4 = document.querySelector('#four').value.trim();
    const name = [{name:name1}, {name:name2}, {name:name3}, {name:name4}];
      

      const response = await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify(name),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the main page
        // setTimeout(() => {
           document.location.replace('/dashboard');
        // }, 100);

       
      } else {
        alert(response.statusText);
      }
    };





document.querySelector('#category-submit-form').addEventListener('submit',getCategories);