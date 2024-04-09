'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
let json = require('./data.json');

export default function Home() {
  const [jsonData, setJsonData] = useState(json);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./app/data.json');
  //       console.log(response);
  //       const data = await response.json();
  //       setJsonData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
    {
      jsonData && jsonData.controller.map(function(i){
        return <Controller key={i}/>
      })
    }
    </>
  );
}

export function Controller(){
  return(
      <p>POP!</p>
  );
}