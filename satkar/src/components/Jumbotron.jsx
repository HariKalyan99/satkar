import React from 'react'
import Drawers from './Drawers'

const Jumbotron = () => {
  return (
    <div className="container py-4">
   

    <div className="mb-4 rounded-3">
    <div className='d-flex flex-column justify-content-center bg-info-subtle rounded-5'>
        <h1 className="display-5 text-center">From Classic Flavors to Unique Twists: Our Ice Cream Paradise</h1>
        </div>
      <div className="container-fluid py-5" style={{backgroundImage: "url('https://cdn.dribbble.com/users/2594512/screenshots/7082280/media/3df24ce625b107e28ef8d9531845f72b.gif')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "white", height: "600px"}}>
        
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6 about">
        <div className="h-100 p-5 text-bg-dark rounded-3" style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/027/688/179/non_2x/shot-of-freshly-delicious-ice-cream-free-photo.jpg')", backgroundPosition: "center"}}>
            <Drawers />
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-body-tertiary border rounded-3" style={{backgroundImage: "url('https://i.pinimg.com/originals/96/41/3d/96413d30c99f381d26d7c37cf31f6db4.gif')", backgroundPosition: "top center"}}>
          <h2>Welcome to Satkar: Where Every Scoop Tells a Story</h2>
          <p>Our passion for creating exceptional ice cream drives everything we do. From sourcing the finest ingredients to perfecting our recipes, we pour our hearts into each batch we churn. But our story isn't just about the ice cream - it's about the people behind it.</p>
        </div>
      </div>
    </div>

 
  </div>
  )
}

export default Jumbotron