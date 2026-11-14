var e = document.documentElement.dataset.platform, t = document.querySelector(`[data-systems]`), n = e ? t?.querySelector(`[data-system="${e}"]`) : null;
t && n && t.firstElementChild !== n && t.prepend(n);
var r = document.querySelector(`[data-install]`), i = [...r?.querySelectorAll(`[role="tab"]`) ?? []], a = (e, t) => {
	for (let t of i) {
		let n = t === e;
		t.setAttribute(`aria-selected`, String(n)), t.tabIndex = n ? 0 : -1;
		let r = document.getElementById(t.getAttribute(`aria-controls`) ?? ``);
		r && (r.hidden = !n);
	}
	t && e.focus();
};
if (r && i.length) {
	a(i.find((t) => t.dataset.tab === e) ?? i[0], !1), r.classList.add(`is-ready`);
	for (let e of i) e.addEventListener(`click`, () => a(e, !1)), e.addEventListener(`keydown`, (t) => {
		let n = i.indexOf(e), r = {
			ArrowRight: n + 1,
			ArrowLeft: n - 1,
			Home: 0,
			End: i.length - 1
		}[t.key];
		r !== void 0 && (t.preventDefault(), a(i[(r + i.length) % i.length], !0));
	});
}
