export function fetchExchange(inputValue) {
    return fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
        .then(response => response.json())
        .then(data => data);
}
