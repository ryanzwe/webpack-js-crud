import $ from 'jQuery';
export class HelloWorldServiceClient {
    baseUrl = "https://localhost:7079/WeatherForecast/";

    // Return staff from the api endpoint and return the new user object to the callback
    ReturnStaff(callback) {
        let staffEndpoint = 'DisplayStaff';
        return $.get(this.baseUrl + staffEndpoint, {}, callback);
    }

    // Create a new user and supply sucess or failure info to the callback
    CreateUser(user, successCallback, failCallback) {
        let createEndpoint = 'CreateStudent';
        console.log(JSON.stringify(user));
        $.ajax({
            url: this.baseUrl + createEndpoint,
            type: 'POST',
            data: JSON.stringify(user),
            contentType: 'application/json',
            dataType: "json",
            success: function (data) {
                successCallback(data);
            },
            error: function(request, status, error){
                failCallback(request,status,error);
            }
        });
        //return $.post(this.baseUrl + createEndpoint, JSON.stringify(user), callback,"json");
    }
}