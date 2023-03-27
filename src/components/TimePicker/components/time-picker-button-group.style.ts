import {TouchableOpacity, View, Text} from 'react-native';

import {styled} from '@modules/styled';

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  column-gap: 10px;
`;

const BaseButton = styled(TouchableOpacity)`
  flex-grow: 1;
  padding: 8px 0px;
  border-radius: 8px;
`;

export const CancelButton = styled(BaseButton)`
  background-color: rgb(253, 237, 237);
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: rgb(229, 246, 253);
  /* align-items: center; */
`;
export const ButtonText = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;
