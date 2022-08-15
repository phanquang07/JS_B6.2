// check số nguyên tố
function checkNum(n) {
  if (n < 2) {
    return false
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i !== 0) {
      return false
    }
  }
  return true
}

function displayNum() {

  var n = Number(document.querySelector('#inputNumN').value)
  var contents = ''

  for (var i = 0; i < n; i++) {
    if (checkNum(i) === true) {
      contents += `
      ${i}, `
    }
    console.log(contents);
  }
  
  document.querySelector('#createdNum').innerHTML = contents
}

document.querySelector('#btn-create').onclick = displayNum