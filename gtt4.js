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


function myRandomnum(randomNum);
{
var aNum;
for
    {
aNum = Math.random(); //this is not changable so remember Math.random //allows us to
alert(randomNum);
    }
myRandomnum();


/*simpler way to generate 6 random lottery numbers*/

function yourLottoNbrs(min, max, num)
{
    var nbr1;
    nbr1 = Math.random() * (max - min) + min;
    //nbr1 = Math.floor(9 * Math.random());//random #1
    var nbr2;
    nbr2 = Math.random() * (max - min) + min;
    // nbr2 = Math.floor(9 * Math.random());//random #2
    var nbr3;
    nbr3 = Math.floor(9 * Math.random());//random #3
    var nbr4;
    nbr4 = Math.floor(9 * Math.random());//random #4
    var nbr5;
    nbr5 = Math.floor(9 * Math.random());//random #5
    var nbr6;
    nbr6 = Math.floor(9 * Math.random());//random #6

    {//main bracket to run for()
        {//bracket for 1st for() statement --- repeat 5 more times
            for (var a = 0; a < num; a++)
            {
                //nbr1
                nbr1[a] = Math.random() * (max - min) + min;
                nbr1[a] = Math.round(nbr1[a]);
                //nbr2
                nbr2[a] = Math.random() * (max - min) + min;
                nbr2[a] = Math.round(nbr2[a]);
                //nbr3
                nbr3[a] = Math.random() * (max - min) + min;
                nbr3[a] = Math.round(nbr3[a]);
                //nbr4
                nbr4[a] = Math.random() * (max - min) + min;
                nbr4[a] = Math.round(nbr2[a]);

            }
            return nbr1;
        }





    }//end of main bracket to run for()
}
yourLottoNbrs(1, 10, 5);
alert("Your Lotto numbers for today are: " + nbr1 + " " + nbr2 + " " + nbr3 + " " +
    nbr4 + " " + nbr5 + " " + nbr6 + " .");