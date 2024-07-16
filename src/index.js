import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

import { initial } from './initial';
import { addListItem } from './add_list';
import { taskPage } from './task_page';
import { addTask } from './add_task_button';
import { renderTaskForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  initial();
  addListItem();
  taskPage();
  addTask();
  renderTaskForm();
});
