function convert() {
  let a = Number(document.getElementById("input").value);
  let rate;
  if (a <= 50) {
    rate = 0.75 * a;
  } 
  else if (a > 50 && a <= 100) {
    rate = (a - 50) * 1 + 0.75 * 50;
  } 
  
  else if (a > 100 && a <= 200) {
    rate = (a - 100) * 1.3 + 50 * 1 + 0.75 * 50;
  } 
  
  else {
    rate = (a - 200) * 1.5 + 100 * 1.3 + 50 * 1 + 0.75 * 50;
  }
  let result = document.querySelector("#result");
  result.innerHTML = rate;
}
