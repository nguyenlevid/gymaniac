import { describe, it, expect, beforeEach } from 'vitest';
import GymClass from '../../models/gymClass';
import sampleClasses from './data/sample_gym_class.json';

function createGymClassFromJson(json: any): GymClass {
  return new GymClass(json.name, json.instructors, json.capacity, json.schedule);
}

let yogaClass: GymClass;
let hiitClass: GymClass;

beforeEach(() => {
  yogaClass = createGymClassFromJson(sampleClasses[0]); // capacity: 3
  hiitClass = createGymClassFromJson(sampleClasses[1]); // capacity: 2
});

describe('GymClass Core Getters', () => {
  it('should return correct initial values', () => {
    expect(yogaClass.getName()).toBe('Morning Yoga');
    expect(yogaClass.getInstructors()).toContain('Linh');
    expect(yogaClass.getCapacity()).toBe(3);
    expect(yogaClass.getSchedule()).toBe('Mon-Wed-Fri 7:00AM');
    expect(yogaClass.getLocation()).toBe('');
    expect(yogaClass.getAttendees()).toEqual([]);
    expect(yogaClass.getNumAttendees()).toBe(0);
  });
});

describe('GymClass Setters', () => {
  it('should update core properties', () => {
    yogaClass.setName('Evening Yoga');
    yogaClass.setCapacity(10);
    yogaClass.setInstructors(['Duy', 'Minh']);
    yogaClass.setSchedule('Tue-Thu 6:00PM');
    yogaClass.setLocation('Room A');

    expect(yogaClass.getName()).toBe('Evening Yoga');
    expect(yogaClass.getCapacity()).toBe(10);
    expect(yogaClass.getInstructors()).toEqual(['Duy', 'Minh']);
    expect(yogaClass.getSchedule()).toBe('Tue-Thu 6:00PM');
    expect(yogaClass.getLocation()).toBe('Room A');
  });
});

describe('GymClass Utility Methods', () => {
  it('should not allow adding more than capacity', () => {
    hiitClass.addAttendee('User1');
    hiitClass.addAttendee('User2');
    hiitClass.addAttendee('User3'); // exceeds

    expect(hiitClass.getNumAttendees()).toBe(2);
    expect(hiitClass.getAttendees()).not.toContain('User3');
    expect(hiitClass.isFull()).toBe(true);
  });

  it('should not fail on removing non-existent attendee', () => {
    yogaClass.addAttendee('Alice');
    yogaClass.removeAttendee('Charlie'); // not in list

    expect(yogaClass.getNumAttendees()).toBe(1);
    expect(yogaClass.getAttendees()).toContain('Alice');
  });

  it('should update slot count correctly', () => {
    expect(yogaClass.getNumSlotsLeft()).toBe(3);
    yogaClass.addAttendee('Bob');
    expect(yogaClass.getNumSlotsLeft()).toBe(2);
    yogaClass.removeAttendee('Bob');
    expect(yogaClass.getNumSlotsLeft()).toBe(3);
  });

  it('should correctly detect empty and full states', () => {
    expect(yogaClass.isEmpty()).toBe(true);
    yogaClass.addAttendee('A');
    expect(yogaClass.isEmpty()).toBe(false);

    yogaClass.addAttendee('B');
    yogaClass.addAttendee('C');
    expect(yogaClass.isFull()).toBe(true);
  });

  it('should return a readable string', () => {
    const output = yogaClass.toString();
    expect(typeof output).toBe('string');
    expect(output.length).toBeGreaterThan(0);
    expect(output).toContain('Morning Yoga');
    expect(output.toLowerCase()).toContain('capacity');
  });
});
