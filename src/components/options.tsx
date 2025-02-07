import React, { useEffect, useRef, useState } from 'react';
import Person from '/images/icon-person.svg'
const Options = () => {
    const [bill, setBill] = useState<number>(0);
    const [person, setPerson] = useState<number>(1)
    const [customTip, setCustomTip] = useState<number>(0)
    const [error, setError] = useState(false)

    const billInputRef = useRef<HTMLInputElement>(null);

    useEffect(
        () => {
            if (person % 1 !== 0 || person < 1) {
                setError(true);

                // setPerson(1);

            } else {
                setError(false);
            }
        }
        , [person])
    return (
        <div className='w-[250px] flex flex-col gap-7'>
            <div className='flex flex-col  '>
                <label className='text-start text-gray-500 font-semibold text-xs mb-1'>Bill</label>
                <div
                    onClick={() => billInputRef.current?.focus()}
                    className='flex justify-between px-3 py-1 bg-slate-100 text-gray-400 font-medium rounded cursor-pointer
                     hover:border-2 hover:border-strongcyan '>
                    <p>$</p>
                    <input
                        ref={billInputRef}
                        type='number' value={bill} onChange={(e) => setBill(e.target.value)}
                        className='bg-transparent outline-none w-11 ' />
                </div>
            </div>
            <div className='flex flex-col '>
                <label className='text-start text-gray-500 font-semibold text-xs mb-1'>  Select Tip % </label>
                <div className='tip-amount grid grid-cols-3 gap-2  '>
                    <div className='bg-darkCyan rounded p-1 text-white'> 5%</div>
                    <div className='bg-darkCyan  rounded p-1 text-white'> 10%</div>
                    <div className='bg-darkCyan  rounded p-1 text-white'> 15%</div>
                    <div className='bg-darkCyan  rounded p-1 text-white'> 25%</div>
                    <div className='bg-darkCyan  rounded p-1 text-white'> 30%</div>
                    <div className='bg-slate-100  rounded p-1'>
                        <input type='text' placeholder='Custom' className='bg-transparent outline-none placeholder-gray-500  placeholder:font-semibold ' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col '>
                <div className='flex gap-10'> <label className='text-start text-gray-500 font-semibold text-xs mb-1'>    Number of People </label>
                    {error && (<div className=' text-red-600 font-semibold text-xs mb-1'>invalid</div>)}</div>

                <div className='flex justify-between  px-3 py-1 bg-slate-100 text-gray-400 font-medium  rounded cursor-pointer  hover:border-2 hover:border-strongcyan ' >
                    <img src={Person} className='max-w-4 max-h-3 mt-1' />
                    <input type='number' value={person} onChange={(e) => setPerson(e.target.value)}
                        className='bg-transparent outline-none w-11' />
                </div>
            </div>
        </div>
    );
}

export default Options;
