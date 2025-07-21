class Gym {
  name: string;
  location: string;
  users: any[]; // List of User objects
  gymClasses: any[]; // List of GymClass objects

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
    this.users = [];
    this.gymClasses = [];
  }

  registerUser(user: any): void {
    this.users.push(user);
    console.log(`${user.username} registered to ${this.name}.`);
  }

  addGymClass(gymClass: any): void {
    this.gymClasses.push(gymClass);
    console.log(`Class '${gymClass.name}' added to ${this.name}.`);
  }

  listUsers(): string[] {
    return this.users.map((user) => user.username);
  }

  listClasses(): string[] {
    return this.gymClasses.map((cls) => cls.name);
  }

  findClass(name: string): any | null {
    for (const gymClass of this.gymClasses) {
      if (gymClass.name === name) {
        return gymClass;
      }
    }
    return null;
  }

  enrollUserInClass(user: any, className: string): void {
    const gymClass = this.findClass(className);
    if (gymClass) {
      gymClass.addAttendee(user);
    } else {
      console.log(`[!] Class '${className}' not found.`);
    }
  }
}
