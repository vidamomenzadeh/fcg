export default function* handleResponse(response, successCallBack, errorCallback) {
    const {status, data} = response;
    //if(status >= 200  && status <= 300){
        yield successCallBack(data);
   // }
   // else{
    //    const error = response.data;
    //    yield errorCallback(error);
   // }
}
