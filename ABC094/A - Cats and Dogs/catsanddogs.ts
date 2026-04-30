import * as fs from 'fs';

// 入力を読み込み、トリム（前後の空白・改行削除）してから分割する
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

// 数値に変換（Number関数の方がparseIntより柔軟で一般的です）
const A = Number(input[0]);
const B = Number(input[1]);
const X = Number(input[2]);

if (A <= X && X <= A + B) {
    console.log("YES");
} else {
    console.log("NO");
}
