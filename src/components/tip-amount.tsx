import { useSelector, useDispatch } from 'react-redux';
import { setTipAmount, setTotal } from '../store/locationSlice';
const TipAmount = () => {
    const { tipAmount, total } = useSelector((state: any) => state.tip);
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(setTipAmount(0));
        dispatch(setTotal(0));
    };

    // Check if both values are 0 or empty
    const isDisabled = total === 0.00 || total === '0.00' || !total;
    return (
        <div className="bg-darkCyan w-[280px] rounded-xl p-7 flex flex-col justify-between">
            <div>
                <div className=" flex justify-between ">
                    <div className='mt-3' >
                        <h2 className='text-start text-white font-medium text-xs '>  Tip Amount   </h2>
                        <h3 className='text-start text-gray-500 font-semibold text-[9px] '> / person</h3>
                    </div>
                    <h1 className='big-font'>${tipAmount}</h1>

                </div>
                <div className="flex justify-between ">
                    <div className='mt-3' >
                        <h2 className='text-start text-white font-medium text-xs'>  Total   </h2>
                        <h3 className='text-start text-gray-500 font-semibold text-[9px] '> / person</h3>
                    </div>

                    <h1 className='big-font'>${total}</h1>

                </div>
            </div>
            <div className='mt-3 md:mt-0'>
                <button
                    onClick={handleReset}
                    disabled={isDisabled}

                    className={`  px-3 py-1 w-full rounded font-bold 
                        ${isDisabled
                            ? 'bg-darkgrayishcyan text-grayishcyan cursor-not-allowed opacity-50'
                            : 'bg-strongcyan text-darkCyan hover:bg-lightCyan active:scale-95'
                        }`}

                >RESET</button>
            </div>
        </div>
    );
}

export default TipAmount;
