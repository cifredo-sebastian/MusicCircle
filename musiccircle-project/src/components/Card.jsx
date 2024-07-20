import React from 'react'


function Card ({chordNotes, chordNums, progression,note}) {

    return (
        <div className={`card card-${note}`}>
            <div>
                <h6>{chordNums.join(' - ')}</h6>
            </div>
            <div>
                <h5>{chordNotes.join('-')}</h5>
                <p>{progression.join('-')}</p>
            </div>
        </div>
    )
}

export default Card