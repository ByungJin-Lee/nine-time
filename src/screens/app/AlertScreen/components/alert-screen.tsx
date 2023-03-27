import {useMemo} from 'react';
import {BackHandler} from 'react-native';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

import SoundPlayer from '@modules/sound-player.android';
import {wakeScreen} from '@modules/wake-screen.android';

import useAlert from '../hooks/useAlert';
import {
  DAY_OF_WEEK,
  executeAfter,
  getNowInformation,
} from '~/common/utils/common';
import {
  Container,
  HMText,
  Title,
  WrapperTimer,
  DayText,
  DayOfWeekText,
  EndButton,
  EndButtonText,
  Content,
} from './alert-screen.style';
import {NowInformation} from '~/common/utils/common.d';
import {AppRootParamList} from '~/screens/screen-param';
import {APP_SCREEN} from '~/screens/screen-key';

export default function AlertScreen() {
  const {alert, stop} = useAlert();
  const navigation = useNavigation<NavigationProp<AppRootParamList>>();
  const now = useMemo<NowInformation>(() => getNowInformation(), []);

  const handleSuccess = () => wakeScreen();

  const handleDestroy = () => {
    stop();
    navigation.navigate(APP_SCREEN.HOME);
    // 종료
    executeAfter(BackHandler.exitApp, 100);
  };

  useFocusEffect(() => {
    alert(handleSuccess, handleDestroy);
  });

  if (!now) return <></>;

  return (
    <Container>
      <Content>
        <Title>일어나</Title>
        <WrapperTimer>
          <DayOfWeekText>{DAY_OF_WEEK[now.dayOfWeek]}요일</DayOfWeekText>
          <HMText>{`${now.hour}:${now.minute}`}</HMText>
          <DayText>{now.isAM ? 'AM' : 'PM'}</DayText>
        </WrapperTimer>
        <EndButton activeOpacity={0.8} onPress={handleDestroy}>
          <EndButtonText>알람 종료</EndButtonText>
        </EndButton>
      </Content>
    </Container>
  );
}
