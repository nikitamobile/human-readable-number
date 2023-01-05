module.exports = function toReadable (number)



{
  
    

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
    return (tenThousand(stringarr).trim());
}

if (stringarr.length===4){
return (thousand(stringarr).trim());
}

if (stringarr.length===3){
    return(hundred(stringarr).trim());
    }

if (stringarr.length===2){
     return(ten(stringarr).trim());
     }
     
if (stringarr.length===1 && stringarr[stringarr.length-1]==='0'){
    return('zero');
        }


if (stringarr.length===1){
        return(single(stringarr).trim());
        }

//var x = 999;
//y= x.toString().length;

function single (stringarr){

if (stringarr[stringarr.length-1]==='0'){
    return '';
}
else if (stringarr[stringarr.length-1]==='1'){
    return ' one';
}
else if (stringarr[stringarr.length-1]==='2'){
    return ' two';
}
else if (stringarr[stringarr.length-1]==='3'){
    return ' three';
}
else if (stringarr[stringarr.length-1]==='4'){
    return ' four';
}
else if (stringarr[stringarr.length-1]==='5'){
    return ' five';
}
else if (stringarr[stringarr.length-1]==='6'){
    return ' six';
}
else if (stringarr[stringarr.length-1]==='7'){
    return ' seven';
}
else if (stringarr[stringarr.length-1]==='8'){
    return ' eight';
}
else if (stringarr[stringarr.length-1]==='9'){
    return ' nine';
}
}

function ten(stringarr) {

    if (stringarr[stringarr.length-2]==='0'){
        return '' + single(stringarr);
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='0'){
        return ' ten';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='1'){
        return ' eleven';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='2'){
        return ' twelve';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='3'){
        return ' thirteen';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='4'){
        return ' fourteen';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='5'){
        return ' fifteen'; 
    } 
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='6'){
        return ' sixteen';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='7'){
        return ' seventeen';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='8'){
        return ' eighteen';
    }
    else if (stringarr[stringarr.length-2]==='1' && stringarr[stringarr.length-1]==='9'){
        return ' nineteen';
    }
    else if (stringarr[stringarr.length-2]==='2'){
        return ' twenty' + single(stringarr);
    }
    else if (stringarr[stringarr.length-2]==='3'){
        return ' thirty' + single(stringarr);
    }
    else if (stringarr[stringarr.length-2]==='4'){
        return ' forty' + single(stringarr);
    }
    else if (stringarr[stringarr.length-2]==='5'){
        return ' fifty' + single(stringarr);
    }
    else if (stringarr[stringarr.length-2]==='6'){
        return ' sixty' + single(stringarr);
        
    }
    else if (stringarr[stringarr.length-2]==='7'){
        return ' seventy' + single(stringarr);
    }
    else if (stringarr[stringarr.length-2]==='8'){
        return ' eighty' + single(stringarr);
    }
    else if (stringarr[stringarr.length-2]==='9'){
        return ' ninety' + single(stringarr);
    }
}

function hundred(stringarr){
    if (stringarr[stringarr.length-3]==='0'){
        return '' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='1'){
        return ' one hundred'+ ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='2'){
        return ' two hundred' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='3'){
        return ' three hundred' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='4'){
        return ' four hundred' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='5'){
        return ' five hundred' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='6'){
        return ' six hundred' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='7'){
        return ' seven hundred' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='8'){
        return ' eight hundred' + ten(stringarr);
    }
    if (stringarr[stringarr.length-3]==='9'){
        return ' nine hundred' + ten(stringarr);
    }
}

function thousand(stringarr){
    if (stringarr[stringarr.length-4]==='0'){
        return '' + hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='1'){
        return ' one thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='2'){
        return ' two thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='3'){
        return ' three thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='4'){
        return ' four thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='5'){
        return ' five thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='6'){
        return ' six thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='7'){
        return ' seven thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='8'){
        return ' eight thousand'+ hundred(stringarr);
    }
    if (stringarr[stringarr.length-4]==='9'){
        return ' nine thousand'+ hundred(stringarr);
    }
}


function tenThousand(stringarr){
    if (stringarr[stringarr.length-5]==='0'){
        return ''+thousand(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='0'){
        return ' ten thousand' + thousand(stringarr);
    }

    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='1'){
        return ' eleven thousand' + hundred(stringarr);
    }

    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='2'){
        return ' twelve thousand' + hundred(stringarr);
    }
    
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='3'){
        return ' Thirteen thousand' + hundred(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='4'){
        return ' Fourteen thousand' + hundred(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='5'){
        return ' fifteen thousand' + hundred(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='6'){
        return ' sixteen thousand' + hundred(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='7'){
        return ' seventeen thousand' + hundred(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='8'){
        return ' eighteen thousand' + hundred(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='1' && stringarr[stringarr.length-4]==='9'){
        return ' nineteen thousand' + hundred(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='2'){
        return ' twenty' + thousand(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='3'){
        return ' thirty' + thousand(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='4'){
        return ' forty' + thousand(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='5'){
        return ' fifty' + thousand(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='6'){
        return ' sixty' + thousand(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='7'){
        return ' seventy' + thousand(stringarr);
    }
    else if (stringarr[stringarr.length-5]==='8'){
        return ' eighty' + thousand(stringarr);

    }
    else if (stringarr[stringarr.length-5]==='9'){
        return ' ninety' + thousand(stringarr);
    }

   


}



}


