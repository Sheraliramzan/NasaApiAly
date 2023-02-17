import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  margin: 20px 0;
`;


export const TableContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: center;
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  width: 10%;
`;

export const Td = styled.td`
    width: 10%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid #ddd;
`;

export const ViewButton = styled.button`
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

