import React from 'react';
import notesData from '../src/data/notesData';

function RightPanel ({note, setNote}) {
    const [notesArray,setNotesArray] = React.useState(notesData)
    const [nextNote,setNextNote] = React.useState(note)
    const [isFixed, setIsFixed] = React.useState(false);

    React.useEffect(() => {
        console.log("Right Panel Effect Reached")
        const index = notesArray.findIndex(n => n === note)
        if (index < 11) {
            setNextNote(notesArray[index+1]);
        }
        else{
            setNextNote(notesArray[0])
        }
        
    },[note])

    function noteChange() {
        // console.log(`Right Panel Button Clicked prevnote: ${nextNote}`)
        setNote(nextNote)
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
        <div className={`side-panel right-panel ${isFixed ? 'fixed' : 'absolute'}`}>
            {/* Add your navigation items here */}
            <div className='panel-content' onClick={noteChange}>
                <h1>{nextNote}</h1>
                <div className="arrow right-arrow">
                    <i class="fa fa-angle-right" aria-hidden="true"></i> {/* Right arrow */}
                </div> 
            </div>
            
        </div>
    );
};

export default RightPanel;