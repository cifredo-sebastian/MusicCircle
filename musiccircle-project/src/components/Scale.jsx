import React from 'react'


function Scale ({scales, currentScale, note}) {
    console.log(`From Scale.jsx: reached Scale.jsx with ${scales}` )
    const componentRefScale = React.useRef(null)
    // scales.map((note,index) => {console.log(note,index)})

    // Change in mode that scrolls into view.
    // React.useEffect(() => {
    //     console.log("Scale Effect ran")

    //     setTimeout(()  => {
    //         if (componentRefScale.current){
    //             componentRefScale.current.scrollIntoView({ behavior: 'smooth' })
    //         }
    //     },500)

    // },[currentScale])

    return(
        <div>
            <h3 className='h3-scale' ref={componentRefScale} >{`${note} ${currentScale.charAt(0).toUpperCase() + currentScale.slice(1)}`}</h3>
            <div className='div-scales'>
                {scales.map((note,index) => (
                    <h3 key={index}>{note}</h3>
                ))}
            </div>
        </div>
        
    )

}

export default Scale