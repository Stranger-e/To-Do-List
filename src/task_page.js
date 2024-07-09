import { addListItem } from './add_list';

export const taskPage = () => {
  const myTaskContainer = document.querySelector('.my-task-container');

  const taskHead = document.createElement('h1');
  taskHead.classList.add('task-head');
  myTaskContainer.appendChild(taskHead);

  const updateTaskHeading = () => {
    const highlightedItem = document.querySelector(
      '.my-list-items .highlighted .list-item-name'
    );
    if (highlightedItem) {
      taskHead.innerText = highlightedItem.textContent;
    } else {
      taskHead.innerText = 'All Tasks';
    }
  };

  document.addEventListener('itemHighlighted', updateTaskHeading);

  const addAndHighlightItem = () => {
    addListItem();

    const newItem = document.querySelector(
      '.my-list-items .list-item:last-child'
    );
    if (newItem) {
      document.querySelectorAll('.my-list-items .list-item').forEach((item) => {
        item.classList.remove('highlighted');
      });

      newItem.classList.add('highlighted');
      updateTaskHeading();
    }
  };

  addAndHighlightItem();

  updateTaskHeading();

  document
    .querySelector('.my-list-items')
    .addEventListener('click', (event) => {
      if (event.target.classList.contains('list-item-name')) {
        document
          .querySelectorAll('.my-list-items .list-item')
          .forEach((item) => {
            item.classList.remove('highlighted');
          });

        event.target.closest('.list-item').classList.add('highlighted');
        updateTaskHeading();
      }
    });
};
