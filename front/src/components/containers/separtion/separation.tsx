import { ReactElement } from "react";
import './separation.css'

export interface SeparationProps {
    id: string
    title: string
}

export default  function Separation({id, title}: SeparationProps) : ReactElement{
    return (
        <div id={id} className='title-separation'>
            <hr className='title-bar'/>
                <h1 className='title-section' >
                    {title}
                </h1>
            <hr className='title-bar'/>
      </div>
    )
}