using Histogram.LIB.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Histogram.LIB.Calculators
{
    public class ProcessBigrams : IProcessBigrams
    {
        public List<WordBox> DetermineBigramCount(string phrase)
        {
            List<Tuple<int, string>> bigramList = new List<Tuple<int, string>>();
            string[] words = phrase.Split(default(string[]), StringSplitOptions.RemoveEmptyEntries);
            int marker = 1;

            for (int i = 0; i < words.Count() - 1; i++)
            {
                bigramList.Add(new Tuple<int, string>(marker, words[i] + " " + words[i + 1]));
            }

            return GroupBigrams(bigramList);
        }

        private static List<WordBox> GroupBigrams(List<Tuple<int, string>> bigramList)
        {
            List<WordBox> result = bigramList.GroupBy(c => c.Item2.ToLower())
                .Select(cl => new WordBox
                {
                    Bigram = cl.First().Item2.ToLower(),
                    Count = cl.Sum(c => c.Item1),
                }).ToList();

            return result;
        }
    }

}