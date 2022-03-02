const html = document.querySelector("html");
const checkbox = document.getElementById("checkbox");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, "--bg"),
  bgCard: getStyle(html, "--bg-card"),
  bgHeaderdiv: getStyle(html, "--bg-headerdiv"),
  bgDiv: getStyle(html, "--bg-div"),
  bordas: getStyle(html, "--bordas"),
  bgTag: getStyle(html, "--bg-tag"),
  colorTtag: getStyle(html, "--color-tag"),
  colorPtag: getStyle(html, "--color-p-tag"),
  textP: getStyle(html, "--text-p"),
  textH2: getStyle(html, "--text-h2"),
  textH4: getStyle(html, "--text-h4"),
  textCard: getStyle(html, "--text-card"),
  lineColor: getStyle(html, "--line-color"),
  ballColor: getStyle(html, "--ball-color"),
  bgVisit: getStyle(html, "--bg-visit"),
  textVisit: getStyle(html, "--text-visit"),
  bgCardhover: getStyle(html, "--bg-card-hover"),
};

const darkMode = {
  bg: "#000000",
  bgCard: "#616F39",
  bgHeaderdiv: "#3E432E",
  bgDiv: "#616F39",
  bordas: "#000000",
  bgTag: "#8ba638",
  colorTag: "",
  colorPtag: "",
  textP: "#ffffff",
  textH2: "",
  textH4: "#ffffff",
  textCard: "#A7D129",
  lineColor: "#8ba638",
  ballColor: "",
  bgVisit: "#A7D129",
  textVisit: "#ffffff",
  bgCardhover: "#A7D129",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
