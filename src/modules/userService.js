export class UserService {


  getData(url) {
    return fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json();
    });
  }

postData(url, options) {
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }

      return res.json();
    });
}

  // getUsers() {
  //   return fetch('http://localhost:4545/users').then((res) => {
  //     if (!res.ok) {
  //       throw new Error('ошибка');
  //     }
  //     return res.json();
  //   });
  // }

  // addUsers(user) {
  //   return fetch('http://localhost:4545/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   }).then((res) => res.json());
  // }

  // removeUsers(id) {
  //   return fetch(`http://localhost:4545/users/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((res) => res.json());
  // }

  // changeUser(id, data) {
  //   return fetch(`http://localhost:4545/users/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => res.json());
  // }

  // getUser(id) {
  //   return fetch(`http://localhost:4545/users/${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((res) => res.json());
  // }

  // editUser(id, user) {
  //   return fetch(`http://localhost:4545/users/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   }).then((res) => res.json());
  // }

  // filterUsers(filterOption) {
  //   return fetch(`http://localhost:4545/users/?${filterOption}=true`).then((res) => {
  //     if (!res.ok) {
  //       throw new Error('ошибка');
  //     }
  //     return res.json();
  //   });
  // }

  // getSortUsers(sortOption) {
  //   return fetch(`http://localhost:4545/users?_sort=${sortOption.value}${sortOption.name}`).then(
  //     (res) => {
  //       if (!res.ok) {
  //         throw new Error('ошибка');
  //       }
  //       return res.json();
  //     },
  //   );
  // }

  // getSearchUsers(searchOption) {
  //   return fetch(`http://localhost:4545/users?name:contains=${searchOption}`).then((res) => {
  //     if (!res.ok) {
  //       throw new Error('ошибка');
  //     }
  //     return res.json();
  //   });
  // }
}
