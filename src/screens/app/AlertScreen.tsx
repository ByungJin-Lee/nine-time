import {useEffect} from 'react';

import SoundPlayer from '@modules/sound-player.android';
import {wakeScreen} from '@modules/wake-screen.android';

export default function AlertScreen() {
  useEffect(() => {
    wakeScreen();
    SoundPlayer.play('iphone_original', 'mp3');
  }, []);

  return <></>;
}
