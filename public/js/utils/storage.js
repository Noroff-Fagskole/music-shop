"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.retrieve = exports.store = void 0;
function store(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
exports.store = store;
function retrieve(key) {
    return JSON.parse(localStorage.getItem(key));
}
exports.retrieve = retrieve;
function remove(key) {
    localStorage.removeItem(key);
}
exports.remove = remove;
