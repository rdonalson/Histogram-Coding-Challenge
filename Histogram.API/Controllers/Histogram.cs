using Histogram.LIB.Calculators;
using Histogram.LIB.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Histogram.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Histogram : ControllerBase
    {
        private readonly ProcessBigrams _processBigrams;

        public Histogram()
        {
            _processBigrams = new ProcessBigrams();
        }

        // GET api/histogram/phrase
        [HttpGet("{phrase}")]
        public IEnumerable<WordBox> Get(string phrase)
        {
            return _processBigrams.DetermineBigramCount(phrase);
        }
    }
}
