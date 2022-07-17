import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name_ja, name_en, grade, theme) {
    return { name_ja, name_en, grade, theme };
}

const rows = [
    createData("浅野 裕介", "Asano Yusuke", "3", "画像処理について"),
    createData("上園 紬真", "Uezono Yuma", "3", "電子投票について"),
    createData("何睿", "en name", "3", "二次元コードについて"),
    createData("郭政揚","en name" , "3", "認証について"),
    createData("田中 優", "Tanaka Yu", "3", "情報教育支援ソフトについて"),
    createData("橋本 辰浩", "Hashimoto Tatsuhiro", "3", "秘密計算ソフトウェアの開発"),
    createData("金成 辰朗","en name", "4", "東アジアにおけるキャッシュレス決済の発展の違い"),
    createData("石　冰清", "en name", "4", "Pythonにおける暗号プログラミングの応用モデル"),
    createData("西川 巧馬", "Nishikawa Takuma", "4", "身分証明書の電子化と認証システム導入における今後の展望"),
    createData("山口 敬太", "Yamaguchi Keita", "4", "日本国内のキャッシュレス普及について"),
    createData("吉元 碧空", "Yoshimoto Sora", "4", "AIを活用したサイバー攻撃対策"),
    createData("蘇 逸航", "en name", "4", "C言語による認証システムの応用モデル"),
    createData("崔　宇瀅", "en name", "4", "大学におけるスマートフォンを用いたeチケットシステムの応用モデル")
];

export default function Member() {
    return (
        <div>
            <h2>ゼミメンバー （2022/07/17 現在）</h2>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>氏名（Name）</StyledTableCell>
                            <StyledTableCell align="right">所属年次</StyledTableCell>
                            <StyledTableCell align="right">研究テーマ</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name_ja}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name_ja} ({row.name_en})
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.grade}</StyledTableCell>
                                <StyledTableCell align="right">{row.theme}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <h2>ゼミ OB</h2>

        </div>
    );
}