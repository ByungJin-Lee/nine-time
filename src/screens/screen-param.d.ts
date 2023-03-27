import {APP_SCREEN} from './screen-key';

export type AppRootParamList = {
  [APP_SCREEN.HOME]: undefined;
  /** 알람 화면 */
  [APP_SCREEN.ALERT]: undefined;
  /** Splash 화면 */
  [APP_SCREEN.SPLASH]: undefined;
};
