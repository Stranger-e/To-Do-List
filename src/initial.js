export const initial = () => {
  let container = document.getElementById('content');

  let myListNav = document.createElement('div');
  myListNav.classList.add('my-list-nav');
  container.appendChild(myListNav);

  let myTaskContainer = document.createElement('div');
  myTaskContainer.classList.add('my-task-container');
  container.appendChild(myTaskContainer);

  let myListHead = document.createElement('h1');
  myListHead.classList.add('my-list-head');
  myListHead.innerText = 'My List';
  myListNav.appendChild(myListHead);

  let myListItems = document.createElement('ul');
  myListItems.classList.add('my-list-items');
  myListNav.appendChild(myListItems);

  let listItem1 = document.createElement('li');
  listItem1.innerText = 'List 1';
  myListItems.appendChild(listItem1);

  let listItem2 = document.createElement('li');
  listItem2.innerText = 'List 2';
  myListItems.appendChild(listItem2);

  let newList = document.createElement('div');
  newList.classList.add('new-list');
  myListNav.appendChild(newList);

  let newListButton = document.createElement('button');
  newListButton.classList.add('new-list-button');
  newListButton.innerText = '+';
  newList.appendChild(newListButton);

  let newListInput = document.createElement('input');
  newListInput.setAttribute('type', 'text');
  newListInput.setAttribute('id', 'new-list-input');
  newListInput.setAttribute('name', 'new-list-input');
  newListInput.setAttribute('placeholder', 'project');
  newList.appendChild(newListInput);
};
