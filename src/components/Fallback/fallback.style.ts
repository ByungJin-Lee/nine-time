import {View, Text} from 'react-native';

import {styled} from '@modules/styled';

export const Container = styled(View)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.bgColors.primary};
`;

const BaseText = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
`;

export const TextWrapper = styled(View)`
  margin-top: -4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  column-gap: 5px;
`;

export const BigText = styled(BaseText)`
  font-size: 66px;
  font-weight: 700;
`;

export const SmallText = styled(BaseText)`
  font-size: 33px;
  font-weight: 600;
`;
