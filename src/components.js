const ulElement = document.querySelector('.container main ul');
const h2Element = document.querySelector('.container main h2');

function createLiElement(name, value) {
  const liElement = document.createElement('li');

  liElement.innerHTML = `
    <b>${name}</b>
    <span>${value}</span>
  `
  // Retorna a LI com o <b> e <span> preenchidos
  return liElement;

  // <li>
  //   <b>USD</b>
  //   <span>80</span>
  // </li>
}

// coins - [{ name: 'USD', value: '80' }, { name: 'USD', value: '80' }]
// baseCoin - 'BRL'
export function renderCoins(coins, baseCoin) {
  ulElement.innerHTML = '';
  h2Element.innerHTML = `Valores referentes a 1 ${baseCoin}`

  coins.forEach(coin => {
    const name = coin.name;
    const value = coin.value;

    const liElement = createLiElement(name, value);

    ulElement.appendChild(liElement);
  })
} 