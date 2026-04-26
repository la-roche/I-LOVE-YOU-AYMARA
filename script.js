function checkLogin() {
  const name = document.getElementById("nameInput").value;
  const code = document.getElementById("codeInput").value;
  const error = document.getElementById("errorMsg");

  if (
    (name === "MAYMARA" || name === "mon Diamant Noir") &&
    code === "1 2 3 soleil"
  ) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
  } else {
    error.textContent = "Hmm... ce n’est pas toi mon amour 💔";
  }
}

/* 💬 COMMENTAIRES */
function addComment() {
  const input = document.getElementById("commentInput");
  const comments = document.getElementById("comments");

  if (input.value.trim() !== "") {
    const p = document.createElement("p");
    p.textContent = "💌 " + input.value;
    comments.appendChild(p);
    input.value = "";
  }
}
