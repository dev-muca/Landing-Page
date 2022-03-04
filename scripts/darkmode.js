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
  bgTaghover: getStyle(html, "--bg-taghover"),
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
  bg: "#0b090a",
  bgCard: "#660708",
  bgHeaderdiv: "#ba181b",
  bgDiv: "#660708",
  bordas: "#ba181b",
  bgTag: "#660708",
  bgTaghover: "#ffffff",
  colorTag: "#ffffff",
  colorPtag: "#000000",
  textP: "#ffffff",
  textH2: "#ffffff",
  textH4: "#ffffff",
  textCard: "##ffffff",
  lineColor: "#ffffff",
  ballColor: "#ffffff",
  bgVisit: "#e5383b",
  textVisit: "#d3d3d3",
  bgCardhover: "#e5383b",
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
