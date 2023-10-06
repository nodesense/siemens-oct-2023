import React, {useState, useEffect, useCallback} from 'react';

const Counter = () => {
   

    //functional state
    // state = the data owned by the component
    // state can be mutable
    // count is state value, setCount is a function to assign new value
    // destructing an Array
    // useState returns an array, first element is state value, second element is setter function
    const [count, setCount] = useState<number> (0); // 0 is the default value

    console.log("Counter render", count)

    useEffect( () => {
        // similar to class component componentDidMount, componentDidUpdate
        // called after v.dom is patched to real dom
        console.log("Counter useEffect called on every render")
    })
 

    useEffect( () => {
        // componentDidMount
        console.log("useEffect with empty dependent variable list called ONLY ONCE")

        const handle = setInterval(() => {
            console.log("timer called ", count)
            setCount (count => count + 1)
        }, 5000);

        // return a call back function, this function shall be invoked when component destroyed
        return () => {
            // componentWillunmount
            console.log("useEffect cleanup function")

            clearInterval(handle)
        }
    }, []); // [] mean dependant variables, empty list now


    const increment = (e: any) => {
        console.log('increment btn click', e)

        // this state change cause react to re-render component with new vvalue
        // new v.dom shall be created on re-render
        setCount(count + 1) // this set new state for count
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>Count is {count}</p>
            {/* comments */ }
            {/* we are passing a function as callback when event occur, onbtn click,
               react calls increment function */}
            <button onClick={increment}>+1</button>

            <button onClick= { () => setCount (count -1) }> -1 </button>
            {/* todo: write reset to 0 event */}
        </div>
    )
}

export default Counter;