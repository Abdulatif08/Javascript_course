  function hisobla() {
      let a = document.getElementById("a").value;
      let h = document.getElementById("h").value;

      let yuza = (a * h) / 2;

      document.getElementById("natija").innerText =
        "Yuza: " + yuza;
    }