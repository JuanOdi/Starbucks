import React from 'react'

const Header = () => {
  return (
    <>
     <header class="header">
            <a class="header__home" href="./">
                <img class="header__logo" src="./assets/images/common/logo.png" alt="WD PH Traditional" />
            </a>
            <nav class="header__nav">
                <ul class="header__menu menu">
                    <li class="menu__item menu__item--01">
                        <a class="menu__link" href="#">
                            <span class="menu__ttl">TOP</span>
                        </a>
                    </li>
                    <li class="menu__item menu__item--02">
                        <a class="menu__link" href="#">
                            <span class="menu__ttl">About</span>
                        </a>
                    </li>
                    <li class="menu__item menu__item--03">
                        <a class="menu__link" href="#">
                            <span class="menu__ttl">Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="header__bars menu-bar hidden-pc js-menu">
                <span class="menu-bar__middle"></span>
            </div>
        </header> 
    </>
  )
}

export default Header