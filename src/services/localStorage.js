export const updateLocalStorage = (list) => {
  localStorage.setItem("listItems", JSON.stringify(list));
};

export const getLocalStorage = () => {
  const list = localStorage.getItem("listItems");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem("listItems");
};

// clearLocalStorage();
