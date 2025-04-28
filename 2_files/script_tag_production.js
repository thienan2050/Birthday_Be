﻿(function () {
    if (!window || window.HaravanComboPromotion) return;

    var appUrl = 'https://combo-omni.haravan.com';

    function _call(method, path, data, successcallback, errorcallback, alwayscallback) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, appUrl + path);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (Object.prototype.toString.call(successcallback) === '[object Function]') successcallback(JSON.parse(xhr.responseText));
            }
            else {
                if (Object.prototype.toString.call(errorcallback) === '[object Function]') errorcallback();
            }
        };
        xhr.onloadend = function () {
            if (Object.prototype.toString.call(alwayscallback) === '[object Function]') alwayscallback();
        };
        xhr.send(data);
    };

    function GetListRecommendeds(product_id, successcallback, errorcallback, alwayscallback, page = 1, limit = 20) {
        if (Object.prototype.toString.call(product_id) === '[object Number]')
            _call('GET', '/js/list_recommendeds?product_id=' + product_id + '&page=' + page + '&limit=' + limit, {}, successcallback, errorcallback, alwayscallback);
    };

    window.HaravanComboPromotion = {
        GetListRecommendeds: GetListRecommendeds
    };

    if (Object.prototype.toString.call(window.HaravanPromotionAsyncInit) === '[object Function]')
        window.HaravanPromotionAsyncInit();
}());