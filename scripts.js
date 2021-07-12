const createProductCard = (products) => {
  const productCard = products.map(product => `
    <div class="card">
      <div class="img-wrapper">
        <img src="${product.image}" alt="${product.name}"/>
      </div>
      <div class="info-wrapper">
        <p class="text-md">${product.name}</p>
        <p class="text-sm">${product.description}</p>
        <p class="text-sm">De: R$${product.oldPrice.toFixed(2).replace('.', ',')}</p>
        <p class="price">Por: R$:${product.price.toFixed(2).replace('.', ',')}</p>
        <p class="text-sm">
          ou ${product.installments.count}x de 
          R$${product.installments.value.toFixed(2).replace('.', ',')}
        </p>
        <button class="btn">Comprar</button>
      </div>
    </div>
  `).join("")
  document.getElementById('cards-container').innerHTML += productCard
}

let apiPage = 1

async function getData(page) {
  const data = await fetch(`
  https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}
  `)
  return data.json()
}

async function showMoreProducts() {
  let data = await getData(apiPage)
  createProductCard(data.products)
  apiPage++
}

showMoreProducts()