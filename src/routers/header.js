import React from 'react';

function Header(props) {
    return(
        <>
            <nav>
                <img class="instagram" alt="logo" src="img/logo.png"/>
                <div class="search">
                    <img class="search-img" alt="search-img" src="img/search.png"/>
                    <input class="nav-search" placeholder="검색"/>
                </div>
                <div class="menu">
                    <img class="home" alt="home" src="img/home.png"/>
                    <img class="sent" alt="sent" src="img/Sent.png"/>
                    <img class="plus" alt="plus" src="img/Vector.png"/>
                    <img class="random" alt="random" src="img/Ellipse.png"/>
                    <img class="like" alt="like" src="img/emptyHeart.png"/>
                    {/* <img class="profile" alt="profile" src="img/home.png"/> */}
                </div>
            </nav>
        </>
    )
}

export default Header;