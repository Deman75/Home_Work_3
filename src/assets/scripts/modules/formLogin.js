const form = document.querySelector('#js-authoriz');
const input = document.querySelectorAll('.authoriz__cont');
const inputIcon = document.querySelectorAll('.authoriz__icon-icon');
const submit = document.querySelector('#js-authorizSend');
const check = document.getElementsByName('robot-check');
const checkIcon = document.querySelector('.check__icon-icon');
const robotRadio = document.getElementsByName('robot-radio');
const radioIcom = document.querySelectorAll('.authoriz__radio');


let formSendFail = false; // если true то была ошибка по заполнению формы, и с этого момента
                          // проверяем все поля заново, пока не будет false

const checkInputs = function () { // функция проверяет какие есть ли пустые поля и подсвечивает их
  let err = false;                // возвращает true если была ошибка.
  for (let i = 0; i < input.length; i++) { // проверка текстовых полей
    if (input[i].value === '') {
      input[i].style = 'border: 1px solid #e44845'
      inputIcon[i].style = 'fill: #e44845'
      err = true;
    } else {
      input[i].style='border: 1px solid #00bfa5';
      inputIcon[i].style = 'fill: #00bfa5'
    }
  }

  let radioUnCheckCount = 0;  // проверка radio полей
  for (let i = 0; i < robotRadio.length; i++) {
    if (robotRadio[i].checked) {
      radioUnCheckCount++;
    }
  }

  if (radioUnCheckCount === 0) { // если не один radio не выбрано, то помечаем ошибку и подсвечиваем все radio
    for (let i = 0; i < robotRadio.length; i++) {
      radioIcom[i].style = 'border: 1px solid #e44845'
    }
    err = true;
  } else {
    for (let i = 0; i < robotRadio.length; i++) {
      radioIcom[i].style = 'border: 1px solid #c4cbcd'
    }
  }

  if (!check[0].checked) { // проверка checkbox полей
    checkIcon.style = 'border: 1px solid #e44845'
    err = true;
  } else {
    checkIcon.style='border: 1px solid transparent';
  }

  return err;
}

let showErrorMsg = function (show) { // Показывает окно подсказки незаполненых полей
  const errorMsg = document.querySelector('#js-error-msg');
  if (show === 'show') { // show or hide
    let left = Math.round(form.getBoundingClientRect().width / 2, 1); //вычисляем центр формы
    errorMsg.style = 'display: block; opasity: 0';
    left = Math.round(left - errorMsg.getBoundingClientRect().width / 2, 1); //вычитаем ширину окна сообщения для выравнивания по центру

    for (let i = 0; i < input.length; i++) { // выводим сообщения на первом попавшемся пустом поле, выводим сообщения и выходим из функции
      if (input[i].value === '') {
        if (i === 0) {
          errorMsg.style = `display: block; left: ${left}px; top: 170px`;
        } else if (i === 1) {
          errorMsg.innerHTML = 'Вы не ввели пароль';
          errorMsg.style = `display: block; left: ${left}px; top: 245px`;
        }
        return;
      }
    }
  // Если все импуты заполнены, выдаем сообщение на капчу
  errorMsg.innerHTML = 'Не все поля заполнены';
  errorMsg.classList.add('authoriz__error-msg_arrow_down');
  errorMsg.style = `display: block; left: ${left}px; top: 170px`;

  } else if (show === 'hide') { // если нужно скрыть сообщение
    for (let i = 0; i < input.length; i++) {
      errorMsg.style = `display: none`;
      errorMsg.classList.remove('authoriz__error-msg_arrow_down');
    }
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkInputs()) { //если перед отправкой возникла ошибка незаполненого поля то выставляем флаг и выходим из функции
    formSendFail = true;
    showErrorMsg('show'); // показываем сообщение об ошибки
    return;
  }
  formSendFail = false;

  console.log('Заполнено');
});

form.addEventListener('input', () => {
  if (formSendFail){ // если этот флаг в true значит была ошибка.
    showErrorMsg('hide'); // Убираем сообщения
    if (!checkInputs()) { // проверяем изменилось ли состояние полей
      formSendFail = false; //
    }
  }
});
