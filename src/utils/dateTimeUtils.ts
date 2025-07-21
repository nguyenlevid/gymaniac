import { DateTime } from 'luxon';

// Default timezone for your gym
const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';

/**
 * Returns the current local datetime in the default timezone.
 */
export function now(): DateTime {
  return DateTime.now().setZone(DEFAULT_TIMEZONE);
}

/**
 * Converts any datetime to UTC.
 */
export function toUTC(dt: DateTime): DateTime {
  return dt.toUTC();
}

/**
 * Converts UTC datetime to a given timezone (default: gym local time).
 */
export function fromUTC(dt: DateTime, toTz: string = DEFAULT_TIMEZONE): DateTime {
  return dt.setZone(toTz);
}

/**
 * Formats a datetime nicely for display.
 * Example: Tuesday, July 9, 2025 at 3:00 PM
 */
export function formatForDisplay(dt: DateTime): string {
  return dt.setZone(DEFAULT_TIMEZONE).toFormat("cccc, LLLL d, yyyy 'at' h:mm a");
}

/**
 * Parses a string to DateTime.
 * Example format: "2025-07-10 14:00"
 */
export function parseFromString(
  dateStr: string,
  fmt: string = 'yyyy-MM-dd HH:mm',
  tz: string = DEFAULT_TIMEZONE
): DateTime {
  return DateTime.fromFormat(dateStr, fmt, { zone: tz });
}

/**
 * Returns how many minutes from now until a class starts.
 */
export function classStartsInMinutes(startTime: DateTime): number {
  return Math.floor(startTime.diff(now(), 'minutes').minutes);
}
