var firstName = document.getElementById('first_name')
var lastName = document.getElementById('last_name')
var info = document.getElementById('description')
var emailAddress = document.getElementById('email')
var telephone = document.getElementById('phone')
var prev = document.getElementById('preview')
var raw = document.getElementById('raw_html')

function profileUpdate () {
  var updatestr = '<h1>Hi, my name is ' + firstName.value + ' ' + lastName.value + '!</h1>' + '<p>' + info.value + '</p>' +
  '<p>' + 'If you\'re interested in a date, you can email me at ' +
  '<a href="mailto:' + ' ' + emailAddress.value + '" target="_blank">' + emailAddress.value +
  '</a> or give me a call at ' +
  '<a href="tel:' + telephone.value + ' "target="_blank">' + telephone.value + '</a>.' +
  '</p>'

  prev.innerHTML = updatestr

  raw.textContent = updatestr
}

firstName.addEventListener('input', profileUpdate)
lastName.addEventListener('input', profileUpdate)
info.addEventListener('input', profileUpdate)
emailAddress.addEventListener('input', profileUpdate)
telephone.addEventListener('input', profileUpdate)
