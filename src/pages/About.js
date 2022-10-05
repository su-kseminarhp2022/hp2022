import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function About() {
    return (
        <Box py={8} px={2}>

                <h2>松蔭大学 金ゼミについての紹介</h2>

                <a>このゼミでは、「演習I・II」を履修している3年次、4年次生が情報セキュリティや認証技術、その他の情報活用システム等について学習しています。</a><br/>
                ※ 所属している学生及び研究テーマについては <Link to="/member">こちら</Link>をご覧ください。<br/><br/>


            <a>情報関連職種への就職を目指していて、高度情報化社会で活躍できるような人材二なることを目標としています。</a><br/>
            <a>情報発信力を身につけるとともに、コンピュータの本質を理解するための知識を深め、実践演習を通して情報機器の活用能力を築きます。</a><br/>

                <h3>指導教員 : 金 宰郁 (Kim Jaewook)</h3>
                松蔭大学 観光メディア文化学部 メディア情報文化学科 准教授

                <h3>専門分野</h3>
                <ul>
                    <li>個人認証</li>
                    <li>電子透かし</li>
                    <li>情報セキュリティ</li>
                    <li>暗号</li>
                </ul>

            <h3>担当授業科目</h3>
            <ul>
                <li>情報処理概論</li>
                <li>デジタル認証技術基礎</li>
                <li>情報セキュリティ概論</li>
                <li>情報セキュリティ論</li>
                <li>情報システム論</li>
                <li>情報理論</li>
                <li>演習I・II</li>
            </ul>

            <a href="http://www.shoin-u.ac.jp">松蔭大学公式サイト</a>より引用。詳しい情報は左記サイトをご参照ください。
        </Box>
    );
}