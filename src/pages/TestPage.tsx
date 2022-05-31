import React, {ChangeEvent, FormEvent, LegacyRef, memo, useRef, useState} from "react";

const TestPage = memo(() => {

    const [value, setValue] = useState('');
    const [list , setList ] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleOnSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setList([...list, value]);
        setValue('');
        inputRef.current!.focus();
    }

    const handleOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input ref={inputRef} type="text" onChange={handleOnChange} value={value} placeholder="아무 값이나 입력하시요." data-testid="input"/>
                <input type="submit" value="ADD" data-testid="submit-btn"/>
            </form>
            <ul data-testid="list">
                {list.map(e =>
                    <li key={e}>{e}</li>
                )}
            </ul>
        </div>
    )
});

export default TestPage;
