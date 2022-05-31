import React, {
    ChangeEvent,
    ChangeEventHandler,
    createRef,
    EventHandler, FormEvent,
    LegacyRef,
    RefObject,
    useCallback, useRef,
    useState
} from 'react';
import '../app.css';

function ReverseString() {

    const [text, setText] = useState("NONE");
    const inputRef : RefObject<HTMLInputElement> = createRef();
    const reverseText = useRef<string>();

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        reverseText.current = text.split("").reverse().join("");
        setText("");
        inputRef.current?.focus();

    }
    const handleOnChange = useCallback((e : ChangeEvent<HTMLInputElement>) : void => {
        setText(e.target.value);
    },[]);

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input ref={inputRef} onChange={handleOnChange} value={text}/>
                <button type="submit">제출</button>
            </form>
            <h2>{reverseText.current}</h2>

        </>

    );
}

export default ReverseString;
