import './App.css'
import {useEffect, useState} from "react";

//bucle del factorial
//Si n = 0 o n = 1, la funcion retornara 1
//Si n > 1, la funcion retornara n * factorial(n - 1), la funcion se llamara a si misma hasta llegar a 1
const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

export const App = () => {
    const [Angle, setAngle] = useState('')
    const [Result, setResult] = useState()

    useEffect(() =>{
        // Rad = (Grados * π) / 180
        const Rad = Angle * (Math.PI / 180);
        let sum = 0;
        for (let i = 0; i < 20; i++) {
            sum += Math.pow(-1, i) * Math.pow(Rad, 2 * i + 1) / factorial(2 * i + 1);
        }
        setResult(sum);
        console.log(Angle)
    }, [Angle]);

    return (
        <>
            <input type="number" value={Angle} onChange={(e) => setAngle(e.target.value)} placeholder="Sin"/>
            <h1>{Result}</h1>
        </>
    )
}