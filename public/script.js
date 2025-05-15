window.turnstileToken = null;
window.turnstileWidgetId = null;
window.onloadTurnstileCallback = function () {
    // console.log("onloadTurnstileCallback");
    window.turnstileWidgetId = turnstile.render("#cf-turnstile", {
        sitekey: "0x4AAAAAAA5SXEN7P0HvpmiP",
        appearance: "always",
        callback: function (token) {
            window.turnstileToken = token;
            // console.log(`Challenge Success ${token}`);
        },
    });
};
