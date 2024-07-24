import { useState } from "react";
import "../calculator.css"

const MiniCalculator=()=>{
const [inputValue,setInput]=useState('')

   
    return(
        <>
           <div className="body">
                <h1>Calculator</h1>
                <input type="text" placeholder="Enter Number" value={inputValue}/>
                <div>
                    <input type="button" value={'AC'} onClick={(e)=>setInput("")} />
                    <input type="button" value={'DE'} onClick={(e)=>setInput(inputValue.slice(0,-1))} />
                    <input type="button" value={'.'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'/'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                </div>
                <div>
                    <input type="button" value={'7'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'8'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'9'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value='+' onClick={(e)=>setInput(inputValue+e.target.value)} />
                </div>
                <div>
                    <input type="button" value={'4'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'5'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'6'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'-'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                </div>
                <div>
                    <input type="button" value={'1'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'2'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'3'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                    <input type="button" value={'*'} onClick={(e)=>setInput(inputValue+e.target.value)} />
                </div>
                <div>
                    <input type="button" value={'00'} onClick={(e)=>setInput(inputValue+e.target.value)}/>
                    <input type="button" value={'0'} onClick={(e)=>setInput(inputValue+e.target.value)}/>
                    <input type="button" value={'='} onClick={(e)=>setInput(eval(inputValue))}/>
                </div>
            </div>
        </>
    )
}
export default MiniCalculator;