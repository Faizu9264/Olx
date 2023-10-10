import React,{useContext} from 'react';
import '../../modal/logoutModal.css';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import{signOut} from 'firebase/auth'
import {auth} from '../../firebase/config'
import { authContext } from '../../store/Context';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../modal/logoutModal'
function Header() {
  const {user} = useContext(authContext)
  const navigate = useNavigate()
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const toggleConfirmationModal = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };
  const handleLogout = () => {
  
    signOut(auth)
      .then(() => {
        setShowConfirmationModal(false); 
        navigate('/login'); 
      });
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user?`${user.displayName}`:<Link to={'/login'}>Login</Link>}</span>
          <hr />
        </div>
      
        {user&&  <span className='logout' onClick={toggleConfirmationModal}>Logout</span>}
      
        {showConfirmationModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <ConfirmationModal onConfirm={handleLogout} onCancel={toggleConfirmationModal} />
          </div>
        </div>
      )}



        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>
              <Link to={'/create'} className='link'>SELL</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
