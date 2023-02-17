import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const Time = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Coordinates = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;

const ViewButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

