import React from 'react';
import scalesData from "/src/data/scalesData.js";
import Scale from '/components/Scale'
import RomanNumeral from '/components/RomanNumeral'
import Chords from '/components/Chords';

function Note ({note,setNote}) {
    if (!note) return null;

    const [isVisible, setIsVisible] = React.useState(false);
    const [isAppearing,setIsAppearing] = React.useState(false)
    const componentRefNote = React.useRef(null);
    const componentRefScale = React.useRef(null);
    const [scalesArray,setScalesArray] = React.useState(scalesData[note])
    const [scale,setScale] = React.useState(null)
    const [scaleNotes, setScaleNotes] = React.useState(null)

    //Change in Note
    React.useEffect(() => {
        console.log("Note.jsx Effect ran")
        console.log('From Note: note has changed:', note)
        setIsVisible(true)
        setScalesArray(scalesData[note])
        if (isVisible  && componentRefNote.current){
            componentRefNote.current.scrollIntoView({ behavior: 'smooth' })
        }
    },[note])

    React.useEffect(() => {
        if (scalesArray){
            setScaleNotes(scalesArray[scale]) 
        } 
        else{
            setScaleNotes(null)
        }
    },[scalesArray])

    //Appearance
    React.useEffect(() => {
        if (isVisible  && componentRefNote.current){
            setTimeout(() => setIsAppearing(true), 10) // Allow time for the DOM to render the component
        }
    }, [isVisible])

    //Change in Scale
    React.useEffect(() => {
        if (scalesArray){
            setScaleNotes(scalesArray[scale]) 
        } 
        else{
            setScaleNotes(null)
        }
        if (isVisible  && componentRefScale.current){
            componentRefScale.current.scrollIntoView({ behavior: 'smooth' }) // Hitting one of the buttons scrolls to the buttons.
        }
        console.log(`From Note: scaleNotes state: ${scaleNotes}`)
    }, [scale])


    return (
        <div className={`notePage${isAppearing ? '-appear' : ''}`} ref={componentRefNote}>
            <div>
                <h1>{note}</h1>
            </div>
            <div>
                <div className='button-div' ref={componentRefScale}>
                    <button onClick={() => setScale('major')} className={scale === "major" ? `selectedButton` : `scaleButton`}>Major</button>
                    <button onClick={() => setScale('minor')} className={scale === "minor" ? `selectedButton` : `scaleButton`}>Minor</button>
                    <button onClick={() => setScale('dorian')} className={scale === "dorian" ? `selectedButton` : `scaleButton`}>Dorian</button>
                    <button onClick={() => setScale('mixolydian')} className={scale === "mixolydian" ? `selectedButton` : `scaleButton`}>Mixolydian</button>
                    <button onClick={() => setScale('lydian')} className={scale === "lydian" ? `selectedButton` : `scaleButton`}>Lydian</button>
                    <button onClick={() => setScale('phrygian')} className={scale === "phrygian" ? `selectedButton` : `scaleButton`}>Phrygian</button>
                    <button onClick={() => setScale('locrian')} className={scale === "locrian" ? `selectedButton` : `scaleButton`}>Locrian</button>
                </div>
                <div>
                    {scaleNotes && <Scale scales={scaleNotes} currentScale={scale} note={note} />}
                    {scaleNotes && <RomanNumeral scales={scale} />}
                    {scaleNotes && <Chords currentScale={scale} scaleNotes={scaleNotes} note={note}/>}
                </div>
                
            </div>
            
        </div>
    )
}

export default Note;