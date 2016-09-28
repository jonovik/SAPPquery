$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
function tool_header(){
$('th').each( function(){
		var nTds = $(this).text();
		switch(nTds){
		  case 'aln':
		    this.setAttribute( 'data-toggle', 'tooltip');
		    //this.setAttribute( 'data-placement', 'top');
		    this.setAttribute( 'title', 'Alignment Length');
		    break;
		  case 'bs':
		    this.setAttribute( 'title', 'Bitscore');
		    break;
		  case 'e':
		    this.setAttribute( 'title', 'E-value');
		    break;
		  case 'mm':
		    this.setAttribute( 'title', 'Mismatches');
		    break;
		  case 'pi':
		    this.setAttribute( 'title', 'Percidentity');
		    break;
	  	case 'qe':
		     this.setAttribute( 'title', 'Query end');
		    break;
		  case 'se':
		    this.setAttribute( 'title', 'Squence end');
		    break;
      case 'qs':
		    this.setAttribute( 'title', 'Query starts');
		    break;
      case 'ss':
		    this.setAttribute( 'title', 'Sequence starts');
		    break;
      case 'si':
		    this.setAttribute( 'title', 'Subject Id');
		    break;
      case 'sn':
		    this.setAttribute( 'title', 'subject name');
		    break;
      case 'ver':
		    this.setAttribute( 'title', 'Version');
		    break;
      case 'isb':
		    this.setAttribute( 'title', 'Is best overlap');
		    break;
      case 'php':
		    this.setAttribute( 'title', 'Positive hit probability');
		    break;
      case 'pf':
		    this.setAttribute( 'title', 'Profile from');
		    break;
      case 'pl':
		    this.setAttribute( 'title', 'Profile length');
		    break;
      case 'pp':
		    this.setAttribute( 'title', 'Profile proportion');
		    break;
      case 'pt':
		    this.setAttribute( 'title', 'Profile to');
		    break;
      case 'qf':
		    this.setAttribute( 'title', 'Query from');
		    break;
      case 'ql':
		    this.setAttribute( 'title', 'Query length');
		    break;
      case 'qstr':
		    this.setAttribute( 'title', 'Query strand');
		    break;
      case 'qt':
		    this.setAttribute( 'title', 'Query to');
		    break;
		}
});
// Tooltips tend to push td out of the place. I use this to stop that from happening
$('th').tooltip({container:'body'});
}
function anchor(x){
  var myText = x; 
  var pattern = /\[(.+)\]\((.+)\)/i;
  var n = pattern.exec(myText);
  var match = '<a href="'+n[2]+'" target="_blank">'+n[1]+'</a>';
  return match;
}
function urls(y){
  var str = y;
  var res = str.split("__");
  var match = '';
  for (var key in res){
    var pattern = /&lt;(.+\/(.+))&gt/i;
    var new_var = pattern.exec(res[key]);
    match += '<a href="'+new_var[1]+'" target="_blank">'+new_var[2]+'</a> ';
  }
  return match;
}