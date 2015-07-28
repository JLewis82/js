/**
 * Created by Miss_Jessica_Lynne on 7/27/15.
 */

///////FUNCTIONS USING ARGUMENTS AND PARAMETERS

/// EXAMPLE
 //funcName (argument1, argument2);
 //function funcName (parameter1, parameter2)
 ////


 //BASIC FUNCTION:
 function myName()
 {
    var a; //PUT THE a IN THE function myName()
    a = b * c; // PUT WHATEVER b AND c EQUAL INTO THE OUTPUT myName();

    alert(a);
 }
 myName();

// SAME FUNCTION BUT USING  ARGS N PARAMS

 function myName2(a)
 {
    myName2 = b * c;
    alert(a);
 }
myName2(2, 2);









//////////    EXAMPLE USING ARGS N PARAMS

function calcArea()
 {
 var area;
  area = w * h;
 alert(area);
 }
 calcArea(); // instead of just using this to call the function u use the () to implenet arg n params */



/*EXAMPLE 2 USING ARGS N PARAMS*/


/* THIS CODE MAKES W = 30 AND H = 20 */


function calcArea2(w, h) // w and h are the PARAMETERS (ie it tells which is the pink bear and which is the blue
{
    var area;      //declaring a variable (ie: Tells what we are making)
    area = w * h;  //assigning w and h to area (ie: Tells what we are making to makes the bears)
    alert(area);   //outputs the end result (ie: It showcases the bears)
}
calcArea2(30, 20); //the numbs 30 n 20 are the ARGUMENTS (ie the pink teddy bear and the blue teddy bear


/* dog years */


 function dogYears1()
 {
     var dogAge;// TAKE THIS AND PUT THIS IN THE ACTUAL FUNCTION ---function dogYears2
         dogAge = 4; //TAKE THIS AND PUT IT IN THE OUTPUT --- dogYears2()

     var dogYears;
         dogYears =dogAge * 7;      //multiple the dogAge which is 4 human years by 7 which is the average age of a dog per 1 human year

     alert("Rosie is " + dogYears + " years old.")
 }
 dogYears1();


//using args n params

function dogYears2(dogAge)
{
    //var dogAge; dogAge = 4;
    var dogYears;
    dogYears = dogAge * 7;      //multiple the dogAge which is 4 human years by 7 which is the average age of a dog per 1 human year
    alert("Rosie is " + dogYears + " years old.")
}
dogYears2(4); //returns this alert("Rosie is " + dogYears + " years old.")


////////////////////////////////////////////////////////////////////////////////////////

/*BASICALLY JUST TAKE THE DECLARED VARIABLE FROM A NORMAL FUNCTION AND PUT IT INTO THE () OF THE FUNCTION()

 and

 TAKE ITS ASSIGNMENT AND STICK IT IN THE FUNCTIONS OUTPUT AREA
 */
///////////////////////////////////////////////////////////////////////////////////////


/*
 calcArea (argument1, argument2)
 function calcArea (parameter1, parameter2)
 */