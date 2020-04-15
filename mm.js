function update(){
  var res = document.getElementById('result').contentWindow.document;
  res.open();
  res.write(eh.getValue());// to get value inserted in a div

  //For css

  res.write('<style>'+ec.getValue()+'</style>');// to get value inserted in a div

  res.close();
}
function seteditor(){

//HTML

 window.eh = ace.edit("htmleditor");
 eh.setTheme("ace/theme/monokai");
 eh.session.setMode("ace/mode/html");

//CSS

 window.ec = ace.edit("csseditor");
 ec.setTheme("ace/theme/monokai");
 ec.session.setMode("ace/mode/css");

 //Now on we update iframes to show results
 //HTNL
 eh.getSession().on('change',function(){
   update(); // create update function
 });
  //CSS
 ec.getSession().on('change',function(){
   update(); // create update function
 });


 eh.setOptions({
     enableBasicAutocompletion: true,
     enableSnippets: true,
     enableLiveAutocompletion: true
 });

ec.setOptions({
     enableBasicAutocompletion: true,
     enableSnippets: true,
     enableLiveAutocompletion: true
 });




}
seteditor();
update();
