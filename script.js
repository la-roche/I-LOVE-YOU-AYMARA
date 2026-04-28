function checkLogin() {
  const name = document.getElementById("nameInput").value;
  const code = document.getElementById("codeInput").value;
  const error = document.getElementById("errorMsg");

  if (
    (name === "Mon rochue" || name === "Maymara") &&
    code === "123soleil"
  ) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
  } else {
    error.textContent = "Hmm... petit(e) ce n’est pas toi mon amour 💔";
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
