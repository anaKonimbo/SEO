import { createContext, useEffect, useReducer, useState } from "react";
import { submitGoogleHomepage } from "../services/service";

export const GeneralContext = createContext(null);

const GeneralContextProvider = ({ children }) => {
  const [settingsState, setSettingsState] = useState({});
  const [subdomainState, setSubdomainState] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    // const subdomain = window.params && window.params.get('subdomain') || 'mortest'; // loaded from global hybrid
    const subdomain = "subdomain";

    if (subdomain) {
      setSubdomainState(subdomain);
      // getJsonDataBySubdomain(subdomain);
    }
  }, [errorState]);

  const submitSettings = (data) => {
    // scrollToTopSmoothly();
    setLoadingState(true);
    console.log(data);
    submitGoogleHomepage(data);
  };

  // const scrollToTopSmoothly = () => {
  //     const bodyRef = document.getElementsByTagName('body')
  //     bodyRef[0].scrollIntoView({ behavior: 'smooth'})
  // }

  // return
  return (
    <GeneralContext.Provider
      value={{
        settingsState,
        // carouselSettingsDispatch,
        setSettingsState,
        subdomainState,
        // popupState,
        // setPopupState,
        loadingState,
        setLoadingState,
        errorMessage,
        setErrorMessage,
        errorState,
        setErrorState,
        submitSettings,
      }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
