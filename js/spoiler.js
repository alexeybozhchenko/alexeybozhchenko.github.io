<script type="text/javascript">
$(document).ready(function(){
 $('.spoiler_links').click(function(){
  $("div[class^='spoiler_body']").hide('normal');
  $(this).parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
});
</script>