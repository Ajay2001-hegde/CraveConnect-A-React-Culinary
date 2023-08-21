// Rescategory.js
import React from 'react';
import ItemList from './ItemList';

const Rescategory = ({ data, showitems, setexpand }) => {
  const handleclick = () => {
    setexpand();
    
  };

  return (
    <div>
      <div className='w-8/12 mx-auto my-4 pt-2 bg-[#d6d4d158] rounded-md shadow-md'>
        <div className='flex justify-between cursor-pointer' onClick={handleclick}>
          <span className='mx-3 text-lg font-bold'>
            {data.title} {'(' + data.itemCards.length + ')'}
          </span>
          <span className='cursor-pointer'>{showitems ? '🔼' : '🔽'}</span>
        </div>
        {showitems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default Rescategory;
