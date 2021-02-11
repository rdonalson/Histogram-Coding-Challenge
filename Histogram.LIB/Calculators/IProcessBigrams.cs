using Histogram.LIB.Models;
using System.Collections.Generic;

namespace Histogram.LIB.Calculators
{
    public interface IProcessBigrams
    {
        List<WordBox> DetermineBigramCount(string phrase);
    }
}