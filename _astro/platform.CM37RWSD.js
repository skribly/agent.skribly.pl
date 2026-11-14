;
(function(root, nav) {
	var pick = function(text) {
		if (/android|iphone|ipad|ipod|\bios\b|cros|chrome ?os/i.test(text)) return "none";
		if (/mac/i.test(text)) return "mac";
		if (/win/i.test(text)) return "windows";
		if (/linux|x11/i.test(text)) return "linux";
		return "";
	};
	var data = nav.userAgentData;
	var os = pick(String(data && data.platform || ""));
	if (!os) os = pick(String(nav.userAgent || "") + " " + String(nav.platform || ""));
	if (os === "mac" && Number(nav.maxTouchPoints || 0) > 1) os = "none";
	if (os && os !== "none") root.setAttribute("data-platform", os);
})(document.documentElement, navigator);
