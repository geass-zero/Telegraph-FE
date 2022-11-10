import { ConnectionCard } from '../../components/DisplayComponents';
import './styles.scss';
import { ReactComponent as Tesla } from './../../assets/svg/tesla.svg';
import { ReactComponent as Spacex } from './../../assets/svg/spacex.svg';
import { ReactComponent as Adobe } from './../../assets/svg/adobe.svg';
import { ReactComponent as Microsoft } from './../../assets/svg/microsoft.svg';

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
            Team -e- Partners
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
            Check out who we have connected with
          </h1>
          <div className='connections_wrap flex_box'>
            <ConnectionCard
              index={1}
              title={'Hokkaido Inu'}
              image={<Tesla />}
              color='red'
            />
            <ConnectionCard
              index={2}
              title={'Versus Metaverse'}
              image={<Spacex />}
              color='blue'
            />
            <ConnectionCard
              index={3}
              title={'Partner Name'}
              image={<Adobe />}
              color='red'
            />
            <ConnectionCard
              index={4}
              title={'Partner Name'}
              image={<Microsoft />}
              color='blue'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamNPartners;
