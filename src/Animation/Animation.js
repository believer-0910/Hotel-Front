import { useState } from "react";

 const Animation = () => {
    const [count, setCount] = useState(0);
    
    const onClickAction = () => {
        
        setCount(count+1);

        if (count === 5) {
            setCount(0);
        }

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
        </div>
    )

}

export default Animation