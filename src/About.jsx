import React from 'react'
import aboutImage from './images/about-img.jpg'


const About = () => {
  return (
    <div> 

        <div className='aboutContainer'>
          <div>
            <div className='aboutabout'>  
              <div>
                <img src={aboutImage} alt="" className='aboutImages'/>
              </div>

                <div className='about-us'>
                  <h2>About Us</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptas accusamus quidem autem. Dolorem eligendi officiis non laborum expedita dolor, molestiae quaerat qui, facilis ex incidunt minus eius iste maxime!</p>
                  <button>Read More</button>
                </div>
           </div>

            <div className='percentDiv'>
            <div className='percent1'>
              <h2>Upto 15%</h2>
              <h2>Off</h2>
              <button>Shop Now</button>
            </div>

            <div className='percent3'>
              <h2>Upto 15%</h2>
              <h2>Off</h2>
              <button>Shop Now</button>
            </div>

            <div className='percent2'>
              <h2>Upto 15%</h2>
              <h2>Off</h2>
              <button>Shop Now</button>
            </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default About
