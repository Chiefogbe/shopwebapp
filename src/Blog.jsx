import React from 'react'
import clientImage from './images/client.jpg'

const Blog = () => {
  return (
    <div>

      <div className='blogContainer'>
        <div>
          <div  className='BlogdeskTopView'>
            <div className='tryDiv'>
            <div className='first'>
                <div className='topImage'>
                <div className='inside'>
                  <h4>14</h4>
                  <h4>July</h4>
              </div>
            </div>

            <div className='bottomDiv'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga magni nihil voluptas deserunt nam minus facilis, accusantium saepe dolorem, voluptatem ex iste repellendus debitis, numquam iusto reprehenderit eos. Sit.</p>
              <button>Read More</button>
            </div>
            </div>

            <div className='third'>
                <div className='topImage3'>
                <div className='inside'>
                  <h4>16</h4>
                  <h4>July</h4>
              </div>
            </div>

            <div className='bottomDiv'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga magni nihil voluptas deserunt nam minus facilis, accusantium saepe dolorem, voluptatem ex iste repellendus debitis, numquam iusto reprehenderit eos. Sit.</p>
              <button>Read More</button>
            </div>
            </div>
            </div>

          </div>
          
          <div className='testimonial'>
            <h3>TESTIMONIAL</h3>

             <div className='testimonial-flex'>
             <div className='testimonial1'>
                <img src={clientImage} alt="" className='clientImage' />
                <h4>Samantha Jones</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem, eaque laborum praesentium doloribus neque deserunt ratione eius ab excepturi temporibus cumque quo, minus totam amet tenetur ad est expedita.</p>
              </div> 

              <div className='testimonial1'>
                <img src={clientImage} alt="" className='clientImage' />
                <h4>Mathina Jones</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem, eaque laborum praesentium doloribus neque deserunt ratione eius ab excepturi temporibus cumque quo, minus totam amet tenetur ad est expedita.</p>
              </div> 

              <div className='testimonial1'>
                <img src={clientImage} alt="" className='clientImage' />
                <h4>Clara Jones</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem, eaque laborum praesentium doloribus neque deserunt ratione eius ab excepturi temporibus cumque quo, minus totam amet tenetur ad est expedita.</p>
              </div> 
             </div>



          </div>
        </div>
      </div>

        {/* <Footer/> */}
    </div>
  )
}

export default Blog
