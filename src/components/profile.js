import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <>
          <h3>Olá {userDetails.firstName}! </h3>
          <div>
            <p>E-mail: {userDetails.email}</p>
            <p>Nome: {userDetails.firstName}</p>
            {<p>Sobrenome: {userDetails.lastName}</p>}
            {<p>Data de Nascimento: {userDetails.birth}</p>}

          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Sair!
          </button>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
export default Profile;
