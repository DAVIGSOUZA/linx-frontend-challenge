// VARIABLES
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const errorMessage = {
  name: 'Preencha um nome válido.',
  email: 'Preencha um e-mail válido.',
  cpf: 'Preencha um CPF válido, somente os números.',
  gender: 'Selecione uma das opções.'
}

// GET INPUT VALUE
// 
// params: 
//  formName - string - required - form name attribute
//  inputName - string - required - input name attribute
//
// returns:
//  type: any
const inputValue = (formName, inputName) => {
  return document.forms[formName][inputName].value
}

// VALIDATE INPUT AND SPAN ERROR IN HTML
// 
// params: 
//  formName - string - required - indicates form to remove success message if necessary
//  hasError - boolean - required - if input value doesn't has error, return previus value of hasError variable
//  errorMessage - string - required - error message to display in HTML
//  input - string - required - input id attribute
//  condition - expression - required - an expression that is considered to be either truthy or falsy
//
// returns:
//  type: boolean
const validateInput = (formName, hasError, errorMessage, input, condition) => {
  if (condition) {
    document.getElementById(`${input}-error`).innerHTML = errorMessage
    document.getElementById(`${formName}-success`).innerHTML = ""
    return true
  } else { 
    document.getElementById(`${input}-error`).innerHTML = "" 
    return hasError
  }
}

// SUBMIT INFO FORM, IF ALL VALIDATIONS RETURN FALSE DISPLAY SUCCESS MESSAGE
//
// returns:
//  void
const submitInfoForm = () => {
  let hasErrors = false
  const formName = 'info-form'

  hasErrors = validateInput(formName, hasErrors, errorMessage.name, 'name', !inputValue(formName, 'name'))
  hasErrors = validateInput(formName, hasErrors, errorMessage.email, 'email', !inputValue(formName, 'email') || !emailRegex.test(inputValue(formName, 'email')))
  hasErrors = validateInput(formName, hasErrors, errorMessage.cpf, 'cpf', !inputValue(formName, 'cpf') || inputValue('info-form', 'cpf').length !== 11 )
  hasErrors = validateInput(formName, hasErrors, errorMessage.gender, 'gender', !inputValue(formName, 'gender'))
  
  if (hasErrors) return 

  document.getElementById("info-form-success").innerHTML = "Obrigado por ajudar o algorítmo!"
}

// SUBMIT SHARE FORM, IF ALL VALIDATIONS RETURN FALSE DISPLAY SUCCESS MESSAGE
//
// returns:
//  void
const submitShareForm = () => {
  let hasErrors = false
  const formName = 'share-form'

  hasErrors = validateInput(formName, hasErrors, errorMessage.name, 'share-name', !inputValue(formName, 'share-name'))
  hasErrors = validateInput(formName, hasErrors, errorMessage.email, 'share-email', !inputValue(formName, 'share-email') || !emailRegex.test(inputValue(formName, 'share-email')))

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