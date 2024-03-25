import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const simplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}>
            Prev
        </div>
    )
}


const simpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}>
            Next
        </div>
    )
}






const SpecialDishes = () => {

    const [recipies, setRecipies] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                const specials = data.filter((item) => item.category === "popular");
                // console.log(specials);
                setRecipies(specials);

            });
    }, []);

    // console.log(recipies);

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ],
        nextArrow: <simpleNextArrow />,
        prevArrow: <simplePrevArrow />
    };

    return (
        <div className='section-container py-20'>
            <div className='relative'>

                <div className='text-left'>
                    <p className="sub-title">Special Dishes</p>
                    <h3 className='title md:w-[520px]'>Standout Dishes from our Menu</h3>
                </div>

                {/* Arrow Button  */}
                <div className='md absolute right-3 top-8 mb-10 md:mr-24 '>
                    <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>
                        <FaAngleLeft className='w-8 h-8 p-1' />
                    </button>
                    <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green'>
                        <FaAngleRight className='w-8 h-8 p-1' />
                    </button>
                </div>



                <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
                    {
                        recipies.map((item, i) =>
                        (
                            <Cards key={i} item={item} />
                        ))
                    }
                </Slider>

            </div>
        </div>
    )
}

export default SpecialDishes