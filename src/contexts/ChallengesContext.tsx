import { createContext, ReactNode, useState } from 'react';
import challenges from '../challenger.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperince: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  leveUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  finishChallenge: () => void;
  activeChallenge: Challenge;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperince, setCurrentExperince] = useState(22);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function leveUp() {
    setLevel(level + 1);
  }

  function finishChallenge() {
    setChallengesCompleted(challengesCompleted + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperince,
      challengesCompleted,
      leveUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      finishChallenge
    }}>
      { children}
    </ChallengesContext.Provider>
  );
}