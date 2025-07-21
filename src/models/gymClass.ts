class GymClass {
  private name: string;
  private instructors: string[];
  private capacity: number;
  private numAttendees: number;
  private location: string;
  private schedule: string;
  private attendees: string[];

  constructor(name: string, instructors: string[], capacity: number, schedule: string) {
    this.name = name;
    this.instructors = instructors;
    this.capacity = capacity;
    this.schedule = schedule;
    this.numAttendees = 0;
    this.location = '';
    this.attendees = [];
  }

  // Getters
  getName(): string {
    // TODO: implement
    return '';
  }

  getInstructors(): string[] {
    // TODO: implement
    return [];
  }

  getCapacity(): number {
    // TODO: implement
    return 0;
  }

  getLocation(): string {
    // TODO: implement
    return '';
  }

  getSchedule(): string {
    // TODO: implement
    return '';
  }

  getAttendees(): string[] {
    // TODO: implement
    return [];
  }

  getNumAttendees(): number {
    // TODO: implement
    return 0;
  }

  // Setters
  setName(name: string): void {
    // TODO: implement
  }

  setInstructors(instructors: string[]): void {
    // TODO: implement
  }

  setCapacity(capacity: number): void {
    // TODO: implement
  }

  setLocation(location: string): void {
    // TODO: implement
  }

  setSchedule(schedule: string): void {
    // TODO: implement
  }

  // toString equivalent
  toString(): string {
    // TODO: implement
    return '';
  }

  // Utility methods
  addAttendee(attendee: string): void {
    // TODO: implement
  }

  removeAttendee(attendee: string): void {
    // TODO: implement
  }

  getNumSlotsLeft(): number {
    // TODO: implement
    return 0;
  }

  isFull(): boolean {
    // TODO: implement
    return false;
  }

  isEmpty(): boolean {
    // TODO: implement
    return false;
  }
}

export default GymClass;
