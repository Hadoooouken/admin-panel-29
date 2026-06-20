import { render } from './render';

export const changePermissons = () => {
  const tbody = document.querySelector('#table-body');

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('#form-children')) {
      const tr = event.target.closest('tr');
      const userId = tr.getAttribute('data-key');
      const input = tr.querySelector('#form-children');

      userService
        .changeUser(userId, { permissions: input.checked })
        .then(() => {
          return userService.getUsers();
        })
        .then((users) => {
          render(users);
        });
    }
  });
};
