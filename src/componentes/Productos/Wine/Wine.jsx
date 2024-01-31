import { useParams } from "react-router-dom";

const Wine = () => {
    const {id} = useParams();

  return (
    <div>
        <h2>Vinos</h2>
        <p>Mirando el producto ID: {id}</p>
    </div>
  )
}

export default Wine