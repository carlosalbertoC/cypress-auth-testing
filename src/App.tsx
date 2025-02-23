import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenido, {user}</p>
          <button onClick={() => setUser(null)}>Cerrar sesión</button>
        </div>
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
}

export default App;
