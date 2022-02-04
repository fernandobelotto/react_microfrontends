let product = '<h2>aqui é o microfrontend</h1>';

for (let i of [1, 2, 3, 5, 6, 7,]) {
    product += `<div>${Math.random().toString()}</div>`
}

document.getElementById('list').innerHTML = product