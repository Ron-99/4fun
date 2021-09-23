import {BannerSectionStyle, ButtonsWrapper, Follow, IntroductionWrapper, Link, Social, SocialsMedia} from "./style";
import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import Instagram from "../../../../assets/imgs/instagram.svg";
import Youtube from "../../../../assets/imgs/youtube.svg";
import Discord from "../../../../assets/imgs/discord.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function BannerSection() {

  return (
    <BannerSectionStyle>
      <IntroductionWrapper>
        <Title typography='h1'>A Comunidade Gamer Mais Divertida</Title>
        <Text size='lg'>Venhar participar da comunidade mais divertida do Brasil. Nós temos muitos desafios e diversão para você</Text>
        <ButtonsWrapper>
          <AnchorLink href="#subscription">
            <Button size='md' color='primary'>Inscrever-se</Button>
          </AnchorLink>
          <Button size='md' color='secondary'>Saiba Mais</Button>
        </ButtonsWrapper>
      </IntroductionWrapper>

      <Follow>
        <Title typography='h4'>SIGA-NOS</Title>
        <SocialsMedia>
          <Link href='https://www.instagram.com/liga4f/' target='_blank'>
            <Social src={Instagram} />
          </Link>

          <Link href='https://youtube.com/channel/UCP7rkgjn_0tTW0fIJJY8gfw' target='_blank'>
            <Social src={Youtube} />
          </Link>

          <Link href='https://discord.com/invite/8dtkGux2Mj' target='_blank'>
            <Social src={Discord} />
          </Link>

        </SocialsMedia>
      </Follow>
    </BannerSectionStyle>
  )
}

export default BannerSection;
