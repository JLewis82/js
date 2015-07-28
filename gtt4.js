/**
 * Created by Miss_Jessica_Lynne on 7/27/15.
 */

/* using math object Math.random FOR RANDOM NUMBER BETWEEN 1-10
* MATH.RANDOM() * (MAX - MIN) + 1
 * MATH.RANDOM() * (10 - 1) + 1 */
//function myRandomnum()
//{
    //var randomNum;
    //randomNum = Math.random(); //this is not changable so remember Math.random //allows us to
    //alert(randomNum);
//}
//myRandomnum();

/*using params with math.random*/
//LOTTERY!!!!
function myRandomnum1(min, max, num)
{
var randomNum1;
randomNum1 = Math.random() * (max - min) + min; //this is not changable so remember Math.random //allows us to
randomNum1 = Math.round(randomNum1);
//adding a loop
    for (var a = 0; a < num; a++)
    {
        randomNum1[a] = Math.random() * (max - min) + min;
        randomNum1[a] = Math.round(randomNum1[a]);
    }
    return randomNum1;
}
myRandomnum1(1,10,5);
myRandomnum1(1,100,5);

//function myRandomnum()
//{
//var randomNum;
//for
//randomNum = Math.random(); //this is not changable so remember Math.random //allows us to
//alert(randomNum);
//}
//myRandomnum();