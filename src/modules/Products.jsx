import { useEffect } from "react";
// import { products } from "../products";
import { Product } from "./Product";
import { useProducts } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import { Skeletonloader } from "./SkeletonLoader";


export const Products = () => {
  const [searhParams] = useSearchParams()
  const { products, setCategory } = useProducts()
  const category = searhParams.get("category");

  useEffect(() => {
    setCategory(category)
  }, [category, setCategory])

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{category}</h2>

        <ul className="products__list">
          {products.length ? products.map((item) => (<Product key={item.id} data={item} />)) : (<Skeletonloader />)}
        </ul>
      </div>
    </section>
  )
}