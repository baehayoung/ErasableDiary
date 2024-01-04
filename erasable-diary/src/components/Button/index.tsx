import './Button.module.scss';

const Button = (props: {
    children: React.ReactNode,
    clickHandler: React.MouseEventHandler<HTMLButtonElement>
}) => {
    return (
        <div>
            <button onClick={props.clickHandler}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;