import { ReactElement } from "react";
import './separation.css'

export interface SeparationProps {
    title: string
}

export default  function Separation({title}: SeparationProps) : ReactElement{
    return (
        <div className='title-separation'>
            <hr className='title-bar'/>
                <h1>
                    {title}
                </h1>
            <hr className='title-bar'/>
      </div>
    )
}