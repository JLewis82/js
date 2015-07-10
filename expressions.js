/* the weather using if/else */
var goodMorning;
goodMorning = "Good morning sunshine! You look bright-eyed and bushy-tailed this morning!";
var welCome;
welCome = "Lets have a chat about your local weather for the day and get you off to work!";
var y;
y = true;
var n;
n = false;


/* Lets chat a bit */

var theWeather;
theWeather = prompt(goodMorning + "," + welCome + "," + "Is it raining outside? y/n");
{
if (theWeather == y)
{
    alert("It's raining so don't forget your umbrella!");
}
else {
    alert("Well isn't that just lovely! Don't forget your sunglasses!");
}
}
theWeather = confirm("It is" + theWeather + "outside, correct?");

/* temperature using if with && */


var theTemperature;
theTemperature = prompt("Please enter the current temperature", "");


if (theTemperature <= 30)
{
    alert("Wow! now that is cold!");
}

if ((theTemperature > 30) && (theTemperature <= 55))
{
    alert("It is a cool day");
}

if ((theTemperature > 55) && (theTemperature <= 75))
{
    alert = ("It is a fairly warm day");
}

if ((theTemperature > 75))
{
    alert("Wow! It is very hot today!");
}


/*input email*/

var email;
email = prompt("Please enter your email address.");
email = confirm("Is this" + email + " correct? Ok for true, cancel if false.");
if (email == true)
{
    console.log("Yes this is your email address!")
}



/* The weather using ternary conditional if/else */

console.log("It is " + (theTemperature >= 90 ? "HOT!" : (theTemperature > 50 ? "NICE!" : "COLD!"));
/**
 * Created by Miss_Jessica_Lynne on 6/17/15.
 */

