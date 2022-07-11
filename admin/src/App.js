import logo from "./logo.svg";
import "./App.css";
import Page from "./pages/Page";
import GeneralContextProvider from "./state/general.context";

const App = () => {
  return (
    <GeneralContextProvider>
      <Page></Page>
    </GeneralContextProvider>
  );
};

export default App;
