import axios from "axios"
import styles from '@/styles/Home.module.css'
import styled from "styled-components"
import { useEffect, useState } from "react"
import NasaButton from "@/components/button"
import Image from "next/image"
export default function Polychromatic () {
const [image, setImage] = useState([])
const [images, setImages] = useState([]);
const [time, setTime] = useState("loading");
const [date, setDate] = useState("");
const [coords, setCoords] = useState({});
const apiKey = "gU7bsPgDleYhmKtsO8d7whZYI22WdwHu99053Kql";
const url = `https://epic.gsfc.nasa.gov/api/natural?api_key=${apiKey}`

const getPolychromaticData = async () => {
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data)

    const caption = data[0].caption
    const date = data[0].date.split(" ")[0]

    const date_formatted = date.replaceAll("-","/")
    console.log(date_formatted)

    let times =[];
    let images = [];

    for(let i = 0; i < data.length; i++){
        let time = data[i].date.split("")[1];
        let coords = data[i].centroid_coordinates;
        let imagePath = data[i].image;
        let image = `https://epic.gsfc.nasa.gov/archive/natural/${date_formatted}/png/${imagePath}.png`

        times.push(time);
        images.push({
            image: image,
            time: time,
            coords: coords
        })

    }

    setDate(date);
    setImages(images)
    setImage(images[0].image)
    setTime(time[0])
    setCoords([images[0].coords.lat, images[0].coords.lon])
}
    useEffect(() => {
        getPolychromaticData();
    },[])
    return (
        <div className="spacing">
            <Image src={image} alt={image} width={200} height={120}/>
            <div>{time}</div>
            <div>{coords[0]}, {coords[1]}</div>

            <table> 
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Image</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            images.map((e, i) => {
                                return(
                                    <tr key={i}>
                                        <div className={styles.row}> 
                                        <td>{e.time}</td>
                                        <td>{e.coords.lat}</td>
                                        <td>{e.coords.lon}</td>
                                        <td><Image src={e.image} alt={i} width={180} height={130}/></td>
                                        </div>
                                        <div className={styles.spacing}> 
                                        <td>
                                        <button  onClick={() => {
                                            setImage(e.image);
                                            setTime(e.time);
                                            setCoords(e.coords.lat, e.coords.lon);
                                            document.body.scrollIntoView();
                                        }}className={styles.NasaButton}> View Here</button>
                                        </td>
                                        </div>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </table>
        </div>
    )
}