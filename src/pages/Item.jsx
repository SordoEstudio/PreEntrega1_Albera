import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const Item = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return <ItemDetailContainer product={product} />;
};

export default Item;
