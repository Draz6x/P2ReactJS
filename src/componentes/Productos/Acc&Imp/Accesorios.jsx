import { useParams } from "react-router-dom";

const Accesorios = () => {
  const {id} = useParams();

  return (
    <div>
        <h2>Accesorios</h2>
        <p>Mirando el producto ID: {id}</p>
    </div>
  )
}

export default Accesorios