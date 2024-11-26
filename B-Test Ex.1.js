day = parseInt(prompt("How many times do you wash your hands per day?"));
months = parseInt(prompt("How many months have you been doing that?"));
minsecs1 = 21 * day
minsecs2 = minsecs1 * 30
minsecs3 = minsecs2 * months
minsecs4 = minsecs3 / 60
console.log("This is how long you have been washing your hands in the past ", months, " month(s) : ",minsecs4, " minutes");  