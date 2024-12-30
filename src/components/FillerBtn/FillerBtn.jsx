import fillerIcon from './filters.svg'
import './style.scss';

const FillerBtn = () => {
  return ( <button className='filler-btn'>
    <img src={fillerIcon} alt="fil" />
    Filters
  </button> );
}
 
export default FillerBtn;