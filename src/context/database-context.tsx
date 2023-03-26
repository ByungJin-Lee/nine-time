import {createContext, useContext, PropsWithChildren, FC} from 'react';

import {Database, DatabaseManager} from '@modules/db';

const databaseContext = createContext<Database | null>(null);

export const useDatabase = () => {
  const db = useContext(databaseContext);
  if (!db) {
    throw new Error('Database not found');
  }
  return db;
};

export const DatabaseProvider: FC<PropsWithChildren> = ({children}) => {
  const database = DatabaseManager.build();

  return <databaseContext.Provider value={database} children={children} />;
};
