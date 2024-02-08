import { ReactElement } from "react";
import './diary.css'
import DiaryCard from "../../element/diary-card/diary-card";

export default function Diary() : ReactElement {
    return(
        <div className="diary-container">
            <DiaryCard></DiaryCard>
            {/* <DiaryCard></DiaryCard>
            <DiaryCard></DiaryCard> */}
        </div>
    )
}