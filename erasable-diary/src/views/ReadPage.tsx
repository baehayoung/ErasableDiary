import css from "./Page.module.scss";

interface itemTypes {
    contents: string,
    time: string
}

const ReadPage = () => {
    // window.sessionStorage.removeItem("diary");
    const sessionDiary = JSON.parse(window.sessionStorage.getItem("diary") || "[]");

    return (
        <div>
            {sessionDiary?.map((item: itemTypes, idx: number) => <div className={css.itemContainer}>
                <div key={idx} className={css.contents}>{item.contents}</div>
                <div key={idx} className={css.date}>{item.time}</div>
            </div>)}
        </div>
    )
}

export default ReadPage;