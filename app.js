var increment=0

function fn_add()
{
 	var node1=document.getElementById("input")
    var node2=document.getElementById("jaf")
    node2.innerHTML+="<b class=hider >"+node1.value+" <button class='btn1' onClick='Delete("+increment+")'> DELETE <span class=hide>"+increment+"</button> </b>"
    increment=increment+1
}
function Delete(x)
{
    var node3=document.getElementsByClassName("hider")
    node3[x].style.display="none"
}