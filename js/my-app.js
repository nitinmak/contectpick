// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
   
})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');

     var options = new ContactFindOptions();
    options.filter="";          // empty search string returns all contacts
    options.multiple=true;      // return multiple results
    filter = ["displayName"];   // return contact.displayName field

    // find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);

    }
})
var names = [];

// onSuccess: Get a snapshot of the current contacts
//
function onSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        if (contacts[i].displayName) {  // many contacts don't have displayName
            names.push(contacts[i].displayName);
        }
    }
    alert('contacts loaded');
}

    //
    function onError(contactError) {
        alert('onError!');
    }

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})