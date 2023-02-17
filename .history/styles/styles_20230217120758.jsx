import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #7d869f;
  color: white;
`;

const Td = styled.td`
  padding: 8px;
  text-align: left;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #7d869f;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;