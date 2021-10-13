import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useStores } from '../stores';
import { Provider } from 'urql';
import { client, ssrCache } from '../utils/createUrqlClient';

function MyApp({ Component, pageProps }: AppProps) {
  // Handle navigation on load
  const { pathname } = useRouter();
  const { navigationStore } = useStores();
  navigationStore.activateLink(pathname);

  // check if query param exists, and check active link conditionally among nav menu

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp;
