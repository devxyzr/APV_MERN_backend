import { useContext } from "react";
import PacientesContext from "../../frontend/context/PacientesProvider";

const usePacientes = () => {
  return useContext(PacientesContext);
};

export default usePacientes;
