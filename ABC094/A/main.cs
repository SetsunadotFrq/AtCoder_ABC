using System;

// 1行の入力を読み込み、空白で分割して数値に変換する
string[] input = Console.ReadLine().Split(' ');
int A = int.Parse(input[0]);
int B = int.Parse(input[1]);
int X = int.Parse(input[2]);

// 条件分岐（論理演算子はC言語と同じ && を使用）
if (A <= X && X <= A + B)
{
    Console.WriteLine("YES");
}
else
{
    Console.WriteLine("NO");
}
