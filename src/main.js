import './style.css'; 

const requestURL = 'https://api.exchangerate.host/latest'; 
const request = new XMLHttpRequest(); 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const response = request.response;
    console.log(response);
};
