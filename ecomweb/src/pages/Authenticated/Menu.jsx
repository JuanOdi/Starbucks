import React from 'react'
import { fetchPost } from '../../api/menu';
import { useState, useEffect } from 'react';
const Menu = () => {

  const [drinks, setDrinks] = useState([]);
  const [food, setFood] = useState([]);
  const [atHome, setAthome] = useState([]);
  const [merchandise, setMerchandise] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchPost("Drinks").then(setDrinks).catch(console.error); 
    fetchPost("Food").then(setFood).catch(console.error); 
    fetchPost("At home Coffee").then(setAthome).catch(console.error); 
    fetchPost("Merchandise").then(setMerchandise).catch(console.error);

  }, []);

  const handleClick = (category) => {
    setSelectedCategory(category);
    console.log(category);
  }
  const renderItem = (items) => {
    return (
      <ul className="p-menu__list list-02"> 
        {items.map((product, index) => (
          <li key={index} className="p-menu__item item-02">
            <a href="#">
              <img className="item-02__img" src={product.image} alt={product.name} />
              <p className="item-02__ttl">{product.name}</p>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
    <h2 className="p-menu__ttl-menu">Menu</h2>
    <div className='p-menu container'>
      <div className= "p-menu__menu-con">
        <ul className="p-menu__list list-01"> 
          <li className="p-menu__item item-01">
            <h2 className="p-menu__ttl"  onClick = {()=> handleClick('Drinks')}>Drinks</h2>
            {drinks.map((product, index) => (
              <a key={index}  href='#'>
                <p className="item-01__ttl">
                  {product.name}
                </p> 
            </a>
            ))
            }
          </li>
          <li className="p-menu__item item-01">
            <h2 className="p-menu__ttl"  onClick = {()=> handleClick('Food')}>Food</h2>
            {food.map((product, index) => (
              <a key={index}  href='#'>
                <p className="item-01__ttl">
                  {product.name}
                </p> 
            </a>
            ))
            }
          </li>
          <li className="p-menu__item item-01">
            <h2 className="p-menu__ttl"  onClick = {()=> handleClick('At Home Coffee')}>At Home Coffee</h2>
            {atHome.map((product, index) => (
              <a key={index}  href='#'>
                <p className="item-01__ttl">
                  {product.name}
                </p> 
            </a>
            ))
            }
          </li>
          <li className="p-menu__item item-01">
            <h2 className="p-menu__ttl"  onClick = {()=> handleClick('Merchandise')}>Merchandise</h2>
            {merchandise.map((product, index) => (
              <a key={index}  href='#'>
                <p className="item-01__ttl">
                  {product.name}
                </p> 
            </a>
            ))
            }
          </li>
        </ul>
      </div>
      <div className="p-menu__item-menu">
         {selectedCategory === 'All' || selectedCategory === 'Drinks'
            ? (
              <>
                <h2 className="p-menu__ttl-02">Drinks</h2>
                <img className= "item-02__img" src={renderItem.image} alt="" />
                {renderItem(drinks)}
              </>
            )
            : null}
        {selectedCategory === 'All' || selectedCategory === 'Food'
            ? (
              <>
                <h2 className="p-menu__ttl-02">Food</h2>
                <img className= "item-02__img" src={renderItem.image} alt="" />
                {renderItem(food)}
              </>
            )
            : null}
          {selectedCategory === 'All' || selectedCategory === 'At Home Coffee'
            ? (
              <>
                <h2 className="p-menu__ttl-02">At home Coffee</h2>
                <img className= "item-02__img" src={renderItem.image} alt="" />
                {renderItem(atHome)}
              </>
            )
            : null}
          {selectedCategory === 'All' || selectedCategory === 'Merchandise'
            ? (
              <>
                <h2 className="p-menu__ttl-02">Merchandise</h2>
                <img className= "item-02__img" src={renderItem.image} alt="" />
                {renderItem(merchandise)}
              </>
            )
            : null}
      </div>
    </div>
    </>

  )
}

export default Menu;