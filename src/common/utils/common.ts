import {NowInformation} from './common.d';

export const DAY_OF_WEEK = Object.freeze([
  '일',
  '월',
  '화',
  '수',
  '목',
  '금',
  '토',
]);

export function executeAfter(
  callback: any,
  millisecond: number,
): ReturnType<typeof setTimeout> | undefined {
  if (typeof callback === 'function') {
    return setTimeout(callback, millisecond);
  }
}

export function getNowInformation(): NowInformation {
  const now = new Date();

  const isAM = checkIsAM(now.getHours());
  const hour = calcHour(now.getHours(), isAM);

  return {
    isAM,
    hour,
    minute: now.getMinutes(),
    dayOfWeek: now.getDay(),
  };
}

function checkIsAM(hour: number): boolean {
  return hour < 12;
}

function calcHour(hour: number, isAM: boolean): number {
  return isAM ? hour : hour - 12;
}
