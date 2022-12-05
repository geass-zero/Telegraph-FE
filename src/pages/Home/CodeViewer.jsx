import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codeStructure from '../../json/codeStructures.json';

import eth from '../../assets/images/eth_logo.jpg';

const CodeViewer = () => {
  const [selectedSnippet, setSnippet] = useState(codeStructure[0]);

  return (
    <div className='interoperability_wrap'>
      
      <div className='content_wrap'>
        <div
          className='sub_head text_center'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='400'>
          Interoperability has never been this easy
        </div>
        <div className='icon-container' style={{ 
            display: 'flex', 
            justifyContent: 'space-around',
            width: '50%',
            marginBottom: '15px' }}>
          <img
            src={eth}
            style={{ height: '35px', cursor: 'pointer', borderRadius: '50%' }}
            onClick={() => setSnippet(codeStructure[0])}
          />
          {/* <img
            src={eth}
            style={{ height: '35px', cursor: 'pointer', borderRadius: '50%' }}
            onClick={() => setSnippet(codeStructure[1])}
          />
          <img
            src={eth}
            style={{ height: '35px', cursor: 'pointer', borderRadius: '50%' }}
            onClick={() => setSnippet(codeStructure[2])}
          /> */}
        </div>
        <div className='detail_wrap'>
          
          <code
            className='code_box'
            data-aos='fade-right'
            data-aos-offset='0'
            data-aos-duration='500'>
            <SyntaxHighlighter
              key={selectedSnippet?.id}
              language='javascript'
              style={githubGist}
              data-aos='fade-left'
              data-aos-offset='0'
              data-aos-duration='300'>
              {selectedSnippet.code && selectedSnippet.code}
            </SyntaxHighlighter>
          </code>
          <div
            className='details_lists'
            data-aos='fade-left'
            data-aos-offset='0'
            data-aos-duration='600'>
            {codeStructure.map((item, index) => (
              <div
                className='list_item'
                key={item.id}
                onClick={() => setSnippet(item)}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;
