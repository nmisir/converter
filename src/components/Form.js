import React from "react";

const Form = ({setInputText, setInputNum, items, setItems, inputText, inputNum}) => {
    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    };
    const inputNumHandler = (e) => {
        //console.log(e.target.value);
        setInputNum(e.target.value);
    };
    const submitItemHandler = (e) => {
        e.preventDefault();
        setItems([
            ...items, {text: inputText +" "+ inputNum + "kn" +" = "+ convert + "eur", id: Math.random() * 10000 }
        ]);
        setInputText("");
        setInputNum("");
    };
    const currency = 7.516655;
    const convert2 = inputNum/currency;
    const convert = convert2.toFixed(2);
    return(
        <form>
          <input 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            placeholder="Upiši proizvod..." 
            required
           />
          <input 
            value={inputNum} 
            onChange={inputNumHandler} 
            type="number" 
            min="0.01" 
            step="0.01" 
            
            placeholder="Iznos u kn" 
            required
           />
          <button 
            onClick={submitItemHandler} type="submit">Konvertiraj</button>
        </form>
    );
}

export default Form;