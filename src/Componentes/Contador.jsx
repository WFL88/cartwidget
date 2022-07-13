import { useState } from "react";

const ContadorJS = ()=> {
    const [CountV, setCountV] = useState(0);
    return (
        <>
        <button onClick={()=>(setCountV(CountV - 1))}>-</button>
        {CountV}
        <button onClick={()=>(setCountV(CountV + 1))}>+</button>
        </>
    )
}

export default ContadorJS;