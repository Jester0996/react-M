import './style.scss';


const Link = ({text, style, icon}) => {
  // let cssClass = 'Link ';
  // cssClass += style === 'light' ? 'Link--light' : '';
  // console.log(cssClass);

  return ( 
      // <a href='#' className='Link Link--grey'>{text}</a> 
      <a href='#' className={`Link ${style} === 'light' ? 'Link--light' : ''`}>
      {/* // <a href='#' className={cssClass}> */}
      {icon && <img src={icon} alt=""  />}
        {text}</a> 
   );
}
 
export default Link;