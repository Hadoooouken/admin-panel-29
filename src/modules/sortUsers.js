import { render } from './render';

export const sortUsers = () => {
  const headerSortIsChildren = document.querySelector('#sort-is-children');
  let isSort = false;
  headerSortIsChildren.style.cursor = 'pointer';

  headerSortIsChildren.addEventListener('click', (e) => {
    userService
      .getSortUsers({
        name: 'children',
        value: isSort ? '' : '-',
      })
      .then((sortUsers) => {
        render(sortUsers);
      });
    isSort = !isSort;
  });
};
