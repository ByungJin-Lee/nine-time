import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

import {executeAfter} from '~/common/utils/common';
import {Fallback} from '~/components/Fallback';
import {APP_SCREEN} from '~/screens/screen-key';
import {AppRootParamList} from '~/screens/screen-param';

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<AppRootParamList>>();

  useFocusEffect(() => {
    // 1 초 뒤에 HOME 화면으로 이동한다.
    executeAfter(() => navigation.navigate(APP_SCREEN.HOME), 500);
  });

  return <Fallback />;
}
