"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayMessage(messageType, message, targetElement) {
    var element = document.querySelector(targetElement);
    var markup = "<div class=\"alert alert-" + messageType + "\">" + message + "</div>";
    element.innerHTML = markup;
}
exports.default = displayMessage;
