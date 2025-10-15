import { GlobalStyles } from "@/style/GlobalStyle.ts";
import { NavBar } from "@/components/NavBar";
import { Content } from "@/components/Content";
import { ContentWrapper } from "@/style/App.style.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

function App() {
  const { ref: appRef } = useFocusable({
    focusKey: "APP",
  });

  return (
    <>
      <GlobalStyles />
      <ContentWrapper ref={appRef}>
        <NavBar focusKey={"Nav"} />
        <Content focusKey="CONTENT" />
      </ContentWrapper>
    </>
  );
}

export default App;
