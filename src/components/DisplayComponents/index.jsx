import './styles.scss';
import { ReactComponent as Linkicon } from './../../assets/svg/link.svg';
import { ReactComponent as EcoSystemIcon } from './../../assets/svg/EcosystemDummy.svg';
import docs from './../../assets/images/docs.png';

const ContentCard = ({ title, icon, sub_title, para, index }) => {
  return (
    <div
      className='content_card_wrap'
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-duration={index * 100 + 400}>
      <div className='flex_box justify_start align_start title_wrapper'>
        <div className='title font_700_20 '>{title}</div>
        <img src={icon} alt={'icon'} />
      </div>
      <div className='content_box'>
        <div className='font_700 sub_title'>{sub_title}</div>
        <p>{para}</p>
      </div>
    </div>
  );
};

const ConnectionCard = ({ title, image, color, index = 1 }) => {
  return (
    <div
      className={`connection_card ${color ? color : ''}`}
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-duration={index * 100 + 400}>
      <div className='title'>{title}</div>
      <div className='image'>{image}</div>
    </div>
  );
};

const PlanCard = ({ isRight, title, description, icon }) => {
  return (
    <div
      className={`plan_card ${isRight ? 'right_aligned' : ''}`}
      data-aos={isRight ? 'fade-right' : 'fade-left'}
      data-aos-offset='0'
      data-aos-duration='400'>
      <div className={`icon_wrap`}>{icon && icon}</div>
      <div className='content'>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};

const EcosystemCard = ({ title, icon, isLive }) => {
  const liveIndicatorStyle = {
    background: isLive ? "#00FF00" : "red",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "10px",
    height: "7px",
    width: "7px",
    borderRadius: "50%",
    boxShadow: isLive ? "0 0 1px 1px #00FF00" : "0 0 0 0 red",
  };

  return (
    <div
      className={`ecosystem_card`}
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-duration='500'>
      <div className='text_wrap'>
        <img src={icon} alt='icon' />
        <div className='title'>
          {title}
          <span style={liveIndicatorStyle}></span>
        </div>
      </div>
      <div className='links_wrap'>
        <div className='link'>
          <img src={docs} style={{ height: '30px', marginTop: '20px', cursor: 'pointer' }} alt='docs' />
          Docs
        </div>
      </div>
    </div>
  );
};


const SocialCard = ({ color, icon, text, index }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-duration={index * 100 + 300}
      className={`social_card flex_box space_between align_items ${
        color ? color : 'black'
      }`}>
      <div className={`flex_box detail_box`}>
        <div className='icon'>{icon}</div>
        <div className={`text`}>{text}</div>
      </div>
      <div className='link'>
        <Linkicon />
      </div>
    </div>
  );
};

export { ContentCard, ConnectionCard, PlanCard, SocialCard, EcosystemCard };
