export function executeAfter(
  callback: any,
  millisecond: number,
): ReturnType<typeof setTimeout> | undefined {
  if (typeof callback === 'function') {
    return setTimeout(callback, millisecond);
  }
}
