import { ContentCard } from '../../components/DisplayComponents';
import './styles.scss';
import dummyData from '../../json/overviewDummyData';

const Overview = () => {
  return (
    <section className='content_wrap over_view'>
      <h1
        className='text_center main'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='400'>
        Node Overview
      </h1>

      <div className='content_cards'>
        {dummyData.map((el, index) => (
          <ContentCard
            index={index + 1}
            title={el.title}
            icon={el.icon}
            sub_title={el.sub_title}
            para={el.para}
          />
        ))}
      </div>
    </section>
  );
};

export default Overview;
