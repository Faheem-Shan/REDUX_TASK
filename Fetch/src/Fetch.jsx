//component where u call API
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { fetchProducts } from "./Thunk";

export default function FetchProducts(){
    const dispatch = useDispatch();
    const {items,loading,error}=useSelector((state)=>state.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch]);

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>Products List</h2>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}