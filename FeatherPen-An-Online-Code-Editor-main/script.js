function run(){
    let htmlcode=document.getElementById("html-code");
    let csscode=document.getElementById("css-code");
    let jscode=document.getElementById("js-code");
    let output=document.getElementById("output");

    // Now we are writting HTML Code and applying CSS to it...

    output.contentDocument.body.innerHTML=htmlcode.value+ "<style>" + csscode.value + "</style>";

    output.contentWindow.eval(jscode.value);
}