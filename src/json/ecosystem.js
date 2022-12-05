import image from './../assets/svg/EcosystemDummy.svg';
import eth from '../assets/images/eth_logo.jpg';
import bnb from '../assets/images/bnb_logo.png';
import heco from '../assets/images/heco_logo.jpg';
import concordium from '../assets/images/concordium_logo.jpg';
import aptos from '../assets/images/aptos_logo.png';
import solana from '../assets/images/solana_logo.png';
import matic from '../assets/images/matic_logo.png';
import avalanche from '../assets/images/avax_logo.png';

const dummyData = [
  {
    icon: eth,
    title: 'Ethereum',
    isLive: true
  },
  {
    icon: bnb,
    title: 'Binance Chain',
    isLive: true
  },
  {
    icon: heco,
    title: 'HECO Chain',
    isLive: true
  },
  {
    icon: concordium,
    title: 'Concordium',
    isLive: false
  },
  {
    icon: aptos,
    title: 'Aptos',
    isLive: false
  },
  {
    icon: solana,
    title: 'Solana',
    isLive: false
  },
  {
    icon: matic,
    title: 'Matic',
    isLive: false
  },
  {
    icon: avalanche,
    title: 'Avalanche',
    isLive: false
  },
];

export default dummyData;
