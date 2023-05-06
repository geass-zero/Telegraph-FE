const MinedTokens = () => {
  return (
    <div
      className='mined_tokens'
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-duration='400'
      data-aos-delay='0'>
      <div className='content_wrap'>
        <div className='mined_box'>
          <h1
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'
            data-aos-delay='400'>
            MINED TOKENS ONLY
          </h1>
          <div
            className='description'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='600'
            data-aos-delay='400'>
            <p>
              Telegraph tokens only come into existence as a result of a
              validated transaction, with each node being able to claim a share
              of all minted tokens.
            </p>
            <p>
              This equates to a fair and accountable means of distributing the
              tokens across participants within the Telegraph Ecosystem, while
              removing speculation as a driving factor.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MinedTokens;
