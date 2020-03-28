//printDate function: date and time logic for top part
setInterval(printDate, 1000)
function printDate() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#currentDay").text(now)
}

//timeCheck function: hourly check and class coloration
setTimeout(timeCheck, 1)
setInterval(timeCheck, 10000)
function timeCheck() {
    var time = moment().format('HHmm');
    console.log(time)
    //9am
    if (time >= 900 && time <= 959) {
        $("#9am").removeClass("future past");
        $("#9am").addClass("present");
    }
    //10am
    if (time >= 1000 && time <= 1059) {
        $("#9am").removeClass("present future");
        $("#9am").addClass("past");
        $("#10am").removeClass("past future");
        $("#10am").addClass("present");
    }
    //11am
    if (time >= 1100 && time <= 1159) {
        $("#9am").removeClass("present future");
        $("#9am").addClass("past");
        $("#10am").removeClass("present future");
        $("#10am").addClass("past");
        $("#11am").removeClass("past future");
        $("#11am").addClass("present");
    }
    //12pm
    if (time >= 1200 && time <= 1259) {
        $("#9am").removeClass("present future");
        $("#9am").addClass("past");
        $("#10am").removeClass("present future");
        $("#10am").addClass("past");
        $("#11am").removeClass("present future");
        $("#11am").addClass("past");
        $("#12pm").removeClass("past future");
        $("#12pm").addClass("present");
    }
    //1pm
    if (time >= 1300 && time <= 1359) {
        $("#9am").removeClass("present future");
        $("#9am").addClass("past");
        $("#10am").removeClass("present future");
        $("#10am").addClass("past");
        $("#11am").removeClass("present future");
        $("#11am").addClass("past");
        $("#12pm").removeClass("present future");
        $("#12pm").addClass("past");
        $("#1pm").removeClass("past future");
        $("#1pm").addClass("present");
    }
    //2pm
    if (time >= 1400 && time <= 1459) {
        $("#9am").removeClass("present future");
        $("#9am").addClass("past");
        $("#10am").removeClass("present future");
        $("#10am").addClass("past");
        $("#11am").removeClass("present future");
        $("#11am").addClass("past");
        $("#12pm").removeClass("present future");
        $("#12pm").addClass("past");
        $("#1pm").removeClass("present future");
        $("#1pm").addClass("past");
        $("#2pm").removeClass("past future");
        $("#2pm").addClass("present");
    }
    //3pm
    if (time >= 1500 && time <= 1559) {
        $("#9am").removeClass("future");
        $("#9am").addClass("past");
        $("#10am").removeClass("future");
        $("#10am").addClass("past");
        $("#11am").removeClass("future");
        $("#11am").addClass("past");
        $("#12pm").removeClass("future");
        $("#12pm").addClass("past");
        $("#1pm").removeClass("future");
        $("#1pm").addClass("past");
        $("#2pm").removeClass("future");
        $("#2pm").addClass("past");
        $("#3pm").removeClass("future past");
        $("#3pm").addClass("present");
    }
    //4pm
    if (time >= 1600 && time <= 1659) {
        $("#9am").removeClass("present future");
        $("#9am").addClass("past");
        $("#10am").removeClass("present future");
        $("#10am").addClass("past");
        $("#11am").removeClass("present future");
        $("#11am").addClass("past");
        $("#12pm").removeClass("present future");
        $("#12pm").addClass("past");
        $("#1pm").removeClass("present future");
        $("#1pm").addClass("past");
        $("#2pm").removeClass("present future");
        $("#2pm").addClass("past");
        $("#3pm").removeClass("present future");
        $("#3pm").addClass("past");
        $("#4pm").removeClass("past future");
        $("#4pm").addClass("present")
    }
    //5pm
    if (time >= 1700 && time <= 1759) {
        $("#9am").removeClass("present future");
        $("#9am").addClass("past");
        $("#10am").removeClass("present future");
        $("#10am").addClass("past");
        $("#11am").removeClass("present future");
        $("#11am").addClass("past");
        $("#12pm").removeClass("present future");
        $("#12pm").addClass("past");
        $("#1pm").removeClass("present future");
        $("#1pm").addClass("past");
        $("#2pm").removeClass("present future");
        $("#2pm").addClass("past");
        $("#3pm").removeClass("present future");
        $("#3pm").addClass("past");
        $("#4pm").removeClass("present future");
        $("#4pm").addClass("past")
        $("5pm").removeClass("past future");
        $("5pm").addClass("present")
    }
}
