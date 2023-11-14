
import Intro from "./components/intro";
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
    </main>
  )
}
