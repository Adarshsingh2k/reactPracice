import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../store';

const Counter = () => {

    const dispatch= useDispatch();

    // useSelector is used to get the store value
    const counter= useSelector((state)=>{
        return state.counter;
    });

    // using actions from dispatch to do increment andd decrement
    const inc=()=>{
        dispatch({type:'increment'});
    }

    const dec=()=>{
        dispatch({type:'decrement'});
    }
    const dynamicIncrease=()=>{
        dispatch({
            type:'increase',
            value:5    
        });
    }


    const toggleHandle=()=>{
        console.log(store)

    };

  return (
    <>
            <main className='container p-5 text-center'>
                <h1 className='text-center'> Redux Counter</h1>
                <div className='text-center mt-5 display-6 '>{counter}</div>
                <div className='mt-5 mb-5'>
                    <button className=' btn btn-success me-5' onClick={inc} >Increment ++</button>
                    <button className=' btn btn-success me-5' onClick={dynamicIncrease} >Increment by 5</button>
                    <button className='btn btn-danger' onClick={dec} >Decrement --</button>
                </div>
                <button onClick={toggleHandle} className='btn btn-lg btn-primary ' > Toggle Counter</button>
            </main>
    
    </>
  )
}

export default Counter