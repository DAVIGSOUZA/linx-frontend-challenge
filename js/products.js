// FORMAT A NUMBER TO LOCAL CURRENCY
// 
// params: 
//  Number - required
//
// returns:
//  string
const toLocalCurrency = (value) => {
  return `R$${value.toFixed(2).replace('.', ',')}`
}

// RECEIVES AN ARRAY OF PRODUCTS AND RENDER EACH PRODUCT 
//
// params: 
//  array of objects
//  object schema :
//    {
//      name,
//      image,
//      description,
//      oldPrice,
//      price,
//      installments {
//        count,
//        value
//      }
//    }
//
// returns:
//  void
const renderProducts = (products) => {
  const productCards = products.map(product => `
    <div class="product-card">
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}"/>
      </div>
      <div class="product-info-wrapper">
        <span class="text-md">${product.name}</span>
        <span class="text-sm">${product.description}</span>
        <span class="text-sm">De: ${toLocalCurrency(product.oldPrice)}</span>
        <span class="product-price">Por: ${toLocalCurrency(product.price)}</span>
        <span class="text-sm">
          ou ${product.installments.count}x de 
          ${toLocalCurrency(product.installments.value)}
        </span>
        <button class="btn">Comprar</button>
      </div>
    </div>
  `).join("")
  document.getElementById('product-cards-container').innerHTML += productCards
}

// API PAGE VARIABLE
let apiPage = 1

// FETCH PRODUCTS FROM SPECIFIC PAGE FROM API
// 
// params: 
//  Number - required
//
// returns:
//  Promise<object>
async function getData(page) {
  const data = await fetch(`
  https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}
  `)
  return data.json()
}

// GET PRODUCTS FROM API, RENDER IT, UPDATE API PAGE VARIABLE FOR NEW REQUESTS
//
// returns:
//  void
async function showProducts() {
  let data = await getData(apiPage)
  renderProducts(data.products)
  apiPage++
}

// INITICIAL PRODUCT RENDER
showProducts()