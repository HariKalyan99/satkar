import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "../App.css";
 import Cards from './Cards';

import { EffectCreative } from "swiper/modules";

export default function Swipers() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {[
          {
            juice: "Tropical Sunrise",
            description:
              "A blend of pineapple, mango, and passionfruit juices, offering a burst of tropical sweetness and vitamin C to energize your day. Speciality: Refreshing and invigorating, perfect for a morning pick-me-up or a sunny afternoon treat.",
            image:
              "https://www.liquor.com/thmb/4a5XHgm78VxmIq6AJ5Zq3VK12a4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tequila-sunrise-1500x1500-hero-eeae10efeb134a3e9d5a3852b1b6e7dc.jpg",
          },
          {
            juice: "Citrus Splash",
            description:
              " A zesty mix of orange, grapefruit, and lemon juices, packed with vitamin C and antioxidants to boost immunity and awaken the senses. Speciality: Tangy and revitalizing, ideal for a refreshing morning drink or a refreshing palate cleanser.",
            image:
              "https://thesurvivalmom.com/wp-content/uploads/2022/03/mateusz-feliksik-TmOGarNOGFs-unsplash-scaled.jpg",
          },

          {
            juice: "Berry Bliss",
            description:
              "A medley of strawberries, blueberries, raspberries, and blackberries, bursting with antioxidants and natural sweetness for a delightful berry explosion. Speciality: Sweet and indulgent, great for satisfying sugar cravings while providing a healthy dose of vitamins and minerals.",
            image:
              "https://recipes.net/wp-content/uploads/2023/05/jamba-juice-berry-blend-smoothie_05894fe47bb93b5f426340f9beb2ecbb.jpeg",
          },

          {
            juice: "Green Goddess",
            description:
              "A blend of kale, spinach, cucumber, celery, and green apple juices, packed with vitamins, minerals, and detoxifying properties to nourish and cleanse the body. Speciality: Nutrient-rich and revitalizing, perfect for supporting a healthy lifestyle and promoting inner balance.",
            image:
              "https://livingfreshdaily.com/wp-content/uploads/elementor/thumbs/green-goddess-juice-in-a-blender-og3ec2w2t3vrg4hn9zqhro6qlmwbohybuu4k8bija8.png",
          },

          {
            juice: "Watermelon Wonder",
            description:
              "Pure watermelon juice, refreshing and hydrating with a subtle sweetness that quenches thirst on hot summer days. Speciality: Light and hydrating, excellent for staying cool and refreshed while enjoying a burst of natural flavor.",
            image:
              "https://bbproductreviews.com/wp-content/uploads/2019/08/Wonder-Melon-17-682x1024.jpg",
          },

          {
            juice: "Carrot Craze",
            description:
              "Freshly pressed carrot juice, rich in beta-carotene and antioxidants, with a naturally sweet and earthy flavor profile. Speciality: Nutrient-dense and rejuvenating, great for promoting healthy skin, vision, and overall well-being.",
            image:
              "https://www.turntablekitchen.com/_uploads/carrot_gingerjuice_2.jpg",
          },

          {
            juice: "Pineapple Paradise",
            description:
              "Juicy pineapple juice, tangy and tropical with a refreshing acidity that transports you to a sunny island getaway. Speciality: Bright and uplifting, perfect for adding a touch of tropical flair to your day and boosting mood and energy levels.",
            image:
              "https://heybairtender.s3.amazonaws.com/recipes/pineapple-paradise.png",
          },
          {
            juice: "Beet Berry Blast",
            description:
              "A combination of beetroot, apple, and mixed berry juices, offering a unique blend of earthy sweetness and tart berry flavors, along with a powerhouse of vitamins and antioxidants. Speciality: Energizing and detoxifying, great for supporting cardiovascular health and boosting stamina and endurance.",
            image:
              "https://impactmagazine.ca/wp-content/uploads/2018/11/SO18/SO18-Recipe-BeetBerryBlast.jpg",
          },
        ].map((glass, ind) => (
          <SwiperSlide key={ind}><Cards juice={glass.juice} description={glass.description} image={glass.image}/></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}




 
