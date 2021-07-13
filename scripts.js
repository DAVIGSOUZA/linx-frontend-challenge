const createProductCard = (products) => {
  const productCard = products.map(product => `
    <div class="product-card">
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}"/>
      </div>
      <div class="product-info-wrapper">
        <p class="text-md">${product.name}</p>
        <p class="text-sm">${product.description}</p>
        <p class="text-sm">De: R$${product.oldPrice.toFixed(2).replace('.', ',')}</p>
        <p class="product-price">Por: R$:${product.price.toFixed(2).replace('.', ',')}</p>
        <p class="text-sm">
          ou ${product.installments.count}x de 
          R$${product.installments.value.toFixed(2).replace('.', ',')}
        </p>
        <button class="btn">Comprar</button>
      </div>
    </div>
  `).join("")
  document.getElementById('product-cards-container').innerHTML += productCard
}

let apiPage = 1

async function getData(page) {
  const data = await fetch(`
  https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}
  `)
  return data.json()
}

async function showProducts() {
  let data = await getData(apiPage)
  createProductCard(data.products)
  apiPage++
}

showProducts()

//  FORM VALIDATIONS
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const inputValue = (formName, inputName) => {
  return document.forms[formName][inputName].value
}

const errorMessage = {
  name: 'Preencha um nome válido.',
  email: 'Preencha um e-mail válido.',
  cpf: 'Preencha um CPF válido, somente os números.',
  radio: 'Selecione uma das opções.'
}

const submitInfoForm = () => {
  let hasErrors = false

  if (inputValue('info-form', 'name') == '') {
    document.getElementById("name-error").innerHTML = errorMessage.name
    document.getElementById("form-success").innerHTML = ""
    hasErrors = true
  } else { document.getElementById("name-error").innerHTML = "" }

  if (inputValue('info-form', 'email') == '' 
    || !emailRegex.test(inputValue('info-form', 'email'))) {
    document.getElementById("email-error").innerHTML = errorMessage.email
    document.getElementById("form-success").innerHTML = ""
    hasErrors = true
  } else { document.getElementById("email-error").innerHTML = "" }

  if (inputValue('info-form', 'cpf') == '' 
    || inputValue('info-form', 'cpf').length !== 11 ) {
    document.getElementById("cpf-error").innerHTML = errorMessage.cpf
    document.getElementById("form-success").innerHTML = ""
    hasErrors = true
  } else { document.getElementById("cpf-error").innerHTML = "" }

  if (inputValue('info-form', 'gender') == '') {
    document.getElementById("gender-error").innerHTML = errorMessage.radio
    document.getElementById("form-success").innerHTML = ""
    hasErrors = true
  } else { document.getElementById("gender-error").innerHTML = "" }  

  if (hasErrors) return 

  document.getElementById("form-success").innerHTML = "Obrigado por ajudar o algorítmo!"
}

const submitShareForm = () => {
  let hasErrors = false

  if (inputValue('share-form', 'share-name') == '') {
    document.getElementById("share-name-error").innerHTML = errorMessage.name
    document.getElementById("share-form-success").innerHTML = ""
    hasErrors = true
  } else document.getElementById("share-name-error").innerHTML = ""

  if (inputValue('share-form', 'share-email') == '' 
    || !emailRegex.test(inputValue('share-form', 'share-email'))) {
    document.getElementById("share-email-error").innerHTML = errorMessage.email
    document.getElementById("share-form-success").innerHTML = ""
    hasErrors = true
  } else document.getElementById("share-email-error").innerHTML = ""

  if (hasErrors) return

  document.getElementById("share-form-success").innerHTML = "Lista personalizada enviada!"
}

// EVENT LISTENERS TO PREVENT DEFAULT BEHAVIOR ON SUBMIT
document.getElementById("share-form")
  .addEventListener("submit", function(event){event.preventDefault()}
);
document.getElementById("info-form")
  .addEventListener("submit", function(event){event.preventDefault()}
);