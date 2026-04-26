let saldo = 1000;

  function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const erro = document.getElementById("erro");

    if (!email.includes("@")) {
      erro.innerText = "Email inválido";
      return;
    }

    if (senha.length < 4) {
      erro.innerText = "Senha muito curta";
      return;
    }

    erro.innerText = "";
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  }

  function atualizarSaldo() {
    document.getElementById("saldo").innerText = "R$ " + saldo;
  }

  function adicionarHistorico(texto) {
    const li = document.createElement("li");
    li.innerText = texto;
    document.getElementById("historico").appendChild(li);
  }

  function ganhar() {
    saldo += 100;
    atualizarSaldo();
    adicionarHistorico("+100 ganho");
  }

  function gastar() {
    saldo -= 50;
    atualizarSaldo();
    adicionarHistorico("-50 gasto");
  }

  function logout() {
    location.reload();
  }