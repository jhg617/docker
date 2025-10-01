import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MyTable({ar}){
    return(
        /* MUI설치 후 Card안에 TableContainer를 활용하여
            ar의 요소들을 표현하자! */
        <Card style={{width:'500px', margin: '20px auto'}}>
            <CardContent>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">번호</TableCell>
                        <TableCell align="center">사번</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center">직종</TableCell>
                        <TableCell align="center">부서코드</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ar.map((row, i) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">{i}</TableCell>
                        <TableCell align="center">{row.empno}</TableCell>
                        <TableCell align="center">{row.ename}</TableCell>
                        <TableCell align="center">{row.job}</TableCell>
                        <TableCell align="center">{row.deptno}</TableCell>
                    </TableRow>
                ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
    </Card>
    );
};