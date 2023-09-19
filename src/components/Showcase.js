import React, { useState } from "react";
import arrow from '../images/icon-arrow.svg';
import left from '../images/icon-angle-left.svg';
import right from '../images/icon-angle-right.svg';

const slides = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        mobileImg: "images/mobile-image-hero-1.jpg",
        desktopImg: "images/desktop-image-hero-1.jpg"
    },
    {
        id: 2,
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        mobileImg: "images/mobile-image-hero-2.jpg",
        desktopImg: "images/desktop-image-hero-2.jpg"
    },
    {
        id: 3,
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        mobileImg: "images/mobile-image-hero-3.jpg",
        desktopImg: "images/desktop-image-hero-3.jpg"
    }
]

const Showcase = () => {
    const [items] = useState(slides);
    const [slideIndex, setSlideIndex] = useState(0);

    function handleLeft() {
        if (slideIndex === 0) {
            setSlideIndex(2);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    };

    function handleRight() {
        if (slideIndex === 2) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    }
    return (
        <section>
            {items.map((item, index) => {
                const { id, title, text, mobileImg, desktopImg } = item;
                return (
                    <div key={id} 
                    className={slideIndex===index ? "grid grid-cols-1 lg:grid-cols-2 lg:place-items-center"
                    : "hidden"}>
                    <div className="relative">
                       <picture >
                            <source media="(min-width: 768px)" srcSet={desktopImg} />
                            <img src={mobileImg} alt={title} className="w-full"/>
                        </picture>
                        <ul className="absolute -bottom-2 right-0 flex">
                            <li>
                              <button onClick={handleLeft} className="bg-black hover:bg-neutral-700">
                                  <img  src={left} className="p-6" alt=""/>
                              </button>
                            </li>
                            <li>
                              <button onClick={handleRight} className="bg-black hover:bg-neutral-700">
                                  <img  src={right} className="p-6" alt=""/>
                              </button>
                            </li>
                        </ul>
                    </div>

                        <div className="p-8 lg:p-12">
                        
                            <h1 className=" text-slate-900 text-3xl lg:text-5xl">{title}</h1>
                            <p className="text-slate-600 opacity-75 my-6">{text}</p>
                            <button className="flex items-center gap-4
                               uppercase hover:opacity-75
                            " style={{letterSpacing:'.7rem'}}>Shop now <img src={arrow} alt="arrow" /></button>
                        </div>
                        
                    </div>
                )
            })}
        </section>
    )
}

export default Showcase;
