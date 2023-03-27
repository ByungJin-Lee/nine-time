import {
  CancelButton,
  ConfirmButton,
  Container,
  ButtonText,
} from './time-picker-button-group.style';

interface TimePickerButtonGroupProps {
  onConfirm(): void;
  onCancel(): void;
}

const opacityWhenActive = 0.8;

export default function TimePickerButtonGroup({
  onConfirm,
  onCancel,
}: TimePickerButtonGroupProps) {
  return (
    <Container>
      <CancelButton activeOpacity={opacityWhenActive} onPress={onCancel}>
        <ButtonText>취소</ButtonText>
      </CancelButton>
      <ConfirmButton activeOpacity={opacityWhenActive} onPress={onConfirm}>
        <ButtonText>확인</ButtonText>
      </ConfirmButton>
    </Container>
  );
}
