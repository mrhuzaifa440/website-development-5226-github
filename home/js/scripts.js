/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$.each($('.ct.gx-4.gx-lg-5.align-items-start.my-5.pb-5').children(), function( index, value ) {
    if(index<3)
        $(value).addClass("col-md-4");
});
