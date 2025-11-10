const btnSignIn = document.getElementById("btnSignIn");
    const btnRegister = document.getElementById("btnRegister");
    const formSignIn = document.getElementById("formSignIn");
    const formRegister = document.getElementById("formRegister");
    const switchText = document.getElementById("switchText");

    btnSignIn.addEventListener("click", () => {
      btnSignIn.classList.add("active");
      btnRegister.classList.remove("active");
      formSignIn.style.display = "flex";
      formRegister.style.display = "none";
      switchText.textContent = "Don't have an account? Register";
    });

    btnRegister.addEventListener("click", () => {
      btnRegister.classList.add("active");
      btnSignIn.classList.remove("active");
      formRegister.style.display = "flex";
      formSignIn.style.display = "none";
      switchText.textContent = "Already have an account? Sign in";
    });

    switchText.addEventListener("click", () => {
      if (formSignIn.style.display === "none") {
        btnSignIn.click();
      } else {
        btnRegister.click();
      }
    });