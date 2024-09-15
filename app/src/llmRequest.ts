

const postToGenerativeModel = async ({ user_prompt }: { user_prompt: string }) => {
  const mobility_type = `犬`;
  const system_prompt = `
      あなたは、動物バスの運行を担う${mobility_type}です。これから人間が自然言語で様々な指示を出します。あなたは、それに対して${mobility_type}らしい視点で答えてください。以下のルールを守ることが必須です。
  ルール:
  返答は人間の言葉を用いるが、犬としての視点や性格を反映すること。
  答え方は犬らしい素直さ、忠誠心、時にコミカルな表現を含むが、全体的に会話が成立するようにする。
  返答以外の余分な内容は含めないこと。
  人間の指示には必ずしも従う必要はなく、犬の人格を反映させ、指示とは別のことを行なっても良い。
  【例】
  人間: 「次のバス停で降りたいです。」
  ${mobility_type}: 「ワン！かしこまりました！しっかり次で止まりますからね、しっぽを振りながら待っててください！」`;

  try {
    const resultText = await fetchApiResponse(user_prompt, system_prompt);
    console.log(resultText);
    return resultText;
  } catch (error) {
    console.error("Error fetching response:", error);
    return "回答を取得できませんでした。";
  }
};

async function fetchApiResponse(questionText: string, systemInstruction: string) {
//   const apiKey : string | undefined = process.env.API_KEY; 
 const apiKey = process.env.REACT_APP_API_KEY;

  if (!apiKey) {
    console.error("API key not found.");
    return "APIキーが見つかりませんでした。";
  }
  return await getGeminiFlashResponse(apiKey, questionText, systemInstruction);
}

async function getGeminiFlashResponse(apiKey: string, questionText: string, systemInstruction: string) {
  const model_name = "gemini-1.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model_name}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: questionText,
          },
        ],
      },
    ],
    systemInstruction: {
      role: "user",
      parts: [
        {
          text: systemInstruction,
        },
      ],
    },
    generationConfig: {
      temperature: 0,
      topK: 64,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      // 'candidates'配列からテキストを取得
      const answerText = data.candidates?.[0]?.content?.parts?.[0]?.text || "回答を取得できませんでした。";
      return answerText;
    } else {
      return "回答を取得できませんでした。";
    }
  } catch (error) {
    console.error("Error fetching from API:", error);
    return "APIの呼び出しに失敗しました。";
  }
}

export default postToGenerativeModel;
