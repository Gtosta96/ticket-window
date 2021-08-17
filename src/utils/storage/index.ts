export type StorageKeys = "orders" | "waitingTime";

function storageFn() {
  function get(key: StorageKeys) {
    return JSON.parse(localStorage.getItem(key));
  }

  function set(key: StorageKeys, value: unknown): void {
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
