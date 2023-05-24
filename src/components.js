const ulElement = document.querySelector('.container main ul');
const h2Element = document.querySelector('.container main h2');

function createLiElement(name, value) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
      <b>${name}</b>
      <span>${value}</span>
    `;
    return liElement;
}

export function renderCoins(coins, baseCoin) {
    ulElement.innerHTML = '';
    h2Element.innerHTML = `Valores referentes a 1 ${baseCoin}`;
    coins.forEach(coin => {
        const name = coin.name;
        const value = coin.value;
        const liElement = createLiElement(name, value);
        ulElement.appendChild(liElement);
    });
}
