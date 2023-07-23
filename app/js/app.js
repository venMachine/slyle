	$(document).ready(function() {
	var a = "text";  
	// String
	var n = 41;
	// Number
	var b = true;
	var b1 = false;
	//Boolean
	var ar = [1,"text",n];
	// Arrey
	var oj = {};
	// Object

	var a1 = "text",  
	    n1 = 41,
        b2 = true,
	    b3 = false,
	    ar1 = [1,"text",n],
	    oj1 = {};

	var myImg = document.querySelector("img");  

	  myImg.onclick = function(){

	  	var mySrc =  myImg.getAttribute("src");
	  	
        if(mySrc === "https://chakiris.club/uploads/posts/2023-01/1674669417_chakiris-club-p-bog-sitkhov-fentezi-pinterest-4.jpg")
        {
        myImg.setAttribute("src", "https://cs8.pikabu.ru/post_img/big/2017/01/21/4/148497557716479613.jpg");
        } else {
        myImg.setAttribute("src", "https://chakiris.club/uploads/posts/2023-01/1674669417_chakiris-club-p-bog-sitkhov-fentezi-pinterest-4.jpg")
        }  
	  };


	console.log(typeof a);
	console.log(typeof n);
	console.log(typeof b);
	console.log(typeof ar);
	console.log(typeof oj);
    console.log(a1,n1,b2,b3,ar1,oj1);
	// alert(a);
    
    if(n === 41){
    	console.log('все ок');
    } else {
    	console.log('ошибка');
    };
    // равенство

     if(n !== 41){
    	console.log('все ок');
    } else {
    	console.log('ошибка');
    };

    // отрицание

     if(n <= 41){
    	console.log('все ок');
    } else {
    	console.log('ошибка');
    };

    // меньше или равно

     if(n < 41){
    	console.log('все ок');
    } else {
    	console.log('ошибка');
    };

    // меньше 

     if(n < 42){
    	console.log('все ок');
    } else {
    	console.log('ошибка');
    }

    // меньше 





})