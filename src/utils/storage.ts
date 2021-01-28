export function store(key: string, value: object[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function retrieve(key: string) {
  return JSON.parse(localStorage.getItem(key) || '');
}

export function remove(key: string) {
  localStorage.removeItem(key);
}
