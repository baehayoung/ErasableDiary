import { useState } from 'react';
import Form from '../components/Form/Form';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
    const navigate = useNavigate();
    const sessionDiary = JSON.parse(window.sessionStorage.getItem("diary") || "[]");
    const [diary, setDiary] = useState("");

    return (
        <div>
            <Form
                changeHandler={(event) => { setDiary(event.target.value) }}
                submitHandler={() => {
                    window.sessionStorage.setItem("diary", JSON.stringify([...sessionDiary, { contents: diary, time: new Date().toLocaleString() }]));
                    navigate('/read');
                }}
            />
        </div>
    )
}

export default WritePage;