import './AnimalShows.css'
import PropTypes from "prop-types";
import bird from './images/svg/bird.svg';
import cat from './images/svg/cat.svg';
import cow from './images/svg/cow.svg';
import dog from './images/svg/dog.svg';
import gator from './images/svg/gator.svg';
import horse from './images/svg/horse.svg';
import heart from './images/svg/heart.svg';
import { useState } from "react";

const svgMap = {
      bird,        //bird: bird,
      cat,
      cow,
      dog,
      gator,
      horse,
}
export const AnimalShows = ({ type }) => {
      const [clicks, setClick] = useState(0)

      const handleClick = ()=>{
            setClick( clicks + 1)
            console.log( clicks )
         }      
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' src={svgMap[type]} alt="animal" />
      <img className='heart'
      src={heart}
      alt="animal"
      style={{ width: 10 + 10 * clicks + 'px'}}
      />
    </div>
  );
};
AnimalShows.propTypes = {
  type: PropTypes.string.isRequired,
};
