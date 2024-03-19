import React from 'react'

const ServiceItems = [
    {
        "id": "642c155b2c4774f05c36eeaa",
        "name": "Haddock",
        "des": "Possimus ducimus tempore dignissimos deleniti veniam molestias expedita numquam consectetur nobis earum",
        "image": "/images/home/services/icon1.png",
        "services": "salad",
    },
    {
        "id": "642c155b2c4774f05c36eeb9",
        "name": "Haddock",
        "des": "Possimus ducimus tempore dignissimos deleniti veniam molestias expedita numquam consectetur nobis earum",
        "image": "/images/home/services/icon2.png",
        "services": "drinks",
        "price": 14.7
    },
    {
        "id": "642c155b2c4774f05c36ee7c",
        "name": "Escalope de Veau",
        "des": "Possimus ducimus tempore dignissimos deleniti veniam molestias expedita numquam consectetur nobis earum",
        "image": "/images/home/services/icon3.png",
        "services": "popular",
        "price": 14.5
    },
    {
        "id": "642c155b2c4774f05c36ee88",
        "name": "Escalope de Veau",
        "des": "Possimus ducimus tempore dignissimos deleniti veniam molestias expedita numquam consectetur nobis earum",
        "image": "/images/home/services/icon4.png",
        "services": "dessert",
        "price": 12.5
    },
]

const Services = () => {
    return (
        <div className="section-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <div className="text-left md:w-4/5">
                        <p className="sub-title">Testimonials</p>
                        <h3 className="title">What our customers say about us!</h3>
                        <p className='my-5 text-secondary leading-[30px] '>&quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ducimus tempore dignissimos deleniti veniam molestias expedita numquam consectetur nobis earum.&quot;</p>
                        <button className='btn bg-green text-white px-8 py-3 rounded-full'>Explore</button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center gap-4'>
                        {
                            ServiceItems.map((service) => (
                                <div key={service.id} className='shadow-md rounded-md px-4 py-5 text-center text-green cursor-pointer hover:border-indigo-600 border transition-all duration-200 '>
                                    <img src={service.image} alt="" className='mx-auto' />
                                    <h5 className='pt-3 dont-semiblod'>{service.name}</h5>
                                    <p className='text-[#90BD95'>{service.des}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services