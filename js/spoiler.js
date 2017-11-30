$(document).ready(function(){
 $('.spoiler_links').click(function(){
  $(this).parent().children('div.spoiler_body').toggle('normal');
  $("div[class^='spoiler_body']").hide('normal');
  return false;
 });
});