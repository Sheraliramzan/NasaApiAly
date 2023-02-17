import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 0 auto;
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  pa
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #7d869f;
  color: white;
`;

export const Td = styled.td`
  padding: 8px;
  text-align: left;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: #7d869f;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;