import navIcon from './nav.svg';
import './style.scss';

const Account = () => {
  return (       
  <button className="account">

    <div className="account__nav-icon">
      <img src={navIcon} alt="navicon" />
    </div>
    <div className="account__avatar">
      <img src="./img/icons/user-avatar.svg" alt="ava" />
    </div>
        
      </button>);
}
 
export default Account;