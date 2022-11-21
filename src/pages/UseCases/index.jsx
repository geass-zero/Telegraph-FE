import './styles.scss';
import Image from '../../assets/images/use_case.jpg';

const UseCases = () => {
  return (
    <section className='content_wrap use_case_wrap'>
      <h1
        className='text_center main'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='400'>
        Use Cases
      </h1>
      <div className='use_case_item'>
        <div
          className='top_section flex_box'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='600'>
          <div className='x2 first_section'>
            <div className='main_text'>Cross-Chain NFTs</div>
          </div>
          <div className='x2'>
            <img src={Image} alt='boxed' />
          </div>
        </div>
        <div
          className='bottom_section'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='700'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia de...
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
