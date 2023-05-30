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
import MinedTokens from './MinedTokens';
import BasicInformation from './BasicInformation';

const Home = () => {
  return (
    <section className='home'>
      <div className='main_window'>
        <div className='content_wrap'>
          <div className='detail_content'>
            <h1
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='500'
              data-aos-delay='400'>
              Communicate with over 10 blockchains with just a few lines of code
            </h1>
            <h2
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='600'
              data-aos-delay='400'>
              Telegraph is a decentralized, lightweight messaging oracle that
              allows developers to make their smart contracts cross-chain
              interoperable.
            </h2>
            <div
              className='buttons_wrap'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='700'
              data-aos-delay='400'>
              <a
                style={{ width: '300px' }}
                href='https://telegraph-1.gitbook.io/what-is-telegraph/examples-and-tutorials/evm-chains'
                target='_blank'
                rel='noreferrer'>
                <button>Develop with Telegraph</button>
              </a>
              {/*<a
                href='https://telegraph-1.gitbook.io/what-is-telegraph/node-overview/whats-in-a-node'
                target='_blank'
                rel='noreferrer'>
                <button className='secondary'>ChatGPT Plugin</button>
  </a>*/}
            </div>
          </div>
          {/* <div className='claim_box_wrap'>
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
                <button className='colorful'>Claim your NFT(soon)</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <CodeViewer />
      <BasicInformation />
      <MinedTokens />
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
          <a
            href='https://discord.gg/uw8s5u63CF'
            target='_blank'
            rel='noreferrer'
            style={{ width: '100%', textAlign: '-webkit-center'}}

          >
            <SocialCard
              index={4}
              color='violet'
              icon={<Discord />}
              text='Discord'
              link=''
            />
          </a>
          {/* <SocialCard
            index={4}
            color='blue'
            icon={<Telegram />}
            text='Telegram'
            link=''
          /> */}
          <a
            href='https://twitter.com/TelegraphBridge'
            target='_blank'
            rel='noreferrer'
            style={{ width: '100%',  textAlign: '-webkit-center'}}
          >
            <SocialCard
              index={2}
              color='blue'
              icon={<Twitter />}
              text='Twitter'
              link='twitter.com/telegraphchain'
            />
          </a>
          {/* <a
            href='github.com/telegraphchain'
            target='_blank'
            rel='noreferrer'
            style={{ width: '100%',  textAlign: '-webkit-center'}}
          >
            <SocialCard index={6} color='black' icon={<Github />} text='Github' />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
