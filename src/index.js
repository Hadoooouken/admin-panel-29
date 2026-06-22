import { addUsers } from './modules/addUsers';
import { changePermissons } from './modules/changePermissons';
import { editUsers } from './modules/editUsers';
import { filterUsers } from './modules/filterUsers';
import { removeUsers } from './modules/removeUsers';
import { render } from './modules/render';
import { searchUsers } from './modules/searchUsers';
import { sortUsers } from './modules/sortUsers';
import { UserService } from './modules/userService';

window.userService = new UserService();
window.baseUrl = 'http://localhost:4545/users';

window.errorBlock = document.querySelector('.error__block');

userService
  .getData(baseUrl)
  .then((data) => {
    render(data);
  })
  .catch((error) => {
    errorBlock.textContent = 'Произошла ошибка, данных нет';
  });

addUsers();
removeUsers();
changePermissons();
editUsers();
filterUsers();
sortUsers();
searchUsers();
