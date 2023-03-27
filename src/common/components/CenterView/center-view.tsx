import {FC, PropsWithChildren} from 'react';

import {CenterViewStyle} from './center-view.style';

const CenterView: FC<PropsWithChildren> = ({children}) => (
  <CenterViewStyle children={children} />
);

export default CenterView;
