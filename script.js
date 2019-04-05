var text = document.getElementById('text');
var language = document.getElementById("language");
var output = document.getElementById("output");
var button = document.getElementById("submit");

button.addEventListener("click", function(event)
{
  console.log("Button Clicked");
  var textText = text.value.toLowerCase();
  var languageText = language.value.toLowerCase();
  if(text.checkValidity() && language.checkValidity())
  {
    switch(textText)
    {
      case 'hello':
        console.log("Hello");
        switch(languageText)
        {
          case 'german':
            output.innerHTML = "Guten Tag";
            console.log("German");
            break;
          case 'icelandic':
            output.innerHTML = "Hall&oacute;";
            console.log("Icelandic");
            break;
          case 'gaelic':
            output.innerHTML = "Dia dhuit";
            console.log("Gaelic");
            break;
        }
        break;
      case 'goodbye':
        console.log("Goodbye");
        switch(languageText)
        {
          case 'german':
            output.innerHTML = "Auf Wiedersehen";
            console.log("German");
            break;
          case 'icelandic':
            output.innerHTML = "Bless";
            console.log("Icelandic");
            break;
          case 'gaelic':
            output.innerHTML = "Sl&aacute;n";
            console.log("Gaelic");
            break;
        }
        break;
      case 'yes':
        console.log("Yes");
        switch(languageText)
        {
          case 'german':
            output.innerHTML = "Ja";
            console.log("German");
            break;
          case 'icelandic':
            output.innerHTML = "J&aacute;";
            console.log("Icelandic");
            break;
          case 'gaelic':
            output.innerHTML = "Is f&eacute;idir";
            console.log("Gaelic");
            break;
        }
        break;
      case 'no':
        console.log("No");
        switch(languageText)
        {
          case 'german':
            output.innerHTML = "Nein";
            console.log("German");
            break;
          case 'icelandic':
            output.innerHTML = "Nr";
            console.log("Icelandic");
            break;
          case 'gaelic':
            output.innerHTML = "N&iacute;l";
            console.log("Gaelic");
            break;
        }
        break;
      case 'maybe':
        console.log("Maybe");
        switch(languageText)
        {
          case 'german':
            output.innerHTML = "k&ouml;nnte sein";
            console.log("German");
            break;
          case 'icelandic':
            output.innerHTML = "Kannski";
            console.log("Icelandic");
            break;
          case 'gaelic':
            output.innerHTML = "B'fh&eacute;idir";
            console.log("Gaelic");
            break;
        }
        break;
    }
  }
});
