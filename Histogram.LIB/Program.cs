using Histogram.LIB.Calculators;
using System;

namespace Histogram.LIB
{
    class Program
    {
        static void Main(string[] args)
        {
            IProcessBigrams histogram = new ProcessBigrams();

            Console.WriteLine("------Test One------");
            Console.WriteLine(" ");
            string phrase = "The quick brown fox and the quick blue hare";
            var lst = histogram.DetermineBigramCount(phrase);
            foreach (var item in lst)
            {
                Console.WriteLine(item.Count + " " + item.Bigram);
            }
            Console.WriteLine(" ");
            Console.WriteLine("------Test Two------");
            Console.WriteLine(" ");
            phrase = "The quick brown fox and the quick blue hare The quick brown fox and the quick blue hare The quick brown fox and the quick";
            lst = histogram.DetermineBigramCount(phrase);
            foreach (var item in lst)
            {
                Console.WriteLine(item.Count + " " + item.Bigram);
            }
        } 
    }
}
