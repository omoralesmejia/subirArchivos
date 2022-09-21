import logo from './logo.svg';
import './App.css';
import { useState,useRef  } from 'react';
import axios from 'axios';


function App() {
  const[archivos,setArchivos]=useState(null);
  
  const subirArchivos= e =>{
    setArchivos (e);
  }
  const insertarArchivos=async()=>{
    const f=new FormData();
    console.log(archivos.length);
    for(let index=0;index<archivos.length;index++)
    {
      f.append("files",archivos[index]);// ,{header:{'Content-Type':'multipart/form-data'}}
    }
    console.log(f);

    await axios.post("https://localhost:44339/api/archivo",f)
    .then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="App">
      <br></br>
       
      <input type="file" name="files" multiple onChange={(e)=>subirArchivos(e.target.files)}></input>
      <button onClick={()=>insertarArchivos()}>Insertar archivo</button>
    </div>
  );
}

export default App;

