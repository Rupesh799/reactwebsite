import React from 'react'
import vg from '../Assets/vg.png'
import {AiFillGoogleCircle, AiFillYoutube , AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    
    <div className='home_sec' id='home'>
        <main>
            <h1>Exilers</h1>
            <p>Your solution is here.</p>
        </main>
    </div>

    <div className="home_sec2" >
        <img src={vg} alt="" srcset="" />
        <div>
            <p>
                Got Stucked?
                No problem we are here to solve your every problems.<br></br>
                No need to get worry just enjoy and be happy with your solutions.
            </p>
        </div>
    </div>

    <div className="home_sec3" id='about'>
        <div>
            <h1>Who We Are ?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima veritatis non molestias dolor at eos officiis ad. Molestias voluptatum fugiat, quae voluptatibus fugit nesciunt maiores libero obcaecati cum sint itaque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit error nihil eveniet, maxime alias vitae. Nisi, odio maxime aliquam atque minus a totam repellat quo neque, perspiciatis dolores minima!
            </p>
        </div>
    </div>

    <div className="home_sec4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle size={"40px"} />
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillYoutube size={"40px"} />
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillInstagram size={"40px"} />
                    <p>Instagram</p>
                </div>

                <div style={{
                    animationDelay:".9s"
                }}>
                    <AiFillLinkedin size={"40px"} />
                    <p>LinkedIn</p>
                </div>
            </article>
        </div>
    </div>

    </>
  )
}

export default Home