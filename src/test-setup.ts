/**
 * A partir do Node 25 existe um `localStorage` global que fica indefinido sem
 * `--localstorage-file` e esconde o do jsdom. Nesse caso, usa um em memória.
 */
if (typeof globalThis.localStorage?.getItem !== 'function') {
  const data = new Map<string, string>();
  const storage: Storage = {
    get length() {
      return data.size;
    },
    clear: () => data.clear(),
    getItem: (key) => data.get(key) ?? null,
    key: (index) => [...data.keys()][index] ?? null,
    removeItem: (key) => void data.delete(key),
    setItem: (key, value) => void data.set(key, String(value)),
  };
  Object.defineProperty(globalThis, 'localStorage', { value: storage, configurable: true });
}
