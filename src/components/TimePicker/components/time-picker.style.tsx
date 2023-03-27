import {styled} from '@modules/styled';
import {FC, PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import CenterView from '~/common/components/CenterView';

export const Container: FC<PropsWithChildren> = ({children}) => (
  <CenterView children={<Content children={children} />} />
);

export const Content: FC<PropsWithChildren> = ({children}) => (
  <StyleContent style={modalShadowStyle} children={children} />
);

const modalShadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
};

const StyleContent = styled(View)`
  background-color: #fff;
  border-radius: 15px;
  padding: 14px 20px;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: 600;
`;

export const WheelContentWrapper = styled(View)``;

export const ButtonGroupWrapper = styled(View)`
  padding-top: 10px;
`;
