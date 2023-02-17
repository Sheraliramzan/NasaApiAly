import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import NasaButton from '@/components/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState();

 
  const apiKey = "gU7bsPgDleYhmKtsO8d7whZYI22WdwHu99053Kql";
  const url = `https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=${apiKey}`
  const getTechTransferData = async () => {
    const res = await axios.get(url)
    const info = await res.data;
    console.log(info);
    setData(info);
  }
    useEffect(() => {
      getTechTransferData();
    }, [])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link className='name' href="/polychromatic">polychromatic</Link>
      {
        data && data.results.map((tech, index) => {
          return (
            <div className='Maindev' key={index}>
                {
                  tech && tech.map((t, ind) => {
                    if(ind ===10){
                      return (
                        <Image className='image' src={t}
                        alt={t}
                        key={ind}
                        width={100}
                        height={100}
                        />
                      )
                    }
                  })
                }
            </div>
          )
        })
      }
      </main>
    </>
  )
}
