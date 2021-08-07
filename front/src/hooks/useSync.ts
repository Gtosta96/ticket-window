import { useEffect } from "react";
import storage, { StorageKeys } from "../utils/storage";

export const useSync = (
  key: StorageKeys,
  localValue: any,
  setter: (value: any) => void
) => {
  useEffect(() => {
    const callback = () => {
      const storedValue = storage.get(key);

      const isLocalEmpty = localValue && Object.keys(localValue)?.length > 0;
      const isStoredEmpty =
        !storedValue && Object.keys(storedValue)?.length > 0;

      console.log({ isLocalEmpty, isStoredEmpty });

      if (JSON.stringify(storedValue) !== JSON.stringify(localValue)) {
        console.log("sync");
        setter(storedValue);
      }
    };

    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener("storage", callback);
    };
  }, []);

  useEffect(() => {
    storage.set(key, localValue);
  }, [key, localValue]);
};
