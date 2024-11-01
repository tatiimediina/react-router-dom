import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Página no encontrada</p>
      <Link to="/home">Ir al home</Link>
    </div>
  );
};

export default NotFound;
