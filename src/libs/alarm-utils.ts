import {NativeModules} from 'react-native';

const AlarmUtils = <AlarmUtils>NativeModules.Alarm;

interface AlarmUtils {
  removeReservedAlarm(): void;
  reserveAlarm(afterSeconds: number): void;
}

export default AlarmUtils;
