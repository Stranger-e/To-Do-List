export const addListItem = () => {
  const newListButton = document.querySelector('.new-list-button');
  const newListInput = document.querySelector('.new-list-input');
  const myListItems = document.querySelector('.my-list-items');

  const addItem = () => {
    const inputValue = newListInput.value.trim();
    if (inputValue !== '') {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');

      const textNode = document.createElement('span');
      textNode.textContent = inputValue;
      textNode.classList.add('list-item-name');

      const editIconSpan = document.createElement('span');
      editIconSpan.classList.add(
        'fas',
        'fa-pencil-alt',
        'fa-xs',
        'btn',
        'edit'
      );

      const deleteIconSpan = document.createElement('span');
      deleteIconSpan.classList.add('fas', 'fa-trash', 'fa-xs', 'btn', 'delete');

      listItem.appendChild(textNode);
      listItem.appendChild(editIconSpan);
      listItem.appendChild(deleteIconSpan);

      document.querySelectorAll('.my-list-items li').forEach((item) => {
        item.classList.remove('highlighted');
      });

      listItem.classList.add('highlighted');

      myListItems.appendChild(listItem);

      const event = new Event('itemHighlighted');
      document.dispatchEvent(event);

      textNode.addEventListener('click', () => {
        if (listItem.classList.contains('highlighted')) {
          listItem.classList.remove('highlighted');
        } else {
          document.querySelectorAll('.my-list-items li').forEach((item) => {
            item.classList.remove('highlighted');
          });

          listItem.classList.add('highlighted');
        }
      });

      deleteIconSpan.addEventListener('click', () => {
        listItem.remove();
      });

      editIconSpan.addEventListener('click', () => {
        newListInput.value = textNode.textContent;
        listItem.remove();
        newListInput.focus();
        newListInput.select();
      });

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
