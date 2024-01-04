import { useCallback, useRef } from 'react';
import Button from '../Button';

import './Form.module.scss';

const Form = (props: {
    changeHandler: React.ChangeEventHandler<HTMLTextAreaElement>,
    submitHandler: React.FormEventHandler<HTMLFormElement>
}) => {
    const textRef = useRef<HTMLTextAreaElement>(null);

    const handleResizeHeight = useCallback(() => {
        if (textRef?.current) {
            textRef.current.style.height = textRef.current.scrollHeight + "px";
        }
    }, []);

    return (
        <form onSubmit={props.submitHandler}>
            <textarea
                rows={1}
                ref={textRef}
                onChange={props.changeHandler}
                onInput={handleResizeHeight}
            />
            <Button clickHandler={() => { }}>등록하기</Button>
        </form>
    )
}

export default Form;        