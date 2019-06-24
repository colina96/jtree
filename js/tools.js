function show(div_id) 
{
	document.getElementById(div_id).style.display='block';
	console.log('show ' + div_id);
	if (document.getElementById('shield')) {
		console.log('showing shield');
		document.getElementById('shield').style.display='block';
	}
}

function hide(div_id) 
{
	document.getElementById(div_id).style.display='none';
	if (document.getElementById('shield')) {
		document.getElementById('shield').style.display='none';
	}
}

function get_db_data(tablename,conditions,callback) // simple single table REST call
{
	var q = new Object();
	q.TABLENAME = tablename;
	q.action = 'GET';
	if (conditions) q.conditions = conditions;
	var data =  {data: JSON.stringify(q)}; // just gets field definitions
	
	console.log(data);
	$.ajax({
    	url: RESTHOME + "replace.php",
        type: "POST",
        dataType: 'json',
        data: data,
        success: function(result) {
        	// this.result = result;
            console.log(result);  
            console.log('get_db_data result');
            if (callback) callback(result);
              
        },
        fail: (function (result) {
            console.log("fail ",result);
        })
    });
}
  
function goto_page(pageName, content_class) {
	// close_popups();
    // console.log("opening page ",pageName,content_class);
    
    var tabcontent;
    tabcontent = document.getElementsByClassName(content_class);
    for (let i = 0; i < tabcontent.length; i++) {
    	// console.log("found tab ",tabcontent[i].id);
        tabcontent[i].style.display = "none";
    }

    document.getElementById(pageName).style.display = "block";
} 

function update_by_class(classname,content)
{
    divs = document.getElementsByClassName(content_class);
    for (let i = 0; i < divs.length; i++) {
    	// console.log("found tab ",tabcontent[i].id);
        divs[i].innerHTML = content;
    }
}

function check_form(formid,clear)
{
	var iform = document.getElementById(formid);
	var elements = iform.elements;
	
	if (!iform) console.log('cannot find',formid);
	var valid = 0;
// 	console.log('form elements ' + elements.length);
	var data = Object();
	data.complete = true;
	for (i=0; i<elements.length; i++){
		if (elements[i].type == 'checkbox') {
			data[elements[i].id] = elements[i].checked?1:0;
			if (clear) elements[i].checked = false; // clear form
		}
		else {
			data[elements[i].id] = elements[i].value;
			if (elements[i].value.length > 0) valid ++;
			// console.log('check_form :<' + elements[i].id + '>-<' + elements[i].value + '>');
			if (elements[i].value == '') data.complete = false;
			if (clear) elements[i].value = ''; // clear form
		}
	}
	// console.log('check_form complete',data.complete);
	return(data);
}
