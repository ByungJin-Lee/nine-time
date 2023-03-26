import {LinkingOptions} from '@react-navigation/native';
import {APP_SCREEN} from '~/screens/screen-key';

const DEEP_LINK_SCHEME = 'nine-time://';

export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [DEEP_LINK_SCHEME],
  config: {
    screens: {
      [APP_SCREEN.HOME]: {
        path: 'home',
      },
      [APP_SCREEN.ALERT]: {
        path: 'alert',
      },
    },
  },
};
