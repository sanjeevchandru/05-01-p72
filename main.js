document.write("36.checks whether the last digit of three positive integers is the same."+"<br>");
function test36(x,y,z){
    if(x>0 && y>0 && z>0){
        if(x%10===y%10 && y%10===z%10 && z%10===x%10){
            return true;
        }
        return false;
    }
}
document.write("The numbers are :24,30,50 , Ans :"+test36(24,30,50)+"<br>");
document.write("The numbers are :50,90,70 , Ans :"+test36(50,90,70)+"<br><br>");