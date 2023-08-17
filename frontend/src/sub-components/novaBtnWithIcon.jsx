import { Button } from "flowbite-react";

export default function ButtonsWithIcon(props) {
    return (
        <>
            <Button
                onClick={props.onClick}
                className={props.classes}
                color={props.color}
            >
                {props.btnIcon && <props.btnIcon className="mr-2 h-5 w-5" />}
                <p>{props.text}</p>
            </Button>
        </>
    );
}
