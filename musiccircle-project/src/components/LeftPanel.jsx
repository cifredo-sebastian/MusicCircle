// LeftPanel.js
import React from 'react';
import notesData from '../data/notesData';

function LeftPanel ({note,setNote}) {
    const [notesArray,setNotesArray] = React.useState(notesData);
    const [prevNote,setPrevNote] = React.useState(note);
    const [isFixed, setIsFixed] = React.useState(false);


    React.useEffect(() => {
        console.log("Left Panel Effect Reached")
        const index = notesArray.findIndex(n => n === note)
        if (index > 0) {
            setPrevNote(notesArray[index - 1]);
        }
        else{
            setPrevNote(notesArray[11])
        }
        
    },[note])

    function noteChange() {
        // console.log(`Left Panel Button Clicked prevnote: ${prevNote}`)
        setNote(prevNote)
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const fixedPosition = 700; // Scroll position to switch to fixed
    
        if (scrollPosition > fixedPosition) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
    };
    
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`side-panel left-panel ${isFixed ? 'fixed' : 'absolute'}`}>
            <div className='panel-content' onClick={noteChange}>
                <h1>{prevNote}</h1>
                <div className="arrow left-arrow">
                    <i class="fa fa-angle-left" aria-hidden="true"></i> {/* Left arrow */}
                </div> 
            </div>
            
        </div>
    );
};

export default LeftPanel;