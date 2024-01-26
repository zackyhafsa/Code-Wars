function dnaStrand(dna) {
  const rna = dna.replace(/A/g, "T").replace(/T/g, "A").replace(/G/g, "C").replace(/C/g, "G");
  console.log(rna);
}

dnaStrand("ATCG");
