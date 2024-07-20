import React from 'react'
import romanNumeralsData from '../data/romanNumeralsData';

// AKA Diatonic Chord Progressions

function RomanNumeral ({scales}) {
    console.log(`From RomanNumeral.jsx: reached RomanNumeral.jsx with ${scales}` )
    
    const nums = romanNumeralsData[scales]
    // const [nums, setNums] = React.useState(romanNumeralsData[scales])
    // scales.map((note,index) => {console.log(note,index)})



    if (nums){
        return(
            <div className='div-diatonic'>
            <h3>Diatonic Chord Progressions</h3>
            <div className='div-nums'>
                {nums.map((num,index) => (
                    <h4 key={index}>{num}</h4>
                ))}
            </div>
            </div>
        )
    }
    

}

export default RomanNumeral