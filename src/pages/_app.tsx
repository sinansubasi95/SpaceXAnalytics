import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useStores } from '../stores';

function MyApp({ Component, pageProps }: AppProps) {
  // Handle navigation on load
  const { pathname } = useRouter();
  const { navigationStore } = useStores();
  navigationStore.activateLink(pathname)

  return <Component {...pageProps} />;
}
export default MyApp;
