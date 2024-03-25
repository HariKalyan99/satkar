import React from 'react'
import Swipers from './Swipers'

const Jumbo = () => {
  return (
    <main>
  <div class="container py-4">
  

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-1 text-bg-light">
          <Swipers />
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 ">
        <div className="container-fluid py-5" style={{backgroundImage: "url('https://i.pinimg.com/originals/44/43/d2/4443d2b3020f091c48d20a02e32e26b4.gif')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "white", height: "410px"}}>

        </div> 
        </div>
      </div>
    </div>

    
  </div>
</main>
  )
}

export default Jumbo




