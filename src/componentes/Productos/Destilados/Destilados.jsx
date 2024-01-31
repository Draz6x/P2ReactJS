import { useParams } from "react-router-dom";

const Destilados = () => {
  const {id} = useParams();

  return (
    <div>
        <h2>Destilados</h2>
        <p>Mirando el producto ID: {id}</p>
    </div>
  )
}

export default Destilados