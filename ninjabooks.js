someArray = ["Covert Ninja-ness", "Tactics of a Ninja", "Pink Ninja", "What Ninja's wear", "Ninjas vs. Pirates"];

var showList = function() {
    $('#output').html('');
    for (var i = 0; i < someArray.length; i++) {
        $('#output').append('<li class="rotateObj">' + someArray[i] + '</li>');
    }
}

var showSortedList = function() {
    someArray.sort();
    showList();
}

$(document).ready(showList);