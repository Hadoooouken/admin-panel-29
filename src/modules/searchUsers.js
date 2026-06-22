import { debounce } from './helpers';
import { render } from './render';

export const searchUsers = () => {
  const searchInput = document.querySelector('#search-input');

  const debounceSearch = debounce(() => {
    userService
      .getData(`${baseUrl}?name:contains=${searchInput.value}`)
      .then((data) => {
        errorBlock.textContent = '';
        render(data);
    
      })
      .catch((error) => {
        errorBlock.textContent = 'Произошла ошибка, данных нет';
      });
  });
  searchInput.addEventListener('input', () => {
    debounceSearch();
  });
};
