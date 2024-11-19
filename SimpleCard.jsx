import React from 'react';
import Image from './Image';
import Title from './Title';
import Description from './Description';

const SimpleCard = () => {
  return (
    <div className="flex p-9">
         <Image 
         imageUrl="https://images.pexels.com/photos/2719416/pexels-photo-2719416.jpeg?auto=compress&cs=tinysrgb&w=600" 
         />
         
         <div className="shadow-xl w-2/3 h-96 bg-white rounded-r-md p-6">
           <Title text="CEO, AMEX STUDIOS" />
           <Description text="Mr. Johnson is the CEO of AMEX Studios. He is a highly respected figure in the entertainment industry and has been instrumental in the success of many popular films and TV shows.
            He is known for his innovative approach to filmmaking and his commitment to excellence in every project he works on." />
         </div>
      </div>
  );
};
export default SimpleCard;