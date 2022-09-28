/**
 *
 * 18:00 -> ["18", "00"] -> [18, 00]
 *
 * @param hourString 18:00
 * @returns 1080
 */



export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)
  const minuitesAmount = (hours * 60) + minutes;

  return minuitesAmount;
}