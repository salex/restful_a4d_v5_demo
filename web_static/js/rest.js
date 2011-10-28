
function rajaxUpdate(oneController,manyController,id,filter,bst){
	var url = '/app/controllers/ajax_controller.a4d'; 
	if(bst == undefined){
		parm = 'oc='+oneController+'&mc='+manyController+'&id='+id;
	}else{
		parm = 'oc='+oneController+'&mc='+manyController+'&id='+id+'&bst='+bst
	}
	
	if (filter != undefined) {
		parm = parm + "&" + filter.replace(";","&")
	};
	
	var setmc = $('tab').value;
	$(setmc).className = '';
	$(manyController).className = 'activelink';
	$('tab').value = manyController;
	var target = $('many-div');
	var myAjax = new Ajax.Updater(target, url, {method: 'get', parameters: parm});	

}

function destroy(fobj){
	if (confirm('Are you sure?')) { 
		var f = document.createElement('form'); 
		f.style.display = 'none'; 
		fobj.parentNode.appendChild(f); 
		f.method = 'POST'; 
		f.action = fobj.href;
		var m = document.createElement('input'); 
		m.setAttribute('type', 'hidden'); 
		m.setAttribute('name', '_method'); 
		m.setAttribute('value', 'delete'); 
		f.appendChild(m);

		f.submit();
	};
	return false;
}

function highlightSessionMessage(time_left){
  if(time_left == 0){
	  $('session_message').innerHTML = 'Your session has timed out.'
	  window.clearInterval(timerObj)
  } else if(time_left < 6){
	  $('session_message').setStyle('color:red;font-weight:bold')
	} else if(time_left < 11) {
	  $('session_message').setStyle('color:#FF6600;font-weight:bold')
	}
}

function decrementTimeout() {
  dobj = $('minutes_remaining');
  if(dobj){
  	timeout = Number($('session_timeout').value) - 1;
  	$('session_timeout').value = timeout;
  	dobj.innerHTML = timeout;
  	highlightSessionMessage(timeout);
  }
}

function executeAtInterval(function_name, seconds){
  // Execute a javascript function $1 every $2 seconds.
  if(seconds == null){
    seconds = 60; // Every minute by default.
  }
  return setInterval(function_name,(1000*seconds));
}

var timerObj = executeAtInterval("decrementTimeout()",60);