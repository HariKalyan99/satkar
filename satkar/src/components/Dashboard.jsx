import React from "react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import Jumbotron from "./Jumbotron";
import Modals from "./Modals";
import Testimonials from "./Testimonials";
import Jumbo from "./Jumbo";
import { Tooltip } from "antd";
import Hero from "./Hero";
import Contact from "./Contact";
import Accordions from "./Accordions";
const Dashboard = () => {
  return (
    <main >
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mb-5 mt-5 m-sm-0 "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hero} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={hero2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={hero3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Jumbotron />

      <div className="container marketing">
        <hr />
        <p className="fw-light" style={{ textAlign: "center" }}>
          Hello, we're not just any frozen treat – we're the embodiment of joy,
          the epitome of indulgence, and the essence of sweet satisfaction. From
          creamy classics to exotic extravaganzas, we come in all flavors and
          forms to tantalize your taste buds and tickle your senses. So, grab a
          spoon and dive into a world of delicious delights, because with us,
          every scoop is a celebration!
        </p>

        <div class="row my-5">
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://www.homemadefoodjunkie.com/wp-content/uploads/2023/02/vanilla-bean-ice-cream-1024x1024.jpg.webp"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Vanilla Bean</h2>
            <p>
              <Modals
                flavor={"Vanilla Bean"}
                content={
                  "Classic and creamy, made with real vanilla beans for a rich and aromatic flavor."
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://img.freepik.com/premium-photo/coffee-toffee-crunch-ice-cream-delight-isolated-transparent-background_995162-9311.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Coffee Toffee Crunch</h2>
            <p>
              <Modals
                flavor={"Coffee Toffee Crunch"}
                content={
                  "Rich coffee-flavored ice cream infused with crunchy toffee bits, providing a bold and energizing taste"
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxK5K9UTPTquZN2ImblJlVRIqc-g5l0GAGv-RKilOS3w&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Salted Caramel Pretzel</h2>
            <p>
              <Modals
                flavor={"Salted Caramel Pretzel"}
                content={
                  "Creamy caramel ice cream with swirls of salted caramel and crunchy pretzel pieces, offering a sweet and salty flavor explosion"
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphE0mWIzfHCTlq32TVcrQRpp32bM421B9qIIKab2KMw&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Pistachio Almond</h2>
            <p>
              <Modals
                flavor={"Pistachio Almond"}
                content={
                  "Nutty pistachio-flavored ice cream mixed with toasted almonds, creating a sophisticated and indulgent treat."
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://beamingbaker.com/wp-content/uploads/2015/01/IGT-2-Ingredient-Pineapple-Coconut-Sorbet-Paleo-Dairy-Free-Vegan-1.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Coconut Pineapple</h2>
            <p>
              <Modals
                flavor={"Coconut Pineapple"}
                content={
                  "Creamy coconut ice cream with chunks of juicy pineapple, transporting your taste buds to a tropical paradise with every spoonful."
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://celebrationgeneration.com/wp-content/uploads/2021/04/Maple-Walnut-Ice-Cream-2-500x375.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Maple Walnut</h2>
            <p>
              <Modals
                flavor={"Maple Walnut"}
                content={
                  "Rich maple-flavored ice cream studded with crunchy walnuts, evoking the cozy sweetness of maple syrup"
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmy83ezE2YJswd4zB-MLVWa_HgGJrtkbUa-XFcDOPqw&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Rocky Road</h2>
            <p>
              <Modals
                flavor={"Rocky Road"}
                content={
                  " Indulgent chocolate ice cream with swirls of marshmallow and crunchy almonds, offering a delightful combination of textures and flavors."
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://www.chewoutloud.com/wp-content/uploads/2013/08/cookies-and-cream-in-white-bowl.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Cookies and Cream</h2>
            <p>
              <Modals
                flavor={"Cookies and Cream"}
                content={
                  "Smooth vanilla ice cream loaded with chunks of chocolate sandwich cookies, delivering a satisfying crunch with every bite."
                }
              />
            </p>
          </div>
          <div class="col-lg-4 d-flex flex-column align-items-center text-center ">
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "none",
                borderBottomLeftRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-JS77wHc0qABK5AVaxD-6Sl3EtAk3xZ4cB05RBziEA&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "200px", width: "200px" }}
              />
            </div>
            <h2 class="fw-normal">Mint Chocolate Chip</h2>
            <p>
              <Modals
                flavor={"Mint Chocolate Chip"}
                content={
                  "Refreshing mint ice cream packed with generous amounts of chocolate chips, providing a perfect balance of coolness and richness."
                }
              />
            </p>
          </div>
        </div>
        </div>
          
        <div>
       <Hero />

              </div>
        <div className="container">


        <div className="row featurette ">
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Gen Z Delight:{" "}
              <span className="text-body-secondary">
                A Fusion of Fun and Flavor
              </span>
            </h2>
            


            <div class="col-lg-4 d-flex align-items-center justify-content-center text-center ">
              <Tooltip title={"Unicorn Dream"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://i.pinimg.com/736x/85/c8/07/85c807b0b6f451d8918d52afa23edfbb.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            <Tooltip title={"Avocado Smash"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://www.wellplated.com/wp-content/uploads/2021/05/Avocado-Ice-Cream-from-Scratch.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            <Tooltip title={"TikTok Tiramisu"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://thewoodandspoon.com/wp-content/uploads/2023/04/IMG_0282-jpg.webp"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            </div>

          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <div
              style={{
                height: "300px",
                width: "300px",
                border: "none",
                overflow: "hidden",
                opacity: "0.9",
                borderTopLeftRadius: "20%",
              }}
            >
              <img
                src="https://www.streetfoody.it/site/assets/files/2806/amici-che-si-divertono-alla-loro-riunione_1.1103x0-is.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "300px", width: "300px" }}
              />
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2 d-flex flex-column justify-content-center align-items-center">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Introducing Gen Y Scoops:{" "}
              <span className="text-body-secondary">
                Where Nostalgia Meets Innovation
              </span>
            </h2>

            <div class="col-lg-4 d-flex align-items-center justify-content-center text-center ">
              <Tooltip title={"Millennial Mocha Madness"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDkl6t3G_ledGj-uEJYya7RpNYmM9w2BbqK8mNLkhJQ&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            <Tooltip title={"S'mores Spectacular"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "40%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjIGT3B9B-EivmwXPFKXFwXaBFyI4w-PkGlOGAXbYAQ&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            <Tooltip title={"Coconut Chai Cha-Cha"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://kitchenconfidante.com/wp-content/uploads/2012/07/Chai-Tea-Ice-Cream-Kitchen-Confidante-5-620x580.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            </div>
          </div>
          <div className="col-md-5 order-md-1 d-flex justify-content-center">
            <div
              style={{
                height: "300px",
                width: "300px",
                border: "none",
                overflow: "hidden",
                opacity: "0.9",
                borderTopRightRadius: "20%",
              }}
            >
              <img
                src="https://www.unilever.com/content-images/92ui5egz/production/304c5ec4354d6e40734854792ac1346fec654c2f-1920x1080.jpg?rect=0,36,1920,1008&w=1200&h=630&fm=jpg"
                alt="content writing image"
                style={{ objectFit: "fill", height: "300px", width: "300px" }}
              />
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />
        
        <div className="row featurette">
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
            <h2 className="featurette-heading fw-normal lh-1 text-center">
              Welcome to Alpha Bites Ice Cream:{" "}
              <span className="text-body-secondary">
                Where Every Scoop Tells a Story{" "}
              </span>
            </h2>

            <div class="col-lg-4 d-flex align-items-center justify-content-center text-center ">
              <Tooltip title={"Fairy Princess Swirl"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2OS-gygQrUKrWAQBetdm55NjThkloQnsYnH1oo48wA&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            <Tooltip title={"Dinosaur Crunch"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/628cc9f4e74da065413fc6b9/8edcd074-b819-43c8-a5a9-99a06c9adc7d/IMG_6927.jpeg?format=1000w"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            <Tooltip title={"Galactic Gummy Blast"}>
            <div
              style={{
                height: "60px",
                width: "60px",
                margin: "10px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="opac"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIaqPkLgvszCHvGpyxH2wANErAEoL5cdB3E3YqXR53Q&s"
                alt="content writing image"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
            </div>
            </Tooltip>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <div
              style={{
                height: "300px",
                width: "300px",
                border: "none",
                overflow: "hidden",
                opacity: "0.9",
                borderTopLeftRadius: "20%",
              }}
            >
              <img
                src="https://miro.medium.com/v2/resize:fill:1200:1200/g:fp:0.52:0.45/1*w0naUJw3hmWNXpmyyvy4qg.jpeg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "300px", width: "300px" }}
              />
            </div>
          </div>
        </div>


       </div>

              
        
       <div className="container mt-5">

        {/* <h1 style={{ textAlign: "center" }}>Never forget!</h1> */}

        
        <div className="mb-4 rounded-3">
          <div className="d-flex justify-content-center rounded-5 p-2" style={{backgroundColor: "#f0d6f8"}}>
            <h2 className="featurette-heading fw-normal ">
              Embracing Nature's Essence:{" "}
                Our Natural Fruit Juice Selection
            </h2>
          </div>
        </div>
        <p className="fw-light text-center">
          At Satkar, we celebrate the vibrant flavors and nourishing benefits of
          natural fruit juices. Our collection of pure fruit juices is a
          testament to our commitment to offering the freshest and most
          flavorful beverages for our customers.
        </p>
        <Jumbo />
        
        

        {/* <div className="container">
          <Swipers />
        </div> */}

        {/* <div class="album py-5">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             {[
                {juice: "Tropical Sunrise", description: "A blend of pineapple, mango, and passionfruit juices, offering a burst of tropical sweetness and vitamin C to energize your day. Speciality: Refreshing and invigorating, perfect for a morning pick-me-up or a sunny afternoon treat.", image: "https://www.liquor.com/thmb/4a5XHgm78VxmIq6AJ5Zq3VK12a4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tequila-sunrise-1500x1500-hero-eeae10efeb134a3e9d5a3852b1b6e7dc.jpg"},
                {juice: "Citrus Splash", description: " A zesty mix of orange, grapefruit, and lemon juices, packed with vitamin C and antioxidants to boost immunity and awaken the senses. Speciality: Tangy and revitalizing, ideal for a refreshing morning drink or a refreshing palate cleanser.", image: "https://thesurvivalmom.com/wp-content/uploads/2022/03/mateusz-feliksik-TmOGarNOGFs-unsplash-scaled.jpg"},

                {juice: "Berry Bliss", description: "A medley of strawberries, blueberries, raspberries, and blackberries, bursting with antioxidants and natural sweetness for a delightful berry explosion. Speciality: Sweet and indulgent, great for satisfying sugar cravings while providing a healthy dose of vitamins and minerals.", image: "https://recipes.net/wp-content/uploads/2023/05/jamba-juice-berry-blend-smoothie_05894fe47bb93b5f426340f9beb2ecbb.jpeg"},

                {juice: "Green Goddess", description: "A blend of kale, spinach, cucumber, celery, and green apple juices, packed with vitamins, minerals, and detoxifying properties to nourish and cleanse the body. Speciality: Nutrient-rich and revitalizing, perfect for supporting a healthy lifestyle and promoting inner balance.", image: "https://livingfreshdaily.com/wp-content/uploads/elementor/thumbs/green-goddess-juice-in-a-blender-og3ec2w2t3vrg4hn9zqhro6qlmwbohybuu4k8bija8.png"},

                {juice: "Watermelon Wonder", description: "Pure watermelon juice, refreshing and hydrating with a subtle sweetness that quenches thirst on hot summer days. Speciality: Light and hydrating, excellent for staying cool and refreshed while enjoying a burst of natural flavor.", image: "https://bbproductreviews.com/wp-content/uploads/2019/08/Wonder-Melon-17-682x1024.jpg"},

                {juice: "Carrot Craze", description: "Freshly pressed carrot juice, rich in beta-carotene and antioxidants, with a naturally sweet and earthy flavor profile. Speciality: Nutrient-dense and rejuvenating, great for promoting healthy skin, vision, and overall well-being.", image: "https://www.turntablekitchen.com/_uploads/carrot_gingerjuice_2.jpg"},

                {juice: "Pineapple Paradise", description: "Juicy pineapple juice, tangy and tropical with a refreshing acidity that transports you to a sunny island getaway. Speciality: Bright and uplifting, perfect for adding a touch of tropical flair to your day and boosting mood and energy levels.", image: "https://heybairtender.s3.amazonaws.com/recipes/pineapple-paradise.png"},
                {juice: "Beet Berry Blast", description: "A combination of beetroot, apple, and mixed berry juices, offering a unique blend of earthy sweetness and tart berry flavors, along with a powerhouse of vitamins and antioxidants. Speciality: Energizing and detoxifying, great for supporting cardiovascular health and boosting stamina and endurance.", image:"https://impactmagazine.ca/wp-content/uploads/2018/11/SO18/SO18-Recipe-BeetBerryBlast.jpg"},
                
                ].map((glass, ind) => 
              <Cards key={ind} juice={glass.juice} description={glass.description} image={glass.image}/>
            )}
      </div>
    </div>
  </div>
         */}
        <hr className="featurette-divider" />
        <div className="container-fluid">
      <Contact />
      </div>
      </div>

      

      
      
      <h1 className="text-center">Customer satisfaction</h1>

      <div className="container">
      <Testimonials />
      </div>
      <hr className="featurette-divider" />
<div className="container">
  <h1 className="text-center">FAQ's</h1>
<Accordions />
</div>

      <hr className="featurette-divider" />
      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2024 SATKAR, Inc. · <a style={{textDecoration: "none"}}  href="#">Privacy</a> · <a style={{textDecoration: "none"}} href="#">Terms</a>
        </p>
      </footer>
    </main>
  );
};

export default Dashboard;
