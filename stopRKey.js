<!-- Script to disable enter key -->
<script type="text/javascript">

	function stopRKey(evt) {
	  var evt = (evt) ? evt : ((event) ? event : null);
	  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
	  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
	}
	
	document.onkeypress = stopRKey;
	
</script> 