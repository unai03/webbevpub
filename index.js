
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_search_menu

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().includes(filter)) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
  
  
  
        
      }
    }
    let navigation = {
          "main": "index.html",
          "ABC": "ABC.html"
          
      };
  
      let navbar = document.getElementsByTagName("li");
  
      for (let key in navigation) {
          let value = navigation[key];
          let element = document.createElement("a");
          element.textContent = key;
          element.href = value;
  
          let path = location.pathname;
  
          // The special case where you navigate to the folder containing the website "examination_webdev/"
          // which defaults to index.html
          if (path.endsWith("/") && value == "index.html") {
              element.className += " active"
          } else {
              // all other cases end in .html
              element.className += location.pathname.includes(value) ? " active" : "";
          }
  
  
          navbar.appendChild(element);
      }
  }
  
  window.addEventListener('DOMContentLoaded', addNavBar, false);
  
  
  
  function imagesfunciton(){
    
  
  
  
  
  }
 
s