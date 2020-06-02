const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //create new user
  test('user not in userController', () => {    
    let user = new User(1010,"John", "john@generation.org");
     userController.add(user);   
    expect(userController.users).toContain(user);
  });

  //remove user
  test('remove user to userController', () => {    
    let user = new User(1111,"Keratuwe", "Keratuwe@gmail.com");
    userController.remove(user);
    expect(userController.remove(user)).toEqual(undefined);
  });

  //Find user by email
  test('find user John by email ', () => {
    userController.findByEmail('john@generation.org');
    expect(userController.findByEmail('john@generation.org')).toEqual({"email": "john@generation.org", "id": 1010, "name": "John"});
  });

  test('find user Santiago by email ', () => {
    userController.findByEmail('santiago@generation.org');
    expect(userController.findByEmail('santiago@generation.org')).toEqual({"email": "santiago@generation.org","id": 1234,"name": "Santiago",});
  });

  //find user by ID
  test('find user John by id', () => {
    userController.findById(1010);
    expect(userController.findById(1010)).toEqual({"email": "john@generation.org", "id": 1010, "name": "John"});
  });

  test('find user Santiago by id ', () => {
    userController.findById(1234);
    expect(userController.findById(1234)).toEqual({"email": "santiago@generation.org","id": 1234,"name": "Santiago",});
  });
  


  




