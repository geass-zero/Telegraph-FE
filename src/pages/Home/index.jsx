import './styles.scss';
import { PlanCard, SocialCard } from '../../components/DisplayComponents';
import { ReactComponent as Discord } from './../../assets/svg/discord.svg';
import { ReactComponent as Github } from './../../assets/svg/github.svg';
import { ReactComponent as Telegram } from './../../assets/svg/telegram.svg';
import { ReactComponent as Twitter } from './../../assets/svg/twitter.svg';
import { ReactComponent as Bio } from './../../assets/svg/bio.svg';
import { ReactComponent as Fee } from './../../assets/svg/fee.svg';
import { ReactComponent as Network } from './../../assets/svg/network.svg';
import CodeViewer from './CodeViewer';

const Home = () => {
  return (
    <section className='home'>
      <div
        className='main_window'
        data-aos='fade-left'
        data-aos-offset='0'
        data-aos-duration='100'>
        <div className='content_wrap'>
          <div className='detail_content'>
            <h1 data-aos='fade-up' data-aos-offset='0' data-aos-duration='300'>
              Communicate with over 10 blockchains with just a few lines of code
            </h1>
            <h2 data-aos='fade-up' data-aos-offset='0' data-aos-duration='450'>
              Telegraph Is a decentralized, lightweight messaging oracle that
              allows developers to easily access external blockchains from their
              smart contracts
            </h2>
            <div
              className='buttons_wrap'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='550'>
              <button>Develop With Telegraph</button>
              <button className='secondary'>Run a Node</button>
            </div>
          </div>
          <div className='claim_box_wrap'>
            <div
              className='claim_box_wrap_visible'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'>
              <p data-aos='fade-up' data-aos-offset='0' data-aos-duration='500'>
                Own a part of the Telegraph ecosystem with our crosschain NFTs
              </p>
              <div
                data-aos='zoom-in'
                data-aos-offset='0'
                data-aos-duration='600'>
                <button className='colorful'>Claim your NFT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeViewer />
      <div className='versatile_bridge_wrap'>
        <div className='content_wrap'>
          <h1
            className='text_center'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            A Versatile Bridge With Big Plans
          </h1>
          <div className='plans_wrap'>
            <PlanCard
              isRight={true}
              icon={<Bio />}
              title='Onchain Verification Only'
              description='Telegraph nodes operate trustlessly, with all verification mechanisms occurring on each supported blockchain'
            />
            <PlanCard
              isRight={false}
              icon={<Fee />}
              title='Extremely Cheap Fees'
              description='Your smart contract users only have to pay the gas fees +$1'
            />
            <PlanCard
              isRight={true}
              icon={<Network />}
              title='CCIP Compaliant'
              description='Telegraph intends to adopt the Chainlink Cross Chain Interoperability Protocol to strengthen the security of it’s network'
            />
          </div>
        </div>
      </div>
      <div className='global_community'>
        <div className='content_wrap'>
          <h1
            className='text_center'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            Telegraph + You = Family
          </h1>
          <h3
            className='text_center'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='450'>
            Join our global community to discuss development, news, and bug
            bounties
          </h3>
        </div>
        <div className='social_cards_wrap flex_box'>
          <SocialCard
            index={4}
            color='violet'
            icon={<Discord />}
            text='Discord'
          />
          <SocialCard
            index={1}
            color='blue'
            icon={<Telegram />}
            text='Telegram'
          />
          <SocialCard
            index={2}
            color='blue'
            icon={<Twitter />}
            text='Twitter'
          />
          <SocialCard index={6} color='black' icon={<Github />} text='Github' />
        </div>
      </div>
    </section>
  );
};

export default Home;
