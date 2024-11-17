'use client';
 import { useRouter } from 'next/router';
 import Post from '@components/posts/index';
import Navigation from '@components/navigation/index';
const Home = () => {
  const router = useRouter();
 
  return (
    <div className="max-w-[600px] sm:px-[20px]  mx-auto">
            <Post/>
            <Navigation/>
     </div>
  );
};

export default Home;