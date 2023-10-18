import { HomeContainer, HomeTitle, HomeLogo } from './Home.styled';
import mainLogo from './logo.png';

export const Home = () => {
  return (
    <HomeContainer>
      <div>
        <HomeTitle>Contacts manager</HomeTitle>
        <HomeLogo src={mainLogo} alt="mainLogo" />
      </div>
    </HomeContainer>
  );
};
