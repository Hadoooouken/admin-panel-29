import { render } from './render';

export const editUsers = () => {
  const tbody = document.querySelector('#table-body');
  const form = document.querySelector('form');
  const nameInput = form.querySelector('#form-name');
  const emailInput = form.querySelector('#form-email');
  const childrenInput = form.querySelector('#form-children');

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.btn-edit')) {
      const tr = event.target.closest('tr');
      const userId = tr.getAttribute('data-key');
      const input = tr.querySelector('#form-children');

      userService.getUser(userId).then((user) => {
        nameInput.value = user.name;
        emailInput.value = user.email;
        childrenInput.checked = user.children;

        form.dataset.method = userId;
        // return res;
        //   return userService.getUsers();
      });
      // .then((users) => {
      //   render(users);
      // });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.dataset.method) {
      const userId = form.dataset.method;
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenInput.checked,
        permissions: false,
      };

      userService
        .editUser(userId, user)
        .then(() => {
          return userService.getUsers();
        })
        .then((users) => {
          render(users);
        })
        .finally(() => {
          form.reset();
          form.removeAttribute('data-method');
        });
    }
  });
};
