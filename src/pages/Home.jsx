import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-- z-10">
        <Canvas
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />} />
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
