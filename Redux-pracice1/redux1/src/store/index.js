import { createStore } from "redux";


// reducer function which will take old State and Action as input
// and will return new state as output
const counterReducer= (state={counter:0},action)=>{

    if(action.type=="increment"){
        return{
            counter:state.counter+1
        }
    }

    if(action.type=="decrement"){
        return{
            counter:state.counter-1
        }
    }

    /// Action Payload to dnamically increase value with given value
    if(action.type==='increase'){
        return {counter: state.counter+action.value};
    }

    return state;
};

const store=createStore(counterReducer);

export default store;