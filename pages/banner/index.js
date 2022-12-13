import Head from 'next/head';
import { useState } from 'react';

const Index = () => {
    const [value, onChange] = useState('10:00');
    Head('Dhaka Metro')
    return (
        <div className="">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2 text-gray-900">
                <div className="">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://www.bssnews.net/assets/news_photos/2021/12/12/image-33229-1639310298.jpg"
                        alt=""
                    />
                    </div>
                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                        <form>
                        <div className="flex gap-2">
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="from"
                                className="inline-block mb-1 font-medium"
                                >
                                From
                                </label>
                                <input
                                placeholder="From Station"
                                required
                                type="text"
                                className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="from"
                                name="from"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="to"
                                className="inline-block mb-1 font-medium"
                                >
                                To
                                </label>
                                <input
                                placeholder="To Station"
                                required
                                type="text"
                                className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="to"
                                name="to"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="journeyTime"
                                className="inline-block mb-1 font-medium"
                                >
                                Time of Journey
                                </label>
                                {/* <TimePicker onChange={onChange} value={value} /> */}
                                <input
                                placeholder="Pick Your Time"
                                required
                                type="text"
                                className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="journeyTime"
                                name="journeyTime"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                htmlFor="class"
                                className="inline-block mb-1 font-medium"
                                >
                                Choose a Class
                                </label>
                                <select className="select w-full h-10 border-gray-300 bg-white text-gray-900 max-w-xs">
                                    <option disabled selected className="">Pick Your Class</option>
                                    <option className="uppercase">AC_B</option>
                                    <option className="uppercase">AC_S</option>
                                    <option className="uppercase">SNIGDHA</option>
                                    <option className="uppercase">F_BERTH</option>
                                    <option className="uppercase">F_FEAT</option>
                                    <option className="uppercase">F_CHAIR</option>
                                    <option className="uppercase">SHOVON</option>
                                    <option className="uppercase">AC_CHAIR</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="mt-4 mb-2 sm:mb-4">
                            <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                            Search Seat
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Index;