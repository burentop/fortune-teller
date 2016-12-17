var findRatio = function(bad, good) {
  var badCount = bad.length;
  var goodCount = good.length;
  if (badCount > goodCount) {
    return -1;
  } else if (badCount === goodCount) {
    return 0;
  } else {
    return 1;
  }
}

var pickOutput = function(score) {
  if (score === 1) {
    $("#good").show();
  } else if (score === 0) {
    $("#medium").show();
  } else {
    $("#bad").show();
  }
}

$(document).ready(function() {
  $("form#luck-survey").submit(function(event) {
    event.preventDefault();
    var badResults = [];
    var goodResults = [];
    $("input:checkbox[name=bad-luck]:checked").each(function() {
      var badLuck = $(this).val();
      badResults.push(badLuck);
    });
    $("input:checkbox[name=good-luck]:checked").each(function() {
      var goodLuck = $(this).val();
      goodResults.push(goodLuck);
    });
    var score = findRatio(badResults, goodResults);
    pickOutput(score);
  });
});
