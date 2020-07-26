import React, { useState, useEffect, useRef } from 'react';
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

var WColor = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  border-radius: .5em;\n  width: 15em;\n  padding: .5em;\n  ", "\n"], ["\n  box-sizing: border-box;\n  border-radius: .5em;\n  width: 15em;\n  padding: .5em;\n  ",
    "\n"])), function (props) { return props.dark ? "\n    background-color: #1a1a1a;\n    color: #fff;\n  " : "\n    background-color: #fff;\n    color: inherit;\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.12);\n  "; });
var WColorHeading = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: .8em;\n  text-indent: .3em;\n"], ["\n  font-size: .8em;\n  text-indent: .3em;\n"])));
var WColorContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"])));
var KeyframesActive = keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0%{\n    transform: scale(.6);\n  }\n  20%{\n    transform: scale(.8);\n  }\n  100%{\n    transform: scale(1);\n  }\n"], ["\n  0%{\n    transform: scale(.6);\n  }\n  20%{\n    transform: scale(.8);\n  }\n  100%{\n    transform: scale(1);\n  }\n"])));
var CSSActive = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &::before{\n    animation: ", " 0.3s linear both;\n  }\n"], ["\n  &::before{\n    animation: ", " 0.3s linear both;\n  }\n"])), KeyframesActive);
var KeyframesItem = keyframes(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  0%{\n    transform: scale(.2);\n  }\n  70%{\n    transform: scale(.9);\n  }\n  100%{\n    transform: scale(.8);\n  }\n"], ["\n  0%{\n    transform: scale(.2);\n  }\n  70%{\n    transform: scale(.9);\n  }\n  100%{\n    transform: scale(.8);\n  }\n"])));
var WColorItemWrap = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n  width: 1.4em;\n  height: 1.4em;\n  margin: .3em;\n  box-sizing: border-box;\n\n  &:hover button{\n    display: initial;\n  }\n  button{\n    position: absolute;\n    display: none;\n    z-index: 100;\n    top: 0;\n    right: 1px;\n    width: 10px;\n    height: 10px;\n    padding: 0;\n    background-color: #fff;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    &:focus{\n      outline: 0;\n    }\n\n\n    img{\n      transform: translate(0, -2px) scale(.9);\n    }\n  }\n\n"], ["\n  position: relative;\n  width: 1.4em;\n  height: 1.4em;\n  margin: .3em;\n  box-sizing: border-box;\n\n  &:hover button{\n    display: initial;\n  }\n  button{\n    position: absolute;\n    display: none;\n    z-index: 100;\n    top: 0;\n    right: 1px;\n    width: 10px;\n    height: 10px;\n    padding: 0;\n    background-color: #fff;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    &:focus{\n      outline: 0;\n    }\n\n\n    img{\n      transform: translate(0, -2px) scale(.9);\n    }\n  }\n\n"])));
var WColorItem = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 0.4em;\n  background-color: inherit;\n\n  &::before{\n    position: absolute;\n    content: '';\n    border-radius: 0.2em;\n    width: 100%;\n    height: 100%;\n    top:0;\n    left:0;\n    transform: scale(0.8);\n    transition: all 0.2s linear;\n    background-color: ", ";\n    z-index: 10;\n    animation: ", " 0.2s linear;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(0.9);\n    }\n  }\n  \n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 0.4em;\n  background-color: inherit;\n\n  &::before{\n    position: absolute;\n    content: '';\n    border-radius: 0.2em;\n    width: 100%;\n    height: 100%;\n    top:0;\n    left:0;\n    transform: scale(0.8);\n    transition: all 0.2s linear;\n    background-color: ", ";\n    z-index: 10;\n    animation: ", " 0.2s linear;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(0.9);\n    }\n  }\n  \n  ",
    "\n"])), function (props) { return props.color; }, KeyframesItem, function (props) { return props.active && CSSActive; });
var WColorAdd = styled.label(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: block;\n  width: 1.4em;\n  height: 1.4em;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n\n  &::before{\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    opacity: 0.1;\n    transform: scale(0);\n    transition: transform 0.2s ease-in;\n    top: 0;\n    left: 0;\n    border-radius: 50%;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(0.8);\n    }\n  }\n\n  &:focus{\n    outline: 0;\n  }\n\n  img{\n    margin: 15%;\n    width: 70%;\n    height: 70%;\n  }\n"], ["\n  display: block;\n  width: 1.4em;\n  height: 1.4em;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n\n  &::before{\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    opacity: 0.1;\n    transform: scale(0);\n    transition: transform 0.2s ease-in;\n    top: 0;\n    left: 0;\n    border-radius: 50%;\n  }\n\n  &:hover{\n    &::before{\n      transform: scale(0.8);\n    }\n  }\n\n  &:focus{\n    outline: 0;\n  }\n\n  img{\n    margin: 15%;\n    width: 70%;\n    height: 70%;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

const img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e%3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 496 496' style='enable-background:new 0 0 496 496%3b' xml:space='preserve'%3e%3cg%3e %3cg%3e %3cpath d='M488%2c240H256V8c0-4.418-3.582-8-8-8s-8%2c3.582-8%2c8v232H8c-4.418%2c0-8%2c3.582-8%2c8s3.582%2c8%2c8%2c8h232v232c0%2c4.418%2c3.582%2c8%2c8%2c8 s8-3.582%2c8-8V256h232c4.418%2c0%2c8-3.582%2c8-8S492.418%2c240%2c488%2c240z'/%3e %3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e";

const img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 22.0.1%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32%3b' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%23010101%3bstroke:black%3bstroke-width:2%3bstroke-miterlimit:10%3b%7d%3c/style%3e%3cpolygon class='st0' points='26%2c5.6 16.2%2c15.5 6.3%2c5.6 5.6%2c6.3 15.5%2c16.2 5.6%2c26.1 6.3%2c26.7 16.2%2c16.8 26%2c26.7 26.7%2c26.1 16.8%2c16.2 26.7%2c6.3 '/%3e%3c/svg%3e";

var key = 0;
function _key () {
    return 'w-color-' + key + '-';
}

function _t (text, language) {
    return text;
}

var AddWrap = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  background-color: inherit;\n\n  input{\n    height: 0;\n    width: 0;\n    padding: 0;\n    border: 0;\n    opacity: 0;\n  }\n"], ["\n  background-color: inherit;\n\n  input{\n    height: 0;\n    width: 0;\n    padding: 0;\n    border: 0;\n    opacity: 0;\n  }\n"])));
var _Add = React.memo(function (props) {
    return (React.createElement(AddWrap, null,
        React.createElement("input", { type: 'color', id: props.id, onBlur: function (e) { return props.fnAdd(e.target.value); } })));
});
var templateObject_1$1;

var Selector = React.memo(function (props) {
    var _keyWColor = _key();
    var _a = useState(props.select || '#54478c'), value = _a[0], setValue = _a[1];
    var _b = useState([]), colour = _b[0], setColour = _b[1];
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
    return (React.createElement(WColor, { dark: !!props.dark },
        React.createElement(WColorHeading, null, _t('Recent')),
        React.createElement(WColorContainer, null,
            template.map(function (color, key) { return (React.createElement(WColorItemWrap, { key: _keyWColor + "-template-" + key },
                React.createElement(WColorItem, { "aria-label": color, color: color, active: color === value, onClick: function () { return setValue(color); }, onDoubleClick: function () { return removeColour(color); } }))); }),
            colour.map(function (color, key) { return (React.createElement(WColorItemWrap, { key: _keyWColor + "-" + key },
                React.createElement(WColorItem, { "aria-label": color, color: color, active: color === value, onClick: function () { return setValue(color); }, onDoubleClick: function () { return removeColour(color); } }),
                React.createElement("button", { onClick: function () { return removeColour(color); }, type: 'button' },
                    React.createElement("img", { src: img$1, alt: 'w-color' })))); }),
            React.createElement(WColorAdd, { htmlFor: "id-" + _keyWColor + "-add" },
                React.createElement("img", { src: img, alt: 'w-color' })),
            React.createElement(_Add, { id: "id-" + _keyWColor + "-add", fnAdd: addColour }))));
});

var MainWrap = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var MainValue = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  cursor: pointer;\n  border-radius: 5px;\n  ", "\n"], ["\n  cursor: pointer;\n  border-radius: 5px;\n  ",
    "\n"])), function (props) { return "\n    width: " + props.width + "px;\n    height: " + props.height + "px;\n    background-color: " + props.color + ";\n  "; });
var MainSelector = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 999;\n  transform: translate(0, 5px);\n  display: ", ";\n"], ["\n  position: absolute;\n  z-index: 999;\n  transform: translate(0, 5px);\n  display: ", ";\n"])), function (props) { return (props.show ? 'initial' : 'none'); });
var App = React.memo(function (props) {
    var _a = useState(props.defaultValue || '#d1d5d1'), value = _a[0], setValue = _a[1];
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var refMenu = useRef();
    /**
     */
    function hiddenDropdownWhenClick() {
        setShow(false);
        document.removeEventListener('dblclick', handleClick);
    }
    /**
     * @param e
     */
    function handleClick(e) {
        var target = e.target;
        var path = e.path;
        var show = false;
        path.forEach(function (item) {
            refMenu.current.childNodes.forEach(function (node) {
                if (node === item)
                    show = true;
            });
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
            document.addEventListener('dblclick', handleClick);
        }
    });
    return (React.createElement(MainWrap, null,
        React.createElement("input", { type: 'hidden', value: value, onChange: function (e) { return props.onChange(e.target.value); } }),
        React.createElement(MainValue, { color: value, height: props.height || 30, width: props.width || 30, onClick: function () { return setShow(!show); } }),
        React.createElement(MainSelector, { ref: refMenu, show: show },
            React.createElement(Selector, { fnSelected: function (color) { return setValue(color); } }))));
});
var templateObject_1$2, templateObject_2$1, templateObject_3$1;

export default App;
//# sourceMappingURL=index.es.js.map
