import {Button, View} from 'react-native';

import {styled} from '@modules/styled';

import AlarmScheduler from '~/libs/alarm-scheduler.native';

export default function HomeScreen() {
  const handleClick = () => {
    AlarmScheduler.reserveAlarm(10);
  };

  return (
    <Container>
      <Button onPress={handleClick} title="Hello" />
    </Container>
  );
}

const Container = styled(View)``;
