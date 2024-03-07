import React, { useState, useEffect } from 'react';
import './carousel.scss'

const Carousel = () => {
    const [currentOffset, setCurrentOffset] = React.useState(0);
    const windowSize = 1;
    const paginationFactor = 220;
  
    const items = [
      { name: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.", tag: ['Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del ']},
      { name: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.", tag: ["Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del"] }
    ];
  
    const atEndOfList = currentOffset <= (paginationFactor * -1) * (items.length - windowSize);
    const atHeadOfList = currentOffset === 0;
  
    const moveCarousel = (direction) => {
      if (direction === 1 && !atEndOfList) {
        setCurrentOffset(currentOffset - paginationFactor);
      } else if (direction === -1 && !atHeadOfList) {
        setCurrentOffset(currentOffset + paginationFactor);
      }
    };
  
    return (
      <div className="card-carousel-wrapper">
        <div className="card-carousel">
          <div className={`card-carousel--nav__left${atHeadOfList ? "--disabled" : ""}`} onClick={() => !atHeadOfList && moveCarousel(-1)}></div>
          <div className="card-carousel--overflow-container">
            <div className="card-carousel-cards" style={{ transform: `translateX(${currentOffset}px)` }}>
              {items.map((item) => (
                <div key={item.name} className="card-carousel--card">
                    <div className='card-info'>
                  <div className='img'><img className='logo'></img></div>
                  <div className="card-carousel--card--footer">
                    <p className='header-Ccard'>{item.name}</p>
                    {item.tag.map((tag, index) => (
                      <p key={index} className={`tag ${index > 0 ? "secondary" : ""}`}>
                        {tag}
                      </p>
                    ))}
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`card-carousel--nav__right${atEndOfList ? "--disabled" : ""}`} onClick={() => !atEndOfList && moveCarousel(1)}></div>
        </div>
      </div>
    );
  };
  

export default Carousel;