import { DateTime } from 'luxon';
import { now } from '../utils/dateTimeUtils';

class User {
  private username: string;
  private email: string;
  private fullName: string;
  private birthDate: DateTime;
  private gender: string;
  private phone: string;
  private address: string;
  private membershipType: 'basic' | 'premium';
  private memberSince: DateTime;
  private enrolledClasses: any[]; // List of GymClass objects

  constructor(
    fullName: string,
    birthDate: DateTime,
    gender: string,
    phone: string,
    address: string,
    username: string,
    password: string,
    email: string,
    membershipType: 'basic' | 'premium' = 'basic'
  ) {
    this.username = username;
    this.email = email;
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phone = phone;
    this.address = address;
    this.membershipType = membershipType;
    this.memberSince = now();
    this.enrolledClasses = [];
  }

  // Getters
  getFullName(): string {
    // TODO: implement
    return '';
  }

  getBirthDate(): DateTime | string {
    // TODO: implement
    return '';
  }

  getGender(): string {
    // TODO: implement
    return '';
  }

  getPhone(): string {
    // TODO: implement
    return '';
  }

  getAddress(): string {
    // TODO: implement
    return '';
  }

  getMembershipType(): string {
    // TODO: implement
    return '';
  }

  getMemberSince(): string {
    // TODO: implement
    return '';
  }

  // Setters
  setFullName(fullName: string): void {
    // TODO: implement
  }

  setBirthDate(birthDate: string): void {
    // TODO: implement
  }

  setGender(gender: string): void {
    // TODO: implement
  }

  setPhone(phone: string): void {
    // TODO: implement
  }

  setAddress(address: string): void {
    // TODO: implement
  }

  setPassword(password: string): void {
    /**
     * Sets the user's password.
     * Do not just save the password as it is insecure.
     * Think of a way to encrypt the password before saving it.
     */
    // TODO: implement
  }

  setMembershipType(membershipType: string): void {
    // TODO: implement
  }

  // toString equivalent
  toString(): string {
    // TODO: implement
    return '';
  }
}

export default User;
