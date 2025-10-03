
import {GlobalStyles} from "@/style/GlobalStyle.ts";
import {NavBar} from "@/components/NavBar";
import {Content} from "@/components/Content";
import {ContentWrapper} from "@/style/App.style.ts";
import {init} from "@noriginmedia/norigin-spatial-navigation";



init({
    distanceCalculationMethod: 'center',
    debug: true,
    visualDebug: true,
});

function App() {
  return (
    <>
      <GlobalStyles />
        <ContentWrapper>
        <NavBar focusKey={'Nav1'}/>
            <Content focusKey="CONTENT" />
        </ContentWrapper>
    </>
  );
}

export default App;
