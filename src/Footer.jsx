import React from 'react'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.jpg'
import linkedln from './images/linkedln.png'
import green from './images/p1.png'
import golden from './images/p2.png'
import location from './images/location.png'
import call from './images/call.png'
import email from './images/email.png'

const Footer = () => {
  return (
    <div>

      <div className='bigFooterContainer'>
        <div>
          <div className='input-social-media'>
            <div>
              <input type="text" name="" id="" placeholder='Enter Your Email' />
            </div>

            <div>
             <img src={facebook} alt="" className='social-media-icon'/>
             <img src={twitter} alt="" className='social-media-icon'/>
             <img src={linkedln} alt="" className='social-media-icon'/>
             <img src={instagram} alt="" className='social-media-icon'/>
            </div>
          </div>

          <div className='menu-insta'>
            <div className='menuBox'>
              <h2>Menu</h2>
              <h5>Home</h5>
              <h5>About</h5>
              <h5>Shop</h5>
              <h5>Blog</h5>
            </div>

            <div>
              <h2>Instagram</h2>
              <div className='instaImagesContainer'>
                <div className='instaImgDiv'>
                  <img src={green} alt="" className='instaImg'/>
                  <p>Emerald Necklace.</p>
                </div>

                <div className='instaImgDiv'>
                  <img src={golden} alt="" className='instaImg'/>
                  <p>Golden Chain</p>
                </div>


              </div>
            </div>
          </div>

          <div className='about-contact'>
            <div className='aboutDiv'>
              <h2>About us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde ratione, voluptates repellendus vero ex. Iusto tenetur omnis possimus praesentium architecto necessitatibus, aliquam ad facere earum incidunt, debitis, ab repellendus.</p>
            </div>

            <div>
              <h2>Contact us</h2>

              <div className='contactIconDiv'>
                <img src={location} alt="" className='contact-icons' />
                  <h5>Location</h5>
              </div>

              <div className='contactIconDiv'>
                <img src={call} alt="" className='contact-icons' />
                <h5>+01 12234567890</h5>
              </div>

              <div className='contactIconDiv'>
                <img src={email} alt="" className='contact-icons' />
                <h5>Mail@gmail.com</h5>
              </div>

            </div>

          </div>





        </div>
      </div>






    </div>
  )
}

export default Footer
