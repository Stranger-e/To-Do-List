export const renderTaskForm = () => {
  const formCanvas = document.getElementById('content');

  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'modal-overlay';
  formCanvas.appendChild(modalOverlay);

  const formContainer = document.createElement('div');
  formContainer.id = 'task-form-container';
  modalOverlay.appendChild(formContainer);

  const taskForm = document.createElement('form');
  taskForm.id = 'task-form';
  formContainer.appendChild(taskForm);

  const createFormElement = (
    labelText,
    inputType,
    inputId,
    isSelect = false
  ) => {
    const formGroup = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.innerText = labelText;
    formGroup.appendChild(label);

    let input;
    if (isSelect) {
      input = document.createElement('select');
      ['low', 'medium', 'high'].forEach((priority) => {
        const option = document.createElement('option');
        option.value = priority;
        option.innerText = priority.charAt(0).toUpperCase() + priority.slice(1);
        input.appendChild(option);
      });
    } else if (inputType === 'textarea') {
      input = document.createElement('textarea');
    } else {
      input = document.createElement('input');
      input.setAttribute('type', inputType);
    }

    input.id = inputId;
    input.name = inputId;
    input.required = true;
    formGroup.appendChild(input);

    taskForm.appendChild(formGroup);
  };

  createFormElement('Title:', 'text', 'task-title');
  createFormElement('Description:', 'textarea', 'task-description');
  createFormElement('Due Date:', 'date', 'task-due-date');
  createFormElement('Priority:', 'select', 'task-priority', true);

  const formSubmitButton = document.createElement('button');
  formSubmitButton.setAttribute('type', 'submit');
  formSubmitButton.innerText = 'Add Task';
  taskForm.appendChild(formSubmitButton);

  modalOverlay.style.display = 'none';

  const showModal = () => {
    modalOverlay.style.display = 'flex';
  };

  const hideModal = () => {
    modalOverlay.style.display = 'none';
  };

  document
    .querySelector('.add-task-button')
    .addEventListener('click', showModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      hideModal();
    }
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    hideModal();
  });
};
