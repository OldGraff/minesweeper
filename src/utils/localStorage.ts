export const saveToLocalStorage = (data: unknown): void => {
  if (!localStorage) return;
  localStorage.setItem('field', JSON.stringify(data));
};

export const loadFromLocalStorage = <T>(key: string): T | null => {
  if (!localStorage) return null;
  const stringData = localStorage.getItem(key);

  return stringData ? JSON.parse(stringData) as T : null;
};
