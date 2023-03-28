import {Text, View} from 'react-native';

import {styled} from '@modules/styled';

export default function HomeScreen() {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
}

const Container = styled(View)`
  background-color: ${({theme}) => theme.bgColors.primary};
`;
