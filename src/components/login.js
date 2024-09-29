import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuário logado com sucesso!");
      window.location.href = "/profile";
      toast.success("Usuário logado com sucesso!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Usuário não existe!");

      toast.error("Usuário não existe!", {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>E-Mail:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Insira seu e-mail!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Senha:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Insira sua senha!"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Entrar!
        </button>
      </div>
      <p className="forgot-password text-right">
        Não possui cadastro? <a href="/register">Clique aqui!</a>
      </p>
    </form>
  );
}

export default Login;
