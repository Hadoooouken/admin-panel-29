import { debounce } from './helpers';
import { render } from './render';

export const searchUsers = () => {
  const searchInput = document.querySelector('#search-input');

  const debounceSearch = debounce(() => {
    userService.getSearchUsers(searchInput.value).then((data) => {
      render(data);
      debounce();
    });
  });
  searchInput.addEventListener('input', () => {
    debounceSearch();
  });
};
