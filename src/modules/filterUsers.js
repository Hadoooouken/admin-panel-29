import { render } from './render';

export const filterUsers = () => {
  const btnChildren = document.querySelector('#btn-isChildren');
  const btnPermissions = document.querySelector('#btn-isPermissions');
  const btnAll = document.querySelector('#btn-isAll ');
  console.log(btnChildren, btnPermissions, btnAll);

  btnChildren.addEventListener('click', (evt) => {
    userService.filterUsers('children').then((data) => {
      render(data);
    });
  });

  btnPermissions.addEventListener('click', (evt) => {
    userService.filterUsers('permissions').then((data) => {
      render(data);
    });
  });
  btnAll.addEventListener('click', (evt) => {
    userService.getUsers().then((data) => {
      render(data);
    });
  });
};
