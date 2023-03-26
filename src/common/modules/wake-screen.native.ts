import {Platform} from 'react-native';

import AndroidWakeScreen from 'react-native-android-wake-screen';

export function wakeScreen() {
  if (Platform.OS === 'android') {
    AndroidWakeScreen.wakeScreen();
  }
}
