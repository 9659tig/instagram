import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return(
        <>
            <nav>
                <Link to="/">
                    <img class="instagram" alt="logo" src="img/logo.png"/>
                </Link>
                <div class="search">
                    <img class="search-img" alt="search-img" src="img/search.png"/>
                    <input class="nav-search" placeholder="검색"/>
                </div>
                <div class="menu">
                    <Link to="/">
                        <img class="home" alt="home" src="img/home.png"/>
                    </Link>
                    <Link to="/sent/">
                        <img class="sent" alt="sent" src="img/Sent.png"/>
                    </Link>
                    <Link to="/plus/">
                        <img class="plus" alt="plus" src="img/Vector.png"/>
                    </Link>
                    <Link to="/random/">
                        <img class="random" alt="random" src="img/Ellipse.png"/>
                    </Link>
                    <Link to="/like/">
                        <img class="like" alt="like" src="img/emptyHeart.png"/>
                    </Link>
                    {/* <img class="profile" alt="profile" src="img/home.png"/> */}
                </div>
            </nav>
        </>
    )
}

export default Header;