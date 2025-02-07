import { useSelector, useDispatch } from 'react-redux';
import { setTipAmount, setTotal } from '../store/locationSlice';
const TipAmount = () => {
    const { tipAmount, total } = useSelector((state: any) => state.tip);

    return (
        <div className="bg-darkCyan w-[280px] rounded-xl p-5">
            <div>
                <div className="flex justify-between">
                    <div >
                        <h2>  Tip Amount   </h2>
                        <h3> / person</h3>
                    </div>
                    {tipAmount == 0 ? (<h1>0.00</h1>) : (<h1>{tipAmount}</h1>
                    )}
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2>  Total   </h2>
                        <h3> / person</h3>
                    </div>
                    {total == 0 ? (<h1>0.00</h1>) : (<h1>{total}</h1>
                    )}
                </div>
            </div>
            <button>RESET</button>
        </div>
    );
}

export default TipAmount;
