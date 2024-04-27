import React from 'react'
import { useState } from 'react'

const Home = () => {

    const [odd,setOdd] = useState('')
    const [odd1,setOdd1] = useState('')
    const [odd2,setOdd2] = useState('')
    const [sum, setSum] = useState(0)

    const handleOdd = (e) => {
        const input = e.target.value;
            setOdd(input)
    }
    const handleOdd1 = (e) => {
        const input = e.target.value;
            setOdd1(input)
    }
    const handleOdd2 = (e) => {
        const input = e.target.value;
            setOdd2(input)
    }
    const handleSum = () => {
        const result = (1/odd)*100 + (1/odd1)*100 + (1/odd2)*100;
        setSum(result);
    }
  return (
    <div className='home'>
        <div className="oddInput">
        <label htmlFor="odd">Team One</label>
        <input type="text" value={odd} required onChange={handleOdd} />
        </div>
        <div className="oddInput">
        <label htmlFor="odd1">Draw Odd</label>
        <input type="text" value={odd1} required onChange={handleOdd1} />
        </div>
        <div className="oddInput">
        <label htmlFor="odd2">Team Two</label>
        <input type="text" value={odd2} required onChange={handleOdd2} />
        </div>
        <div className="submit">
            <button onClick={handleSum}>Check Arbitrage Opportunity</button>
            <p className='arbit'>{sum}%</p>
            {!sum && <p className='before'>Enter your Odds</p>}
            {sum > 100 && <p className='notAvailable'>Sorry😪! Arbitrage Opportunity not available</p>}
            {!(!sum) && sum < 100 && <p className='Available'>Congratulations🎉! Arbitrage Opportunity available</p>}
        </div>
    </div>
  )
}

export default Home