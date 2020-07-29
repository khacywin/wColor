import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var WColor = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  box-sizing: border-box;\n  border-radius: .5em;\n  width: 15em;\n  padding: .5em;\n  ", "\n"], ["\n  position: relative;\n  box-sizing: border-box;\n  border-radius: .5em;\n  width: 15em;\n  padding: .5em;\n  ",
    "\n"])), function (props) { return props.dark ? "\n    background-color: #1a1a1a;\n    color: #fff;\n  " : "\n    background-color: #fff;\n    color: inherit;\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.12);\n  "; });
var WColorHeading = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: .8em;\n  text-indent: .3em;\n  position: relative;\n  margin-bottom: 3px;\n"], ["\n  font-size: .8em;\n  text-indent: .3em;\n  position: relative;\n  margin-bottom: 3px;\n"])));
var WColorAdd = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  width: 1.4em;\n  height: 1.4em;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n  top: 0;\n  box-sizing: border-box;\n\n  &::before{\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    opacity: 0.1;\n    transform: scale(0);\n    transition: transform 0.2s ease-in;\n    top: 0;\n    left: 0;\n    border-radius: 50%;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(1);\n    }\n  }\n\n  &:focus{\n    outline: 0;\n  }\n\n  img{\n    margin: 20%;\n    width: 60%;\n    height: 60%;\n  }\n"], ["\n  display: block;\n  width: 1.4em;\n  height: 1.4em;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n  top: 0;\n  box-sizing: border-box;\n\n  &::before{\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    opacity: 0.1;\n    transform: scale(0);\n    transition: transform 0.2s ease-in;\n    top: 0;\n    left: 0;\n    border-radius: 50%;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(1);\n    }\n  }\n\n  &:focus{\n    outline: 0;\n  }\n\n  img{\n    margin: 20%;\n    width: 60%;\n    height: 60%;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;

const img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e%3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 496 496' style='enable-background:new 0 0 496 496%3b' xml:space='preserve'%3e%3cg%3e %3cg%3e %3cpath d='M488%2c240H256V8c0-4.418-3.582-8-8-8s-8%2c3.582-8%2c8v232H8c-4.418%2c0-8%2c3.582-8%2c8s3.582%2c8%2c8%2c8h232v232c0%2c4.418%2c3.582%2c8%2c8%2c8 s8-3.582%2c8-8V256h232c4.418%2c0%2c8-3.582%2c8-8S492.418%2c240%2c488%2c240z'/%3e %3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e";

function _t (text, language) {
    return text;
}

var WColorContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"])));
var KeyframesActive = keyframes(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  0%{\n    transform: scale(.6);\n  }\n  20%{\n    transform: scale(.8);\n  }\n  100%{\n    transform: scale(1);\n  }\n"], ["\n  0%{\n    transform: scale(.6);\n  }\n  20%{\n    transform: scale(.8);\n  }\n  100%{\n    transform: scale(1);\n  }\n"])));
var CSSActive = css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  &::before{\n    animation: ", " 0.3s linear both;\n  }\n"], ["\n  &::before{\n    animation: ", " 0.3s linear both;\n  }\n"])), KeyframesActive);
var KeyframesItem = keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0%{\n    transform: scale(.2);\n  }\n  70%{\n    transform: scale(.9);\n  }\n  100%{\n    transform: scale(.8);\n  }\n"], ["\n  0%{\n    transform: scale(.2);\n  }\n  70%{\n    transform: scale(.9);\n  }\n  100%{\n    transform: scale(.8);\n  }\n"])));
var WColorItemWrap = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  width: 1.4em;\n  height: 1.4em;\n  margin: .3em;\n  box-sizing: border-box;\n\n  &:hover button{\n    display: initial;\n  }\n  button{\n    position: absolute;\n    display: none;\n    z-index: 100;\n    top: 0;\n    right: 1px;\n    width: 10px;\n    height: 10px;\n    padding: 0;\n    background-color: #fff;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    &:focus{\n      outline: 0;\n    }\n\n\n    img{\n      transform: translate(0, -2px) scale(.9);\n    }\n  }\n\n"], ["\n  position: relative;\n  width: 1.4em;\n  height: 1.4em;\n  margin: .3em;\n  box-sizing: border-box;\n\n  &:hover button{\n    display: initial;\n  }\n  button{\n    position: absolute;\n    display: none;\n    z-index: 100;\n    top: 0;\n    right: 1px;\n    width: 10px;\n    height: 10px;\n    padding: 0;\n    background-color: #fff;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    &:focus{\n      outline: 0;\n    }\n\n\n    img{\n      transform: translate(0, -2px) scale(.9);\n    }\n  }\n\n"])));
var WColorItem = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 0.4em;\n  background-color: inherit;\n\n  &::before{\n    position: absolute;\n    content: '';\n    border-radius: 0.2em;\n    width: 100%;\n    height: 100%;\n    top:0;\n    left:0;\n    transform: scale(0.8);\n    transition: all 0.2s linear;\n    background-color: ", ";\n    z-index: 10;\n    animation: ", " 0.2s linear;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(0.9);\n    }\n  }\n  \n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 0.4em;\n  background-color: inherit;\n\n  &::before{\n    position: absolute;\n    content: '';\n    border-radius: 0.2em;\n    width: 100%;\n    height: 100%;\n    top:0;\n    left:0;\n    transform: scale(0.8);\n    transition: all 0.2s linear;\n    background-color: ", ";\n    z-index: 10;\n    animation: ", " 0.2s linear;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(0.9);\n    }\n  }\n  \n  ",
    "\n"])), function (props) { return props.color; }, KeyframesItem, function (props) { return props.active && CSSActive; });
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6;

var key = 0;
function _key () {
    return 'w-color-' + key + '-';
}

const img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 22.0.1%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32%3b' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%23010101%3bstroke:black%3bstroke-width:2%3bstroke-miterlimit:10%3b%7d%3c/style%3e%3cpolygon class='st0' points='26%2c5.6 16.2%2c15.5 6.3%2c5.6 5.6%2c6.3 15.5%2c16.2 5.6%2c26.1 6.3%2c26.7 16.2%2c16.8 26%2c26.7 26.7%2c26.1 16.8%2c16.2 26.7%2c6.3 '/%3e%3c/svg%3e";

var Container = React.memo(function (props) {
    var _keyWColor = _key();
    return (React.createElement(WColorContainer, null, props.colour.map(function (color, key) { return (React.createElement(WColorItemWrap, { key: _keyWColor + "-" + key },
        React.createElement(WColorItem, { "aria-label": color, color: color, active: color === props.select, onClick: function () { return props.fnSelected(color); }, onDoubleClick: function () { return props.fnRemove(color); } }),
        key > 9 ? (React.createElement("button", { onClick: function () { return props.fnRemove(color); }, type: 'button' },
            React.createElement("img", { src: img$1, alt: 'w-color' }))) : (''))); })));
});

var WColorPicker = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  margin: 0 0 0.4em 0;\n  border-bottom: 1px solid #e9e9e9;\n  *{\n    will-change: all;\n  }\n"], ["\n  margin: 0 0 0.4em 0;\n  border-bottom: 1px solid #e9e9e9;\n  *{\n    will-change: all;\n  }\n"])));
var WColorPickerTemplate = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject([""], [""])));
var WColorPickerBar = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  margin-top: .5em;\n"], ["\n  margin-top: .5em;\n"])));
var WColorPickerControl = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  padding: 0.3em 0;\n  display: flex;\n  align-items: center;\n\n  & > label{\n    flex: 0 0 40px;\n    text-align: center;\n    opacity: 0.6;\n    font-size: 0.8em;\n  }\n\n  & > input {\n    width: calc(100% - 60px);\n    padding: 3px;\n    border: none;\n    border-bottom:1px solid #e9e9e9;\n\n    &:focus{\n      outline: 0;\n    }\n  }\n"], ["\n  padding: 0.3em 0;\n  display: flex;\n  align-items: center;\n\n  & > label{\n    flex: 0 0 40px;\n    text-align: center;\n    opacity: 0.6;\n    font-size: 0.8em;\n  }\n\n  & > input {\n    width: calc(100% - 60px);\n    padding: 3px;\n    border: none;\n    border-bottom:1px solid #e9e9e9;\n\n    &:focus{\n      outline: 0;\n    }\n  }\n"])));
var WColorPickerControlValue = styled.div.attrs(function (props) { return ({
    style: {
        background: props.color,
    },
}); })(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 50%;\n"], ["\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 50%;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$1, templateObject_5$1;

var Template = React.memo(function (props) {
    var refCircleSelect = useRef();
    var refColorPickerBox = useRef();
    var _a = useState([50, 50]), cCircleSelect = _a[0], setCCircleSelect = _a[1];
    var widthBox = 0;
    var heightBox = 0;
    var isMousedown = false;
    useEffect(function () {
        // Event mouse down for circle selected
        refCircleSelect.current.addEventListener('mousedown', function () {
            isMousedown = true;
        });
        // Event mouse up for circle selected
        refCircleSelect.current.addEventListener('mouseup', function () {
            if (isMousedown)
                isMousedown = false;
        });
        // Event mouse move
        refColorPickerBox.current.addEventListener('mousemove', handleMoveCircleSelect);
        // Event mouse leave
        refColorPickerBox.current.addEventListener('mouseleave', function () {
            document.addEventListener('mouseup', function () {
                if (isMousedown)
                    isMousedown = false;
            });
        });
        refColorPickerBox.current.addEventListener('click', function (e) {
            return handleMoveCircleSelect(e, true);
        });
    }, []);
    useEffect(function () {
        /**
         * set value HSL
         */
        var s = props.s, l = props.l;
        widthBox = refColorPickerBox.current.width.baseVal.value;
        heightBox = refColorPickerBox.current.height.baseVal.value;
        // Calculating y value
        var percentY = 100 - (l / (100 - s / 2)) * 100;
        var y = (heightBox / 100) * percentY + 14;
        // Calculating x value
        var x = (widthBox / 100) * s + 14;
        setCCircleSelect([x, y]); // set position of circle select
    }, [props.h, props.s, props.l]);
    function handleMoveCircleSelect(e, isClick) {
        if (isClick === void 0) { isClick = false; }
        // Get offset of mouse event
        if (isMousedown || isClick) {
            var _offset = [e.offsetX, e.offsetY];
            var SPercent = Math.round(((_offset[0] - 15) / widthBox) * 100);
            // Calculating the X and Y Percent Values
            var percentX = 100 - SPercent / 2;
            var percentY = 100 - ((_offset[1] - 15) / heightBox) * 100;
            // Calculating the LPercent
            // LPercent is the the X percentage of the of the Y percentage of the dragger
            var LPercent = Math.floor((percentY / 100) * percentX);
            // setCCircleSelect(_offset);
            props.change(SPercent, LPercent);
        }
    }
    return (React.createElement(WColorPickerTemplate, null,
        React.createElement("svg", { width: '100%', height: '120' },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: 'saturation', x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
                    React.createElement("stop", { offset: '0%', stopColor: '#fff' }),
                    React.createElement("stop", { offset: '100%', stopColor: "hsl(" + props.h + ",100%,50%)" })),
                React.createElement("linearGradient", { id: 'brightness', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
                    React.createElement("stop", { offset: '0%', stopColor: 'rgba(0,0,0,0)' }),
                    React.createElement("stop", { offset: '100%', stopColor: '#000' })),
                React.createElement("pattern", { id: 'pattern_config', width: '100%', height: '100%' },
                    React.createElement("rect", { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#saturation)' }),
                    React.createElement("rect", { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#brightness)' }))),
            React.createElement("rect", { ref: refColorPickerBox, rx: '5', ry: '5', x: '1', y: '1', width: '100%', height: '100%', stroke: '#fff', strokeWidth: '2', fill: 'url(#pattern_config)' }),
            React.createElement("circle", { ref: refCircleSelect, cx: cCircleSelect[0], cy: cCircleSelect[1], r: '5', stroke: 'white', strokeWidth: '2', fill: 'transparent' }))));
});

var Slider = React.memo(function (props) {
    var refSliderSelect = useRef();
    var refSliderBox = useRef();
    var _a = useState(1), cSelect = _a[0], setSelect = _a[1];
    var isMousedownSlider = false;
    var widthBox = 0;
    useEffect(function () {
        // Event mouse down for circle selected
        refSliderSelect.current.addEventListener('mousedown', function () {
            isMousedownSlider = true;
        });
        // Event mouse up for circle selected
        refSliderSelect.current.addEventListener('mouseup', function () {
            if (isMousedownSlider)
                isMousedownSlider = false;
        });
        // Event mouse move
        refSliderBox.current.addEventListener('mousemove', handleMoveCircleSelect);
        // Event mouse leave
        refSliderBox.current.addEventListener('mouseleave', function (event) {
            document.addEventListener('mouseup', function () {
                if (isMousedownSlider)
                    isMousedownSlider = false;
            });
        });
        refSliderBox.current.addEventListener('click', function (e) {
            return handleMoveCircleSelect(e, true);
        });
    }, []);
    useEffect(function () {
        widthBox = refSliderBox.current.width.baseVal.value;
        setSelect(convertHueToPosition(props.h));
    }, [props.h]);
    function convertPositionToHue(pos) {
        var percent = (pos / widthBox) * 100;
        // Calculating the color
        // Max number for hue colors is 359, I find the percentage of this, from the percent variable
        // I take it away from the max number because the slider should work backwards
        return Math.round(359 - (359 / 100) * percent);
    }
    function convertHueToPosition(hue) {
        var percentHue = 100 - (hue / 359) * 100;
        var pos = (widthBox / 100) * percentHue - 5;
        return pos;
    }
    function handleMoveCircleSelect(e, isClick) {
        if (isClick === void 0) { isClick = false; }
        var _c = e.offsetX;
        if (isClick || isMousedownSlider) {
            props.change(convertPositionToHue(_c));
            // setSelect(_c);
        }
    }
    return (React.createElement(WColorPickerBar, null,
        React.createElement("svg", { width: '100%', height: '26' },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: 'hue', x1: '100%', y1: '0%', x2: '0%', y2: '0%' },
                    React.createElement("stop", { offset: '0%', stopColor: '#f00' }),
                    React.createElement("stop", { offset: '16.666%', stopColor: '#ff0' }),
                    React.createElement("stop", { offset: '33.333%', stopColor: '#0f0' }),
                    React.createElement("stop", { offset: '50%', stopColor: '#0ff' }),
                    React.createElement("stop", { offset: '66.666%', stopColor: '#00f' }),
                    React.createElement("stop", { offset: '83.333%', stopColor: '#f0f' }),
                    React.createElement("stop", { offset: '100%', stopColor: '#f00' }))),
            React.createElement("rect", { ref: refSliderBox, rx: '5', ry: '5', x: '0', y: '1', width: '100%', height: '20', stroke: '#fff', strokeWidth: '2', fill: 'url(#hue)' }),
            React.createElement("rect", { ref: refSliderSelect, width: '5', height: '22', stroke: '#000', strokeWidth: '2', fill: 'transparent', rx: '5', ry: '5', x: cSelect, y: '0' }))));
});

/*
 * Color Value Converter
 */
// Convert HSLA to RGBA
var HSLAToRGBA = function (h, s, l, a, toHex) {
    s /= 100;
    l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    if (toHex === true) {
        return RGBAToHexA(r, g, b, a);
    }
    else {
        return {
            r: r,
            g: g,
            b: b,
            a: a
        };
    }
};
// Convert RGBA to HSLA
var RGBAToHSLA = function (r, g, b, a) {
    r /= 255;
    g /= 255;
    b /= 255;
    a = a == undefined ? 1 : a;
    var cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return {
        h: h,
        s: s,
        l: l,
        a: a
    };
};
// Convert RGBA to HexA
var RGBAToHexA = function (r, g, b, a) {
    var _r = r.toString(16);
    var _g = g.toString(16);
    var _b = b.toString(16);
    var _a = Math.round(a * 255).toString(16);
    if (_r.length == 1)
        _r = '0' + _r;
    if (_g.length == 1)
        _g = '0' + _g;
    if (_b.length == 1)
        _b = '0' + _b;
    if (_a.length == 1)
        _a = '0' + _a;
    if (_a == 'ff') {
        return '#' + _r + _g + _b;
    }
    else {
        return '#' + r + g + -b + _a;
    }
};
// Convert HexA to RGBA
var hexAToRGBA = function (h, toHSL) {
    if (h.length == 7)
        h += 'ff';
    else if (h.length == 4)
        h += h.substring(1, 4) + 'ff';
    var r = 0, g = 0, b = 0, a = 1;
    if (h.length == 5) {
        r = '0x' + h[1] + h[1];
        g = '0x' + h[2] + h[2];
        b = '0x' + h[3] + h[3];
        a = '0x' + h[4] + h[4];
    }
    else if (h.length == 9) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
        a = '0x' + h[7] + h[8];
    }
    a = +(a / 255).toFixed(3);
    if (toHSL === true) {
        return RGBAToHSLA(+r, +g, +b, a);
    }
    else {
        return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + a + ')';
    }
};

var Control = React.memo(function (props) {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    var refInput = useRef();
    useEffect(function () {
        var h = props.h, s = props.s, l = props.l;
        if (!focus) {
            setValue(HSLAToRGBA(h, s, l, 1, true));
        }
    }, [props.h, props.s, props.l]);
    function handleChange(e) {
        var _value = e.target.value;
        var hsl = hexAToRGBA(_value, true);
        if (_value.match(/^(#[0-9a-fA-F]{6})|(#[0-9a-fA-F]{3})$/)) {
            props.change(hsl);
            refInput.current.style.borderColor = '#e9e9e9';
        }
        else {
            refInput.current.style.borderColor = 'red';
        }
        setValue(_value);
    }
    return (React.createElement(WColorPickerControl, null,
        React.createElement(WColorPickerControlValue, { color: value }),
        React.createElement("label", { htmlFor: 'wColorPickerValueHEX' }, " HEX "),
        React.createElement("input", { ref: refInput, type: 'text', id: 'wColorPickerValueHEX', value: value, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, onChange: handleChange })));
});

var ColorPicker = React.memo(function (props) {
    var _a = useState(0), hue = _a[0], setHue = _a[1];
    var _b = useState(12), saturation = _b[0], setSaturation = _b[1];
    var _c = useState(47), lightness = _c[0], setLightness = _c[1];
    useEffect(function () {
        props.hex(HSLAToRGBA(hue, saturation, lightness, 1, true)); // Return color for parent component
    }, [hue, saturation, lightness]);
    var changeColorSL = function (s, l) {
        setSaturation(s);
        setLightness(l);
    };
    var changeColorHex = function (_hsl) {
        setHue(_hsl.h);
        setSaturation(_hsl.s);
        setLightness(_hsl.l);
    };
    var changeColorHue = function (h) {
        setHue(h);
    };
    return (React.createElement(WColorPicker, null,
        React.createElement(WColorHeading, null, _t('Color picker')),
        React.createElement(Template, { h: hue, s: saturation, l: lightness, change: changeColorSL }),
        React.createElement(Slider, { h: hue, change: changeColorHue }),
        React.createElement(Control, { h: hue, s: saturation, l: lightness, change: changeColorHex })));
});

var Selector = React.memo(function (props) {
    var _a = useState('#866969'), hex = _a[0], setHex = _a[1];
    var template = [
        '#54478c',
        '#2c699a',
        '#048ba8',
        '#0db39e',
        '#16db93',
        '#83e377',
        '#b9e769',
        '#efea5a',
        '#f1c453',
        '#f29e4c',
    ];
    var _b = useState([]), colour = _b[0], setColour = _b[1];
    var _c = useState(props.select || '#54478c'), value = _c[0], setValue = _c[1];
    useEffect(function () {
        var _colour = [];
        if (localStorage.getItem('colour')) {
            _colour = _colour.concat(localStorage.getItem('colour').split(','));
        }
        setColour(_colour);
    }, []);
    useEffect(function () {
        props.fnSelected(value);
    }, [value]);
    function addToLocalStorage(color) {
        if (localStorage.getItem('colour')) {
            var _colour = localStorage.getItem('colour');
            localStorage.setItem('colour', _colour.concat(',', color));
        }
        else {
            localStorage.setItem('colour', color);
        }
    }
    function addColour(color) {
        setValue(color);
        if (template.indexOf(color) < 0 && colour.indexOf(color) < 0) {
            var _colour = __spreadArrays(colour, [color]);
            setColour(_colour);
            addToLocalStorage(color);
        }
    }
    function removeInLocalStorage(color) {
        var _colour = localStorage.getItem('colour');
        _colour = _colour.replace(color, '').replace(/(,,)/, ',');
        _colour = _colour[0] === ',' ? _colour.slice(1, _colour.length) : _colour;
        _colour =
            _colour[_colour.length - 1] === ','
                ? _colour.slice(0, _colour.length - 1)
                : _colour;
        localStorage.setItem('colour', _colour);
    }
    function removeColour(color) {
        var _colour = __spreadArrays(colour).filter(function (item) { return item !== color; });
        setColour(_colour);
        setValue('#54478c');
        removeInLocalStorage(color);
    }
    function selectColor(color) {
        setValue(color);
        props.fnSelected(color);
    }
    return (React.createElement(WColor, { dark: !!props.dark },
        React.createElement(ColorPicker, { hex: function (color) { return setHex(color); } }),
        React.createElement(WColorHeading, null,
            _t('Recent'),
            ' ',
            React.createElement(WColorAdd, { type: 'button', "aria-label": _t('Add'), onClick: function () { return addColour(hex); } },
                React.createElement("img", { src: img, alt: 'w-color' }))),
        React.createElement(Container, { colour: __spreadArrays(template, colour), select: value, fnSelected: selectColor, fnRemove: removeColour })));
});

var MainWrap = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var MainValue = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  cursor: pointer;\n  border-radius: 5px;\n  ", "\n"], ["\n  cursor: pointer;\n  border-radius: 5px;\n  ",
    "\n"])), function (props) { return "\n    width: " + props.width + "px;\n    height: " + props.height + "px;\n    background-color: " + props.color + ";\n  "; });
var MainSelector = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  position: absolute;\n  transition: all 0.1s linear;\n  z-index: ", ";\n  opacity: ", ";\n  transform: ", ";\n"], ["\n  position: absolute;\n  transition: all 0.1s linear;\n  z-index: ", ";\n  opacity: ", ";\n  transform: ", ";\n"])), function (props) { return (props.show ? '999' : '-1'); }, function (props) { return (props.show ? '1' : '0'); }, function (props) { return props.show ? "translate(0, 5px)" : "translate(0, -5px)"; });
var App = React.memo(function (props) {
    var _a = useState(props.defaultValue || '#d1d5d1'), value = _a[0], setValue = _a[1];
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var refMenu = useRef();
    /**
     */
    function hiddenDropdownWhenClick() {
        setShow(false);
        document.removeEventListener('click', handleClick);
    }
    /**
     * @param e
     */
    function handleClick(e) {
        var path = e.path;
        var show = false;
        path.forEach(function (item) {
            if (refMenu.current.childNodes) {
                refMenu.current.childNodes.forEach(function (node) {
                    if (node === item)
                        show = true;
                });
            }
        });
        if (!show)
            hiddenDropdownWhenClick();
    }
    useEffect(function () {
        /**
         * TODO
         * Hidden menu when you click in out of menu
         */
        if (show) {
            document.addEventListener('click', handleClick);
        }
    });
    function handleChange(color) {
        setValue(color);
        props.onChange(color);
    }
    return (React.createElement(MainWrap, null,
        React.createElement(MainValue, { color: value, height: props.height || 30, width: props.width || 30, onClick: function () { return setShow(!show); } }),
        React.createElement(MainSelector, { ref: refMenu, show: show },
            React.createElement(Selector, { fnSelected: handleChange }))));
});
var templateObject_1$3, templateObject_2$3, templateObject_3$3;

export default App;
//# sourceMappingURL=index.es.js.map
