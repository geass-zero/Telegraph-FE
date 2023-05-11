import './styles.scss';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/constants/ConstantUtil';

const Footer = () => {
  return (
    <footer>
      <div className='content_wrap'>
        <div className='flex_box space_between basic_details footer_first-row'>
          <div className='font_700'>Telegraph</div>
          <div className='text_wrap flex_box ready_wrap'>
            <div className='large_text margin_ready'>Ready to get started?</div>
            <button className='button'>Get started</button>
          </div>
        </div>
        <div className='line margin'></div>
        <div className='flex_box space_between align_start '>
          <div className='developer'>
            <div className='large_text item'>Developers</div>
            <div className='font_400 '>Documentation</div>
          </div>
          <div className='flex_box align_start links_columns_wrap'>
            <div className='resources'>
              <div className='text_color font_700_17'>Resources</div>
              <div className='font_500 item'>
                <div>
                  <a className='footer_link' style={{cursor: 'pointer'}}
                    href='https://telegraph-1.gitbook.io/what-is-telegraph/getting-started/what-is-telegraph' target='_blank'>
                    Read the Docs
                  </a>
                </div>
                
                <div>
                  <Link to={AppRoute.ECOSYSTEM} className='footer_link'>
                    Ecosystem
                  </Link>
                </div>
              </div>
            </div>
            <div className='about'>
              <div className='text_color font_700_17'>About</div>
              <div className='font_500 item'>
                <div>
                  <Link to={AppRoute.TEAM} className='footer_link'>
                    Team <span>&#38;</span> Partners
                  </Link>
                </div>
                <div>
                  <Link to={AppRoute.OVERVIEW} className='footer_link'>
                    Overview
                  </Link>
                </div>
                <div>
                  <Link to={AppRoute.USECASE} className='footer_link'>
                    Use Cases
                  </Link>
                </div>
              </div>
            </div>
            <div className='help'>
              <div className='text_color font_700_17'>Help</div>
              <div className='font_500 item'>
                <div>
                  <Link to={'#'} className='footer_link'>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copy_right'>© 2022 Telegraph • All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
