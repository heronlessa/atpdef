import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Dnasc, setDnasc] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          birth: Dnasc,
        });
      }
      console.log("Usuário cadastrado com sucesso!!");
      toast.success("Usuário cadastrado com sucesso!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h3>Cadastro</h3>

      <div className="mb-3">
        <label>Nome:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Insira seu nome!"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Sobrenome:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Insira seu sobrenome!"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>E-Mail:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Insira seu e-mail!"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Data de Nascimento:</label>
        <input
          type="date"
          className="form-control"
          placeholder="Insira sua data de nascimento!"
          onChange={(e) => setDnasc(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Senha:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Crie sua senha!"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Registrar-se
        </button>
      </div>
      <p className="forgot-password text-right">
        Se você já possui cadastro, <a href="/login">clique aqui!</a>
      </p>
    </form>
  );
}
export default Register;
