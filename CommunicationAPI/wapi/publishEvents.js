(function () {

    if (!wapi)
    {
        alert("no widget support, include widget_api.js");
    }


    /**
     * Clone MouseEvent
     * @param {MouseEvent} e - event to clone.
     * @return {Object} data of cloned event
     */
    function cloneMouseEvent_(e) {
        var mouseEvent = {
            class: "mouse",
            type: e.type,
            screenX: e.screenX,
            screenY: e.screenY,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            shiftKey: e.shiftKey,
            metaKey: e.metaKey,
            timeStamp: e.timeStamp,
            button: e.button,
            defaultPrevented: e.defaultPrevented
        };
        return mouseEvent;
    };

    /**
     * Clone KeyEvent
     * @param {KeyEvent} e - event to clone.
     * @return {Object} data of cloned event
     */
    function cloneKeyEvent_(e) {
        var keyEvent = {
            class: "key",
            type: e.type,
            altKey: e.altKey,
            charCode: e.charCode,
            ctrlKey: e.ctrlKey,
            keyCode: e.keyCode,
            keyIdentifier: e.keyIdentifier,
            location: e.location,
            metaKey: e.metaKey,
            timeStamp: e.timeStamp,
            repeat: e.repeat,
            defaultPrevented: e.defaultPrevented
        };
        return keyEvent;
    };


    /**
     * Clone TouchEvent
     * @param {TouchEvent} e - event to clone.
     * @return {Object} data of cloned event
     */
    function cloneTouchEvent_(e) {
        function cloneTouches(touches) {
            var clonedTouches = [];
            for (var i = 0; i < touches.length; i++)
            {
                clonedTouches.push({
                                       screenX: touches[i].screenX,
                                       screenY: touches[i].screenY
                                   });
            }
            return clonedTouches;
        }

        var touchEvent = {
            class: "touch",
            type: e.type,
            timeStamp: e.timeStamp,
            touches: cloneTouches(e.touches),
            targetTouches: cloneTouches(e.targetTouches),
            changedTouches: cloneTouches(e.changedTouches),
            defaultPrevented: e.defaultPrevented
        };
        return touchEvent;
    };


    /**
     * Clone event
     * @param {Event} e - event to clone.
     * @return {Object} data of cloned event
     */
    function clonePointerEvent_(e) {
        var pointerEvent = {
            class: "pointer",
            type: e.type,
            timeStamp: e.timeStamp,
            defaultPrevented: e.defaultPrevented
        };
        return pointerEvent;
    };


    /**
     * Clone event
     * @param {Event} e - event to clone.
     * @return {Object} data of cloned event
     */
    function cloneCustomEvent_(e) {
        var customEvent = {
            class: "custom",
            type: e.type
        };
        return customEvent;
    };


    var eventPublish_ = {
        "click": {
            active: false,
            publish: function (e) {
                var event = cloneMouseEvent_(e);
                wapi.publish("click", event);
            }
        },

        "dblclick": {
            active: false,
            publish: function (e) {
                var event = cloneMouseEvent_(e);
                wapi.publish("dblclick", event);
            }
        },

        "mousedown": {
            active: false,
            publish: function (e) {
                var event = cloneMouseEvent_(e);
                wapi.publish("mousedown", event);
            }
        },

        "mouseup": {
            active: false,
            publish: function (e) {
                var event = cloneMouseEvent_(e);
                wapi.publish("mouseup", event);
            }
        },

        "mouseover": {
            active: false,
            publish: function (e) {
                var event = cloneMouseEvent_(e);
                wapi.publish("mouseover", event);
            }
        },

        "mousemove": {
            active: false,
            publish: function (e) {
                var event = cloneMouseEvent_(e);
                wapi.publish("mousemove", event);
            }
        },

        "mouseout": {
            active: false,
            publish: function (e) {
                var event = cloneMouseEvent_(e);
                wapi.publish("mouseout", event);
            }
        },

        "keydown": {
            active: false,
            publish: function (e) {
                var event = cloneKeyEvent_(e);
                wapi.publish("keydown", event);
            }
        },

        "keypress": {
            active: false,
            publish: function (e) {
                var event = cloneKeyEvent_(e);
                wapi.publish("keypress", event);
            }
        },

        "keyup": {
            active: false,
            publish: function (e) {
                var event = cloneKeyEvent_(e);
                wapi.publish("keyup", event);
            }
        },

        "resize": {
            active: false,
            publish: function (e) {
                window.console.warn("not cloning resize");
                wapi.publish("resize", "0");
            }
        },

        "scroll": {
            active: false,
            publish: function (e) {
                window.console.warn("not cloning scroll");
                wapi.publish("scroll", "0");
            }
        },

        "focus": {
            active: false,
            publish: function (e) {
                window.console.warn("not cloning focus");
                wapi.publish("focus", "0");
            }
        },

        "blur": {
            active: false,
            publish: function (e) {
                window.console.warn("not cloning blur");
                wapi.publish("blur", "0");
            }

        },

        "focusin": {
            active: false,
            publish: function (e) {
                window.console.warn("not cloning focusin");
                wapi.publish("focusin", "0");
            }
        },

        "focusout": {
            active: false,
            publish: function (e) {
                window.console.warn("not cloning focusout");
                wapi.publish("focusout", "0");
            }
        },

        "DOMActivate": {
            active: false,
            publish: function (e) {
                window.console.warn("not cloning DOMActivate");
                wapi.publish("DOMActivate", "0");
            }
        },

        "touchstart": {
            active: false,
            publish: function (e) {
                var touchEvent = cloneTouchEvent_(e);
                wapi.publish("touchstart", touchEvent);
            }
        },

        "touchend": {
            active: false,
            publish: function (e) {
                var touchEvent = cloneTouchEvent_(e);
                wapi.publish("touchend", touchEvent);
            }
        },

        "touchmove": {
            active: false,
            publish: function (e) {
                var touchEvent = cloneTouchEvent_(e);
                wapi.publish("touchmove", touchEvent);
            }
        },

        "touchenter": {
            active: false,
            publish: function (e) {
                var touchEvent = cloneTouchEvent_(e);
                wapi.publish("touchenter", touchEvent);
            }
        },

        "touchleave": {
            active: false,
            publish: function (e) {
                var touchEvent = cloneTouchEvent_(e);
                wapi.publish("touchleave", touchEvent);

            }
        },

        "touchcancel": {
            active: false,
            publish: function (e) {
                var touchEvent = cloneTouchEvent_(e);
                wapi.publish("touchcancel", touchEvent);
            }
        },

        "pointerdown": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointerdown", pointerEvent);
            }
        },

        "pointerup": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointerup", pointerEvent);
            }
        },

        "pointercancel": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointercancel", pointerEvent);
            }
        },

        "pointermove": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointermove", pointerEvent);
            }
        },

        "pointerover": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointerover", pointerEvent);
            }
        },

        "pointerout": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointerout", pointerEvent);
            }
        },

        "pointerenter": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointerenter", pointerEvent);
            }
        },

        "pointerleave": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("pointerleave", pointerEvent);
            }
        },

        "gotpointercapture": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("gotpointercapture", pointerEvent);
            }
        },

        "lostpointercapture": {
            active: false,
            publish: function (e) {
                var pointerEvent = clonePointerEvent_(e);
                wapi.publish("lostpointercapture", pointerEvent);
            }
        }
    };


    var eventPublisher = {};

    /**
     * Adds listener for events and then propagates those events
     * to the parent window
     * @param {Array.<string>} events to propagte.
     */
    eventPublisher.publishEvents = function (events) {
        for (var i = 0; i < events.length; i++)
        {
            var key = events[i];
            if (eventPublish_[key])
            {
                if (!eventPublish_[key].active)
                {
                    window.addEventListener(key, eventPublish_[key].publish, false);
                    eventPublish_[key].active = true;
                }
            }
        }
    }


    /**
     * Removes listener for events
     * @param {Array.<string>} events to remove.
     */
    eventPublisher.unpublishEvents = function (events) {
        for (var i = 0; i < events.length; i++)
        {
            var key = events[i];
            if (eventPublish_[key])
            {
                if (eventPublish_[key].active)
                {
                    window.removeEventListener(key, eventPublish_[key].publish, false);
                    eventPublish_[key].active = false;
                }
            }
        }
    }


    /**
     * Debugging - call this from the javascript console window to see
     * what events have been subscribed to
     * @return {Array.<string>} Events registered.
     */
    wapi.dbgPublishedEvents = function () {
        var publishedEvents = [];
        for (var key in eventPublish_)
        {
            if (eventPublish_.hasOwnProperty(key))
            {
                if (eventPublish_[key].active)
                {
                    publishedEvents.push(key);
                }
            }
        }
        return publishedEvents;
    }


    /* EVENT PROPAGATION */
    wapi.subscribe("sysEventSubscribe", function (msg) {
        window.console.log(window.document.URL + " - eventSubscribe: " + msg);

        if (msg instanceof Array)
        {
            eventPublisher.publishEvents(msg);
        }
        else if (typeof(msg) === "string")
        {
            eventPublisher.publishEvents([msg]);
        }
    });

    wapi.subscribe("sysEventUnsubscribe", function (msg) {
        window.console.log(window.document.URL + " - eventUnsubscribe: " + msg);

        if (msg instanceof Array)
        {
            eventPublisher.unpublishEvents(msg);
        }
        else if (typeof(msg) === "string")
        {
            eventPublisher.unpublishEvents([msg]);
        }
    });

})();

