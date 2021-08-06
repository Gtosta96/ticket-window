export type Storage = "orders";

function storageFn() {
  function get(key: Storage) {
    return JSON.parse(localStorage.getItem(key));
  }

  function set(key: Storage, value: unknown): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  function clear(): void {
    return localStorage.clear();
  }

  return {
    get,
    set,
    clear,
  };
}

const storage = storageFn();
export default storage;
