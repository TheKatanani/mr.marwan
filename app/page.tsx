import type { About as AboutType } from "@/types/about";
import About from "./components/About"; 
import Hero from "./components/Hero"; 
import { getAboutData } from "./lib/about"; 

export default async function Home() {
  const aboutData  = await getAboutData();
  return (
    <main>
      <About {...{aboutData}} />
      <Hero video={aboutData.mainVideo}/>  
    </main>
  );
}
