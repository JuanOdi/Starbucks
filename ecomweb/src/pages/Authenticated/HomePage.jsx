import React from 'react'
import Banner from '../../components/ui/Banner'
import Tabs from '../../components/ui/Tabs'
import Accordion from '../../components/ui/Accordion'

const HomePage = () => {
  return (
    <> 
      <div className="top-banner relative">
          <div className='top-banner__img img'>
            <img className= "img__main" src="./src/assets/top/banner.jpg" alt="" />
          </div>
          <p className='top-banner__ttl'>The best <br/> <span className='top-banner__coffee'>Coffee</span><br/>for the <br/> best <span className='top-banner__you'>You</span></p>
          <a href="#" className='top-banner__social'>
            <img className='top-banner__social-img' src="./src/assets/common/facebook.png" alt="" />
            <img className='top-banner__social-img' src="./src/assets/common/instagram.png" alt="" />
            <img className='top-banner__social-img' src="./src/assets/common/twitter.png" alt="" />
          </a>
          <a href="#">
            <img className='top-banner__more-btn' src="./src/assets/top/more-btn.png" alt="" />
          </a>
      </div>

      {/* Stories */}
      <section className='top-stories'>
          <div className='container'>
              <div className='top-stories__content'> 
                <img className='top-stories__img' src="./src/assets/top/top-stories_img.png" alt="" />
                <div className='top-stories__info'>
                  <p className="top-stories__text">
                    Here’s to the farmers, roasters
                    and baristas who work relentlessly
                    to craft the perfect cup.
                  </p>
                  <div className="top-stories__btn-wrap btn-group">
                    <a href="" className="top-stories__btn btn01">Explore thier stories</a>
                  </div>
                </div>
              </div>
          </div>
      </section>

      {/* Order */}
      <section className='top-order'>
        <div className="top-order__content">
          <img className='top-order__img' src="./src/assets/top/top-order_img.jpg" alt="" />
          <div className='top-order__info'>
            <p className='top-order__ttl'>One coffee. Two distinct roasts.</p>
            <p className="top-order__text">
              Here’s to the farmers, roasters
              and baristas who work relentlessly
              to craft the perfect cup.
            </p>
            <div className="top-order__btn-wrap btn-group">
              <a href="/menu" className="top-order__btn btn01">Order now</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join */}
      <section className='top-join'>
          <div className='top-join__content'>
              <img className='top-join__img' src="./src/assets/top/top-join_img.jpg" alt="" />
              <div className='top-join__info'>
                <p className="top-join__text">
                  Here’s to the farmers, roasters
                  and baristas who work relentlessly
                  to craft the perfect cup.
                </p>
                <div className="top-join__btn-wrap btn-group">
                  <a href="" className="top-join__btn btn01">Join now</a>
                </div>
              </div>
          </div>
      </section>

      {/* Learn */}
      <section className='top-learn'>
        <div className="top-learn__content">
          <img className='top-learn__img' src="./src/assets/top/top-learn_img.jpeg" alt="" />
          <div className='top-learn__info'>
            <p className='top-learn__ttl'>One coffee. Two distinct roasts.</p>
            <p className="top-learn__text">
              Here’s to the farmers, roasters
              and baristas who work relentlessly
              to craft the perfect cup.
            </p>
            <div className="top-learn__btn-wrap btn-group">
              <a href="" className="top-learn__btn btn01">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage