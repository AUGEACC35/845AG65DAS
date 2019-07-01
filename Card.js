import React from 'react';

const Card = ({ title, category, start, stop, isCurrent, proc }) => 
{
  let procNumber = proc > 0 ? proc : 0;
  
  return (
    <div className='w5'>
    
      className='grow br3 pa3 ma2 ba bw1 shadow-5 bg-light-blue'>
      <div>
        <div style={{width: procNumber, float: 'left', heigt: '100px', backgroundColor: 'black'}}></div>
        <div className='dib pa2'>Kategorija: { category }</div>
      </div>
      <div>
        <div className='dib pa2'>Pavadinimas: { title }</div>
      </div>
      <div>
        <div className='dib pa2'>Prasideda: { start }</div>
      </div>
      <div>
        <div className='dib pa2'>Baigiasi: { stop }</div>
      </div>
      { proc > 0 ? <div>
                    { 
                    
                    }
                    <div className='dib pa2'>Progress: { proc }%</div>
                  </div>
                : ''
      }
      <div>
        <div className='dib pa2'>Groja dabar: { isCurrent ? 'Taip' : 'Ne' }</div>
      </div>
    </div>
    
  );
}

export default Card;
