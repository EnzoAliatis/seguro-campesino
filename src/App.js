import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Routing from "./routes/Routing";
import { isUserLogesApi } from "./api/auth";
import { AuthContext } from "./utils/contexts";

export default function App() {
  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogesApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin]);

  if (!loadUser) return null;

  return (
    <AuthContext.Provider value={user}>
      {!user ? (
        <Login setRefreshCheckLogin={setRefreshCheckLogin} />
      ) : (
        <Routing setRefreshCheckLogin={setRefreshCheckLogin} />
      )}
    </AuthContext.Provider>
  );
}
