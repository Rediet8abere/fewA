let titleEnterd = document.getElementById("title-enterd");
let titleColor = document.getElementById("title-color");
let headTitle = document.getElementById("head-title");



let userText = document.getElementById("user-text");
let paraColor = document.getElementById("para-color");
let bodyParag = document.getElementById("body-parag");


let submitBtn = document.getElementById("submit-btn");

let selectFont = document.getElementById("select-font");
// console.log("selectFont", selectFont);
let family = selectFont.options[selectFont.selectedIndex];
console.log("family", family);
console.log("family", family.value);

titleEnterd.addEventListener("input", showTitle);
titleColor.addEventListener("style", showTitle);
// titleColor.addEventListener("input", showTitle);


function showTitle(e) {
  e.preventDefault();

  // headTitle.innerHTML = titleEnterd.value;
  headTitle.style.color = titleColor.value;
  headTitle.innerHTML = e.target.value;
  headTitle.style.fontFamily = family.value;
}

userText.addEventListener("input", showText);
paraColor.addEventListener("style", showText);



function showText(e) {
  e.preventDefault();

  // console.log(e.target.value)
  bodyParag.innerHTML = e.target.value;
  // var bodyParagText = userText.value;
  // bodyParag.innerHTML = bodyParagText;
  //
  // // bodyParag.innerHTML = userText.value;
  bodyParag.style.color = paraColor.value;
  bodyParag.style.fontFamily = family.value;
}

// submitBtn.addEventListener('click', showTitle);
// submitBtn.addEventListener('click', showText);

// submitBtn.onclick = showTitle;

