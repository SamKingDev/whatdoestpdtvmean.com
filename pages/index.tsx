import type { NextPage } from 'next';

import wordArray from '../helpers/words';
import invert from 'invert-color';


function randomWordFromLetter(letter: string) {
  const words = wordArray.filter(word => word[0] === letter);
  return words[Math.floor(Math.random() * words.length)];
}

function randomTPDTV() {
  return randomWordFromLetter('t') + ' ' + randomWordFromLetter('p') + ' ' + randomWordFromLetter('d') + ' TV';
}

function randomHex() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

interface Props {
  tpdtv: string;
  color: string;
}

const Home: NextPage<Props> = ({ tpdtv, color }) => {
  return (
    <div style={{ backgroundColor: color, color: invert(color) }} className='grid place-items-center h-screen font-extrabold text-4xl text-center'>
      {tpdtv}
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  return { tpdtv: randomTPDTV(), color: randomHex() }
}

export default Home
