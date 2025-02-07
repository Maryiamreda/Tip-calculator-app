
const TipAmount = () => {
    return (
        <div className="bg-darkCyan w-[280px] rounded-xl p-5">
            <div>
                <div className="flex justify-between">
                    <div >
                        <h2>  Tip Amount   </h2>
                        <h3> / person</h3>
                    </div>
                    <h1>0.00</h1>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2>  Total   </h2>
                        <h3> / person</h3>
                    </div>
                    <h1>0.00</h1>
                </div>
            </div>
            <button>RESET</button>
        </div>
    );
}

export default TipAmount;
