(() => {
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  // const newPerson = new Person('Felix','M',new Date('1995-05-30'));
  // console.log({newPerson});

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

   const userSettings = new UserSettings(
    '/user/home',
    '/home',
    'felix@gmail.com',
    'admin',
    'felix',
    'M',
     new Date('1995-05-29'),
   );

   console.log({userSettings});

})();
