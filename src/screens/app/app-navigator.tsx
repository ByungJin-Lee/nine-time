import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {APP_SCREEN} from '~/screens/screen-key';
import HomeScreen from './home-screen';
import {AlertScreen} from './AlertScreen';
import {SplashScreen} from './SplashScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={APP_SCREEN.SPLASH}
      screenOptions={{
        headerShown: false, // 상단 Header 안 보이게 하기
      }}>
      <Stack.Screen name={APP_SCREEN.HOME} component={HomeScreen} />
      <Stack.Screen name={APP_SCREEN.ALERT} component={AlertScreen} />
      <Stack.Screen name={APP_SCREEN.SPLASH} component={SplashScreen} />
    </Stack.Navigator>
  );
}
