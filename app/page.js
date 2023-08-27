import React from 'react'
import Navebar from './(components)/navebar/Navebar'

import Round from './(components)/Button/Round'
import Button from './(components)/Button/Button'
import Cards from './(components)/cards/cards'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
     <div className='homeback'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-5'>
          <br/>
          <br/>
          
            <h3>LOGO </h3>
           </div>
            <div className='col'>
          
          <br/>
          <br/>
              <Navebar/>
            
            </div>
        </div>
            <br /><br />
        <div className='row'>
            <div className='col'>
              <h1 >Creative </h1>
              <h1 >Digital Agencey</h1>
              <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante dui. Nulla facilisi. Vivamus nec dictum purus. Suspendisse potenti.
              </p>
              <Button title="Learn more"/>
            </div>
        </div>
      </div>
      </div>
      <h1>We Are Providing Digital services</h1>
      
      
      <div className="container">

        <div className='row'>

          <div className='col-4'>
            <Cards card="Web Developer" />
          </div>
          <div className='col-4'>
            <Cards card="Graphic Design"/>
          </div>
          <div className='col-4'>
            <Cards card="Digital Marketing" />
          </div>
        </div>
      </div>


      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Image src="/img/banner.png" width={"600"} height={400} alt="not found" />
          </div>
          <div className='col'>
            <h1>We design, build brands
              & digital projects.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit

              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident,</p>
            <Button title="Read More" />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Cards card="Smart planing" />
          </div>
          <div className='col'>
            <Cards  card="Our partnership"/>
          </div>
          <div className='col'>
            <Cards card="Super ideas"/>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='container'>

        <div className='row'>
            <div className='col'> <h2>Take A Look At Our Latest Work</h2>
            </div>
          </div>
        <div className='row'>
          <div className='col'>
            <Image src="/img/banner.png" width={"200"} height={200} alt="not found" />
          </div>
          <div className='col'>
            <Image src="/img/banner.png" width={"200"} height={200} alt="not found" />
          </div>
          <div className='col'>
            <Image src="/img/banner.png" width={"200"} height={200} alt="not found" />
          </div>
        </div>
        <br /><br />
        <div className='row'>
          <div className='col'>
            <Image src="/img/banner.png" width={"200"} height={200} alt="not found" />
          </div>
          <div className='col'>
            <Image src="/img/banner.png" width={"200"} height={200} alt="not found" />
          </div>
          <div className='col'>
            <Image src="/img/banner.png" width={"200"} height={200} alt="not found" />

          </div>
        </div>
        <div className='row'>
          <div className='col'>


            <Round title="<" />
          </div>
          <div className='col'>
            <Round title=">" />
          </div>
        </div>
      </div>
      <h2 className='our'>Our top dedicated professionals.</h2>
      <div className='container'>
        <div className='row'>

          <div className='col'>
            <Image src="/img/banner.png" width={"300"} height={300} alt="not found" />
            <h5>Duglas Walker</h5>
            <p>SHIEF STAFF</p>
          </div>
          <div className='col'>
            <Image src="/img/banner.png" width={"300"} height={300} alt="not found" />
            <h5>Caroline Harrison</h5>
            <p>FOUNDER & NANAGER</p>
          </div>
          <div className='col'>
            <Image src="/img/banner.png" width={"300"} height={300} alt="not found" />
            <h5>Safia Simpson</h5>
            <p>WEB DESIGNER</p>
          </div>
        </div>
      </div>

      
      
        <div className='container'>
          <div className='row'>
          <div className='col'>
          <h2>Choose A Plan That’s Right For You</h2>
          </div>
          </div>
          <div className='endcard'>
          <div className='row'>
          <div className='col'>
            <div className='cardbase'>
              <h3>Basic Plan</h3>
              <Image src="/img/banner.png" width={"80"} height={"80"} alt="not found" className='img' />
              <h3>$50/month</h3>
              <p>Graphic Design <br />
                Web Design <br />
                UI/UX<br />
                HTML/CSS<br />
                SEO Marketing<br />
                Business Analysis</p>
              <Button title="Start now" />
              </div>
            </div>

            <div className='col'>
            <div className='cardbase'>
              <h3>Standart Plan</h3>
              <Image src="/img/banner.png" width={"80"} height={"80"} alt="not found" className='img' />
              <h3>$99/month</h3>
              <p>Graphic Design <br />
                Web Design <br />
                UI/UX<br />
                HTML/CSS<br />
                SEO Marketing<br />
                Business Analysis</p>
              <Button title="Start now" />
            </div>
            </div>

            <div className='col'>
            <div className='cardbase'>
              <h3>Premium Plan</h3>
              <Image src="/img/banner.png" width={"80"} height={"80"} alt="not found" className='img' />
              <h3>$150/month</h3>
              <p>Graphic Design <br />
                Web Design <br />
                UI/UX<br />
                HTML/CSS<br />
                SEO Marketing<br />
                Business Analysis</p>
              <Button title="Start now" />
            </div>
            </div>

          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='bluesec'>
        <div className='homeback'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <h2>We’re trusted by clients.</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='twocard'>
                <Image src="/img/banner.png" width={"80"} height={"80"} alt="not found" className='img' />
                <h4>Mina Whatson</h4>
                <p>CONSULTANT</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, </p>
              </div>
            </div>

            <div className='col'>
              <div className='twocard'>

                <Image src="/img/banner.png" width={"80"} height={"80"} alt="not found" className='img' />
                <h4>Edward Hunter</h4>
                <p>IT SPCIALIST</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Letest News & Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
sed do eiusmod tempor incididunt labo. </p>
<input type='email'></input>
<Button title=">"/>


          </div>
          <div className='col'>
            <h5>Maecenas laoree efficiture sagittis
              aliquam eleifend nisl.</h5>
            <h5>Posted 7 MArch, 2020</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,</p>
          </div>
          <div className='col'>
            <h5>Maecenas laoree efficiture sagittis
              aliquam eleifend nisl.</h5>
            <h5>Posted 7 MArch, 2020</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,</p>
          </div>
        </div>
      </div>
    </div>
  )
}
