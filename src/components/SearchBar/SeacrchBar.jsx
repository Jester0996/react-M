import './style.scss';
import seachIcon from './search.svg';
import Link from '../Link/Link';

const SearchBar = () => {
  return ( 
    <div className="searchber">
      <div className="searchbar__btns-wrapper">
        <button className='searchbar__btn'>
          <Link text="Anywhere" />
          </button> 

        <button className='searchbar__btn'>
          <Link text="Any week" />
        </button> 

        <button className='searchbar__btn'>
          <Link text="Add guests" style="light" />
        </button> 
{/* 
        <button className='searchbar__btn'>Any week</button> 
        <button className='searchbar__btn searchbar__btn--grey'>Add guests</button>  */}
      </div>

      <button className='searchbar__btns-search'>
        <img src={seachIcon} alt="1" />
      </button>
    </div>
   );
}
 
export default SearchBar;