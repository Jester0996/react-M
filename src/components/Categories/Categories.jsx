import Categoryitem from '../Categoryitem/Categoryitem';
import FillerBtn from '../FillerBtn/FillerBtn';

import categoriesData from './../../data/categories.json'

import './style.scss';

const Categories = () => {

  return (     <div className="categories">

      <div className="container">
        <div className="categories__row">
        <div className="categories__list">

          {categoriesData.map((cat, index)=>{
            return (
            <Categoryitem 
            title={cat.title}
            img={cat.img}
            key={index} />
            )

          })}
          {/* <Categoryitem title="Lakefront" img="./img/categories/02.svg" /> */}
        </div>
        <div className="categories__filter">
          <FillerBtn />
        </div>
      </div>
</div>
    </div> );
}
 
export default Categories;