// 1~12 까지 숫자 모음
export const HOUR_COLLECTION = new Array<number>(12)
  .fill(0)
  .map((_, i) => i + 1);

// 10 분 단위의 숫자 모음 (00~50)
export const MINUTE_COLLECTION = new Array<number>(6)
  .fill(0)
  .map((_, i) => i * 10);

export const DAY_COLLECTION = ['오전', '오후'];

export const minuteToStr = (minute: number): string => `${minute}분`;
export const hourToStr = (hour: number): string => `${hour}시`;
