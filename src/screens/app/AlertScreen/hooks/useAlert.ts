import {useRef, useCallback, useMemo} from 'react';

import SoundPlayer from '~/common/modules/sound-player.android';
import {useDBService} from '~/context/database-service-context';

type PureCallback = () => void;

interface AlertHook {
  alert(callbackSuccess: PureCallback, callbackFailure: PureCallback): void;
  stop(): void;
}

export default function useAlert() {
  const {forbiddenSchedule} = useDBService();

  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const ring = useCallback(() => {
    if (!loopRef.current) {
      SoundPlayer.play('iphone_original', 'mp3');
      loopRef.current = setInterval(() => {
        SoundPlayer.play('iphone_original', 'mp3');
      }, 26000);
    }
  }, []);

  const handle = useMemo<AlertHook>(
    () => ({
      alert(callbackSuccess, callbackFailure) {
        callbackSuccess();
        ring();
      },
      stop() {
        SoundPlayer.stop();
        if (loopRef.current) {
          clearInterval(loopRef.current);
          loopRef.current = null;
        }
      },
    }),
    [ring],
  );

  return handle;
}
