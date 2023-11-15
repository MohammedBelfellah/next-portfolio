
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Intro from "./components/intro";
import Projects from "./components/projects";
import SectionDivider from "./components/section-devider";
import Skills from "./components/skills";
import { Post } from "./lib/interface";
import { client} from "./lib/sanity";

async function getData() {
  try {
    const data = await client.fetch({
      query: `*[_type == 'post']`,
      config: {
        cache: 'force-cache',
        next: { revalidate: 60 }
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}




export default  function Home() {

  return (
    <main
    className="flex flex-col items-center px-4"
    >
      <Intro/>  
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
