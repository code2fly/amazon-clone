import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

import './Header.css';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();


    const signInOrSignoutRedirect = () => {
        if (user) {
            // this should be a signout and we can keep user in the home page also dispatch action to clear user
            console.log('this should be user logout event');
            auth.signOut()
                .then((v) => {
                    history.push('/');
                }, (errorReason) => {
                    alert('error while logging out : ', errorReason);
                });


        }
        else {
            // this is a login case move user to login page
            history.push('/login');
        }
    }

    return (
        <div className="header">

            <Link to="/" >
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link onClick={signInOrSignoutRedirect} >
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello {user ? (user.displayName ? user?.displayName : user?.email) : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        {/* basket?. is called optional chaining to make sure if basket goes undefined or something this does not panic */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div >
    )
}

export default Header
