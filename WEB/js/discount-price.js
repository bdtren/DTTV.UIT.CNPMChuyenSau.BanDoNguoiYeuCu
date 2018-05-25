// JavaScript Document
function SelectCheck(nameSelect)
{
    if(nameSelect){
        admOptionValue = document.getElementById("discount").value;
        if(admOptionValue == nameSelect.value){
            document.getElementById("DivCheck").style.display = "block";
        }
        else{
            document.getElementById("DivCheck").style.display = "none";
        }
    }
    else{
        document.getElementById("DivCheck").style.display = "none";
    }
}