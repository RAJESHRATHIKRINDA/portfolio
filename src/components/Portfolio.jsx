import React from "react";
import pizza from "../assets/portfolio/pizza.png"
import Emart from "../assets/portfolio/emart.png"
import shopping from "../assets/portfolio/shopping.png"
import './portfolio.css';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pizza,
      link: '',
      repo: 'https://rajesh-pizza-website.netlify.app'
    },
   
    {
      id: 3,
      src: Emart,
      link: '',
      repo: 'https://rajesh-e-mart.netlify.app'
    },
    {
      id: 4,
      src: shopping,
      link: '',
      repo: 'https://shopping-timeeeee.netlify.app'
    },
   
  ];

  return (
    <div
      name="services"
      className="bg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Services
          </p>
          <p className="py-6">Synergy Universal is synonymous with exceptional quality. With our team of creative experts and state-of-the-art production facility, we deliver projects swiftly without compromising on the high standards that our clients demand. From web development to app development, digital marketing to database management, we infuse every project with unmatched precision and finesse. Partner with us to experience the pinnacle of quality and achieve remarkable results for your business.</p>
        </div>
        

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  Click
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
