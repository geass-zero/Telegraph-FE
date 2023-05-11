import { ConnectionCard } from '../../components/DisplayComponents';
import './styles.scss';
import { ReactComponent as Versus } from './../../assets/svg/versus.svg';
import { ReactComponent as Hokk } from './../../assets/svg/Logo-HokkFinance.svg';

const TeamNPartners = () => {
  return (
    <section className='team_partners'>
      <div className='banner'>
        <div className='content_wrap'>
          <h1
            className='text_center team_margin'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            Team -&- Partners
          </h1>
          <div
            className='sub_title text_center'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='450'>
            For the blockchain community, by the blockchain community
          </div>
          <p
            className='sub_para text_center'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='500'>
            Telegraph Is an open source, global community dedicated to the
            proliferation of blockchain technology & inter-chain communication.
            Anyone can contribute.
          </p>
        </div>
      </div>
      <div className='page_contents'>
        <div className='content_wrap'>
          <h1
            className='text_center margin'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            Check out who we've connected with
          </h1>
          <div className='connections_wrap flex_box'>
            <div class="connection_card red aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-duration="500">
              <div class="title">HOKK Finance</div>
              <div class="image">
                <a href="https://hokk.finance" target="_blank">
                  <Hokk />
                </a>
              </div>
            </div>
            <div class="connection_card red aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-duration="500">
              <div class="title">Versus Metavers</div>
              <div class="image">
                <a href="https://versusmetaverse.io/" target="_blank">
                  <Versus />
                </a>
              </div>
            </div>
          {/* <ConnectionCard
              index={1}
              title={'HOKK Finance'}
              image={<Hokk />}
              color='red'
              to="/about"
            />
            <ConnectionCard
              index={2}
              title={'Versus Metaverse'}
              image={<Versus />}
              color='blue'
            />*/}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamNPartners;
