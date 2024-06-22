export const taskPage = () => {
  const myTaskContainer = document.querySelector('.my-task-container');

  const taskHead = document.createElement('h1');
  taskHead.innerText = 'Everything';
  taskHead.classList.add('task-head');
  myTaskContainer.appendChild(taskHead);
};
