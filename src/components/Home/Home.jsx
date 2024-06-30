import {
  HomeContainer,
  HomeImageBackground,
  HomeText,
  HomeButtonsContainer,
} from "./Home.style";

import HomeButtons from "./HomeButtons";

function Home() {
  return (
    <HomeContainer>
      <HomeImageBackground
        src={
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fHww"
        }
      />
      <HomeText>Explore The Beauty Of Our World</HomeText>
      <HomeButtonsContainer>
        <HomeButtons />
      </HomeButtonsContainer>
    </HomeContainer>
  );
}

export default Home;
