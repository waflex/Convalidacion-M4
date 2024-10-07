$("document").ready(function () {
  let A=true,
    B=true,
    C = true;
  document.getElementById("A").addEventListener("click", () => {
    if (A) {
      getChars(1, 5, "A");
      A = false;
    }else{
        console.log("borrando")
        $('.Rem-A').remove()
        A=true;
    }
  });
  document.getElementById("B").addEventListener("click", () => {
    if (B) {
      getChars(6, 11, "B");
      B = false;
    }else{
        console.log("borrando")
        $('.Rem-B').remove()
        A=true;
    }
  });
  document.getElementById("C").addEventListener("click", () => {
    if (C) {
      getChars(12, 16, "C");
      C = false;
    }else{
        console.log("borrando")
        $('.Rem-C').remove()
        A=true;
    }
  });

  async function getChars(Inicio, Fin, Place) {
    for (let i = Inicio; i <= Fin; i++) {
      let res = await fetch(`https://swapi.dev/api/people/${i}/`);
      let char = await res.json();
      addChar(char, Place);
    }
  }

  function addChar(char, Place) {
    const details = document.getElementById(`Char-${Place}`);
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("characters");
    characterDiv.classList.add(`Rem-${Place}`);
    characterDiv.innerHTML = `
        <div class="left"><i class="fa fa-circle ${Place}" aria-hidden="true"></i></div>
        <div class="right">
        <h3>${char.name}</h3>
        <p><strong>Estatura:</strong> ${char.height} cm
        <strong>Peso:</strong> ${char.mass} kg</p>
        </div>
      `;
    details.appendChild(characterDiv);
  }
});
