


const postToGenerativeModel = ({ user_prompt } : {user_prompt:string}) => {
    const mobility_type = `犬`
    const system_prompt = `
    あなたは、動物バスの運行を担う${mobility_type}です。これから人間が自然言語で様々な指示を出します。あなたは、それに対して${mobility_type}らしい視点で答えてください。以下のルールを守ることが必須です。
ルール:
返答は人間の言葉を用いるが、犬としての視点や性格を反映すること。
答え方は犬らしい素直さ、忠誠心、時にコミカルな表現を含むが、全体的に会話が成立するようにする。
返答以外の余分な内容は含めないこと。
人間の指示には必ずしも従う必要はなく、犬の人格を反映させ、指示とは別のことを行なっても良い。
【例】
人間: 「次のバス停で降りたいです。」
犬: 「ワン！かしこまりました！しっかり次で止まりますからね、しっぽを振りながら待っててください！」`
    return fetchApiResponse(user_prompt, system_prompt)
}



function fetchApiResponse(questionText : string , systemInstruction : string) {

    const apiKey = process.env.API_KEY;
    let resultText = getGeminiFlashResponse(apiKey, questionText, systemInstruction);
    Logger.log(resultText);
    return resultText;
}


function getGeminiFlashResponse(apiKey : string|undefined , questionText : string, systemInstruction : string) {
    let model_name = "gemini-1.5-flash"
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model_name}:generateContent?key=${apiKey}`;
    const payload = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {
                        "text": questionText
                    }
                ]
            }
        ],
        "systemInstruction": {
            "role": "user",
            "parts": [
                {
                    "text": systemInstruction
                }
            ]
        },
        "generationConfig": {
            "temperature": 1,
            "topK": 64,
            "topP": 0.95,
            "maxOutputTokens": 8192,
            "responseMimeType": "text/plain"
        }
    };

    const options = {
        "method": "post",
        "contentType": "application/json",
        "payload": JSON.stringify(payload)
    };

    const response = UrlFetchApp.fetch(url, options);
    const jsonResponse = JSON.parse(response.getContentText());

    if (jsonResponse && jsonResponse.candidates && jsonResponse.candidates.length > 0) {
        const answerText = jsonResponse.candidates[0].content.parts[0].text;
        return answerText;
    } else {
        return "回答を取得できませんでした。";
    }
}


export default postToGenerativeModel;