// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.currentTarget;
  element.classList.toggle("active");

  const arrowDown = element.querySelector(".arrow");
  if (element.classList.contains("active")) {
    arrowDown.style.transform = "rotateX(180deg)";
  } else {
    arrowDown.style.transform = "rotateX(0deg)";
  }
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// const section1Element = document.getElementById("section1");
// const section2Element = document.getElementById("section2");
// const section3Element = document.getElementById("section3");

// section1Element.addEventListener("click", toggle);
// section2Element.addEventListener("click", toggle);
// section3Element.addEventListener("click", toggle);

// hämta datan
const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts");

//först promise om response-object
const dataPromise = responsePromise.then((response) => {
  return response.json();
});

//väntar på att json-omvandlingen till javascript
dataPromise.then((data) => {
  console.log(data);

  //Här ligger datan som ska loopas

  // data.forEach((element) => {
  //   const sectionDiv = document.createElement("div");

  // });

  const accordionEl = document.getElementById("accordion");

  for (let i = 0; i < data.length; i++) {
    console.log(data);

    const divTitle = document.createElement("div");
    // divTitle.setAttribute("class", "title");
    divTitle.setAttribute("id", `section${i}`);
    divTitle.textContent = data[i].title;
    divTitle.addEventListener("click", toggle);

    const arrowDown = document.createElement("arrow");
    arrowDown.innerHTML = "&#x25BC;";
    arrowDown.setAttribute("class", "arrow");

    divTitle.appendChild(arrowDown);
    accordionEl.appendChild(divTitle);

    const divDescription = document.createElement("div");
    divDescription.setAttribute("class", "description");
    divDescription.textContent = data[i].body;

    accordionEl.appendChild(divDescription);

    console.log(data[i].body);

    if (i % 2 === 0) {
      divTitle.setAttribute("class", "title even");
    } else {
      divTitle.setAttribute("class", "title odd");
    }

    // const arrowDown = document.querySelector(".hidden");
    // arrowDown.appendChild(divTitle);

    // divTitle.addEventListener("click", () => {
    //   arrowDown.remove(".hidden");
    // });
  }
});
