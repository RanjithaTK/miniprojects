const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  });
  
  const user1 = createUser({
    firstName: "Ranjitha",
    lastName: "TK",
    email: "ranji@gmail.com"
  });
  
  const user2 = createUser({
    firstName: "Jac",
    lastName: "jal",
    email: "jac@gmail.com"
  });
  
  console.log(user1);
  console.log(user2);