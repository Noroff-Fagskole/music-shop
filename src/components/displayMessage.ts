export default function displayMessage(messageType: string, message: string, targetElement: string) {
  const element = document.querySelector(targetElement) as HTMLDivElement;
  const markup = `<div class="alert alert-${messageType}">${message}</div>`;
  element.innerHTML = markup;
}
