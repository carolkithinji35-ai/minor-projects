function showResult(response) {
  let answerElement = document.querySelector(".answer");
  answerElement.innerHTML=response.data.answer;
}

let apiKey = "568925f93ofcc31043b0b8154ebt149a";
let context =
  "You are an AI assistant who is smart, and well informed with the world history.please provide your answer with conciseness.";
let prompt = "Who is the first female president in history?";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showResult);
