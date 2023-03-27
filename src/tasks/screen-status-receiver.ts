import {database} from '@modules/db';

import {createScreenHistoryService} from '~/service/database/screen-history-service';
interface ScreenStatusMetadata {
  screenWaked: boolean;
}

export default async function ({screenWaked}: ScreenStatusMetadata) {
  const service = createScreenHistoryService(database());

  service.insert({
    status: screenWaked,
    at: new Date(),
  });
}
