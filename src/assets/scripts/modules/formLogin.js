const form = document.querySelector('#js-authoriz');
const input = document.querySelectorAll('.authoriz__cont');
const submit = document.querySelector('#js-authorizSend')


submit.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === '') {
      input[i].style = 'border: 1px solid #e44845'
    }
  }
})
