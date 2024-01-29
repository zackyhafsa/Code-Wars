function getGrade(s1, s2, s3) {
  const result = s1 + s2 + s3;
  const score = result / 3;
  if (score <= 100 && score >= 90) {
    return "A";
  } else if (score < 90 && score >= 80) {
    return "B";
  } else if (score < 80 && score >= 70) {
    return "C";
  } else if (score < 70 && score >= 60) {
    return "D";
  } else if (score < 60 && score >= 0) {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
