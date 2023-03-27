import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

import {Image} from '~/common/components/Image';
import {executeAfter} from '~/common/utils/common';
import {APP_SCREEN} from '~/screens/screen-key';
import {AppRootParamList} from '~/screens/screen-param';
import {
  BigText,
  Container,
  SmallText,
  TextWrapper,
} from './splash-screen.style';

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<AppRootParamList>>();

  useFocusEffect(() => {
    // 0.5 초 뒤에 HOME 화면으로 이동한다.
    executeAfter(() => navigation.navigate(APP_SCREEN.HOME), 500);
  });

  return (
    <Container>
      <Image type="Moon" />
      <TextWrapper>
        <BigText>NINE</BigText>
        <SmallText>Time</SmallText>
      </TextWrapper>
    </Container>
  );
}
