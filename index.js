
//SHOW  POP UP WHEN CLICKIN THE CLOSE BUTTON
$(".skill-js").click(function(){
  
  $("#pop-up-card").fadeOut(1000);
  $(".details").fadeOut(1000);
  
  // $("#pop-up-card").addClass("hidden");
  // $(".details").addClass("hidden");
  
  var skillClicked = $(this).text().trim();
  skillClicked = skillClicked.replace(/\s+/g, '-').toLowerCase();
  skillClicked = skillClicked + "-details";
  console.log(skillClicked);
  
  $("#pop-up-card").fadeIn(1000);
  $("#" + skillClicked).fadeIn(1000);
  
  // $("#pop-up-card").removeClass("hidden");
  // $("#" + skillClicked).removeClass("hidden");
});

//CLOSE POP UP WHEN CLICKING NAVIGATION ITEM
$(".close-pop-up").click(function(){
  
  // console.log(this);
  
  $("#pop-up-card").fadeOut(1000);
  $(".details").fadeOut(1000);
  
  // $("#pop-up-card").addClass("hidden");
  // $(".details").addClass("hidden");
});


$(".nav-item-js").click(function(){
  
  $("#pop-up-card").fadeOut(1000);
  $(".details").fadeOut(1000);
  
  // $("#pop-up-card").addClass("hidden");
  // $(".details").addClass("hidden");
  
});

$(".rick-roll").click(function(){
  
  $("#pop-up-card").fadeOut(1000);
  $(".details").fadeOut(1000);
  
  // $("#pop-up-card").addClass("hidden");
  // $(".details").addClass("hidden");
  
  $("#pop-up-card").fadeIn(1000);
  $("#rick-roll-haha").fadeIn(1000);
  
  $("#pop-up-card").removeClass("hidden");
  $("#rick-roll-haha").removeClass("hidden");
  
});