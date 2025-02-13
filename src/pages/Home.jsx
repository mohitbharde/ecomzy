import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("something get wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className=" w-full h-lvh">
      {loading ? (
        <div className="flex h-[100vh]  w-full  justify-center items-center">
          <Spinner></Spinner>
        </div>
      ) : posts.length > 0 ? (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl p-2 mx-auto space-y-10 space-x-10 min-h-[80vh] ">
          {posts.map((post) => (
            <Product key={post.id} post={post}></Product>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">No data found</div>
      )}
    </div>
  );
};

export default Home;
