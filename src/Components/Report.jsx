import React from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Title } from '@mui/icons-material';
// import Title from './Title';

const rows = [
    {
        id: 0,
        date: '16 Mar, 2019',
        name: 'Lanrry Richdom 01',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
    },
    {
        id: 1,
        date: '16 Mar, 2019',
        name: 'Lanrry Richdom 02',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
    },
    {
        id: 2,
        date: '16 Mar, 2019',
        name: 'Lanrry Richdom 03',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
    },
    {
        id: 3,
        date: '16 Mar, 2019',
        name: 'Lanrry Richdom 04',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
    },
    {
        id: 4,
        date: '16 Mar, 2019',
        name: 'Lanrry Richdom 05',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
    },
];

function preventDefault(event) {
    event.preventDefault();
  }

const Report = () => {
  return (
    <div>
        <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount.toFixed(3)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
    </div>
  )
}

export default Report
