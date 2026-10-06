const button=document.querySelector(".button");

button.addEventListener("click", () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => console.log(data.ip))
        .catch(error => console.error('Error:', error));
});