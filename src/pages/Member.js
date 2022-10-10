import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";

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
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name_ja, name_en, type, title) {
    return { name_ja, name_en, type, title };
}

const rows_2024 = [
    createData("浅野 裕介", "Asano Yusuke", "", "画像処理について"),
    createData("上園 紬真", "Uezono Yuma",  "", "電子投票について"),
    createData("何睿", "en name", "", "二次元コードについて"),
    createData("郭政揚","en name" ,  "", "認証について"),
    createData("田中 優", "Tanaka Yu",   "", "情報教育支援ソフトについて"),
    createData("橋本 辰浩", "Hashimoto Tatsuhiro",  "", "秘密計算ソフトウェアの開発")
];

const rows_2023 = [
    createData("金成 辰朗","en name",  "","東アジアにおけるキャッシュレス決済の発展の違い"),
    createData("石冰清", "en name",  "", "Pythonにおける暗号プログラミングの応用モデル"),
    createData("西川 巧馬", "Nishikawa Takuma", "", "身分証明書の電子化と認証システム導入における今後の展望"),
    createData("山口 敬太", "Yamaguchi Keita",  "", "日本国内のキャッシュレス普及について"),
    createData("吉元 碧空", "Yoshimoto Sora", "", "AIを活用したサイバー攻撃対策"),
    createData("蘇逸航", "en name", "", "C言語による認証システムの応用モデル"),
    createData("崔宇瀅", "en name", "", "大学におけるスマートフォンを用いたeチケットシステムの応用モデル")
];

const rows_2022 = [
    createData("住谷 洸樹","en name",  "卒業論文", "電子学生証を用いた大学ECシステムの比較評価"),
    createData("猪股 武流", "en name",  "演習レポート", "電子決済による待ち行列モデルの分析"),
    createData("野村 亮太", "en name",  "演習レポート", "3DESとHMACを応用した二次元コードの作成と評価"),
    createData("久住 知沙都", "en name",  "卒業論文", "オンライン授業とオフライン授業の「ながら行動」の比較研究"),
    createData("劉夢婷", "en name",  "卒業論文", "非接触型認証を用いた電子学生証の研究"),
    createData("黄詩琪", "en name", "演習レポート", "電子透かし技術を用いた個人認証システムの研究")
];

export default function Member() {
    return (
        <Box py={8} px={2}>
            <h2>ゼミメンバー （2022/10/12 現在）</h2>

            <h3>2024年度卒業予定</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>氏名（Name）</StyledTableCell>
                            <StyledTableCell align="right">タイトル</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows_2024.map((row) => (
                            <StyledTableRow key={row.name_ja}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name_ja} ({row.name_en})
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.title}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <h3>2023年度卒業予定</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>氏名（Name）</StyledTableCell>
                            <StyledTableCell align="right">タイトル</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows_2023.map((row) => (
                            <StyledTableRow key={row.name_ja}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name_ja} ({row.name_en})
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.title}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <h3>2022卒業</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>氏名（Name）</StyledTableCell>
                            <StyledTableCell align="right">種別</StyledTableCell>
                            <StyledTableCell align="right">タイトル</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows_2022.map((row) => (
                            <StyledTableRow key={row.name_ja}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name_ja} ({row.name_en})
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.type}</StyledTableCell>
                                <StyledTableCell align="right">{row.title}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}