import { useEffect, useRef, useState } from 'react';
import Person from '/images/icon-person.svg'
import { useDispatch } from 'react-redux';
import { setTipAmount, setTotal } from '../store/locationSlice';
const Options = () => {
    const [bill, setBill] = useState<number>(0);
    const [person, setPerson] = useState<number>(1)
    const [customTip, setCustomTip] = useState<number>(0)
    const [error, setError] = useState(false)
    const billInputRef = useRef<HTMLInputElement>(null);
    const personInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    useEffect(
        () => {
            if (person % 1 !== 0 || person < 1 || person > 9999) {
                setError(true);

                // setPerson(1);

            } else {
                setError(false);
            }
        }
        , [person])
    useEffect(() => {
        let tipamount = (bill * customTip / 100);
        let tipAmountPerPeron = tipamount / person;
        let totalBillPerPerson = tipAmountPerPeron + (bill / person);
        dispatch(setTotal(totalBillPerPerson.toFixed(2)));
        dispatch(setTipAmount(tipAmountPerPeron.toFixed(2)));
    }, [bill, person, customTip])
    return (
        <div className='w-[250px] flex flex-col gap-7'>
            <div className='flex flex-col  '>
                <label className='text-start text-gray-500 font-semibold text-xs mb-1'>Bill</label>
                <div
                    onClick={() => billInputRef.current?.focus()}
                    className='flex justify-between px-3 py-1 bg-slate-100 text-gray-400 font-medium rounded cursor-pointer
                    border-2 border-transparent hover:border-strongcyan '>
                    <p>$</p>

                    <input
                        ref={billInputRef}
                        type='number' value={bill} onChange={(e) => setBill(Number(e.target.value))}
                        className='bg-transparent outline-none w-11 ' />
                </div>
            </div>
            <div className='flex flex-col '>
                <label className='text-start text-gray-500  text-xs mb-1 font-bold '>  Select Tip % </label>
                <div className='tip-amount grid grid-cols-2 md:grid-cols-3 gap-2  '>
                    <div onClick={() => setCustomTip(5)} className='bg-darkCyan rounded p-1 text-white hover:text-darkCyan hover:bg-strongcyan cursor-pointer'> 5%</div>
                    <div onClick={() => setCustomTip(10)} className='bg-darkCyan  rounded p-1 text-white  hover:text-darkCyan  hover:bg-strongcyan cursor-pointer'> 10%</div>
                    <div onClick={() => setCustomTip(15)} className='bg-darkCyan  rounded p-1 text-white  hover:text-darkCyan  hover:bg-strongcyan cursor-pointer'> 15%</div>
                    <div onClick={() => setCustomTip(25)} className='bg-darkCyan  rounded p-1 text-white   hover:text-darkCyan hover:bg-strongcyan cursor-pointer'> 25%</div>
                    <div onClick={() => setCustomTip(30)} className='bg-darkCyan  rounded p-1 text-white   hover:text-darkCyan hover:bg-strongcyan cursor-pointer'> 30%</div>
                    <div className='bg-slate-100  rounded p-1 cursor-pointer border-2 border-transparent hover:border-strongcyan '>
                        <input type='number' onChange={(e) => setCustomTip(Number(e.target.value))} placeholder='Custom' className='bg-transparent outline-none
                         placeholder-gray-500  placeholder:font-semibold  text-darkCyan font-bold  ' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col '>
                <div className='flex gap-10'> <label className='text-start text-gray-500 font-semibold text-xs mb-1'>    Number of People </label>
                    {error && (<div className=' text-red-600 font-semibold text-xs mb-1'>invalid</div>)}</div>

                <div
                    onClick={() => personInputRef.current?.focus()}

                    className={`flex justify-between  px-3 py-1 bg-slate-100 text-gray-400 font-medium  rounded cursor-pointer  border-2 hover:border-strongcyan 
              ${error ? 'border-2 border-red-500' : 'border-transparent'} ${error ? ' hover:border-red-400 ' : ' hover:border-strongcyan '}
              `} >
                    <img src={Person} className='max-w-4 max-h-3 mt-1' />
                    <input ref={personInputRef} type='number' value={person} onChange={(e) => setPerson(Number(e.target.value))}
                        className='bg-transparent outline-none w-11' />
                </div>
            </div>
        </div>
    );
}

export default Options;
