import {Text} from 'react-native';

import {styled} from '@modules/styled';

interface BaseTypography {
  children: string;
}

export default function BaseTypography({children}: BaseTypography) {
  return <TextWrapper children={children} />;
}

const TextWrapper = styled(Text)``;
