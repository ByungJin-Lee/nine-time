import {Database} from '@modules/db';

import {ScreenHistory} from '~/service/domain/screen-history';

// Table Name for Database Access
const TABLE_NAME = 'screen_history';

// Interface for Database VO
interface RawScreenHistory {
  status: number;
  at: number;
}

export interface ScreenHistoryService {
  readAll(): Promise<ScreenHistory[]>;
  insert(screenHistory: ScreenHistory): void;
}

export function createScreenHistoryService(db: Database): ScreenHistoryService {
  return {
    async readAll() {
      const items = await db.executeQuery(`SELECT * FROM ${TABLE_NAME}`);
      return isRawScreenHistoryArray(items)
        ? items.map(parseScreenHistory)
        : [];
    },
    insert(screenHistory: ScreenHistory) {
      return db.executeQuery(`
        INSERT INTO ${TABLE_NAME} (status, at) 
        VALUES (${screenHistory.status ? 1 : 0}, ${screenHistory.at.valueOf()}) 
      `);
    },
  };
}

function parseScreenHistory(raw: RawScreenHistory): ScreenHistory {
  return {
    status: raw.status ? true : false,
    at: new Date(raw.at),
  };
}

function isRawScreenHistoryArray(
  values: unknown,
): values is Array<RawScreenHistory> {
  return Array.isArray(values);
}
