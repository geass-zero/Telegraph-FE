import './styles.scss';
import dummyData from '../../json/ecosystem.json';
import { EcosystemCard } from '../../components/DisplayComponents';

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
        {dummyData.map((item, index) => (
          <EcosystemCard title={item?.title || ''} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
