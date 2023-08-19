type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "Rohit", email: "r@g.com", isActive: true };
}

export {}