module.exports = function toReadable (number) {
  
    

let input = number;

// Getting the string as a parameter
// and typecasting it into an integer
let myFunc = num => Number(num);
  
var arr = Array.from(String(input), myFunc);

var stringarr= arr.map(String)
  
// Print the result array
//console.log(stringarr);
//console.log()




if (stringarr.length===5){
    console.log(tenThousand(stringarr));
}

if (stringarr.length===4){
console.log(thousand(stringarr));
}

if (stringarr.length===3){
    console.log(hundreed(stringarr));
    }

if (stringarr.length===2){
     console.log(beforeLast(stringarr));
     }

if (stringarr.length===1){
        console.log(lastDigit(stringarr));
        }

//var x = 999;
//y= x.toString().length;

function lastDigit (stringarrber){

if (stringarrber[stringarrber.length-1]==='0'){
    return '';
}
else if (stringarrber[stringarrber.length-1]==='1'){
    return 'one';
}
else if (stringarrber[stringarrber.length-1]==='2'){
    return 'two';
}
else if (stringarrber[stringarrber.length-1]==='3'){
    return 'three';
}
else if (stringarrber[stringarrber.length-1]==='4'){
    return 'four';
}
else if (stringarrber[stringarrber.length-1]==='5'){
    return 'five';
}
else if (stringarrber[stringarrber.length-1]==='6'){
    return 'six';
}
else if (stringarrber[stringarrber.length-1]==='7'){
    return 'seven';
}
else if (stringarrber[stringarrber.length-1]==='8'){
    return 'eight';
}
else if (stringarrber[stringarrber.length-1]==='9'){
    return 'nine';
}
}

function beforeLast(stringarrber) {

    if (stringarrber[stringarrber.length-2]==='0'){
        return '';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='0'){
        return 'ten';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='1'){
        return 'eleven';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='2'){
        return 'twelve';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='3'){
        return 'thirteen';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='4'){
        return 'fourteen';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='5'){
        return 'fifteen'; 
    } 
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='6'){
        return 'sixteen';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='7'){
        return 'seventeen';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='8'){
        return 'eighteen';
    }
    else if (stringarrber[stringarrber.length-2]==='1' && stringarrber[stringarrber.length-1]==='9'){
        return 'nineteen';
    }
    else if (stringarrber[stringarrber.length-2]==='2'){
        return 'twenty' + ' ' + lastDigit(stringarr);
    }
    else if (stringarrber[stringarrber.length-2]==='3'){
        return 'thirty' + ' ' + lastDigit(stringarr);
    }
    else if (stringarrber[stringarrber.length-2]==='4'){
        return 'fourty' + ' ' + lastDigit(stringarr);
    }
    else if (stringarrber[stringarrber.length-2]==='5'){
        return 'fifty' + ' ' + lastDigit(stringarr);
    }
    else if (stringarrber[stringarrber.length-2]==='6'){
        return 'sixty' + ' ' + lastDigit(stringarr);
        
    }
    else if (stringarrber[stringarrber.length-2]==='7'){
        return 'seventy' + ' ' + lastDigit(stringarr);
    }
    else if (stringarrber[stringarrber.length-2]==='8'){
        return 'eighty' + ' ' + lastDigit(stringarr);
    }
    else if (stringarrber[stringarrber.length-2]==='9'){
        return 'ninety' + ' ' + lastDigit(stringarr);
    }
}

function hundreed(stringarrber){
    if (stringarrber[stringarrber.length-3]==='0'){
        return ''+beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='1'){
        return 'one hundreed'+ ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='2'){
        return 'two hundreed' + ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='3'){
        return 'three hundreed' + ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='4'){
        return 'four hundreed' + ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='5'){
        return 'five hundreed' + ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='6'){
        return 'six hundreed' + ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='7'){
        return 'seven hundreed' + ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='8'){
        return 'eight hundreed' + ' ' + beforeLast(stringarr);
    }
    if (stringarrber[stringarrber.length-3]==='9'){
        return 'nine hundreed' + ' ' + beforeLast(stringarr);
    }
}

function thousand(stringarrber){
    if (stringarrber[stringarrber.length-4]==='0'){
        return ''+hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='1'){
        return 'one thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='2'){
        return 'two thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='3'){
        return 'three thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='4'){
        return 'four thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='5'){
        return 'five thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='6'){
        return 'six thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='7'){
        return 'seven thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='8'){
        return 'eight thousand'+ ' ' + hundreed(stringarr);
    }
    if (stringarrber[stringarrber.length-4]==='9'){
        return 'nine thousand'+ ' ' + hundreed(stringarr);
    }
}


function tenThousand(stringarrber){
    if (stringarrber[stringarrber.length-5]==='0'){
        return ''+thousand(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='0'){
        return 'ten thousand' + ' ' + thousand(stringarr);
    }

    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='1'){
        return 'eleven thousand' + ' ' + hundreed(stringarr);
    }

    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='2'){
        return 'twelve thousand' + ' ' + hundreed(stringarr);
    }
    
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='3'){
        return 'Thirteen thousand' + ' ' + hundreed(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='4'){
        return 'Fourteen thousand' + ' ' + hundreed(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='5'){
        return 'fifteen thousand' + ' ' + hundreed(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='6'){
        return 'sixteen thousand' + ' ' + hundreed(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='7'){
        return 'seventeen thousand' + ' ' + hundreed(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='8'){
        return 'eighteen thousand' + ' ' + hundreed(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='1' && stringarrber[stringarrber.length-4]==='9'){
        return 'nineteen thousand' + ' ' + hundreed(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='2'){
        return 'twenty' + ' ' + thousand(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='3'){
        return 'thirty' + ' ' + thousand(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='4'){
        return 'fourty' + ' ' + thousand(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='5'){
        return 'fifty' + ' ' + thousand(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='6'){
        return 'sixty' + ' ' + thousand(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='7'){
        return 'seventy' + ' ' + thousand(stringarr);
    }
    else if (stringarrber[stringarrber.length-5]==='8'){
        return 'eighty' + ' ' + thousand(stringarr);

    }
    else if (stringarrber[stringarrber.length-5]==='9'){
        return 'ninety' + ' ' + thousand(stringarr);
    }

   


}



}


