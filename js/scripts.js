//IIFE wrapper keeps code from accessing the gloabal state
function newItem(){

    //code for adding new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    //how to browswer notifies the user not to leave the input empty
    if (inputValue === '') {
        alert("You must add something!");
    } else {
        $('#list').append(li);
    }
    
    //how items are crossed out from the list
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //how items are deleted from the list
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

        crossOutButton.on("click", deleteListItem);
        function deleteListItem(){
            li.addClass("delete")
        }
    $('#list').sortable();
    //
}
