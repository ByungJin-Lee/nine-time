import {useReducer, useMemo} from 'react';

import {TimeHM} from '../time-picker.d';

const defaultTime: TimeHM = {
  isAM: true,
  hour: 1,
  minute: 0,
};

export default function useTimePickerReducer(initialTime?: TimeHM) {
  const [state, dispatch] = useReducer(reducer, initialTime || defaultTime);

  const stateAndDispatcher = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return stateAndDispatcher;
}

function reducer(state: TimeHM, updated: Partial<TimeHM>): TimeHM {
  return preprocess({...state, ...updated});
}

function preprocess(state: TimeHM): TimeHM {
  return state;
}
