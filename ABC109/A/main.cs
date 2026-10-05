int A,B;

string[] input = Console.ReadLine().Split(' ');
A = int.Parse(input[0]);
B = int.Parse(input[1]);
if((A*B)%2==1)
{
    Console.WriteLine("Yes");
}
else
{
    Console.WriteLine("No");
}
