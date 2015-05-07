/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {  alert ("init");
        this.bindEvents();
        
        //Kev add handlebars stuff
        this.page_main = Handlebars.compile($("#page_main").html());
        //this.screen2 = Handlebars.compile($("#scr2").html());
        
    },
    
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {  alert ("bindEvents");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        alert('onDeviceReady!!!');
        
        //START - PG01 Custom Code
        alert("gonna display main page");
        $('#canvas').html(app.page_main());
        //$('#canvas').html("hello");
        alert("done displaying main page");
        $('#button_createproduct').on('click', app.displaypage_createproduct);
        //END - PG01 Custom Code
        
        
    },
    // Update DOM on a Received Event - Kev: id contains teh value pass
    receivedEvent: function(id) {

        //
        //console.log('Received Event: ' + id);
    },
    
    displaypage_createproduct: function () {
        alert ("You are opening the create product page");
    }
    
    
    
    
};
