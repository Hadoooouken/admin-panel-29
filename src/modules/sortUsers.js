import { render } from './render';

export const sortUsers = () => {
  const headerSortIsChildren = document.querySelector('#sort-is-children');
  let isSort = false;
  
  headerSortIsChildren.style.cursor = 'pointer';

  headerSortIsChildren.addEventListener('click', (e) => {
    userService
      .getData(`${baseUrl}?_sort=${isSort ? '' : '-'}children`)

      .then((sortUsers) => {
        errorBlock.textContent = '';
        render(sortUsers);
      })
      .catch((error) => {
        errorBlock.textContent = 'Произошла ошибка, данных нет';
      });
    isSort = !isSort;
  });
};
