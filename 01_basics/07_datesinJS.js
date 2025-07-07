// Dates

let myDate = new Date(); // type - object

console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date(2023, 0, 23, 5, 3) // returns 1/23/2023, 5:03:00 AM - NOTE months are 0 indexed.

myCreatedDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "india"
});

// toLocaleString is an object, we can add parameters to it.

// let myDate = new Date("01-14-2020") in String format

// timestamps

let now = Date.now();

// to extract timestamp from any date, we do myDate.getTime() - in milliseconds

// to convert the date in seconds, we do Math.floor(myDate.getTime()/1000)

// we also have getMonth(), getDay() 