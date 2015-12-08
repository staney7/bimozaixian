angular.module('userModule')
        .constant('authAPI', 'http://rec.ustc.edu.cn/api/auth/')
        .factory('userService', function ($q, $http, authAPI) {
            // user Service
            return {
                getAuthUrl: function () {
                    var delay = $q.defer();
                    $http.get(authAPI+'getAuthUrl').then(function (res) {
                        var rs = res.data;
                        if (rs.state) {
                            delay.resolve(rs.data);
                        } else {
                            delay.reject({info: rs.message});
                        }
                    }, function (errinfo) {
                        delay.reject({info: '获取auth地址失败'});
                    });
                    return delay.promise;
                },
                checkAuth: function () {
                    var delay = $q.defer();
                    $http.get(authAPI+'checkAuth').then(function (res) {
                        var rs = res.data;
                        if (rs.state) {
                            delay.resolve(rs.message);
                        } else {
                            delay.reject({info: rs.message});
                        }
                    }, function (errinfo) {
                        delay.reject({info: '网络不通'});
                    });
                    return delay.promise;
                },
                getAuthToken: function (url) {
                    var delay = $q.defer();
                    $http.get(url).then(function (res) {
                        var html = res.data;                        
                        var match = html.match(/name="_token" type="hidden" value="([A-z0-9]+)"/);
                        if(match){
                            delay.resolve(match[1]);
                        }else{
                            delay.reject({info: '获取token失败'});
                        }
                    }, function (errinfo) {
                        delay.reject({info: '获取token失败'});
                    });
                    return delay.promise;
                },
                auth: function(url, params){
                    var delay = $q.defer();
                    $http.post(url, params).then(function (res) {
                        var rs = res.data;
                        if(rs.match(/DOCTYPE html/)){
                            delay.reject({info: '用户名或密码错误'});
                        }else{
                            delay.resolve(rs);
                        }                        
                    }, function (errinfo) {
                        delay.reject({info: '验证失败'});
                    });
                    return delay.promise;
                }
            };
        });