import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

import { initial } from './initial';
import { addListItem } from './add_list';

document.addEventListener('DOMContentLoaded', () => {
  initial();
  addListItem();
});
