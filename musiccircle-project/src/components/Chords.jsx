import React from "react"
import romanNumeralsData from '/src/data/romanNumeralsData';
import chordsData from "/src/data/chordsData";
import Card from '/src/components/Card'
import { motion, AnimatePresence } from 'framer-motion';



function Chords({currentScale, scaleNotes, note}) {
    console.log(`Reached Chords.jsx with ${currentScale} and ${scaleNotes}`)
    const nums = romanNumeralsData[currentScale]

    const [chordProgessions,setChordProgressions] = React.useState(chordsData)
    const [cardList,setCardList] = React.useState([])
    const componentRef = React.useRef(null)

    function getChord(romans,notes,progression){
        return [progression.map(index => notes[index-1]), progression.map(index => romans[index-1])]
    }
    
    if(nums){
        return(
            <motion.div 
                className="chords-div" 
                ref={componentRef}
                key={`${currentScale}-${note}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1.0 }}
                >
                <h3>Common Chord Progressions</h3>
                <div className="chordCards-div">
                    {chordProgessions.map((progression,index)=>{
                        const [chordNotes, chordNums] = getChord(nums, scaleNotes, progression);
                        return (
                                <motion.div
                                    key={`${progression}-${index}`}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0}}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className={'card-div'}
                                >
                                    <Card key={`${progression}-${index}`} chordNotes={chordNotes} chordNums={chordNums} progression={progression} note={note}/>
                                </motion.div>
                        )
                    })}
                </div>
            </motion.div>
            
        )
    }

}

export default Chords