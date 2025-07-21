import { describe, it, expect, beforeAll } from 'vitest';
import User from '../../models/user';
import sampleData from './data/sample_users.json';
import { DateTime } from 'luxon';

// Utility: create users from JSON
function createUsersFromData(data: any[]): User[] {
  return data.map(
    (u) =>
      new User(
        u.full_name,
        DateTime.fromISO(u.birth_date),
        u.gender,
        u.phone,
        u.address,
        u.username,
        u.password,
        u.email,
        u.membership_type
      )
  );
}

let sampleUsers: User[];

beforeAll(() => {
  sampleUsers = createUsersFromData(sampleData);
});

describe('User Getters', () => {
  it('should return correct values for Alice', () => {
    const alice = sampleUsers[0];
    expect(alice.getFullName()).toBe('Alice Johnson');
    expect(alice.getBirthDate().toISODate()).toBe('1990-05-15');
    expect(alice.getGender()).toBe('female');
    expect(alice.getPhone()).toBe('1234567890');
    expect(alice.getAddress()).toBe('123 Gym Street');
    expect(alice.getMembershipType()).toBe('basic');
  });

  it('should return valid Luxon DateTime for birthDate', () => {
    const alice = sampleUsers[0];
    expect(alice.getBirthDate()).toBeInstanceOf(DateTime);
    console.log(alice.getBirthDate());
    expect(alice.getBirthDate().isValid).toBe(true);
  });

  it('should return formatted memberSince date', () => {
    const alice = sampleUsers[0];
    const memberSince = alice.getMemberSince();
    expect(typeof memberSince).toBe('string');
    expect(memberSince).toMatch(/\d{4}-\d{2}-\d{2}/); // ISO-ish format
  });
});

describe('User Setters', () => {
  it('should update values for Bob', () => {
    const bob = sampleUsers[1];
    bob.setFullName('Robert Smith');
    bob.setGender('non-binary');
    bob.setPhone('1112223333');
    bob.setAddress('789 Iron Lane');
    bob.setMembershipType('vip' as any); // if not strictly validated

    expect(bob.getFullName()).toBe('Robert Smith');
    expect(bob.getGender()).toBe('non-binary');
    expect(bob.getPhone()).toBe('1112223333');
    expect(bob.getAddress()).toBe('789 Iron Lane');
    expect(bob.getMembershipType()).toBe('vip');
  });

  it('should reject invalid membership type (if enforced)', () => {
    const bob = sampleUsers[1];
    expect(() => {
      bob.setMembershipType('gold' as any);
    }).toThrow(); // Only if validation is enforced inside method
  });

  it('should store new birth date correctly', () => {
    const bob = sampleUsers[1];
    const newDate = '2000-01-01';
    bob.setBirthDate(newDate);
    expect(bob.getBirthDate().toISODate()).toBe('2000-01-01');
  });

  it('should set and obscure password securely', () => {
    const bob = sampleUsers[1];
    const rawPassword = 'newpass123';
    bob.setPassword(rawPassword);

    // Access the private property (temporary for testing; ideally expose a safe method or symbol)
    const internal = bob as any;
    const storedPassword = internal.password;

    // Check that the password is not stored in plain text
    expect(storedPassword).not.toBe(rawPassword);
    expect(typeof storedPassword).toBe('string');
    expect(storedPassword.length).toBeGreaterThan(rawPassword.length); // hashed ones are longer
  });
});

describe('User toString', () => {
  it('should return a readable string with user info', () => {
    const alice = sampleUsers[0];
    const result = alice.toString();

    expect(result).toContain('Alice Johnson');
    expect(result).toContain('alicej');
    expect(result.toLowerCase()).toContain('basic');
    expect(result.toLowerCase()).toContain('member since');
  });

  it('should not break if fields are missing', () => {
    const blank = new User(
      '',
      DateTime.fromISO('2000-01-01'),
      '',
      '',
      '',
      'blankuser',
      'pass123',
      'blank@email.com',
      'basic'
    );

    const output = blank.toString();
    expect(typeof output).toBe('string');
    expect(output).toContain('blankuser');
  });
});
