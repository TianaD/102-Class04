let a = 1;


//without a funciton, i can still access variables outside of it
//for this function, we get the type of alfredo we get. there are less options
function (){
    let b = 5;
    console.log (a);
    console.log (b);
}

//perameter will always be located inside the paraenthesis
//these function are like alfredo whatever we pass into x, that is the meat for the alfredo. we are waiting to be told what kind of alfredo is being made
    let lesson = function (x) {}
        let b = 2;

        console.log(x + b);
}

lesson(a);
l2();

function whodat() {
    let name = prompt("What is your name?");
    if (name != 'Tiana') {
        alert("ERROR");
    } else {
        alert("Hello, " + name);
    }

    confirm()
    
}
//console.log(b);

//if i add numbers and nothing else, I will get an NAN (not a number) error. i.e. running lesson = undefined + 2 vs running lesson(3) = 5