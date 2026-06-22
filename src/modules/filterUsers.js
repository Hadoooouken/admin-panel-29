import { render } from './render';

export const filterUsers = () => {
  const btnChildren = document.querySelector('#btn-isChildren');
  const btnPermissions = document.querySelector('#btn-isPermissions');
  const btnAll = document.querySelector('#btn-isAll ');

  btnChildren.addEventListener('click', (evt) => {
    userService
      .getData(`${baseUrl}?children=true`)
      .then((data) => {
        errorBlock.textContent = '';
        render(data);
      })
      .catch((error) => {
        errorBlock.textContent = 'Произошла ошибка, данных нет';
      });
  });

  btnPermissions.addEventListener('click', (evt) => {
    userService
      .getData(`${baseUrl}?permissions=true`)
      .then((data) => {
        errorBlock.textContent = '';
        render(data);
      })
      .catch((error) => {
        errorBlock.textContent = 'Произошла ошибка, данных нет';
      });
  });
  btnAll.addEventListener('click', (evt) => {
    userService
      .getData(baseUrl)
      .then((data) => {
        errorBlock.textContent = '';
        render(data);
      })
      .catch((error) => {
        errorBlock.textContent = 'Произошла ошибка, данных нет';
      });
  });
};
