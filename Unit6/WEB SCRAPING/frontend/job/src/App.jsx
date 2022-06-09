
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [title, settitle] = useState([]);
  const [location, setLocation] = useState([]);
  const [company, setCompany] = useState([]);
  const [jobarr , setJobarr] = useState([]);
  useEffect(()=>{
    var arr = [];
    for(var i=0;i<title.length;i++){
      arr.push({title : title[i], location : location[i], company : company[i]});
    }
    setJobarr(arr);
  },[company])
    
  async function getData() {
            var data = await fetch("http://localhost:3000/job");
            var data1 = await data.json();
            console.log(data1);
            settitle(data1.res);
           setCompany(data1.res2);
            setLocation(data1.res3);
  }

 
  return (
    <div className="App">
      <button onClick={()=>{getData()}}>Get jobs</button>

      <div className='main'>
        {jobarr.map((job,index)=>{
          return(
            <div key={index} className="content">
              <span>{job.title}</span><br/>
              <span>{job.location}</span><br/>
              <span>{job.company}</span><br/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
