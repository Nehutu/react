const user = {
  id: "1",
  name: "John",
  surname: "Sunders",
  email: "john@ya.ru",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=80",
  about: "Something about me",
};

const users = {
  0: { name: "Eve", surname: "Sunders" },
  1: { name: "Joe", surname: "Joers" },
  2: { name: "Kate", surname: "Sunders" },
  3: { name: "Lou", surname: "Fishes" },
  4: { name: "Luka", surname: "Brazzi" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
