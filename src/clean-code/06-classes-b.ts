(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.birthDate = birthDate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps{
    birthDate : Date;
    email     : string;
    gender    : Gender;
    name      : string;
    role      : string;
  }

  class User extends Person {

    public email : string;
    public role  : string;
    public lastAccess: Date;

    constructor({email,role,name,gender,birthDate}:UserProps) {
      super({name,gender,birthDate});
      this.lastAccess = new Date();
      this.email= email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps{
    birthDate        : Date;
    email            : string;
    gender           : Gender;
    lastOpenFolder   : string;
    name             : string;
    role             : string;
    workingDirectory : string;
  }

  class UserSettings extends User {
    
    public workingDirectory:string;
    public lastOpenFolder  :string;

    constructor({workingDirectory,lastOpenFolder,email,role,name,gender,birthDate}:UserSettingsProps
    ) {
      super({email, role, name, gender, birthDate});
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder=lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date("1995-05-29"),
    email:"felix@gmail.com",
    gender: "M",
    name: "felix",
    role:"admin",
    workingDirectory: "/user/home",
   lastOpenFolder: "/home",
});

  console.log({ userSettings });
})();
