// FORMAT NUMBER TO LOCAL CURRENCY
// 
// params: 
//  value - number - required - number to format to local currency string
//
// returns:
//  type: string
const toLocalCurrency = (value) => {
  return `R$${value.toFixed(2).replace('.', ',')}`
}

// RECEIVES ARRAY OF PRODUCTS AND RENDER EACH PRODUCT IN THE HTML ID 'product-cards-container' 
//
// params: 
//  products - array - required - array of objects with the following properties
//  object properties:
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

// VARIABLE
let apiPage = 1

// FETCH PRODUCTS FROM SPECIFIC PAGE FROM API
// 
// params: 
//  page - number - required - indicates page number to api url
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

// INITIAL PRODUCT RENDER
showProducts()