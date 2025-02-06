import React, { useState } from 'react';
import Person from '../../public/images/icon-person.svg'
const Options = () => {
    const [bill, setBill] = useState<number>(0);
    const [person, setPerson] = useState(0)
    const [customTip, setCustomTip] = useState<number>(0)

    return (
        <div className=''>
            <div className='flex flex-col '>
                <label className='text-start text-gray-500 font-semibold text-l'>Bill</label>
                <div className='flex '>
                    <p>$</p>
                    <input type='text' value={bill} onChange={(e) => setBill(e.target.value)}
                        className='bg-transparent outline-none' />

                </div>
            </div>
            <div className='flex flex-col '>
                <label className='text-start text-gray-500 font-semibold text-l'>  Select Tip % </label>
                <div className='grid grid-cols-3 '>
                    <div> 5%</div>
                    <div> 10%</div>
                    <div> 15%</div>
                    <div> 25%</div>
                    <div> 30%</div>
                    <div>
                        <input type='text' placeholder='custom' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col '>
                <label className='text-start text-gray-500 font-semibold text-l'>    Number of People </label>
                <div className='flex'>
                    <img src={Person} />
                    <input type='text' value={person} className='bg-transparent outline-none' />
                </div>
            </div>
        </div>
    );
}

export default Options;
