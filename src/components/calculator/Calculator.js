import { useState } from "react";
import { evaluate } from 'mathjs';
import "./Calculator.css";
function Calculator() {
  let [result, setResult] = useState("");
  let [hasDot, setHasDot] = useState(false);
  const oprator = ["+", "-", "/", "*"];

  const checkInput = (text) => {
    if (text === "×") return "*";
    if (text === "÷") return "/";
    return text;
  };

  const clickHandler = (e) => {
    let input = checkInput(e.target.innerText);
    if (input === ".") {
      if (hasDot === true) return;
      else setHasDot((hasDot = true));
    }
    if (oprator.includes(input)) {
      setHasDot((hasDot = false));
    }
  
    setResult(result + input);
  };
  const clickHandlerClear = () => {
    setResult((result = ""));
    setHasDot(hasDot = false)
  };
  const clickHandlerC = () => {
    setResult(result.slice(0, -1));
    if(result.endsWith(".")){
        setHasDot(hasDot = false) 
       }

  };
  const equalBtn = () => {
    setResult(String(evaluate(result)));
    setHasDot((hasDot = false));
  };

  return (
    <>
      <section className="section">
        <div className="screen">{result}</div>
        <div className="line1">
          <button onClick={clickHandlerClear} className="clear">
            Clear
          </button>
          <button onClick={clickHandlerC} className="c">
            C
          </button>
          <button onClick={clickHandler} className="tagsim">
            ÷
          </button>
        </div>
        <div className="line2">
          <button onClick={clickHandler} className="1">
            1
          </button>
          <button onClick={clickHandler} className="2">
            2
          </button>
          <button onClick={clickHandler} className="3">
            3
          </button>
          <button onClick={clickHandler} className="zarb">
            ×
          </button>
        </div>
        <div className="line3">
          <button onClick={clickHandler} className="4">
            4
          </button>
          <button onClick={clickHandler} className="5">
            5
          </button>
          <button onClick={clickHandler} className="6">
            6
          </button>
          <button onClick={clickHandler} className="-">
            -
          </button>
        </div>
        <div className="line4">
          <button onClick={clickHandler} className="7">
            7
          </button>
          <button onClick={clickHandler} className="8">
            8
          </button>
          <button onClick={clickHandler} className="9">
            9
          </button>
          <button onClick={clickHandler} className="+">
            +
          </button>
        </div>
        <div className="line5">
          <button onClick={clickHandler} className="zero">
            0
          </button>
          <button onClick={clickHandler} className="dot">
            .
          </button>
          <button onClick={equalBtn} className="mosavi">
            =
          </button>
        </div>
      </section>
    </>
  );
}
export default Calculator;
