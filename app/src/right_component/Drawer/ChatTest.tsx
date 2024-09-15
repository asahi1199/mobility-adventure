import { wait } from '@testing-library/user-event/dist/utils';
import  postToGenerativeModel from '../../llmRequest';
import { useState } from 'react';
import { useEffect } from 'react';


const ChatTest = () => {

    const [result, setResult] = useState<string>("");

    useEffect(() => {
        const test = async () => {
            const result = await postToGenerativeModel({ user_prompt: "こんにちは" });
            console.log(result);
            setResult(result);
        }
        test();
    }, []);
    
    return(
        <div>
            <p>ChatTest</p>
            <p>{result}</p>
        </div>
    )
}

export default ChatTest;