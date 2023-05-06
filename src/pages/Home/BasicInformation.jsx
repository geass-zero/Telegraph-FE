import Image from '../../assets/images/Home.jpg';
const BasicInformation = () => {
  return (
    <>
      <div className='basic_information'>
        <div className='content_wrap'>
          <div className='text_image_box'>
            <div className='details'>
              <h1>LLM ENABLED</h1>
              <p>
                Create contracts, Research market trends, and Trade tokens using
                our ChatGPT integrated cross-chain plugin.
              </p>
              <button>Try Now</button>
            </div>
            <div className='image'>
              <img src={Image} alt='Image' />
            </div>
          </div>
        </div>
      </div>
      <div className='basic_information'>
        <div className='content_wrap circle_orange'>
          <div className='text_image_box'>
            <div className='details'>
              <h1>WEB3 GAME READY</h1>
              <p>Make your web3 game cross-chain with no hassle.</p>
              <button>Learn More</button>
            </div>
            <div className='image'>
              <img src={Image} alt='Image' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BasicInformation;
