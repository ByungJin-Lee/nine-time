import WheelPicker, {
  WheelPickerChangeEvent,
} from '~/common/components/WheelPicker';

import {
  HOUR_COLLECTION,
  MINUTE_COLLECTION,
  DAY_COLLECTION,
  hourToStr,
  minuteToStr,
} from '../utils/time-wheel-collection';
import {TimeHM} from '../time-picker.d';
import {Container} from './time-picker-wheel-content.style';

interface TimePickerWheelContentProps {
  time: TimeHM;
  setTime(updated: Partial<TimeHM>): void;
}

const NumberWheelPicker = WheelPicker<number>;
const StringWheelPicker = WheelPicker<string>;

export default function TimePickerWheelContent({
  time,
  setTime,
}: TimePickerWheelContentProps) {
  const handleDayKind = ({value}: WheelPickerChangeEvent<string>) =>
    setTime({isAM: value === '오전'});

  const handleHour = ({value}: WheelPickerChangeEvent<number>) =>
    setTime({hour: value});

  const handleMinute = ({value}: WheelPickerChangeEvent<number>) =>
    setTime({minute: value});

  return (
    <Container>
      <StringWheelPicker
        selectIndex={time.isAM ? 0 : 1}
        options={DAY_COLLECTION}
        onChange={handleDayKind}
      />
      <NumberWheelPicker
        selectIndex={time.hour - 1}
        options={HOUR_COLLECTION}
        toStr={hourToStr}
        onChange={handleHour}
      />
      <NumberWheelPicker
        selectIndex={time.minute / 10}
        options={MINUTE_COLLECTION}
        toStr={minuteToStr}
        onChange={handleMinute}
      />
    </Container>
  );
}
