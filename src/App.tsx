import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { GlobalStyles } from "@/style/GlobalStyle.ts";
import { useEffect } from "react";

function App() {
  const { ref, focusKey, focusSelf } = useFocusable({
    isFocusBoundary: true,
    focusable: false,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <>
      <GlobalStyles />
      <FocusContext.Provider value={focusKey}></FocusContext.Provider>
    </>
  );
}

export default App;
