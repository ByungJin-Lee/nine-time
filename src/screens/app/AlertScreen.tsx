import {useEffect} from 'react';

import SoundPlayer from '@modules/sound-player.native';
import {wakeScreen} from '@modules/wake-screen.native';

export default function AlertScreen() {
  useEffect(() => {
    wakeScreen();
    SoundPlayer.play('iphone_original', 'mp3');
  }, []);

  return <></>;
}
