'use strict';

var css_dark = [
    './css/main-dark.css',
    './css/tabs-dark/landing-dark.css',
    './css/tabs-dark/setup-dark.css',
    './css/tabs-dark/setup_osd-dark.css',
    './css/tabs-dark/help-dark.css',
    './css/tabs-dark/ports-dark.css',
    './css/tabs-dark/configuration-dark.css',
    './css/tabs-dark/pid_tuning-dark.css',
    './css/tabs-dark/receiver-dark.css',
    './css/tabs-dark/servos-dark.css',
    './css/tabs-dark/gps-dark.css',
    './css/tabs-dark/motors-dark.css',
    './css/tabs-dark/led_strip-dark.css',
    './css/tabs-dark/sensors-dark.css',
    './css/tabs-dark/cli-dark.css',
    './css/tabs-dark/logging-dark.css',
    './css/tabs-dark/onboard_logging-dark.css',
    './css/tabs-dark/firmware_flasher-dark.css',
    './css/tabs-dark/adjustments-dark.css',
    './css/tabs-dark/auxiliary-dark.css',
    './css/tabs-dark/failsafe-dark.css',
    './css/tabs-dark/osd-dark.css',
    './css/tabs-dark/power-dark.css',
    './css/tabs-dark/transponder-dark.css',
    './js/libraries/jbox/jBox-dark.css',
]

var availableColors = [
    'gray',
    'yellow',
]

var DarkTheme = {
    configEnabled: false,
    accentColor: 'yellow',
};

DarkTheme.getColorsAvailable = function() {
    return availableColors;
};

DarkTheme.setConfig = function(result) {
    if (this.configEnabled != result) {
        this.configEnabled = result;

        if (this.configEnabled) {
            this.applyDark();
            this.applyAccentColor(this.accentColor);
        } else {
            this.applyNormal();
            this.applyAccentColor("yellow");
        }
    }
};

DarkTheme.setAccentColor = function(color) {
    this.accentColor = color;
    if (this.configEnabled) {
        this.applyAccentColor(color);
    }
};

DarkTheme.applyDark = function() {
    for (var i = 0; i < css_dark.length; i++) {
        $('link[href="' + css_dark[i] + '"]').prop('disabled', false);
    }
};

DarkTheme.applyNormal = function() {
    for (var i = 0; i < css_dark.length; i++) {
        $('link[href="' + css_dark[i] + '"]').prop('disabled', true);
    }
};

DarkTheme.applyAccentColor = function(color) {
    switch (color) {
        case 'gray':
            $('head').append('<link href="./css/accent-colors/color-grey.css" rel="stylesheet" />')
            break;
        case 'yellow':
            $('link[href="./css/accent-colors/color-grey.css"]').remove();
            break
        default:
            break;
    }
};