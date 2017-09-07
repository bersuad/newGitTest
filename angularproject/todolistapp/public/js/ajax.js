function SetChecked(x,val,chkName) 
	{
                dml=document.forms[x];
		len = dml.elements.length;
		var i=0;
		for( i=0 ; i<len ; i++) 
		{if (dml.elements[i].name==chkName) 
			dml.elements[i].checked=val;	
		}
	}
function Link(id_to_replace,file_to_add){
   //window.alert(id_to_replace+ " "+file_to_add);
   var ajaxRequest;  // The variable that makes Ajax possible!	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
            //window.alert(ajaxRequest.readyState);
		if(ajaxRequest.readyState == 4){
                          document.getElementById(id_to_replace).innerHTML = ajaxRequest.responseText;
		}
	}
        
	ajaxRequest.open("GET", file_to_add, true);
	ajaxRequest.send(null);   
}
function Edit(id_to_replace,file_to_add,file){
   //alert("Ethiopia");
   var ajaxRequest;  // The variable that makes Ajax possible!	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
        path=file_to_add+"?ID="+file;
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
                        /*arr=new Array('ManageAccount','ManageClassRoom','ManageCourse','ManageDepartment','ManageInstructor','ManageStudent','ManageSchedule');
                        for(i=0;i<=6;i++){
                            if(arr[i]!=id_to_replace && id_to_replace!="code")
                                document.getElementById(arr[i]).innerHTML = "";
                        }*/
                        document.getElementById(id_to_replace).innerHTML = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET", path, true);
	ajaxRequest.send(null);   
}
function Edit111111111(id_to_replace,file_to_add,file){
    alert("Ethiopia");
    var ajaxRequest;  // The variable that makes Ajax possible!	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
        path=file_to_add+"?ID="+file;
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
                        document.getElementById(id_to_replace).innerHTML = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET", path, true);
	ajaxRequest.send(null);
}
