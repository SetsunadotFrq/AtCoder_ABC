import * as fs from 'fs';

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const A = Number(input[0]);
const B = Number(input[1]);
const X = Number(input[2]);

if (A <= X && X <= A + B) {
    console.log("YES");
} else {
    console.log("NO");
}
