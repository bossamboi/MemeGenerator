const form = document.querySelector("#memeform");
const imgInput = document.querySelector('input[name="image"]');
const topTextInput = document.querySelector('input[name="top-text"]');
const botTextInput = document.querySelector('input[name="bot-text"]');
const results = document.querySelector("#results");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newMeme = makeMeme(imgInput.value, topTextInput.value, botTextInput.value);
  results.appendChild(newMeme);
});

function makeMeme(url, topText, botText) {
  const memeDiv = document.createElement("div");
  const imgDiv = document.createElement("img");
  const topTextDiv = document.createElement("div");
  const botTextDiv = document.createElement("div");

  memeDiv.setAttribute("class", "meme");
  imgDiv.setAttribute("class", "pic");
  imgDiv.setAttribute("src", url);
  topTextDiv.setAttribute("class", "toptext");
  topTextDiv.innerText = topText.toUpperCase();
  botTextDiv.setAttribute("class", "bottomtext");
  botTextDiv.innerText = botText.toUpperCase();

  memeDiv.append(imgDiv, topTextDiv, botTextDiv);

  return memeDiv;
}
