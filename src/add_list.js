export const addListItem = () => {
  const newListButton = document.querySelector('.new-list-button');
  const newListInput = document.querySelector('.new-list-input');
  const myListItems = document.querySelector('.my-list-items');

  const addItem = () => {
    const inputValue = newListInput.value.trim();
    if (inputValue !== '') {
      const listItem = document.createElement('li');
      listItem.innerText = inputValue;
      myListItems.appendChild(listItem);
      newListInput.value = '';
    }
  };

  newListButton.addEventListener('click', addItem);
  newListInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  });
};
