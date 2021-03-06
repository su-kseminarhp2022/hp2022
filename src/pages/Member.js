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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createOBData(name_ja, name_en, grad_year, type, title) {
    return { name_ja, name_en, grad_year, type, title };
}

const rows = [
    createOBData("浅野 裕介", "Asano Yusuke", "2024年予定", "", "画像処理について"),
    createOBData("上園 紬真", "Uezono Yuma", "2024年予定", "", "電子投票について"),
    createOBData("何睿", "en name", "202年4予定", "", "二次元コードについて"),
    createOBData("郭政揚","en name" , "2024年予定", "", "認証について"),
    createOBData("田中 優", "Tanaka Yu", "2024年予定",  "", "情報教育支援ソフトについて"),
    createOBData("橋本 辰浩", "Hashimoto Tatsuhiro", "2024年予定", "", "秘密計算ソフトウェアの開発"),
    createOBData("金成 辰朗","en name", "2023年予定", "","東アジアにおけるキャッシュレス決済の発展の違い"),
    createOBData("石冰清", "en name", "2023年予定", "", "Pythonにおける暗号プログラミングの応用モデル"),
    createOBData("西川 巧馬", "Nishikawa Takuma", "2023年予定", "", "身分証明書の電子化と認証システム導入における今後の展望"),
    createOBData("山口 敬太", "Yamaguchi Keita", "2023年予定", "", "日本国内のキャッシュレス普及について"),
    createOBData("吉元 碧空", "Yoshimoto Sora", "2023年予定", "", "AIを活用したサイバー攻撃対策"),
    createOBData("蘇逸航", "en name", "2023年予定", "", "C言語による認証システムの応用モデル"),
    createOBData("崔宇瀅", "en name", "2023年予定", "", "大学におけるスマートフォンを用いたeチケットシステムの応用モデル"),
    createOBData("住谷 洸樹","en name", "2022年", "卒業論文", "電子学生証を用いた大学ECシステムの比較評価"),
    createOBData("猪股 武流", "en name", "2022年", "演習レポート", "電子決済による待ち行列モデルの分析"),
    createOBData("野村 亮太", "en name", "2022年", "演習レポート", "3DESとHMACを応用した二次元コードの作成と評価"),
    createOBData("久住 知沙都", "en name", "2021年", "卒業論文", "オンライン授業とオフライン授業の「ながら行動」の比較研究"),
    createOBData("劉夢婷", "en name", "2021年", "卒業論文", "非接触型認証を用いた電子学生証の研究"),
    createOBData("黄詩琪", "en name", "2021年", "演習レポート", "電子透かし技術を用いた個人認証システムの研究")
];

export default function Member() {
    return (
        <Box py={8}>
            <h2>ゼミメンバー （2022/07/20 現在）</h2>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>氏名（Name）</StyledTableCell>
                            <StyledTableCell align="right">卒業年度</StyledTableCell>
                            <StyledTableCell align="right">種別</StyledTableCell>
                            <StyledTableCell align="right">タイトル</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name_ja}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name_ja} ({row.name_en})
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.grad_year}</StyledTableCell>
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