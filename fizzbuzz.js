var x = prompt("Enter the Value you would like to FizzBuzz:");

function fizzBuzz (x){
    var count = 0;    
    while(count < x){
        count++;
        var display = count + "\n";

        if (document.getElementById("values") != null) {
            var idPost = document.getElementById("values").innerHTML;
	}
        if(count % 3 != 0 && count % 5 != 0){
        document.getElementById("values").innerText += display;
        }
        else if(count % 3 ==0 && count % 5 != 0){
            document.getElementById("values").innerText += "fizz \n";
        }
        else if(count % 5 ==0 && count % 3 != 0){
            document.getElementById("values").innerText += "buzz \n";
        }
        else{
            document.getElementById("values").innerText += "fizzbuzz \n";
        }
    }   
    
}

fizzBuzz(x);