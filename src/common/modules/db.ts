import SQLite, {
  DatabaseParams,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

interface Database extends SQLiteDatabase {}

let db: Database | null = null;

// Singleton Database Factory Method
export function database(): Database {
  if (!db) {
    db = build();
  }
  return db;
}

function build() {
  return SQLite.openDatabase(databaseParams, handleSuccess, handleError);
}

const databaseParams: DatabaseParams = {
  name: 'nine-time.db',
  location: 'default',
  // createFromLocation: 2,
  createFromLocation: '~www/nine-time.db',
};

const handleSuccess = () => {
  console.log('Database connection established');
};

const handleError = (error: any) => {
  console.log(error);
};

export type {Database};
