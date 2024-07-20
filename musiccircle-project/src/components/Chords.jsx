import React from "react"
import romanNumeralsData from '../src/data/romanNumeralsData';
import chordsData from "../src/data/chordsData";
import Card from '/components/Card'



function Chords({currentScale, scaleNotes, note}) {
    console.log(`Reached Chords.jsx with ${currentScale} and ${scaleNotes}`)
    const nums = romanNumeralsData[currentScale]

    const [chordProgessions,setChordProgressions] = React.useState(chordsData)
    const [cardList,setCardList] = React.useState([])
    const [isVisible, setIsVisible] = React.useState(false)
    const componentRef = React.useRef(null)

    function getChord(romans,notes,progression){
        return [progression.map(index => notes[index-1]), progression.map(index => romans[index-1])]
    }

    // Chord Cards dissappear and reappear.
    React.useEffect(() => {
        console.log("Effect ran")
        if (isVisible) { setIsVisible(false) }

        setTimeout(()  => {
            setIsVisible(true)
            if (isVisible  && componentRef.current){
                //componentRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        },500)

    },[currentScale,note])

    
    if(nums){
        return(
            <div className="chords-div"  ref={componentRef}>
                <h3>Common Chord Progressions</h3>
                <div className="chordCards-div">
                    {chordProgessions.map((progression,index)=>{
                        const [chordNotes, chordNums] = getChord(nums, scaleNotes, progression);
                        return (
                            <div className={isVisible ? 'animatedcard-div' : 'card-div'}>
                                <Card key={index} chordNotes={chordNotes} chordNums={chordNums} progression={progression} note={note}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        )
    }

}

export default Chords