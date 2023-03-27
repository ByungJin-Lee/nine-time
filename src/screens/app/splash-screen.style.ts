import {View} from 'react-native';

import {styled} from '@modules/styled';

export const Container = styled(View)`
  width: 100%;
  height: 100%;

  background-color: ${({theme}) => theme.bgColors.primary};
`;
