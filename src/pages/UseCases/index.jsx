import './styles.scss';
import Image from '../../assets/images/use_case.jpg';
import Image2 from '../../assets/images/use_case_2.png';
import { ReactComponent as DropDown } from '../../assets/svg/dropdown.svg';
import { useState } from 'react';

const UseCases = () => {
  const [shownMore, setShownMore] = useState(false);

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
          <div className='default_text'>
            <p>
            Non-Fungible Tokens (NFTs) are a new type of digital asset that are unique 
            and verifiable. They are a key component of the blockchain technology and are 
            used by developers and their users to create and trade digital assets. 
            However, most NFTs and their functionalities are currently limited to a single 
            blockchain, which restricts their potential.
            </p>
            
          </div>
          <div className={`more_text ${shownMore ? 'active' : ''}`}>
            <p>
            Telegraph is a new technology that allows developers to create NFTs 
            that are interoperable across multiple blockchains. This means that a 
            developer can create an NFT on one blockchain, and then transfer it to 
            a different blockchain using Telegraph. This opens up a whole new world 
            of possibilities for developers and their users.
            </p>
            <p>
            For example, a developer could create an NFT that represents a digital
             collectible, such as a virtual trading card or a digital art piece. 
             They could then use Telegraph to transfer that NFT to a different 
             blockchain, where it could be traded, used as collateral, or even 
             burned. This would allow users to trade and use their digital assets 
             in a much more flexible and versatile way.
            </p>
            <p>
            Telegraph also allows developers to integrate contracts into their NFTs, 
            which can be used to transmit and receive events to and from other 
            blockchains. This gives developers the ability to create a truly 
            decentralized cross-chain ecosystem. This is an important step towards 
            creating a more interconnected and interoperable blockchain environment.
            </p>
            <p>
            In conclusion, Telegraph is an important technology for blockchain developers. 
            It allows them to create NFTs that are interoperable across multiple blockchains,
             giving their users the ability to trade and use their digital assets in a much 
             more flexible and versatile way. It also enables the creation of a truly 
             decentralized cross-chain ecosystem, which is an important step towards a 
             more interconnected and interoperable blockchain environment.
            </p>
          </div>
          <div className='dropdown_wrap'>
            <DropDown
              onClick={() => setShownMore(!shownMore)}
              className={`arrow_icon ${shownMore ? 'downed' : ''}`}
            />
          </div>
        </div>
      </div>
      <div className='use_case_item'>
        <div
          className='top_section flex_box'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='600'>
          <div className='x2 first_section'>
            <div className='main_text'>Cross-Chain Tokens</div>
          </div>
          <div className='x2'>
            <img style={{height: '0'}} src={Image2} alt='boxed' />
          </div>
        </div>
        <div
          className='bottom_section'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='700'>
          <div className='default_text'>
            <p>
            Cross chain tokens allow developers and users to take advantage of the
             unique features and capabilities of different blockchains without 
             being limited to a single platform. This flexibility can be 
             particularly valuable for complex ecosystems that require a wide 
             range of functionality and scalability.
            </p>
            
          </div>
          <div className={`more_text ${shownMore ? 'active' : ''}`}>
            <p>
            One of the main benefits of cross chain tokens is that they enable 
            developers to create tokens that can be used on multiple blockchains. 
            This means that users can access their tokens on different platforms 
            and take advantage of the unique features of each blockchain. For 
            example, a user could hold a token on a blockchain with strong smart 
            contract capabilities, and then move that same token to another 
            blockchain with low transaction fees and high scalability.
            </p>
            <p>
            Additionally, cross chain tokens can help users avoid paying high fees 
            on one blockchain by allowing them to move their tokens to a cheaper 
            platform. This can save users a significant amount of money, especially 
            in situations where they need to make many transactions.
            </p>

            <p>
            Another advantage of cross chain tokens is that they can help developers 
            create more complex and sophisticated decentralized applications (dApps). 
            By allowing tokens to be used on multiple blockchains, developers can build 
            dApps that utilize the strengths of different platforms to create a more 
            robust and feature-rich experience. For example, a dApp could combine the 
            smart contract capabilities of one blockchain with the low fees and high 
            scalability of another to create a decentralized application that is both 
            fast and affordable.
            </p>

            <p>
            Furthermore, cross chain tokens can help promote interoperability 
            between different blockchains. This is important because it allows 
            users to move their tokens between different platforms and take 
            advantage of the unique features of each blockchain. This can create 
            more opportunities for users and help drive the adoption of 
            decentralized technologies.
            </p>

            <p>
            In conclusion, cross chain tokens offer a number of benefits for developers 
            and users. They allow developers to create tokens that can be used on multiple 
            blockchains, which can help save users money on fees and enable the creation 
            of more complex and sophisticated dApps. Additionally, cross chain tokens 
            promote interoperability between different blockchains, which can create more 
            opportunities for users and drive the adoption of decentralized technologies.
            </p>
          </div>
          <div className='dropdown_wrap'>
            <DropDown
              onClick={() => setShownMore(!shownMore)}
              className={`arrow_icon ${shownMore ? 'downed' : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
