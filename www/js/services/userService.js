angular.module('userModule',[])
    .constant("loginApi","http://ts.bimo.tv/info/login")
    .factory('userService', function ($q,loginApi,$http) {
        function login(user_name,user_password){
            var delay = $q.defer();
            var url=loginApi;
            //alert(url);
            var params={
                "j_password":user_password,
                "j_username":user_name
            }
            $http.post(url,params).then(function(res){
                var data=res.data;
                //alert(angular.toJson(data));
                //if (data.retcode==0){
                //    delay.resolve(data.retdata);
                //} else{
                //    delay.reject(data.retmsg);
                //}
            },function(error){
                //delay.reject({info: '获取登录信息失败,请检查网络'});
            });
            return delay.promise;
        }
        return {
            login:login
        }
    });