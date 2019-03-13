import {adjectives, nouns} from './words';

export const generateSecret = () => {
  const randomNumer = Math.floor (Math.random () * adjectives.length);
  return `${adjectives[randomNumer]} ${nouns[randomNumer]}`;
};
