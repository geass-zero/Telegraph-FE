import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import { LanguageDropDown } from './../InputComponent';
import { AppRoute } from './../../utils/constants/ConstantUtil';

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobMenuOpen, setMobMenu] = useState(false);
  const options = [{ value: 'EN', label: 'EN' }];
  const location = useLocation();

  const updateScrolledBoolean = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener('scroll', updateScrolledBoolean);

    return () => {
      document.removeEventListener('scroll', updateScrolledBoolean);
    };
  }, []);

  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      className={`${isScrolled ? 'scrolled_header' : ''}  ${
        isMobMenuOpen ? 'mob_nav_open' : ''
      }`}>
      <div className='content_wrap'>
        <Link to={AppRoute.ROOT} className='logo'>
          Telegraph
        </Link>
        <div className='links_wrap'>
          <BannerLink
            onClick={() => setMobMenu(false)}
            link={AppRoute.ROOT}
            title='Home'
          />
          <BannerLink
            onClick={() => setMobMenu(false)}
            link={AppRoute.OVERVIEW}
            title='Developers'
          />
          <BannerLink
            onClick={() => setMobMenu(false)}
            link={AppRoute.USECASE}
            title='Use Cases'
          />
          <BannerLink
            onClick={() => setMobMenu(false)}
            link={AppRoute.ECOSYSTEM}
            title='Ecosystem'
          />
          <BannerLink
            onClick={() => setMobMenu(false)}
            link={AppRoute.TEAM}
            title='Community'
          />
          <a
            title='Resources'
            onClick={() => setMobMenu(false)}
            className={`main_link`}
            target='_blank'
            href={AppRoute.DOCUMENTATION}
            rel='noreferrer'>
            Documentation
          </a>
        </div>

        <div className='buttons_wrap'>
          {/* <LanguageDropDown
            options={options}
            placeholder='EN'
            isSearchable={false}
          /> */}
          <a
            href='https://telegraph-1.gitbook.io/what-is-telegraph/getting-started/what-is-telegraph'
            target='_blank'
            rel='noreferrer'>
            <button className='main_btn'>Go Cross-Chain</button>
          </a>
        </div>

        <div
          className={`hamburger ${isMobMenuOpen ? 'active' : ''}`}
          onClick={() => setMobMenu(!isMobMenuOpen)}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const BannerLink = ({ link, title, onClick }) => {
  const location = useLocation();
  return (
    <Link
      onClick={onClick}
      className={`main_link ${location.pathname === link ? 'active' : ''}`}
      to={link}>
      {title}
    </Link>
  );
};

export default Header;
