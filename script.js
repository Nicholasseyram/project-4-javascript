// const form = document.querySelector("form");

// form.addEventListener("submit", (e) =>{e.preventDefault();

function addition(){
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  const calculate = (n1 + n2);
  document.getElementById('result').innerHTML = calculate;
}
// })

// document.getElementById('rAddition').style.display='none';
// document.getElementById('rAddition').style.color ='green';
