// Enable Time Duration?
// Change Icon???
// IconTextBackgroundColor
// Enable Tab+Screen
chrome.storage.sync.get(null, function(items) {
    if (items['enableTabCaptureAPI']) {
        $("#record_type").val("tab");
    } else {
        chrome.storage.sync.set({
            enableTabCaptureAPI: false
        }, function() {
            $("#record_type").val("desktop");
        });
    }
    if (items['nowRecording']=="yes") {
        $("#start_record").text("Stop Recording");
    } else {
        chrome.storage.sync.set({
            nowRecording: 'no'
        }, function() {
            $("#start_record").text("Start Recording");
        });
    }
    if(items['webcam']){
        $( "#webcam_check" ).prop( "checked", true );
    }else{
        $( "#webcam_check" ).prop( "checked", false );
        chrome.storage.sync.set({
            webcam: false
        }, function() {
        });
    }
    if(items['enableMicrophone']){
        $( "#microphone_check" ).prop( "checked", true );
    }else{
        $( "#microphone_check" ).prop( "checked", false );
        chrome.storage.sync.set({
            enableMicrophone: false
        }, function() {
        });
    }
});
$("#record_type").on('change', function (e) {
    var optionSelected = $(this).find("option:selected");
    var valueSelected  = optionSelected.val();
    var textSelected   = optionSelected.text();
    var status = false;
    if(valueSelected=="tab") status=true;
    chrome.storage.sync.set({
        enableTabCaptureAPI: status
    }, function() {
    });
});
$("#microphone_check").change(function() {
    if(this.checked) {
        chrome.storage.sync.set({
            enableMicrophone: true
        }, function() {
        });
    }else{
        chrome.storage.sync.set({
            enableMicrophone: false
        }, function() {
        });
    }
});
$("#webcam_check").change(function() {
    if(this.checked) {
        chrome.storage.sync.set({
            webcam: true
        }, function() {
        });
    }else{
        chrome.storage.sync.set({
            webcam: false
        }, function() {
        });
    }
});
$("#start_record").click(function(){
    if($(this).text()=="Start Recording"){
        chrome.runtime.sendMessage({action: "start"}, function(response) {
          if(response){
            chrome.storage.sync.set({
                nowRecording: 'yes'
            }, function() {
                $("#start_record").text("Stop Recording");
            });
          }
        });
    }else if($(this).text()=="Stop Recording"){
        chrome.runtime.sendMessage({action: "stop"}, function(response) {
          if(response){
            chrome.storage.sync.set({
                nowRecording: 'no'
            }, function() {
                $("#start_record").text("Start Recording");
            });
          }
        });
    }
});


