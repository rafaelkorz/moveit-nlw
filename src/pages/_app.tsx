import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Children } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
