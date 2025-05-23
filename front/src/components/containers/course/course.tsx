import { ReactElement } from "react";
import './course.css'



type WorkoutTitle = "Pilates" | "Circuit training" | "Stretching & mobilité";

export interface CourseProps {
    src: string
    title: WorkoutTitle
    text: string
}


export default  function Course({src, title, text} : CourseProps): ReactElement{
    let color = ''

    switch (title) {
        case "Pilates":
          color = "#30b4a6";
          break;
        case "Circuit training":
          color = "#0069b4";
          break;
        case "Stretching & mobilité":
          color = "#e72f73";
          break;
        default:
          color = "#000000";
          break;
      }

    return (
        <div className='course-container'>
          <div className='img-container'>
              <img
                className='img-course' 
                src={src}/>
          </div>
          <div className='text-container'>
            <h1 className='course-title' style={{color: color}}>{title}</h1>
            <p className='course-text'>{text}</p>
          </div>
        </div>
    )
}
