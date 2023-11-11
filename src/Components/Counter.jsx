import { useEffect, useState } from 'react';
import axios from 'axios'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(1);
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            setError(null);
            setLoading(true);
            try {
                const personData = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
                setPerson(personData.data);
                
            } catch (error) {
                setError(error.message || 'An Error Occurred.');
            }
            finally {
                setLoading(false);
            }
        }

        fetchData()
    },[count]);

    const handleIncrement = () => {
        setCount((count) => count+1);
    }

    const hanldeDecrement = () => {
        setCount((count) => count<=1?1:count-1);
    }

    return (
        <div className='counter-outer-container'>

        <div className='counter-container'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {person && (
                <div>
                    <h2>Name: {person.name}</h2>
                    <p>Email: {person.email}</p>
                </div>
            )}

            <button className='plus' onClick={handleIncrement}>+</button>
            <button className='minus' onClick={hanldeDecrement}>-</button>
        </div>
            </div>
    )

}

export default Counter;