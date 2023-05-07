import Image from '../../assets/images/robots.png';
import Image2 from '../../assets/images/knight.png';
const BasicInformation = () => {
  return (
    <>
      <div
        className='basic_information'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='400'
        data-aos-delay='0'>
        <div className='content_wrap'>
          <div className='text_image_box'>
            <div className='details'>
              <h1
                data-aos='fade-left'
                data-aos-offset='0'
                data-aos-duration='400'
                data-aos-delay='100'>
                LLM ENABLED
              </h1>
              <p
                data-aos='fade-left'
                data-aos-offset='0'
                data-aos-duration='450'
                data-aos-delay='100'>
                Create contracts, Research market trends, and Trade tokens using
                our ChatGPT integrated cross-chain plugin.
              </p>
              <button
                data-aos='fade-left'
                data-aos-offset='0'
                data-aos-duration='500'
                data-aos-delay='100'>
                Try Now
              </button>
            </div>
            <div className='image'>
              <img
                src={Image}
                alt='web'
                data-aos='fade-right'
                data-aos-offset='0'
                data-aos-duration='500'
                data-aos-delay='100'
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className='basic_information'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='400'
        data-aos-delay='0'>
        <div className='content_wrap circle_orange'>
          <div className='text_image_box'>
            <div className='details'>
              <h1
                data-aos='fade-left'
                data-aos-offset='0'
                data-aos-duration='400'
                data-aos-delay='100'>
                WEB3 GAME READY
              </h1>
              <p
                data-aos='fade-left'
                data-aos-offset='0'
                data-aos-duration='450'
                data-aos-delay='100'>
                Make your web3 game cross-chain with no hassle.
              </p>
              <button
                data-aos='fade-left'
                data-aos-offset='0'
                data-aos-duration='500'
                data-aos-delay='100'>
                Learn More
              </button>
            </div>
            <div className='image'>
              <img
                src={Image2}
                alt='web'
                data-aos='fade-right'
                data-aos-offset='0'
                data-aos-duration='500'
                data-aos-delay='100'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BasicInformation;
