import {View, Text, TouchableOpacity} from 'react-native';

import {styled} from '@modules/styled';

export const Container = styled(View)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.bgColors.primary};
`;

export const Content = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const WrapperTimer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  column-gap: 8px;
`;

const BaseText = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled(BaseText)``;

export const DayOfWeekText = styled(BaseText)`
  font-size: 18px;
  font-weight: 600;
`;

export const DayText = styled(BaseText)`
  font-size: 16px;
  font-weight: 500;
`;

export const HMText = styled(BaseText)`
  font-size: 44px;
  font-weight: 700;
`;

export const EndButton = styled(TouchableOpacity)`
  margin-top: 20px;
  border: 1px solid rgb(252 205 129);
  border-radius: 8px;
  width: 100%;
`;

export const EndButtonText = styled(Text)`
  padding: 7px 0px;
  font-size: 20px;
  font-weight: 500;
  color: rgb(252 205 129);
  text-align: center;
`;
