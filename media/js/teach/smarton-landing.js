/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    function smartonShapes() {
        var speed = 450;
        var easing = mina.backout;

        [].slice.call ($('.smarton-topics > .topic')).forEach(function(el) {
            var shape = new Snap(el.querySelector('svg.shape'));
            var path = shape.select('path');
            var pathConfig = {
                    from : path.attr('d'),
                    to : el.getAttribute('data-path-hover')
                };

            el.addEventListener('mouseenter', function() {
                path.animate({'path' : pathConfig.to}, speed, easing);
                $(this).addClass('hover');
            });

            el.querySelector('a').addEventListener('focus', function() {
                path.animate({'path' : pathConfig.to}, speed, easing);
                $(this).parents('.topic').addClass('hover');
            });

            el.addEventListener('mouseleave', function() {
                path.animate({'path' : pathConfig.from}, speed, easing);
                $(this).removeClass('hover');
            });

            el.querySelector('a').addEventListener('blur', function() {
                path.animate({'path' : pathConfig.from}, speed, easing);
                $(this).parents('.topic').removeClass('hover');
            });
        });
    }

    smartonShapes();

})(window.jQuery);
