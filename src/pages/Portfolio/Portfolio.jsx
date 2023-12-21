// CSS
import "./Portfolio.css"
import styles from "./Portfolio.module.css"
// HOOKS 
import { useState, useEffect, useRef } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// COMPONENT
import Transition from "../../components/Transition";

// REACT ICONS
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, EffectFlip, EffectCoverflow } from "swiper/modules";
// import "swiper/css/effect-coverflow";
import { Pagination, Navigation, Scrollbar } from "swiper/modules"
// IMGAGENS
import Portfolio_img0 from "../Home/imgs/project_0.png"
import Portfolio_img1 from "../Home/imgs/project_1.png"
import Portfolio_img2 from "../Home/imgs/project_2.png"

const Portfolio = () => {
  const [slidePerview, setSlidePerview] = useState(3);

  const data = [
    {
      id: 0,
      image: Portfolio_img0,
      name: "Music Blog",
      description: "Este é um projeto pessoal, uma aplicação web construída com React, integrada ao Firebase para criar, editar e visualizar Posts. O objetivo é criar Posts falando de música em geral, aproveitei para iniciar o Blog postando sobre algumas de minhas bandas favoritas, mais sinta-se a vontade para postar sobre qualquer estilo musical! ---- Tecnologias ultilizadas: { React - React Router Dom - Context API - Typescript - Javascript - CSS - HTML - Git - Firebase - Firestore - Vercel - Vite }"       
    },

    {
      id: 1,
      image: Portfolio_img1,
      name: "Project_1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, laudantium illo. Omnis eos laborum saepe repellendus doloremque corporis laudantium voluptates temporibus eligendi, vitae rerum ea ab ad autem. Eius, maxime?"
    },

    {
      id: 2,
      image: Portfolio_img2,
      name: "Project_2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, laudantium illo. Omnis eos laborum saepe repellendus doloremque corporis laudantium voluptates temporibus eligendi, vitae rerum ea ab ad autem. Eius, maxime?"
    },

    // {
    //   id: 3,
    //   image: Portfolio_img1,
    //   name: "Project_3",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, laudantium illo. Omnis eos laborum saepe repellendus doloremque corporis laudantium voluptates temporibus eligendi, vitae rerum ea ab ad autem. Eius, maxime?"
    // }
  ]

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(1);
      } else {
        setSlidePerview(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  });

  return (
    <Transition>
      {/* <div className={styles.container}> */}
      <div className="container">
        <h1 className="heading"><span>//</span> Principais projetos</h1>

        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          coverflowEffect={{ 
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          
          slidesPerView={slidePerview}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} >
              <div className="portfolio_container">
                <img src={item.image}
                  alt={item.name}
                  className="item_slide"
                />
                <div className="portfolio_content">
                  <h2 className="name">{item.name}</h2>
                  <p className="description">{item.description}</p>

                  <div className="links">
                    <NavLink 
                      to="https://musicblog-drab.vercel.app/" 
                      className="link"
                    >
                      Deploy
                    </NavLink>

                    <NavLink 
                      to="https://github.com/Israelkilday/musicblog" 
                      className="link"
                    >
                      Saiba Mais
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Transition>
  );
};

export default Portfolio;



// effect={"coverflow"}
// grabCursor={true}
// centeredSlides={true}
// loop={false}
// slidesPerView={3}
// coverflowEffect={{ 
//   rotate: 0,
//   stretch: 0,
//   depth: 100,
//   modifier: 2.5,
// }}

// pagination={{ el: '.swiper-pagination', clickable: true }}
// navigation={{
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
//   clickable: true,
// }}
// modules={[EffectCoverflow, EffectFade, Pagination, Navigation]}
// className="swiper_container"



          // <div className="slider-controler">
          //   <div className="swiper-button-prev slider-arrow">
          //     <ion-icon name="arrow-back-outline"></ion-icon>
          //   </div>

          //   <div className="swiper-button-next slider-arrow">
          //     <ion-icon name="arrow-forward-outline"></ion-icon>
          //   </div>

          //   <div className="swiper-pagination"></div>
          // </div> 

















//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => {
//       const nextIndex = (prevIndex + 1) % itemsData.length;
//       console.log("Next Index:", nextIndex);
//       return nextIndex;

//     });
//   };

//   const handle
//             <div className={styles.content}>
//               <div className={styles.name}>{item.name}</div>
//               <div className={styles.description}>
//                 <p>{item.description}</p>
//               </div>
//               <button>Saiba Mais</button>
//             </div>
//
//         ))}
//         <div className={styles.navigate}>
//           <button className={styles.prev} onClick={handlePrev}>
//             <FaArrowLeft />
//           </button>
//           <button className={styles.next} onClick={handleNext}>
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>