document.addEventListener('DOMContentLoaded', function() {

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    
    // Get the header
    var header = document.querySelector("Header");
    
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    
    function setTickerWidth() {
        const tikerTape = document.getElementById('ticker-tape');
        tickerTape.style.width = window.innerWidth + 'px';
    }
    
    setTickerWidth();
    
    window.addEventListener('resize', setTickerWidth);
    
    function myFunctions() {
    //    document.getElementById("myDIV").style.backgroundImage = "url(pack.png)";
        document.body.style.backgroundImage = "url(pack.png)";
    }
    
    function clickHere() {
        document.getElementById("my-div").style.backgroundColor = "green";
    }

   
    
    //1. make header// 
    //2. make home icon//
    //3. make ticker// hpu
    //4. make center button reading click here// 
    //5. make center button function so that it changes words when clicked on//
    //6. make background images change when words are clicked on//
    //7. make page blur in and out when mouse is on header vs body//
    //8. make mouse a blur //
    
    
    //1. 5:50am wake up//
    //2. 5:55am pack and get ready//
    //3. 6:30am drop off sister //
    //4. 6:45 cemetary //
    //5. 7:15 nj transit //
    //6. 8:10 drop things off apartment //
    //7. 8:30 leave for school // 
    //8. 9:00 class // 
    
    }); 
    
    