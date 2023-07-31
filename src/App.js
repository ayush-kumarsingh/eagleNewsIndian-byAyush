import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';

function App() {
  // const aritcles
  const [articles, setarticles] = useState([]);
  const [category, setcategory] = useState('general');
  const [progress, setprogress] = useState(0);



  async function fetchdata() {
    setprogress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f41c93f74d194129b0ecac4c0ff5c10e`
    const response = await fetch(url);
    setprogress(60);
    const json = await response.json();
    setarticles(json.articles);
    setprogress(100);
  }


  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdatawithcategory(categ) {
    setprogress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${categ}&apiKey=f41c93f74d194129b0ecac4c0ff5c10e`;
    const response = await fetch(url);
    setprogress(60);
    const json = await response.json();
    setcategory(categ);
    setarticles(json.articles);
    setprogress(100);
  }


  return (
    <>
      <LoadingBar
        color='#FFFFFF'
        height={3}
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <div className="flex flex-col items-center bg-gray-300">
        <div className="bg-red-700 w-full p-4 text-white">
          <h1 className=" text-6xl text-center">Eagle News India</h1>
        </div>
        <Navbar fetchdatawithcategory={fetchdatawithcategory} />
        <h2 className='text-4xl text-slate-700'>Top Headlines - {category}</h2>
        <br />
        <div className="flex flex-wrap justify-center">
          {articles.map((article) => {
            return <Cards title={article.title} description={article.description} image={article.urlToImage} more={article.url} category = {category}/>
          })}
        </div>
        <Footer />

      </div>
    </>
  );
}

export default App;
