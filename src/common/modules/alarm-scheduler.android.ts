import {NativeModules} from 'react-native';

const AlarmScheduler = <AlarmScheduler>NativeModules.Alarm;

interface AlarmScheduler {
  removeReservedAlarm(): void;
  reserveAlarm(afterSeconds: number): void;
}

export default AlarmScheduler;
