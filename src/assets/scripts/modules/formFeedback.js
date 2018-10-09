const form = document.querySelector('#feedback');
const userName = document.querySelector('#feedbackName');
const email = document.querySelector('#feedbackEmail');
const message = document.querySelector('#feedbackMessage');
const send = document.querySelector('#feedbackSend');
const clear = document.querySelector('#feedbackClear');


clear.addEventListener("click", () => {
  form.reset();
  userName.style="border: 1px solid transparent";
  email.style="border: 1px solid transparent";
  message.style="border: 1px solid transparent";
});

send.addEventListener("click", (e) => {
  e.preventDefault();
  let err = false;

  if (userName.value === '') {
    userName.style="border: 1px solid #e44845";
    err = true;
  }
  if (email.value === '') {
    email.style="border: 1px solid #e44845";
    err = true;
  }
  if (message.value === '') {
    message.style="border: 1px solid #e44845";
    err = true;
  }
  if (err) return;
});

userName.addEventListener("input", () => {
  userName.style='border: 1px solid #00bfa5';
});
email.addEventListener("input", () => {
  email.style='border: 1px solid #00bfa5';
});
message.addEventListener("input", () => {
  message.style='border: 1px solid #00bfa5';
});
