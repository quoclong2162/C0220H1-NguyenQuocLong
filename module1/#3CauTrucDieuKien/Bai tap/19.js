var a =parseFloat( prompt('nhap canh a'));
var b = parseFloat(prompt('nhap canh b'));
var c = parseFloat(prompt('nhap canh c'));

 if (a>0 & b>0 & c>0) {
     if (a+b>c){
         if (b+c>a){
             if (a+c>b){
                 alert('a,b,c la 3 canh cua tam giac');
             }else {
                 alert('a,b,c ko phai la 3 canh cua tam giac');
             }
         }else {
             alert('a,b,c ko phai la 3 canh cua tam giac');
         }
     }else {
         alert('a,b,c ko phai la 3 canh cua tam giac');
     }
 }else {
     alert('a,b,c ko phai la 3 canh cua tam giac');
 }