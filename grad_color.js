var c1 = document.getElementsByName("c1")[0];
var c2 =  document.getElementsByName("c2")[0]; 



updateDisplay();

var body = document.body;


//value changed event listener for inputs "input"
c1.addEventListener("input", function()
                   {
    body.style.background = setColor();
    
    updateDisplay();
});


c2.addEventListener("input", function()
                   {
    body.style.background = setColor();
    updateDisplay();

});

function updateDisplay()
{
    var c1Text = c1.value;
    var c2Text = c2.value;

  //textContent renders(reloads the page) less than innerHtml 
  document.getElementById("cNames").textContent = "Left: " + c1Text + " , Right: " + c2Text;
    

}

function setColor()
{
    var setting = "linear-gradient(to right, "  + c1.value + ", " + c2.value + ")";
    
    return setting;
}