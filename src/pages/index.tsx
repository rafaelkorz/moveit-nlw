import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';
import Switch from '@material-ui/core/Switch';

import { useTheme } from "next-themes";

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { useEffect, useState } from "react";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { theme, setTheme } = useTheme();
  const [state, setState] = useState(false);

  function handleChange() {
    console.log('teste')
    setState(!state);
    if (state) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  useEffect(() => {
    setTheme('light');
  }, [])

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >   
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
          <img style={{ height: '1.5rem', marginLeft: '1rem' }} src={state ? '/icons/night.svg' : '/icons/sunny.svg'} alt="sunny" />
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
