import {useEffect} from 'react';

import SoundPlayer from '@modules/sound-player.android';
import {wakeScreen} from '@modules/wake-screen.android';
import {useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';

export default function AlertScreen() {
  useEffect(() => {
    // SoundPlayer.play('iphone_original', 'mp3');
  }, []);

  useFocusEffect(() => {
    wakeScreen();
    console.log('focused');
  });

  return <></>;
}
