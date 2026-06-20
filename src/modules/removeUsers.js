import { render } from './render';

export const removeUsers = () => {
  const tbody = document.querySelector('#table-body');

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.btn-remove')) {
      const tr = event.target.closest('tr');
      const userId = tr.getAttribute('data-key');
      userService.removeUsers(userId)
        .then(() => {
          return userService.getUsers();
        })
        .then((users) => {
          console.log(users);
          render(users);
        });
    }
  });
};
