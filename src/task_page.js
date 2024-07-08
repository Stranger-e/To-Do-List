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
      taskHead.innerText = 'All';
    }
  };

  document.addEventListener('itemHighlighted', updateTaskHeading);

  addListItem();

  updateTaskHeading();
};
