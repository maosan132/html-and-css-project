using System;
using System.Diagnostics;

namespace Fibonacci
{
    class Program
    {
    //Using recursion 
    //Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
    //Extra Space: O(n) if we consider the function call stack size, otherwise O(1).
    public static int FibRecursion(int n, ref double op)  {
        op++;
        if (n <= 1)  {  
            return n;  
        }  
        else {  
            return FibRecursion(n - 1, ref op) + FibRecursion(n - 2, ref op);  
        }  
    }
        static void Main(string[] args)
        {   
            Stopwatch stopwatch = new Stopwatch();
            double op = 0;
            //Input
            //Console.Write("Enter an integer: ");
            //int n = Convert.ToInt32(Console.ReadLine());

            //Header
            string header = "Method".PadRight(30) + "|" + " Input" + "|" +"Result".PadLeft(15) + "|" + "Num Of Ops".PadLeft(15) + "|" +" Elapsed Time (ms)|";
            Console.WriteLine(header);
            string dash = new String('-', header.Length);
            Console.WriteLine(dash);


            for(int index = 0; index < 40; index++)
            {
                // Using Recursion
                stopwatch.Start();
                int fib = FibRecursion(index, ref op);
                stopwatch.Stop();

                //Printing the results
                string method = "Fibonacci with Recursion".PadRight(30) + "|";
                string input = index.ToString().PadLeft(6) + "|";
                string fibStr = fib.ToString().PadLeft(15) + "|";
                string ops = op.ToString().PadLeft(15) + "|";
                string elapsedTime = stopwatch.Elapsed.TotalMilliseconds.ToString().PadLeft(18) + "|";
                Console.WriteLine(method + input + fibStr + ops + elapsedTime);
                stopwatch.Reset();
            }            
            

        }
    }
}
