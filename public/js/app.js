const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    //stops the page from reloading upon form submit.
    e.preventDefault();
    
    const location = search.value;
    console.log(location);

    message1.textContent = 'Loading...';
    message2.textContent = '';

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            message1.textContent = data.error;
        } else {
            message1.textContent = data.location;
            message2.textContent = data.forecast;
        }
    })
});
});