import { render } from './render';

export const changePermissons = () => {
  const tbody = document.querySelector('#table-body');

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('#form-children')) {
      const tr = e.target.closest('tr');
      const userId = tr.getAttribute('data-key');
      const input = tr.querySelector('#form-children');

      userService
        .postData(`${baseUrl}/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ permissions: input.checked }),
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
