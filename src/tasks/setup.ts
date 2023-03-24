import {AppRegistry} from 'react-native';

import {NINE_TIME_TASK_NAME} from '~/tasks/task-name';

import screenStatusReceiver from '~/tasks/screen-status-receiver';

AppRegistry.registerHeadlessTask(
  NINE_TIME_TASK_NAME,
  () => screenStatusReceiver,
);
