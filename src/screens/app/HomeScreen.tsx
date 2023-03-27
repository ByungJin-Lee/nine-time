import {Button, View} from 'react-native';

import {styled} from '@modules/styled';
import AlarmScheduler from '@modules/alarm-scheduler.android';

import {useDBService} from '~/context/database-service-context';

export default function HomeScreen() {
  const {screenHistory} = useDBService();

  const handleClick = () => {
    AlarmScheduler.reserveAlarm(10);
  };

  const handleTransaction = () => {};

  return (
    <Container>
      <Button onPress={handleClick} title="Hello" />
      <Button onPress={handleTransaction} title="TTT" />
    </Container>
  );
}

const Container = styled(View)``;
