import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="section-container  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
                <div className="flex py-4 flex-col md:flex-row-reverse justify-center items-center sm:gap-0 gap-20">
                    
                    {/* Header Image  */}
                    <div className='md:w-1/2'>
                        <img src="/images/home/banner.png" alt="Background" />
                        <div className='flex md:flex-row justify-around items-center flex-col -mt-14 gap-4'>
                            <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md'>
                                <img className='rounded-2xl' src="/images/home/b-food1.png" alt="Image" />
                                <div className="space-y-1">
                                    <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly  />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly />
                                    </div>
                                    <p className='text-red'>$18.55</p>
                                </div>
                            </div>
                            <div className='xl:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md'>
                                <img className='rounded-2xl' src="/images/home/b-food1.png" alt="Image" />
                                <div className="space-y-1">
                                    <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly />
                                    </div>
                                    <p className='text-red'>$18.55</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Header Text */}
                    <div className='md:w-1/2 space-y-7 px-4'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug capitalize'>Lorem ipsum dolor sit <span className='text-green'>amet</span></h2>
                        <p className='text-xl text-[#4A4A4A]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsum dignissimos mollitia magni?</p>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner