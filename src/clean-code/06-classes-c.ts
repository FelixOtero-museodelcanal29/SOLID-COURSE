(() => {
  // Aplicando el Principio de Responsabilidad Unica 
  // Priorizar la composicion frente a la Herencia

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
    email     : string;
    role      : string;
  }

  class User  {

    public email : string;
    public role  : string;
    public lastAccess: Date;

    constructor({email,role}:UserProps) {
      this.lastAccess = new Date();
      this.email= email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps{
    lastOpenFolder   : string;
    workingDirectory : string;
  }

  class Settings  {
    
    public workingDirectory:string;
    public lastOpenFolder  :string;

    constructor({workingDirectory,lastOpenFolder}:SettingsProps) {
    
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder=lastOpenFolder;
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

  class UserSettings {
    public person:Person;
    public user:User;
    public settings:Settings;
  
    constructor({name,gender,birthDate,email,role,lastOpenFolder,workingDirectory}:UserSettingsProps) {
      this.person= new Person({name,gender,birthDate});
      this.user = new User({email,role});
      this.settings= new Settings({lastOpenFolder,workingDirectory});

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
