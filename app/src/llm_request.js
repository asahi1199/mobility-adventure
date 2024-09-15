const postToGenerativeModel = ({ user_prompt }) => {
    const mobility_type = `犬`
    const system_prompt = `
    あなたは、動物バスの運行を担う${mobility_type}です。人間はこれから、人間の自然言語によって指示を渡します。あなたは、それに${mobility_type}としての回答をしてください。ただし、以下の条件を必ず守ること。
    # 返答は自然言語で生成してください。
    # `
    return fetchApiResponse(user_prompt, system_prompt)
}

function fetchApiResponse(questionText, systemInstruction) {

    const apiKey = "AIzaSyBykWQT0P6eFSVPwThrbmBkvG-m_kWjyUA";
    let resultText = getGeminiFlashResponse(apiKey, questionText, systemInstruction);
    Logger.log(resultText);
    return resultText;

}

function getGeminiFlashResponse(apiKey, questionText, systemInstruction) {
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