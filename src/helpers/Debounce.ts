let timeOutId: ReturnType<typeof setTimeout>;

export const debounce = (func: () => void, delay: number) => {
  return (...args: []) => {
    if(timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  };
};