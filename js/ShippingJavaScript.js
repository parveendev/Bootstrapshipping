function validate() {
    if( document.myForm.item.value == "" ) {
        alert( "Please provide the no.of items!" );
        document.myForm.item.focus() ;
        return false;
    }
    if( document.myForm.arrivaldate.value == "" ) {
        alert( "Please provide arrival date!" );
        document.myForm.arrivaldate.focus() ;
        return false;
    }
    if( document.myForm.fname.value == "" ) {
        alert( "Please provide first your name!" );
        document.myForm.fname.focus() ;
        return false;
    }
    if( document.myForm.lname.value == "" ) {
        alert( "Please provide Last your name!" );
        document.myForm.lname.focus() ;
        return false;
    }
    if( document.myForm.emailid.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.emailid.focus() ;
        return false;
    }
    if( document.myForm.fullname.value == "" ) {
        alert( "Please provide full name!" );
        document.myForm.fullname.focus() ;
        return false;
    }
    if( document.myForm.address.value == "" ) {
        alert( "Please provide Address!" );
        document.myForm.address.focus() ;
        return false;
    }
    if( document.myForm.city.value == "" ) {
        alert( "Please provide the city name" );
        document.myForm.city.focus() ;
        return false;
    }
    if( document.myForm.state.value == "" ) {
        alert( "Please provide the state name!" );
        document.myForm.state.focus() ;
        return false;
    }
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
        document.myForm.Zip.value.length != 5 ) {

        alert( "Please provide a zip in the format #####." );
        document.myForm.Zip.focus() ;
        return false;
    }

}



// function validate(){
//     var enteritems = document.forms("item").value;
//     var date = document.forms("arrivaldate").value;
//     var firstname = document.forms("fname").value;
//     var lastname = document.forms("lnameerror").value;
//     var Email = document.forms("emailid").value;
//     var fullname1 = document.forms("fullname").value;
//     var addressname = document.forms("address").value;
//     var cityname = document.forms("city").value;
//     var statename = document.forms("state").value;
//     var zipname = document.forms("Zip").value;
//     if(enteritems === "")
//     {
//         document.getElementById("itemerror").innerText="Enter no of items";
//         document.getElementById("itemerror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("itemerror").innerHTML="";
//     }
//     if(date==="")
//     {
//         document.getElementById("dateerror").innerHTML="Enter a date";
//         document.getElementById("dateerror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("fnameerror").innerHTML="";
//     }
//     if(firstname==="")
//     {
//         document.getElementById("fnameerror").innerHTML="Enter a name";
//         document.getElementById("fnameerror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("fnameerror").innerHTML="";
//     }
//     if(lastname==="")
//     {
//         document.getElementById("lnameerror").innerHTML="Enter a name";
//         document.getElementById("lnameerror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("lnameerror").innerHTML="";
//     }
//     if(Email.indexOf("@")> -1)
//     {
//         document.getElementById("emailiderror").innerHTML="";
//     }
//     else
//     {
//         document.getElementById("emailiderror").innerHTML="Enter the correct email address";
//         document.getElementById("emailiderror").style.color="Red";
//
//     }
//     if(fullname1==="")
//     {
//         document.getElementById("fullnameerror").innerHTML="Enter a name";
//         document.getElementById("fullnameerror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("fullnameerror").innerHTML="";
//     }
//     if(addressname==="")
//     {
//         document.getElementById("addresserror").innerHTML="Enter a name";
//         document.getElementById("addresserror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("addresserror").innerHTML="";
//     }
//     if(cityname==="")
//     {
//         document.getElementById("cityerror").innerHTML="Enter a name";
//         document.getElementById("cityerror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("cityerror").innerHTML="";
//     }
//     if(statename==="")
//     {
//         document.getElementById("stateerror").innerHTML="Enter a name";
//         document.getElementById("stateerror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("stateerror").innerHTML="";
//     }
//     if(zipname==="")
//     {
//         document.getElementById("ziperror").innerHTML="Enter a name";
//         document.getElementById("ziperror").style.color="Red";
//
//     }
//     else
//     {
//         document.getElementById("ziperror").innerHTML="";
//     }
//     }

