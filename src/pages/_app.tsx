import { ThemeProvider } from 'next-themes';
import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default MyApp
