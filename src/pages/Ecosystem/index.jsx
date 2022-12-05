import './styles.scss';
import data from '../../json/ecosystem';
import { EcosystemCard } from '../../components/DisplayComponents';

//import image from '../../assets/images/eth_logo.png';
const Ecosystem = () => {
  return (
    <section className='content_wrap ecosystem_wrap'>
      <h1
        className='text_center main'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='400'>
        Ecosystem
      </h1>
      <div className='ecosystems_items_wrap'>
        {data.map((item, index) => (
          <EcosystemCard
            title={item?.title || ''}
            icon={item.icon}
            key={index}
            isLive={item.isLive}
          />
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
