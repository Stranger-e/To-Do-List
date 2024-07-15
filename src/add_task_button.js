import { addListItem } from './add_list';

export const addTask = () => {
  const myTaskContainer = document.querySelector('.my-task-container');
  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task-button');
  myTaskContainer.appendChild(addTaskButton);

  const addIconSpan = document.createElement('span');
  addIconSpan.classList.add('fas', 'fa-plus', 'fa-xs', 'btn', 'add-task-icon');
  addTaskButton.appendChild(addIconSpan);

  const addTaskText = document.createElement('span');
  addTaskText.innerText = 'Add Task';
  addTaskText.classList.add('add-task-text');
  addTaskButton.appendChild(addTaskText);
};
