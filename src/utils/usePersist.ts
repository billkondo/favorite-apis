import { useEffect, useState } from 'react';

const usePersist = <T>(
  initial: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>, T] => {
  const persisted = localStorage.getItem(key);
  const initialValue = persisted ? JSON.parse(persisted) : initial;
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue, initialValue];
};

export default usePersist;
