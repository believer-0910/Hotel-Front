import { useState } from "react";
import { iterate } from "../Service/Service";

 const Animation = () => {

    const [count, setCount] = useState(0);

    const onClickAction = () => {
        
        setCount(count+1);
        if (count === 5) {
            setCount(1);
        }

    }

   let b = iterate(count);

    const render = (b) => {

        return b?.map((item, index) => {
            return (<p key={index}>{item.name}</p>)
        })
        
    }

    return (
        <div> 
            <button
                style={{ padding: "6px 20px", fontSize: "18px" }}
                onClick={onClickAction} 
            >
                Click
            </button>
            <pre>{count}</pre>
            {
                render(b)
            }
        </div>
    )

}

export default Animation