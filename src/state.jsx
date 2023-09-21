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
  0: {
    id: 5,
    name: "Eve",
    surname: "Sunders",
    email: "eve@ya.ru",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
  },
  1: {
    id: 3,
    name: "Joe",
    surname: "Joers",
    email: "joe@google.cn",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
  },
  2: {
    id: 13,
    name: "Kate",
    surname: "Sunders",
    email: "kate@ya.ru",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80",
  },
  3: {
    id: 6,
    name: "Lou",
    surname: "Fishes",
    email: "storm@hop.cz",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
  },
  4: {
    id: 7,
    name: "Luka",
    surname: "Brazzi",
    email: "sleepy@PureComponent.su",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
  },
};

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) {
      return users[i];
    }
  }
  return user;
}

export function getUsers() {
  return users;
}
