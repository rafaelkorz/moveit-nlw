import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';
import Switch from '@material-ui/core/Switch';

import { useTheme } from "next-themes";

import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [state, setState] = useState(false);
  const [picture, setPicture] = useState('/icons/sunny.svg');

  function handleChange() {
    setState(!state);
    if (state) {
      setTheme('light');
      setPicture('/icons/sunny.svg');
    } else {
      setTheme('dark');
      setPicture('/icons/night.svg');
    }
  }

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: 'center',
          marginBottom: 10          
        }}
      >
        <Switch
          color={'primary'}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <img style={{height: '1.5rem', marginLeft: '1rem'}} src={picture} alt="sunny"/>
      </div>

      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />

        <title>Inicío | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
