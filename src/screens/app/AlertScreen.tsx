import {useEffect} from 'react';

import SoundPlayer from '~/libs/sound-player';

export default function AlertScreen() {
  useEffect(() => {
    SoundPlayer.play('iphone_original', 'mp3');
  }, []);

  return <></>;
}
