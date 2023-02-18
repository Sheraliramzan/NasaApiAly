import axios from "axios";
import { useEffect, useState } from "react";
import { Th, Td } from "@/styles/styles";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  judtify-content: center;
  margin-top: 2rem;
`;


const ImageContainer = styled.div`
  margin: 2rem 0;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 200px;
  height: 120px;
`;

const Time = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Coords = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
`;

const TableCell = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const TableImage = styled(Image)`
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px #ccc;
`;

const ViewButton = styled.button`
  font-size: 1rem;
  background-color: lightblue;
  color: #fff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default function Polychromatic() {
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [time, setTime] = useState("loading");
  const [date, setDate] = useState("");
  const [coords, setCoords] = useState({});
  const apiKey = "gU7bsPgDleYhmKtsO8d7whZYI22WdwHu99053Kql";
  const url = `https://epic.gsfc.nasa.gov/api/natural?api_key=${apiKey}`;

  const getPolychromaticData = async () => {
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data);

    const caption = data[0].caption;
    const date = data[0].date.split(" ")[0];

    const date_formatted = date.replaceAll("-", "/");
    console.log(date_formatted);

    let times = [];
    let images = [];

    for (let i = 0; i < data.length; i++) {
      let time = data[i].date.split("")[1];
      let coords = data[i].centroid_coordinates;
      let imagePath = data[i].image;
      let image = `https://epic.gsfc.nasa.gov/archive/natural/${date_formatted}/png/${imagePath}.png`;

      times.push(time);
      images.push({
        image: image,
        time: time,
        coords: coords
      });
    }

    setDate(date);
    setImages(images);
    setImage(images[0].image);
    setTime(time[0]);
    setCoords([images[0].coords.lat, images[0].coords.lon]);
  };

  useEffect(() => {
    getPolychromaticData();
  }, []);
  return (
    <Container>
        <ImageContainer>

      <Image src={image} alt={image} width={200} height={120} />
        </ImageContainer>
      <Time>{time}</Time>
      <Coords>
        {coords[0]}, {coords[1]}
      </Coords>

    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <Th>Time</Th>
            <Th>Latitude</Th>
            <Th>Longitude</Th>
            <Th>Image</Th>
          </TableRow>
        </thead>
        <tbody>
          {images.map((e, i) => {
            return (
              <tr key={i}>
                <Table>
                  <TableCell>{e.time}</TableCell>
                  <TableCell>{e.coords.lat}</TableCell>
                  <TableCell>{e.coords.lon}</TableCell>
                  <TableCell>
                    <Image src={e.image} alt={i} width={180} height={130} />
                  </TableCell>
                </div>
                <div>
                  <Td>
                    <ViewButton
                      onClick={() => {
                        setImage(e.image);
                        setTime(e.time);
                        setCoords(e.coords.lat, e.coords.lon);
                        document.body.scrollIntoView();
                      }}
                    >
                      {" "}
                      View Here
                    </ViewButton>
                  </Td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </TableContainer>
    </Container>
  );
}

