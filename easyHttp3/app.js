const http = new EasyHTTP();

// Get users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//User data
const user = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com',
};

// Post User
// http
//   .post('https://jsonplaceholder.typicode.com/users', user)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Make an HTTP PUT Request
// http
//   .put('https://jsonplaceholder.typicode.com/users/1', user)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delete User
http
  .delete('https://jsonplaceholder.typicode.com/users/1')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
