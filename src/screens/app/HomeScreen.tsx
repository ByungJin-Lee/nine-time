import {Button, View} from 'react-native';

import {styled} from '@modules/styled';
import AlarmScheduler from '@modules/alarm-scheduler.android';
import {useState} from 'react';
import TimePicker from '~/components/TimePicker';

import {useDBService} from '~/context/database-service-context';

export default function HomeScreen() {
  const {screenHistory} = useDBService();

  const [active, setActive] = useState(false);

  const handleClick = () => {
    // AlarmScheduler.reserveAlarm(10);
    setActive(p => !p);
    screenHistory.readAll().then(console.log);
  };

  return (
    <Container>
      <Button onPress={handleClick} title="Hello" />
      {active && (
        <TimePicker
          onConfirm={time => console.log(time)}
          requestClose={() => setActive(false)}
          title="시간 선택"
        />
      )}
    </Container>
  );
}

const Container = styled(View)``;
