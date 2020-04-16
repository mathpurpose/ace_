    var counter=1;
var counter1=1;
var open=false;
var open1=false;
document.getElementById('collapseHTML').addEventListener('click',
    function () {
      if(open){
      collapseHTML.className = 'colapse fa-arrow-down';  
    } else{
      collapseHTML.className = 'colapse fa-arrow-down open';
    }

    open = !open;
      if(counter%2>0)
        document.querySelector('.editor1').style.display = 'none';
    else{
      document.querySelector('.editor1').style.display = 'flex';
      if(counter1%2==0)
        document.querySelector('.editor1').style.height = '85vh';
      else
        document.querySelector('.editor1').style.height = '50vh';
    }
    counter++;
    if(counter1%2>0 && counter%2==0)
      document.querySelector('.editor2').style.height = '100vh';
    });
var counter=1;
document.getElementById('collapseCSS').addEventListener('click',
    function () {
      if(open1){
      collapseCSS.className = 'colapse fa-arrow-down';  
    } else{
      collapseCSS.className = 'colapse fa-arrow-down open';
    }
    open1 = !open1;
      if(counter1%2>0)
        document.querySelector('.editor2').style.display = 'none';
    else{
      document.querySelector('.editor2').style.display = 'flex';
      if (counter%2>0)
        document.querySelector('.editor1').style.height = '50vh';
    }
     counter1++;
     if(counter1%2==0 && counter%2>0)
      document.querySelector('.editor1').style.height = '85vh';
    });
document.getElementById('setChrome').addEventListener('click',
    function () {
      eh.setTheme("ace/theme/chrome");
    });
document.getElementById('setXcode').addEventListener('click',
    function () {
      eh.setTheme("ace/theme/xcode");
    });
document.getElementById('setAmbiance').addEventListener('click',
    function () {
      eh.setTheme("ace/theme/ambiance");
    });
document.getElementById('setMonokai').addEventListener('click',
    function () {
      eh.setTheme("ace/theme/monokai");
    });
document.getElementById('setChrome1').addEventListener('click',
    function () {
      ec.setTheme("ace/theme/chrome");
    });
document.getElementById('setXcode1').addEventListener('click',
    function () {
      ec.setTheme("ace/theme/xcode");
    });
document.getElementById('setAmbiance1').addEventListener('click',
    function () {
      ec.setTheme("ace/theme/ambiance");
    });
document.getElementById('setMonokai1').addEventListener('click',
    function () {
      ec.setTheme("ace/theme/monokai");
    });

    function update() {
      var res = document.getElementById('result').contentWindow.document;
      res.open();
      res.write(eh.getValue()); // to get value inserted in a div

      //For css

      res.write('<style>' + ec.getValue() + '</style>'); // to get value inserted in a div

      res.close();
    }

    function seteditor() {

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
      eh.getSession().on('change', function() {
        update(); // create update function
      });
      //CSS
      ec.getSession().on('change', function() {
        update(); // create update function
      });


        eh.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        wrap: true,
        enableEmmet: true,
        //enableLiveAutocompletion: true,
      });

      ec.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        wrap: true
      });




    }
    seteditor();
    update();
  
