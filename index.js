var gps = require("gps-tracking");
 
var options = {
    'debug'                 : true,
    'port'                  : 21000,
    'device_adapter'        : "GT06"
}
 
var server = gps.server(options,function(device,connection){
 
    device.on("login_request",function(device_id,msg_parts){
 
        // Some devices sends a login request before transmitting their position
        // Do some stuff before authenticate the device... 
        
        // Accept the login request. You can set false to reject the device.

        this.login_authorized(true); 
 
    });
 
 
    //PING -> When the gps sends their position  
    device.on("ping",function(data){
 
        //After the ping is received, but before the data is saved
        console.log(data);
        return data;
 
    });

    //ALARM -> When the gps sends an alarm  
    device.on("alarm",function(data){
 
        //After the ping is received, but before the data is saved
        console.log('alarm', data);
        return data;
 
    });
 
});

server.setDebug(true);