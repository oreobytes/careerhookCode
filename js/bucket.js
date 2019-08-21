jQuery(document).ready(function(){
    $( "#loader" ).delay(800).fadeOut(400, function(){
        $( "#onboarding" ).fadeIn(200);
    });
});

$("#location, #employers, #industries, #experiencetype").accordion({
  active: false,
  collapsible: true,
});

function goBack() {
  window.history.back();
}

var heart = $(".heart").attr('src');
$(".heart").click(function(){
  var newheart = $(this).attr('src');
  if ( newheart===heart){
    var newheart = $(this).attr('src','images/white-heart.svg');
  } else {
    var newheart = $(this).attr('src','images/red-heart.svg');
  }
});

var navtoggler = $(".nav-toggler").attr('src');
$(".nav-toggler").click(function(){
  var alttoggler = $(this).attr('src');
  if ( alttoggler===navtoggler){
    var alttoggler = $(this).attr('src','images/nav-x-toggler.svg');
  } else {
    var alttoggler = $(this).attr('src','images/nav-toggler.svg');
  }
});

var save = $('.btn-save:first').text();
$(".btn-save").click(function(e){
  var savetoggler = $(this);
  if ( savetoggler.text() === save){
    e.preventDefault();
    $(this).removeClass("shadow");
    var savetoggler = $(this).text('SAVED!').css("background-color","white").css("color","#E3B505").css("border","1px solid #E3B505");
  } else {
    e.preventDefault();
    $(this).addClass("shadow");
    var savetoggler = $(this).text('SAVE').css("background-color","#E3B505").css("color","white");
  }
});

$("a.btn-applynow").click(function(){
  $(this).removeClass("shadow");
  $(this).text("APPLIED!");
});

$("a.btn-sendmessage").click(function(){
  $(this).removeClass("shadow");
  $(this).text("SENT!");
});

$(".btn-sm").click(function(){
  $(this).remove();
});

$("img.websiteadd").click(function(){
  $("div.websiteadd").append('<input class="form-control rounded-pill my-3" type="text" placeholder="Type website link here">');
});

$(".delete").click(function(){
  if (confirm("Are you sure your want to delete this?")){
    $(this).parent().parent().remove();
  }
  else {
    $(this);
  }
});

var togglebtn = $('.toggle').attr('src');
$(".toggle").click(function(){
  var newtogglebtn = $(this).attr('src');
  if (togglebtn===newtogglebtn){
    var newtogglebtn = $(this).attr('src','images/toggle-off.svg');
  } else {
    var newtogglebtn = $(this).attr('src','images/toggle-on.svg');
  }
});
