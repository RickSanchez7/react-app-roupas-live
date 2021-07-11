import React from 'react';
import loading from '../assets/Spinner.gif';
import './loading.styles.scss';

const Loading = () => {
  return (
    <div data-testid='loadingId' className='loading'>
      <img src={loading} alt='loading gif' />
    </div>
  );
};

export default Loading;
