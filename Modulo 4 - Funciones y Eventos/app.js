// Inputs
var numeroA = () => parseInt(document.getElementById("numeroA").value);
var numeroB = () => parseInt(document.getElementById("numeroB").value);

// Operaciones
var sumar = () => numeroA() + numeroB();
var restar = () => numeroA() - numeroB();
var multi = () => numeroA() * numeroB();
var dividir = () => numeroA() / numeroB();

// Resultados
var showResultsuma = () =>
  (document.getElementById("resultado").innerText = sumar());
var showResultresta = () =>
  (document.getElementById("resultado").innerText = restar());
var showResultmulti = () =>
  (document.getElementById("resultado").innerText = multi());
var showResultdividir = () =>
  (document.getElementById("resultado").innerText = dividir());

// actividad en bottones
document.getElementById("sumar").addEventListener("click", showResultsuma );
document.getElementById("restar").addEventListener("click",showResultresta);
document.getElementById("multi").addEventListener("click", showResultmulti);
document.getElementById("dividir").addEventListener("click", showResultdividir);
