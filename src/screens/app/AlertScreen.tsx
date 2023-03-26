import {useEffect} from 'react';

import SoundPlayer from '~/libs/sound-player.native';
import {wakeScreen} from '~/libs/wake-screen.native';

export default function AlertScreen() {
  useEffect(() => {
    wakeScreen();
    SoundPlayer.play('iphone_original', 'mp3');
  }, []);

  return <></>;
}
