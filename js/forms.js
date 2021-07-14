const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const inputValue = (formName, inputName) => {
  return document.forms[formName][inputName].value
}

const errorMessage = {
  name: 'Preencha um nome válido.',
  email: 'Preencha um e-mail válido.',
  cpf: 'Preencha um CPF válido, somente os números.',
  gender: 'Selecione uma das opções.'
}


const validateInput = (hasError, input, condition) => {
  if (condition) {
    document.getElementById(`${input}-error`).innerHTML = errorMessage[input]
    document.getElementById("form-success").innerHTML = ""
    return true
  } else { 
    document.getElementById(`${input}-error`).innerHTML = "" 
    return hasError
  }
}

const submitInfoForm = () => {
  let hasErrors = false

  hasErrors = validateInput(hasErrors, 'name', !inputValue('info-form', 'name'))
  hasErrors = validateInput(hasErrors, 'email', !inputValue('info-form', 'email') || !emailRegex.test(inputValue('info-form', 'email')))
  hasErrors = validateInput(hasErrors, 'cpf', !inputValue('info-form', 'cpf') || inputValue('info-form', 'cpf').length !== 11 )
  hasErrors = validateInput(hasErrors, 'gender', !inputValue('info-form', 'gender'))
  
  if (hasErrors) return 

  document.getElementById("form-success").innerHTML = "Obrigado por ajudar o algorítmo!"
}

const submitShareForm = () => {
  let hasErrors = false

  if (!inputValue('share-form', 'share-name')) {
    document.getElementById("share-name-error").innerHTML = errorMessage.name
    document.getElementById("share-form-success").innerHTML = ""
    hasErrors = true
  } else document.getElementById("share-name-error").innerHTML = ""

  if (!inputValue('share-form', 'share-email') 
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