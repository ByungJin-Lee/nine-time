import SQLite, {DatabaseParams} from 'react-native-sqlite-storage';

// Enable promise
// SQLite.enablePromise(true);

interface Database {
  executeQuery(query: string): Promise<unknown>;
}

let db: Database | null = null;

// Singleton Database Factory Method
export function database(): Database {
  if (!db) {
    db = build();
  }
  return db;
}

function build(): Database {
  const _db = SQLite.openDatabase(databaseParams, handleSuccess, handleError);
  return {
    executeQuery(query: string) {
      return new Promise(resolve => {
        _db.executeSql(
          query,
          [],
          ({rows}: any) => {
            resolve(rows.raw());
          },
          handleError,
        );
      });
    },
  };
}

// #region Configuration

const databaseParams: DatabaseParams = {
  name: 'nineTime.db',
  location: 'default',
  // createFromLocation: 2,
  createFromLocation: '~www/nineTime.db',
};

const handleSuccess = () => {
  console.log('Database connection established');
};

const handleError = (error: any) => {
  console.log(error);
};

// #endregion

export type {Database};
