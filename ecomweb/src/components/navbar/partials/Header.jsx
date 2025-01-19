import React from 'react'

const Header = () => {
  return (
    <>
     <header class="header">
            <a class="header__home" href="./">
                <img class="header__logo" src="./src/assets/common/logo.png" alt="WD PH Traditional" />
            </a>
            <nav class="header__nav">
                <ul class="header__menu menu">
                    <li class="menu__item menu__item--01">
                        <a class="menu__link" href="/menu">
                            <span class="menu__ttl">Menu</span>
                        </a>
                    </li>
                    <li class="menu__item menu__item--02">
                        <a class="menu__link" href="#">
                            <span class="menu__ttl">Rewards</span>
                        </a>
                    </li>
                    <li class="menu__item menu__item--03">
                        <a class="menu__link" href="#">
                            <span class="menu__ttl">Gift Cards</span>
                        </a>
                    </li>
                </ul>
                <div>
                    <a class="menu__btn" href="#">
                        <span class="menu__ttl">Sign In</span>
                    </a>
                    <a class="menu__btn" href="#">
                        <span class="menu__ttl">Join Now</span>
                    </a>
                </div>
            </nav>
            <div class="header__bars menu-bar hidden-pc js-menu">
                <span class="menu-bar__middle"></span>
            </div>
        </header> 
    </>
  )
}

export default Header