import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionProvider";
export const Login = () => {
  const navigate = useNavigate();

  const { user, setUser } = useSession(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    const res = await fetch("http://localhost:4000/auth/sign-in", {
      method: "POST",
      credentials: "include",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      return;
    }

    const data = await res.json();
    setUser(data.user);

    navigate("/");
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" plasholder="email" />
        <input type="password" name="password" id="" plasholder="password" />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
