import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import CrudContext from "../context/CrudContext";
import { useContext } from "react";

/*
NOTA:
    NO se puede llamar al PROVIDER en un mismo archivo donde se consuman variables de un CONTEXTO
*/

const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <div>
      <h2>CRUD Api con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable data={db} />}
      </article>
    </div>
  );
};

export default CrudApi;
