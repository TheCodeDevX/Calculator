import React, { useState } from 'react';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    const clear = () => setInputValue('');

    const display = (value) => {
        if (inputValue === "Error" || inputValue === "Infinity") {
            setInputValue(value)
        } else{
            setInputValue((prev) => prev + value);
        }
        
    };

    const deleteTheLast = () => {
       
        if(inputValue === "Error" || inputValue === "Infinity") {
            setInputValue('')
        } else {
            setInputValue((prev) => prev.slice(0,-1))
        }
    
    }

    const calculate = () => {
        try {
         
            if (/([+\-*/]{2,})/.test(inputValue)) {
                throw new Error("Invalid input");
            }

            let result = new Function("return " + inputValue)();
            
            if (!isFinite(result)) throw new Error("Math error");
           

            setInputValue(result.toString());
        } catch (error) {
           if(inputValue.includes('/0')) {
            setInputValue("Infinity")
           } else {
            setInputValue("Error")
           }
        }
    };

    return (
        <>
            <div className="flex items-center justify-center w-full h-screen px-5">
                <form className="bg-[#242424] border shadow-[0px_0px_20px_5px_rgb(41,255,155,0.1)]
                 border-gray-400/20 rounded-xl overflow-hidden">
                    <input 
                        type="text" 
                        
                        className="pointer-events-none py-8 px-4 text-[30px] w-full outline-0 rounded-xl bg-[#1d1d1d]" 
                        value={inputValue} 
                        readOnly
                    />
                    <div className="grid gap-3 grid-cols-4 p-5" >
                        <span className="AcStyling col-span-2" onClick={clear}>AC</span>
                           <span className="AcStyling" onClick={deleteTheLast}>DE</span>
                        <span className="SpanStyling text-[#29ff9b]" onClick={() => display('/')}>/</span>
                        <span className="SpanStyling" onClick={() => display('7')}>7</span>
                        <span className="SpanStyling" onClick={() => display('8')}>8</span>
                         <span className="SpanStyling" onClick={() => display('9')}>9</span>
                        <span className="SpanStyling text-[#29ff9b]" onClick={() => display('*')}>*</span>
                        <span className="SpanStyling" onClick={() => display('4')}>4</span>
                        <span className="SpanStyling" onClick={() => display('5')}>5</span>
                        <span className="SpanStyling" onClick={() => display('6')}>6</span>
                        <span className="SpanStyling text-[#29ff9b]" onClick={() => display('-')}>-</span>
                        <span className="SpanStyling" onClick={() => display('1')}>1</span>
                        <span className="SpanStyling" onClick={() => display('2')}>2</span>
                        <span className="SpanStyling" onClick={() => display('3')}>3</span>
                        <span className="SpanStyling text-[#29ff9b]" onClick={() => display('+')}>+</span>
                        <span className="SpanStyling" onClick={() => display('0')}>0</span>
                        <span className="SpanStyling text-[#29ff9b]" onClick={() => display('.')}>.</span>
                        <span className="SpanStyling text-[#29ff9b] col-span-2 active:scale-[.95]" onClick={calculate}>=</span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Calculator;
