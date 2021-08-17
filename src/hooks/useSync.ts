import { useEffect } from "react";
import storage, { StorageKeys } from "../utils/storage";

export const useSync = (
  key: StorageKeys,
  localValue: any,
  syncFn: (value: any) => void
) => {
  useEffect(() => {
    const callback = () => {
      const storedValue = storage.get(key);

      if (storedValue) {
        syncFn(storedValue);
      }
    };

    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener("storage", callback);
    };
  }, [key, syncFn]);

  useEffect(() => {
    storage.set(key, localValue);
  }, [key, localValue]);
};
