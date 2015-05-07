
var app = {
    
    // Application Constructor
    initialize: function() {  /*alert ("init");*/
        this.bindEvents();
        
        //Kev add handlebars stuff
        this.hb_template = Handlebars.compile($("#hb_template").html());

        
    },
    
    
    // Bind Event Listeners - Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {  /*alert ("bindEvents");*/
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //START - PG01 Custom Code
        $('#btn_gotopage_createproduct').on('click', app.display_page_00);
        $('#btn_gotopage_searchproduct').on('click', app.display_page_01);
        $('#btn_gotopage_userprofile').on('click', app.display_page_02);
        $('#btn_gotopage_exit').on('click', app.display_page_03);

        
        $(document).on('pagebeforeshow', /*'#page_00',*/ function(prevPage){      
            alert("pagebeforeshow.. prev page was " + prevPage.prevPage);
            
        });
        
        
        $(document).on('pageinit', /*'#page_00',*/ function(event){      
            alert("pageinit");
            
        });
        
        
        
              
        //END - PG01 Custom Code
        
    },
    
    display_page_00: function() {
        $.mobile.changePage('#page_01', {transition: "slide", changeHash: false});
    },
    display_page_01: function() {
        $.mobile.changePage('#page_02', {transition: "slide", changeHash: false});
    },
    display_page_02: function() {
        $.mobile.changePage('#page_03', {transition: "slide", changeHash: false});
    },
    display_page_03: function() {
        $.mobile.changePage('#page_04', {transition: "slide", changeHash: false});
    },
    
   
    
    
    
};
