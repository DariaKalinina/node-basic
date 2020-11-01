const user = {
  name: 'Daria',
  age: 29
}

module.exports = {
  user: user,
  sayHello() {
    console.log(`Hello, ${user.name}`)
  }
};
