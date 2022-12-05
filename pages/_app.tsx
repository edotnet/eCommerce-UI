import "../styles/globals.css";
import { AppPropsWithLayout } from "../lib/types";

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState?: unknown }>) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default App;
