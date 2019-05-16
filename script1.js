function myFunction() {
  var first =document.getElementById("grades").elements["One"].value;
  var second =document.getElementById("grades").elements["Two"].value;
  var third =document.getElementById("grades").elements["Three"].value;
  var fourth =document.getElementById("grades").elements["Four"].value;
  var sum = parseInt(first) + parseInt(second) + parseInt(third) + parseInt(fourth);
  sum-= Math.min(parseInt(first), parseInt(second), parseInt(third), parseInt(fourth))
  var avg = sum/3;
  document.getElementById("getAverage").innerHTML = avg;
  if(avg>=90) document.getElementById("LetterGrade").innerHTML = "A";
  else if (avg>=80 & avg<90) document.getElementById("LetterGrade").innerHTML = "B";
  else if (avg>=70 & avg<80) document.getElementById("LetterGrade").innerHTML = "C";
  else if (avg>=60 & avg<70) document.getElementById("LetterGrade").innerHTML = "D";
  else if (avg < 60) document.getElementById("LetterGrade").innerHTML = "F";
}

function ReplaceButton()
{
  var str = document.getElementById("gradebook").innerHTML;
  var replace = str.replace("exam","test");
  document.getElementById("gradebook").innerHTML = replace;
}

