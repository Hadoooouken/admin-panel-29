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

userService.getUsers().then((data) => {
  render(data);
});

addUsers();
removeUsers();
changePermissons();
editUsers();
filterUsers();
sortUsers();
searchUsers();
