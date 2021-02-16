var str = "madam";
var pali = "";

for(var i=str.length-1; i>=0; i--){
   var check =str[i];
   pali = pali + str[i];

}
if(pali == str){
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}