---
layout: nohead
title: Christmas Movie Bingo
permalink: /xmas-bingo/
options:
  - cameo from 1970s / 1980s / 1990s icon
  - musical number
  - misunderstood rich person
  - country music performer
  - audible Canadian accent
  - actress named Lexi
  - orphan
  - widow(er)
  - long-lost family member
  - building restoration project
  - real-life Santa/Santa relative
  - person who hates Christmas
  - marriage deadline
  - fake fiancé(e)
  - mealtime prayer
  - Trading Places-style identity switch
  - Freaky Friday-style identity switch
  - royalty
  - Potter-like town mogul
  - something that tells the future
  - swearing removed with overdub
  - kid matchmaker
  - return to small hometown
  - romance with boss
---

<p>Instructions: Play a game of bingo while watching a Christmas movie of your choice.
If any of the common tropes on your card occurs during the movie, click on the square to
"place a chip." You win the bingo game if your chips form a line of five, either horizontally,
vertically, or diagonally.</p>
<p>Don't forget to place a chip on your free space in the center!</p>
<p>Want to start over with a new card? Just refresh the page.</p>

<div id="bingo-card" style="margin-top: 50px;">
  <div class="row">
    <div class="col text-center display-2 bg-danger text-light" style="border: thin solid #000000;">B</div>
    <div class="col text-center display-2 bg-danger text-light" style="border: thin solid #000000;">I</div>
    <div class="col text-center display-2 bg-danger text-light" style="border: thin solid #000000;">N</div>
    <div class="col text-center display-2 bg-danger text-light" style="border: thin solid #000000;">G</div>
    <div class="col text-center display-2 bg-danger text-light" style="border: thin solid #000000;">O</div>
  </div>
</div>

<script type="text/javascript">

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  $( document ).ready(function() {
    var allOptions = '{{ page.options | join: ","}}'.split(",")
    shuffleArray(allOptions);
    var newOptions = allOptions.slice(0,12).concat("FREE SPACE").concat(allOptions.slice(12))



    var card = document.getElementById("bingo-card");

    for (i = 0; i < 5; i++) {
      var newRow = document.createElement("div");
      newRow.classList.add("row");
      newRow.style.height = "160px";


      for (j = 0; j < 5; j++) {
        var runningIndex = (i*5)+j;

        var newCol = document.createElement("div");
        newCol.classList.add("col");
        newCol.classList.add("bg-light");
        newCol.style.width = "20%";
        newCol.style.height = "160px";
        newCol.style.border = "thin solid #000000";
        newCol.style.display = "flex";

        var newCircle = document.createElement("div");
        newCircle.id = "circle"+runningIndex;
        newCircle.classList.add("circle");
        newCircle.style.height = "130px";
        newCircle.style.width = "130px";
        newCircle.style.backgroundColor = "#ffdbd9";
        newCircle.style.borderRadius = "50%";
        newCircle.style.marginTop = "15px";
        newCircle.style.position = "absolute";
        newCircle.style.display = "none";
        newCol.appendChild(newCircle);

        //newCol.innerHTML = newOptions[runningIndex];
        var newSpan = document.createElement("div");
        newSpan.innerHTML = newOptions[runningIndex];
        newSpan.classList.add("align-self-center");
        newSpan.classList.add("text");
        newSpan.style.width = "130px";        
        newSpan.style.position = "absolute";
        newSpan.classList.add("text-center");
        newSpan.classList.add("font-weight-bold");
        newCol.appendChild(newSpan);

        var overlay = document.createElement("div");
        overlay.id = "overlay"+runningIndex;
        overlay.classList.add("overlay");
        overlay.style.height = "130px";
        overlay.style.width = "130px";
        overlay.style.marginTop = "15px";
        overlay.style.position = "absolute";
        newCol.appendChild(overlay);


        newRow.appendChild(newCol);
      }
      card.appendChild(newRow);
    }

    $(".overlay").click(function(){
      console.log("clicking");

      var correctCircleId = this.id.replace("overlay","circle");
      var correctCircle = document.getElementById(correctCircleId);

      if (correctCircle.style.display === "none") {
        correctCircle.style.display = "block";
      }
      else {
        correctCircle.style.display = "none";
      }

      });



  });


</script>
