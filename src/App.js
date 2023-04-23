import './App.css';
import { useState } from 'react';
import { AdBox} from './component/AdBox.js';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [res, setRes] = useState([]);

  async function Search(){
    try {
      if(searchTerm.length <= 0){
        return
      }
      console.log(searchTerm);
      let result = await axios.post("http://localhost:4000/api/search",{
        searchTerm
      })
      if(!searchTerm){
        setRes([]);
        return
      }else{
        console.log(result);
        setRes(result.data.results);
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className=''>
      <div className='text-center'>
        <h1 className='text-[40px] drop-shadow-lg font-bold uppercase'>Search Ad</h1>
      </div>
      <div className='flex w-full justify-center p-2'>
      <div className="App w-1/2">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" onChange={(event)=>{setSearchTerm(event.target.value); Search()}} id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search across company name, primary text, headline, and description..." required/>
            <button type="" onClick={Search} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </div>
    </div>
    <div className='grid grid-cols-3 h-[800px] p-4 gap-4'>
      {res.map((ele)=>
        <AdBox data={ele} />
      )

      }
    </div>
    </div>
  );
}

export default App;
