import css from "./Page.module.scss";

interface itemTypes {
    contents: string,
    time: string
}

const ReadPage = () => {
    // window.sessionStorage.removeItem("diary");
    const sessionDiary = JSON.parse(window.sessionStorage.getItem("diary") || "[]");
    console.log(sessionDiary)

    return (
        <div>
            {sessionDiary?.map((item: itemTypes, idx: number) => <div className={css.itemContainer}>
                <div key={idx} className={css.item}>{item.contents}</div>
                <div key={idx} className={css.item}>{item.time}</div>
            </div>)}
        </div>
    )
}

export default ReadPage;