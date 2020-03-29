//printDate function: date and time logic for top part
setInterval(printDate, 1000)
function printDate() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#currentDay").text(now)
}

//timeCheck function: hourly check and class coloration
setTimeout(timeCheck, 1)
setInterval(timeCheck, 1000)
function timeCheck() {
    var time = moment().format('HHmm');
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

//task collection
//printTask function: prints task
setTimeout(printTask, 1)
function printTask() {
    $("#9amText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#10amText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#11amText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#12pmText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#1pmText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#2pmText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#3pmText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#4pmText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
    $("#5pmText").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    })
}

//save button functions
//9am button
$("#9amButton").on('click', function () {
    $("#9amText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//10 am button
$("#10amButton").on('click', function () {
    $("#10amText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//11 am button
$("#11amButton").on('click', function () {
    $("#11amText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//12pm button
$("#12pmButton").on('click', function () {
    $("#12pmText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//1pm button
$("#1pmButton").on('click', function () {
    $("#1pmText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//2pm button
$("#2pmButton").on('click', function () {
    $("#2pmText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//3pm button
$("#3pmButton").on('click', function () {
    $("#3pmText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//4pm button
$("#4pmButton").on('click', function () {
    $("#4pmText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})

//5pm button
$("#5pmButton").on('click', function () {
    $("#5pmText").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
})