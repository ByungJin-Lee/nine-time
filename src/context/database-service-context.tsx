import {createContext, useContext, PropsWithChildren, FC} from 'react';

import {database} from '@modules/db';

import {
  createForbiddenScheduleService,
  ForbiddenScheduleService,
} from '~/service/database/forbidden-schedule-service';
import {
  createScreenHistoryService,
  ScreenHistoryService,
} from '~/service/database/screen-history-service';
import {useMemo} from 'react';

interface DatabaseServiceState {
  screenHistory: ScreenHistoryService;
  forbiddenSchedule: ForbiddenScheduleService;
}

const databaseContext = createContext<DatabaseServiceState | null>(null);

export const useDBService = () => {
  const dbService = useContext(databaseContext);
  if (!dbService) {
    throw new Error('Database not found');
  }
  return dbService;
};

export const DBServiceProvider: FC<PropsWithChildren> = ({children}) => {
  const db = database();

  const databaseServiceState = useMemo<DatabaseServiceState>(
    () => ({
      screenHistory: createScreenHistoryService(db),
      forbiddenSchedule: createForbiddenScheduleService(db),
    }),
    [db],
  );

  return (
    <databaseContext.Provider
      value={databaseServiceState}
      children={children}
    />
  );
};
