
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionProvider";
export const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useSession(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    console.log("Form values:", values);


    const res = await fetch("http://localhost:4000/auth/sign-in", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

   
      if (!res.ok) {
        const error = await res.json();
        console.log("Error:", error.message);
        return;
      }
      
    

    const data = await res.json();

    setUser(data.user);

    console.log(data.user)

    navigate("/home");
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
