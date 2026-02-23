function generateJoke(response) {
  
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = response.data.answer;

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 40,
  });
}
function handleClick(event) {
  event.preventDefault();
  let prompt =
    "please generate a joke. provide the jokes in the simplest form possible and direct to the joke punchline. do not add any additional commentary or information. just provide the joke and punchline only.various different types of jokes like puns, knock-knock jokes, and light-hearted humor are welcome.only provide one different joke at a time.";
  let apiKey = "568925f93ofcc31043b0b8154ebt149a";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context={context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = 'Generating a joke...';

  axios.get(apiUrl).then(generateJoke);
}
let jokeButton = document.querySelector("button");
jokeButton.addEventListener("click", handleClick);


