import React from 'react';
import '/CSS/Circle.css'

function Circle (props) {
    const sections = [
        { key: 'C', class: 'C' },
        { key: 'G', class: 'G' },
        { key: 'D', class: 'D' },
        { key: 'A', class: 'A' },
        { key: 'E', class: 'E' },
        { key: 'B', class: 'B' },
        { key: 'F#', class: 'Fs' },
        { key: 'D♭', class: 'Db' },
        { key: 'A♭', class: 'Ab' },
        { key: 'E♭', class: 'Eb' },
        { key: 'B♭', class: 'Bb' },
        { key: 'F', class: 'F' },
    ]


    // const [note, setNote] = React.useState(null)

    function handleClick (key) {
        props.setNote(key)
    }

    function handleClose () {
        props.setNote(null)
    }

    return (
        <svg width="600" height="600" viewBox="-150 -150 300 300">
            {sections.map((section, index) => {
            const angle = (360 / sections.length) * index - 105;
            const nextAngle = (360 / sections.length) * (index + 1) - 105;
            const largeArcFlag = nextAngle - angle > 180 ? 1 : 0;

            const x1 = 100 * Math.cos((angle * Math.PI) / 180);
            const y1 = 100 * Math.sin((angle * Math.PI) / 180);
            const x2 = 100 * Math.cos((nextAngle * Math.PI) / 180);
            const y2 = 100 * Math.sin((nextAngle * Math.PI) / 180);

            const midAngle = (angle + nextAngle) / 2;
            const textX = 60 * Math.cos((midAngle * Math.PI) / 180);
            const textY = 60 * Math.sin((midAngle * Math.PI) / 180);

            return (
                <g key = {section.key}>
                    <path
                        key={section.key}
                        d={`M0 0 L${x1} ${y1} A100 100 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        
                        onClick={() => handleClick(section.key)}
                        // className="section"
                        className={`section ${section.class}`}
                    />
                    <text
                        x={textX}
                        y={textY}
                        className="label"
                    >
                        {section.key}
                    </text>
                </g>
                

            );
            })}
        </svg>
    )



}

export default Circle;