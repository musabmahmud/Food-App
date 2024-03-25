import React, { useEffect, useState } from 'react'

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCaterogy, setSelectedCaterogy] = useState("all");
    const [sortOption, setSortOption] = useState("default");


    //loading data

    useEffect(() => {
        //fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("/menu.json");
                const data = await response.json();
                // console.log(data)
                setMenu(data);
                setFilteredItems(data);
            }
            catch (error) {
                console.log("Error fetching data", error)
            }
        }
        //call the function
        fetchData();
    }, [])

    //filtering data based on category

    const filterItems = (category) => {
        const filtered = category === "all"
            ? menu
            : menu.filter((item) => item.category === category);

        setFilteredItems(filterItems);
        setSelectedCaterogy(category);
    }


    return (

        <div className="section-container  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
            <div className="flex py-48 flex-col justify-center items-center sm:gap-0 gap-20">
                {/* Header Text */}
                <div className='space-y-7 px-4 text-center'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug capitalize'>For the Love of Delicious <span className='text-green'>Food</span></h2>
                    <p className='text-xl text-[#4A4A4A] md:w-4/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero, molestias facilis amet nobis nostrum nemo quo ratione eligendi.</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                </div>
            </div>


            {/* menu shop item  */}
            <div className=''>

            </div>
        </div>
    )
}

export default Menu