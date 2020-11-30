//Read Image a url
function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById("ImageCode").innerText = reader.result
  }
  reader.readAsDataURL(file);
}
window.onbeforeunload = ()=> location.reload()
window.onload = function (event) {
  
  //Saving
  function beatify() {
    
  }


  //Notification SAVE
  $.notify.defaults({
    className: "success"
  });

  myIframeForDebug = document.getElementById("iframe").contentWindow

  function updateDebugger() {
    window.onbeforeunload = function (e) {
      e.preventDefault();
      e.returnValue = 'Really want to quit the program?';
    };
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function (e) {
      e = e || window.event;

      if (!e.ctrlKey) return;
      var code = e.which || e.keyCode;

      switch (code) {
        case 83:
        case 87:
          beatify()
          SaveNewCode()
          $.notify("saved", {
            autoHideDelay: 1000,
            position: 'right bottom'
          });
          e.preventDefault();
          e.stopPropagation();
          break;
      }
    };
    myIframeForDebug.document.addEventListener("mousemove", function (ev) {
      document.getElementById("downInfo").innerText = "X :" + ev.x + "\t    Y :" + ev.y + "\tScreenX:" + ev.screenX + "\tScreenY:" + ev.screenY
      ev.onerror = () => {
        alert("error")
      }
    })
  }
  setInterval(updateDebugger, 10)
  var iframe = document.getElementById("iframe")
  iframe.srcdoc = `<!DOCTYPE html>
  <html>
  <head>
  <title>Made With Gunzip Engine</title>

  </head>
  <body>
  <script>document.addEventListener('contextmenu', event => event.preventDefault());</script>
  </body>
  </html>`;
  var editorHtml = ace.edit("editorHtml");
  document.getElementById("editorUpdateContainer").style.display = "none"; //by default only one editor is shown 
  var editorInit = ace.edit("editorInit");
  editorHtml.setTheme("ace/theme/monokai");
  editorInit.setTheme("ace/theme/monokai");
  editorInit.session.setMode("ace/mode/javascript");
  editorHtml.session.setMode("ace/mode/html");
  editorHtml.setOptions({
    enableLiveAutocompletion: true,
    enableBasicAutocompletion: true,
    autoScrollEditorIntoView: true,
    enableSnippets: true,
    fontSize: "13pt",
    enableLiveAutocompletion: true
  });
  editorInit.setOptions({
    enableLiveAutocompletion: true,
    enableBasicAutocompletion: true,
    autoScrollEditorIntoView: true,
    enableSnippets: true,
    fontSize: "13pt",
    enableLiveAutocompletion: true
  });

  var editorUpdate = ace.edit("editorUpdate");
  document.getElementById("editorHtmlContainer").style.display = "none";
  editorUpdate.setTheme("ace/theme/monokai");
  editorUpdate.session.setMode("ace/mode/javascript");
  editorUpdate.setOptions({
    enableLiveAutocompletion: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    fontSize: "13pt",
    autoScrollEditorIntoView: true,
    enableLiveAutocompletion: true
  });

  ace.config.loadModule('ace/ext/language_tools')

  if ( codeinit == undefined ||  codeinit == null) {

    function SaveNewCode() {
      beatify()
      localStorage.setItem("codeInit", editorInit.getValue())
      localStorage.setItem("codeUpdate", editorUpdate.getValue())
      localStorage.setItem("codeHtml", editorHtml.getValue())
      codehtml = localStorage.getItem("codeHtml")
      codeinit = localStorage.getItem("codeInit")
      codeupdate = localStorage.getItem("codeUpdate")
    }
    editorInit.setValue(codeinit)
      editorHtml.setValue(codehtml)
      editorUpdate.setValue(codeupdate)
  } else {
    beatify()

    function SaveNewCode() {
      localStorage.setItem("codeHtml",editorHtml.getValue() )
      localStorage.setItem("codeInit", editorInit.getValue())
      localStorage.setItem("codeUpdate",editorUpdate.getValue() )
    }

    editorInit.setValue(codeinit)
    editorHtml.setValue(codehtml)
    editorUpdate.setValue(codeupdate)

  }

  document.getElementById("scriptingWindow").style.display = "none"; //By deafult it is hidden
  //Events of Tab Window Start
  document.getElementById("imageView").onclick = () => {
    document.getElementById("scriptView").style.width = "26%"
    document.getElementById("sceneView").style.width = "24%"
    document.getElementById("imageView").style.width = "46%"
    document.getElementById("imageMenu").style.display = "block";
    document.getElementById("scenesMenu").style.display = "none";
    document.getElementById("scriptingWindow").style.display = "none";
  }
  document.getElementById("sceneView").onclick = () => {
    document.getElementById("scriptView").style.width = "26%"
    document.getElementById("sceneView").style.width = "46%"
    document.getElementById("imageView").style.width = "24%"
    document.getElementById("imageMenu").style.display = "none";
    document.getElementById("scenesMenu").style.display = "block";
    document.getElementById("scriptingWindow").style.display = "none";

  }
  document.getElementById("scriptView").onclick = () => {
    editorInit.resize()
    editorUpdate.resize()
    editorHtml.resize()
    document.getElementById("scriptView").style.width = "46%"
    document.getElementById("sceneView").style.width = "24%"
    document.getElementById("imageView").style.width = "26%"
    document.getElementById("imageMenu").style.display = "none";
    document.getElementById("scenesMenu").style.display = "none";
    document.getElementById("scriptingWindow").style.display = "block";

  }
  document.getElementById("html").onclick = () => {
    editorHtml.focus()
    document.getElementById("editorHtmlContainer").style.display = "block";
    document.getElementById("editorInitContainer").style.display = "none";
    document.getElementById("editorUpdateContainer").style.display = "none";

  }
  document.getElementById("update").onclick = () => {
    editorUpdate.focus()
    document.getElementById("editorHtmlContainer").style.display = "none";
    document.getElementById("editorInitContainer").style.display = "none";
    document.getElementById("editorUpdateContainer").style.display = "block";

  }
  document.getElementById("init").onclick = () => {
    editorInit.focus()
    document.getElementById("editorHtmlContainer").style.display = "none";
    document.getElementById("editorInitContainer").style.display = "block";
    document.getElementById("editorUpdateContainer").style.display = "none";

  }

  ////@@@@ very important RUNNING THE PROGRAM
  document.getElementById("run").onclick = () => {
    $("#debugger").hide()
    setTimeout(machet, 100);

    function machet() {
      //alert("machet");
      document.getElementById("iframe").contentWindow.focus();
    }
    setTimeout(() => {

      iframe.srcdoc = `<html>
      <head>
      <title>Made With Gunzip Engine</title>
      <style>
      canvas{
        width:100%;
        height:100%;

        overflow : hidden;
      }
      *{
        overflow : hidden;
        padding : 0px;
        margin:0px;
      }
      </style>
      <script src="//cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/keyboardjs/2.6.2/keyboard.min.js" integrity="sha512-Q9aijJKP9BeTXgQHmb/j8AZTQ15//k9QvGXCbKMf1bt289s75awi/3SBFZ3M3J27NtD7JyU3d9d1eRPuO4BbhQ==" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
       </head>
      <body>
      `+editorHtml.getValue()+`
      <script>document.addEventListener('contextmenu', event => event.preventDefault());</script>
      <img style="display:none" id="imageid" src="">
      <canvas style="display:none" id="imgCanvas" />
      </div><script>window.onload=()=>{` + editorInit.getValue() + `;setInterval(()=>{` + editorUpdate.getValue() + `},10);};` + `</script></body>
      </html>`;
    }, 1000)
  }

  //@Important  DEBUGGIN MODE
  document.getElementById("debug").onclick = () => {
    setTimeout(machet, 100);

    function machet() {
      //alert("machet");
      document.getElementById("iframe").contentWindow.focus();
    }
    $("#debugger").show()

    //When First time loaded do this
    setTimeout(() => {

      iframe.srcdoc = `<html>
      <head>
      <style>
      canvas{
        width:100%;
        height:100%;
        overflow:hiden;
      }
      *{
        overflow : hidden;
        padding : 0px;
        margin:0px;
      }
      </style>
      <title>Made With Gunzip Engine</title>
      <script src="//cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/keyboardjs/2.6.2/keyboard.min.js" integrity="sha512-Q9aijJKP9BeTXgQHmb/j8AZTQ15//k9QvGXCbKMf1bt289s75awi/3SBFZ3M3J27NtD7JyU3d9d1eRPuO4BbhQ==" crossorigin="anonymous"></script>
      </head>
      <body>
      `+editorHtml.getValue()+`
      <script>document.addEventListener('contextmenu', event => event.preventDefault());</script>
      
      </div><script>window.onload=()=>{` + editorInit.getValue() + `;setInterval(()=>{` + editorUpdate.getValue() + `},10);};` + `</script></body>
      </html>`;
    }, 1000)

  }
  // @Important Stop Stops the everything
  document.getElementById("stop").onclick = () => {
    console.clear()
    $("#debugger").show()
    setTimeout(() => {
      iframe.srcdoc = `<html>
      <head>
      <title>Made With Gunzip Engine</title>
      <style>
      *{
        overflow : hidden;
        padding : 0px;
        margin:0px;
      }
      canvas{
        width:100%;
        height:100%;
        overflow:hiden;
      }
      *{
        overflow : hidden;
        padding : 0px;
        margin:0px;
      }
      </style>
      </head>
      <body>    <script>document.addEventListener('contextmenu', event => event.preventDefault());</script>
      
      </body>
      </html>`;
    }, 1)
  }
  //@imporants It builds the program
  document.getElementById("build").onclick = () => {
    iframe.srcdoc = `<html>
      <head>
      <title>Made With Gunzip Engine</title>
      <style>
      *{
        overflow : hidden;
        padding : 0px;
        margin:0px;
      }
      canvas{
        width:100%;
        height:100%;
        overflow:hiden;
      }
      *{
        overflow : hidden;
        padding : 0px;
        margin:0px;
      }
      </style>
      <script src="//cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/keyboardjs/2.6.2/keyboard.min.js" integrity="sha512-Q9aijJKP9BeTXgQHmb/j8AZTQ15//k9QvGXCbKMf1bt289s75awi/3SBFZ3M3J27NtD7JyU3d9d1eRPuO4BbhQ==" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
      </head>
      <body>
      `+editorHtml.getValue()+`
      <script>document.addEventListener('contextmenu', event => event.preventDefault());</script>
      
      </div><script>window.onload=()=>{` + editorInit.getValue() + `;setInterval(()=>{` + editorUpdate.getValue() + `},10);};` + `</script></body>
      </html>`;

    name = prompt("Please Enter Your Game's name")
    var blob = new Blob([iframe.srcdoc.toString()], {
      type: "text/plain;charset=utf-8"
    });
    if (name != undefined || name != null) {
      saveAs(blob, name + ".gunz.html")
    } else {
      alert("Please enter a vaild name")
    }
  }
  //Events of Tab windows End
  setInterval(SaveNewCode, 1000)
  //console.clear()
}
