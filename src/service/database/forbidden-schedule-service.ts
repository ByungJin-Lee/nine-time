import {Database} from '@modules/db';

import {ForbiddenSchedule} from '~/service/domain/forbidden-schedule';

const TABLE_NAME = 'forbidden_schedule';

interface RawForbiddenSchedule {
  day_of_week: number;
  start: number;
  end: number;
}

export interface ForbiddenScheduleService {
  readAll(): Promise<ForbiddenSchedule[]>;
}

export function createForbiddenScheduleService(
  db: Database,
): ForbiddenScheduleService {
  return {
    async readAll() {
      const items = await db.executeQuery(`SELECT * FROM ${TABLE_NAME}`);

      return isRawForbiddenScheduleArray(items)
        ? items.map(parseForbiddenSchedule)
        : [];
    },
  };
}

function parseForbiddenSchedule(raw: RawForbiddenSchedule): ForbiddenSchedule {
  return {
    day_of_week: raw.day_of_week,
    start: raw.start,
    end: raw.end,
  };
}

function isRawForbiddenScheduleArray(
  values: unknown,
): values is Array<RawForbiddenSchedule> {
  return Array.isArray(values);
}
