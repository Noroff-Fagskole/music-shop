export default function displayMessage(messageType, message, targetElement) {
  const element = document.querySelector(targetElement);
  const markup = `<div class="alert alert-${messageType}">${message}</div>`;
  element.innerHTML = markup;
}
