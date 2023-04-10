function insert(num) {
    document.form.textview.value =
    document.form.textview.value + num;
}

function clean(){
    document.form.textview.value = "";        
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}

function equal(){
    var exp = document.form.textview.value;
    try{
        if(exp){
            document.form.textview.value = eval(exp);
        }
    }
    catch(err){
        document.form.textview.value = "Error!"
    }
}

function max(){
   var a = document.form.textview.value.split('|')[0];
   var b = document.form.textview.value.split('|')[1];
   if (a > b) {
    document.form.textview.value = a;
   } 
   else {
    document.form.textview.value = b;
   }

}

function checkPhoneKey(key) {
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
     equal()
    }
    if (event.code == 'Delete') {
        clean()
    }
    return (key >= '0' && key <= '9') || key == '+' || key == '(' 
    || key == ')' || key == '-' || key == '*' || key == '/' 
    || key == 'ArrowLeft' || key == 'ArrowRight' || key == '.' 
    || key == 'Backspace' ||  key == ',';
}