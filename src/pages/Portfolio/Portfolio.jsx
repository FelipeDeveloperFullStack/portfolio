// CSS
import "./Portfolio.css"
import styles from "./Portfolio.module.css"
// HOOKS 
import { useState, useEffect, useRef } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// COMPONENT
import Transition from "../../components/Transition";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules";

// import { Pagination, Navigation, Scrollbar } from "swiper/modules"
// IMGAGENS
import Portfolio_img0 from "../Home/imgs/project_0.png"
import Portfolio_img1 from "../Home/imgs/project_1.png"
import Portfolio_img2 from "../Home/imgs/project_2.png"

const Portfolio = () => {
  const [slidePerview, setSlidePerview] = useState(3);
  const [initialSlide, setInicialSlide] = useState(1)
  const [transitionCompleted, setTransitionCompleted] = useState(false);

  const data = [
    {
      id: 0,
      image: Portfolio_img1,
      name: "Secret World",
      description: "Este é um projeto de jogo de palavras secretas construído em React com Vite e TypeScript. Consiste em adivinhar palavras por meio de pistas com um número limitado de tentativas onde as letras corretas serão exibidas nos painéis e as erradas em uma lista ganhando e somando pontos a cada palavra adivinhada",
      technologies: [ 
        "React",
        "Hooks",
        "Typescript",
        "Javascript",
        "CSS",
        "HTML",
      ],
      linkDeploy:"https://israelkilday.github.io/Secret-Word/",
      linkRepository: "https://github.com/Israelkilday/Secret-Word",    
    },

    {
      id: 1,
      image: Portfolio_img0,
      name: "Music Blog",
      description: "Este é um projeto pessoal, uma aplicação web construída com React, integrada ao Firebase para criar, editar e visualizar Posts. O objetivo é criar Posts falando de música em geral, aproveitei para iniciar o Blog postando sobre algumas de minhas bandas favoritas, mais sinta-se a vontade para postar sobre qualquer estilo musical!",
      technologies: [ 
        "React",
        "React Router Dom",
        "Context API",
        "Typescript",
        "Javascript",
        "CSS",
        "HTML",
        "Firebase",
        "Firestore"
      ],
      linkDeploy:"https://musicblog-drab.vercel.app/",
      linkRepository: "https://github.com/Israelkilday/musicblog",       
    },

    {
      id: 2,
      image: Portfolio_img2,
      name: "Rede Social feita com ReactJS",
      description: "Projeto em produção, estou me desafiando em fazer uma Rede social utilizando ReactJs e outras tecnologias, Trabalhando para que logo esteja disponível por aqui!",
      technologies: [ 
        "XXX",
        "XXX",
        "XXX",
      ], 
      linkRepository: "https://github.com/Israelkilday",
    },
  ];

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
    <Transition onAnimationComplete={() => setTransitionCompleted(true)}>
    {transitionCompleted && (
      <div className={styles.container}>
        <h1 className="heading"><span>//</span> Principais projetos</h1>

        <Swiper
          className="animation-cards"
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
          initialSlide={initialSlide}
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
                  
                  <div className="technologies">
                    <h3>Tecnologias Ultilizadas:</h3>
                    <ul>
                        {item.technologies && item.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                    </ul>                  
                  </div>

                  <div className="links">
                    <NavLink 
                      to={item.linkDeploy}
                      className="link"
                    >
                      Deploy
                    </NavLink>

                    <NavLink 
                      to={item.linkRepository} 
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
    )};        
    </Transition>
  );
};

export default Portfolio;

