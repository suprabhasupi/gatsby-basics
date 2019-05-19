--
path: "/two"
title: "two"
--

# BEM
1. Base
2. Layout
3. Module
4. State
5. Theme

*Base Rule*: SCSS Reset
*Layout*: set of css rules which modify page layout usually starts with l-<className> usually recommended to use as a modifier like making design from fluid to fixed.
*Module*: avoid using ID or element selector for module(think along the lines of subclassing the module)
*State*: modifies the look and feel of UI based on state of app.(this is dependent on JS)

*State Vs Sub-Module*(sub class):
They both seems to solve the same problem however it's not true and there are few key difference;
    1. State styles can apply to layout and/or module styles; and
    2. State styles indicate a JavaScript dependency. 
    3. Sub-module styles are applied to an element at render time and then are never changed again. State styles, however, are applied to elements to indicate a change in state while the page is still running on the client machine.