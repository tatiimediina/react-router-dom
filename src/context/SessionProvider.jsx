import { useState, useContext, createContext, useEffect } from "react";

const SessionContext = createContext({
  user: undefined,
});

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:4000/auth/me", {
      credentials: "include",
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("no se pudo iniciar sesión");
        }

        respuesta.json().then((data) => {
          setUser(data.user);
        });
      })
      .catch((e) => {
        console.log(e);
        setUser(null);
      });
  }, []);
  console.log(user);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
