import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id: number, date: string, symptom: string) {
  return { id, date, symptom };
}

const rows = [
  createData(0, "16 Mar, 2023", "Cough"),
  createData(1, "17 Mar, 2023", "Sore Tummy"),
  createData(2, "21 Mar, 2023", "Aches"),
  createData(3, "22 Mar, 2023", "Cough (again)"),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Symptoms() {
  return (
    <>
      <Title>Recent Symptoms</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Symptom</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.symptom}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more symptoms
      </Link>
    </>
  );
}
