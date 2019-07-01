import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <div>
     {
       data.map((info, i) => {
         return (
           <Card
            key={i}
            title={Object(info).title}
            category={Object(info).category}
            start={Object(info).start}
            stop={Object(info).stop}
            isCurrent={Object(info).is_current}
            proc={Object(info).proc}
           />
         );
       })
     }
    </div>
  );
}

export default CardList;
