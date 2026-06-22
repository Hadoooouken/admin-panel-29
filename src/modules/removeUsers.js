import { render } from './render';

export const removeUsers = () => {
  const tbody = document.querySelector('#table-body');

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.btn-remove')) {
      const tr = e.target.closest('tr');
      const userId = tr.getAttribute('data-key');
      userService
        .postData(`${baseUrl}/${userId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          return userService.getData(baseUrl);
        })
        .then((users) => {
              errorBlock.textContent = '';
          render(users);
        })
        .catch((error) => {
          errorBlock.textContent = 'Произошла ошибка, данных нет';
        });
    }
  });
};
