import {
  Title,
  WheelContentWrapper,
  Container,
  ButtonGroupWrapper,
} from './time-picker.style';
import {TimeHM} from '../time-picker.d';
import useTimePickerReducer from '../hooks/useTimePickerReducer';

import TimePickerWheelContent from './time-picker-wheel-content';
import TimePickerButtonGroup from './time-picker-button-group';
import Modal from '~/common/components/Modal';

export interface TimePickerProps {
  title?: string;
  initialTime?: TimeHM;
  visible: boolean;
  onConfirm(time: TimeHM): void;
  requestClose(): void;
}

export default function TimePicker({
  title,
  initialTime,
  visible,
  requestClose,
  onConfirm,
}: TimePickerProps) {
  const {state: time, dispatch} = useTimePickerReducer(initialTime);

  const handleConfirm = () => onConfirm(time);
  const handleCancel = () => requestClose();

  return (
    <Modal transparent={true} visible={visible} onRequestClose={requestClose}>
      <Container>
        {/* title이 있는 경우에만 출력한다. */}
        {title && <Title children={title} />}
        {/* Time Picker Wheel Content Layout Wrapper */}
        <WheelContentWrapper
          children={<TimePickerWheelContent time={time} setTime={dispatch} />}
        />
        {/* 제어 버튼들 */}
        <ButtonGroupWrapper>
          <TimePickerButtonGroup
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </ButtonGroupWrapper>
      </Container>
    </Modal>
  );
}
