import React, {useCallback, useMemo} from 'react';

import {WheelPicker} from '@modules/wheel-picker';

import {WheelPickerChangeEvent} from './wheel-picker.interface';

interface BaseWheelPickerProps<T = unknown> {
  selectIndex: number;
  options: T[];
  toStr?(value: T): string;
  onChange(event: WheelPickerChangeEvent<T>): void;
}

export default function BaseWheelPicker<T>({
  selectIndex,
  options,
  onChange,
  toStr = defaultToStr,
}: BaseWheelPickerProps<T>) {
  if (!toStr) {
    throw Error('ToString is Null');
  }

  const stringOptions = useMemo(() => options.map(toStr), [options, toStr]);

  const handleChange = useCallback(
    (i: number) =>
      onChange({
        index: i,
        value: options[i],
      }),
    [options, onChange],
  );

  return (
    <WheelPicker
      visibleRest={1}
      selectedIndex={selectIndex}
      options={stringOptions}
      onChange={handleChange}
    />
  );
}

const defaultToStr: BaseWheelPickerProps['toStr'] = val => val as string;
