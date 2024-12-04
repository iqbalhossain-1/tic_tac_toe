import React from 'react'
import circle from '../asset/circle.png';
import cross from '../asset/cross.png'
import { useRef, useState } from "react";

let data = ['', '', '', '', '', '', '', '', ''];
const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let title = useRef(null);
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8];


    const handleToggle = (e, num) => {
        if (lock) {
            return 0;
        }
        else if (count % 2 === 0) {
            e.target.innerHTML = `<img style="color:red" src=${cross}>`;
            data[num] = 'x';
            setCount(++count);
        }
        else {
            e.target.innerHTML = `<img color:'cyan' src=${circle}>`;
            data[num] = 'o';
            setCount(++count);
        }
        check();
    }


    const check = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
            win(data[2])
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
            win(data[5])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
            win(data[8])
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
            win(data[8])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
            win(data[6])
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
            win(data[6])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
            win(data[7])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
            win(data[8])
        }
        else if (!data.includes('')) {
            console.log(data)
            win('match drawn')
        }

    }

    const win = (winner) => {
        setLock(true);
        if (winner === 'x') {
            title.current.innerHTML = "winner is : X"
        } else if (winner === 'o') {
            title.current.innerHTML = "winner is : O"
        } else if (winner === 'match drawn') { title.current.innerHTML = `${winner}` }
    }
    const reset = () => {
        setLock(false);
        data = ['', '', '', '', '', '', '', '', ''];
        title.current.innerHTML = '';
        box_array.map((e) => {
            console.log(e)
            e.current.innerHTML = '';
        })
    }
    return (
        <div className=''>
            <h1 className='text-3xl' ref={title}></h1>
            <div className='flex  gap-2'>
                <div className=''>
                    <div
                        ref={box0} onClick={(e) => handleToggle(e, 0)}
                        className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>0</div>
                    <div ref={box1} onClick={(e) => handleToggle(e, 1)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>1</div>
                    <div ref={box2} onClick={(e) => handleToggle(e, 2)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>2</div>
                </div>
                <div className=' '>
                    <div ref={box3} onClick={(e) => handleToggle(e, 3)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>3</div>
                    <div ref={box4} onClick={(e) => handleToggle(e, 4)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>4</div>
                    <div ref={box5} onClick={(e) => handleToggle(e, 5)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>5</div>
                </div>
                <div className=' '>
                    <div ref={box6} onClick={(e) => handleToggle(e, 6)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>6</div>
                    <div ref={box7} onClick={(e) => handleToggle(e, 7)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>7</div>
                    <div ref={box8} onClick={(e) => handleToggle(e, 8)} className='bg-blue-950 h-[80px] w-[80px] rounded-lg mb-2 cursor-pointer'>8</div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='px-4 py-2 text-white bg-blue-800 rounded-lg' onClick={() => reset()}>reset</button>
            </div>



        </div>
    )
}

export default TicTacToe