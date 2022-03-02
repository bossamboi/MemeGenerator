const form = document.querySelector("#memeform");
const imgInput = document.querySelector('input[name="image"]');
const topTextInput = document.querySelector('input[name="top-text"]');
const botTextInput = document.querySelector('input[name="bot-text"]');
const results = document.querySelector("#results");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newMeme = makeMeme(imgInput.value, topTextInput.value, botTextInput.value);
  results.appendChild(newMeme);

  imgInput.value = "";
  topTextInput.value = "";
  botTextInput.value = "";
});

// commented out code below did not work. used event delegation instead on results container
// let memes = document.querySelectorAll(".meme");

// for (let meme of memes) {
//   meme.addEventListener("click", function (e) {
//     e.target.remove();
//   });
// }

results.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG" || e.target.tagName === "DIV") {
    e.target.parentElement.remove();
  }
});

function makeMeme(url, topText, botText) {
  const memeDiv = document.createElement("div");
  const imgDiv = document.createElement("img");
  const topTextDiv = document.createElement("div");
  const botTextDiv = document.createElement("div");

  memeDiv.setAttribute("class", "meme");
  imgDiv.setAttribute("class", "pic");
  imgDiv.setAttribute("src", url);
  if (topText.length > 25) {
    topTextDiv.setAttribute("class", "toptextlong");
  } else {
    topTextDiv.setAttribute("class", "toptext");
  }
  topTextDiv.innerText = topText.toUpperCase();

  if (botText.length > 25) {
    botTextDiv.setAttribute("class", "bottomtextlong");
  } else {
    botTextDiv.setAttribute("class", "bottomtext");
  }
  botTextDiv.innerText = botText.toUpperCase();

  memeDiv.append(imgDiv, topTextDiv, botTextDiv);

  return memeDiv;
}
