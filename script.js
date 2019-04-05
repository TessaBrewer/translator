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
        }
        break;
      case 'goodbye':
        console.log("Goodbye");
        break;
      case 'yes':
        console.log("Yes");
        break;
      case 'no':
        console.log("No");
        break;
      case 'maybe':
        console.log("Maybe");
        break;
    }
  }
});
