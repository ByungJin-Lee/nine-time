import {Image} from '~/common/components/Image';

import {BigText, Container, SmallText, TextWrapper} from './fallback.style';

export default function Fallback() {
  return (
    <Container>
      <Image type="Moon" />
      <TextWrapper>
        <BigText>NINE</BigText>
        <SmallText>Time</SmallText>
      </TextWrapper>
    </Container>
  );
}
