import React from 'react'

const categoryItems = [
    {
        "id": "642c155b2c4774f05c36eeaa",
        "name": "Haddock",
        "des": "(86 dishes)",
        "image": "/images/home/category/img1.png",
        "category": "salad",
    },
    {
        "id": "642c155b2c4774f05c36eeb9",
        "name": "Haddock",
        "des": "(12 break fast)",
        "image": "/images/home/category/img2.png",
        "category": "drinks",
        "price": 14.7
    },
    {
        "id": "642c155b2c4774f05c36ee7c",
        "name": "Escalope de Veau",
        "des": "(48 dessert)",
        "image": "/images/home/category/img1.png",
        "category": "popular",
        "price": 14.5
    },
    {
        "id": "642c155b2c4774f05c36ee88",
        "name": "Escalope de Veau",
        "des": "(255 Items)",
        "image": "/images/home/category/img1.png",
        "category": "dessert",
        "price": 12.5
    },
]
const Categories = () => {
    return (<div className="section-container py-16">
        <div className='text-center'>
            <p className="sub-title">Customer Favourite</p>
            <h3 className='title'>Popular Categories</h3>
        </div>

        {/* Category Part  */}

        <div className='flex flex-col sm:flex-row gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) => (
                    <div className='shadow-lg rounded-lg bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:translate-y-4  duration-300 transition-all' key={i}>
                        <div className='flex w-full items-center justify-center'>
                            <img src={item.image} alt={item.name} className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'/>
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5>{item.name}</h5>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Categories