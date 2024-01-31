import { useParams } from "react-router-dom";

const Cervezas = () => {
  const {id} = useParams();

  return (
    <div>
        <h2>Cervezas</h2>
        <p>Mirando el producto ID: {id}</p>
    </div>
  )
}

export default Cervezas