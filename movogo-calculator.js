/* MOVOGO Plan Builder — movogo-calculator.js
   Host this file externally (GitHub Pages, Cloudflare Pages, etc.)
   then load it via the snippet in movogo-embed.html
   ------------------------------------------------------------ */

(function () {

  /* ── Inject styles ── */
  const css = `
@import url("https://use.typekit.net/qri8fuu.css");

#mvg-root{--ink:#1a1a1a;--ink-soft:#4a5568;--ink-muted:#94a3b8;--cream:#f2ece9;--white:#fff;--accent:#014b43;--accent-light:#026b5f;--accent-pale:#e0eeec;--coral:#e47250;--coral-pale:#fdf0eb;--lime:#b8d87c;--gold:#c9973a;--gold-pale:#fdf6e8;--border:#ddd6d1;--warn:#e47250;--radius:14px;--radius-sm:9px;--shadow:0 1px 3px rgba(15,25,35,.07),0 4px 16px rgba(15,25,35,.05);--shadow-lg:0 8px 40px rgba(15,25,35,.14);font-family:area-normal,sans-serif;font-weight:600;color:var(--ink);background:var(--cream);padding:2rem 1rem 4rem;box-sizing:border-box}#mvg-root *,#mvg-root *::before,#mvg-root *::after{box-sizing:border-box;font-family:area-normal,sans-serif!important;font-weight:600!important}#mvg-root .mvg-wrap{max-width:960px;margin:0 auto}#mvg-root .mvg-zone-label{font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-muted);margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:1px solid var(--border)}#mvg-root .mvg-filter{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem}#mvg-root .mvg-filter-btn{padding:.45rem 1rem;border:1.5px solid var(--border);border-radius:20px;background:var(--white);font-size:.8rem;color:var(--ink-soft);cursor:pointer;transition:all .2s;line-height:1}#mvg-root .mvg-filter-btn:hover{border-color:var(--accent);color:var(--accent)}#mvg-root .mvg-filter-btn.active{background:var(--accent);border-color:var(--accent);color:var(--white)}#mvg-root .mvg-filter-btn.active.sub{background:var(--coral);border-color:var(--coral)}#mvg-root .mvg-gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem;margin-bottom:2.5rem}#mvg-root .mvg-prod-card{background:var(--white);border:2px solid var(--border);border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;transition:all .2s;box-shadow:var(--shadow)}#mvg-root .mvg-prod-card:hover{border-color:var(--accent);box-shadow:0 4px 20px rgba(1,75,67,.12)}#mvg-root .mvg-prod-card.sub-card:hover{border-color:var(--coral)}#mvg-root .mvg-prod-card.selected{border-color:var(--accent);box-shadow:0 4px 20px rgba(1,75,67,.15)}#mvg-root .mvg-prod-card.sub-card.selected{border-color:var(--coral)}#mvg-root .mvg-prod-card.locked{opacity:.5;pointer-events:none}#mvg-root .mvg-prod-card.hidden{display:none}#mvg-root .mvg-prod-tag{font-size:.6rem;text-transform:uppercase;letter-spacing:.08em;padding:.3rem .75rem;font-weight:700!important}#mvg-root .mvg-prod-tag.finance{background:var(--accent-pale);color:var(--accent)}#mvg-root .mvg-prod-tag.sub{background:var(--coral-pale);color:var(--coral)}#mvg-root .mvg-prod-tag.protection{background:var(--gold-pale);color:var(--gold)}#mvg-root .mvg-prod-body{padding:.9rem 1rem;flex:1;display:flex;flex-direction:column;gap:.5rem}#mvg-root .mvg-prod-name{font-size:.95rem;color:var(--ink);line-height:1.2}#mvg-root .mvg-prod-preview{font-size:.76rem;color:var(--ink-soft);line-height:1.45;flex:1}#mvg-root .mvg-prod-more-btn{background:none;border:none;cursor:pointer;font-size:.72rem;color:var(--ink-muted);text-decoration:underline;padding:0;text-align:left;line-height:1;transition:color .15s}#mvg-root .mvg-prod-more-btn:hover{color:var(--accent)}#mvg-root .mvg-prod-more-body{display:none;font-size:.76rem;color:var(--ink-soft);line-height:1.5;padding:.6rem 1rem;border-top:1px solid var(--border);background:var(--cream)}#mvg-root .mvg-prod-more-body.show{display:block}#mvg-root .mvg-prod-footer{padding:.75rem 1rem;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:.5rem}#mvg-root .mvg-prod-amt{font-size:.82rem;color:var(--accent);font-variant-numeric:tabular-nums}#mvg-root .mvg-prod-card.sub-card .mvg-prod-amt{color:var(--coral)}#mvg-root .mvg-prod-card:not(.selected) .mvg-prod-amt{color:var(--ink-muted)}#mvg-root .mvg-select-btn{display:flex;align-items:center;gap:.4rem;padding:.4rem .85rem;border:1.5px solid var(--border);border-radius:20px;background:var(--white);font-size:.75rem;color:var(--ink-soft);cursor:pointer;transition:all .2s;line-height:1;flex-shrink:0}#mvg-root .mvg-select-btn:hover{border-color:var(--accent);color:var(--accent)}#mvg-root .mvg-prod-card.sub-card .mvg-select-btn:hover{border-color:var(--coral);color:var(--coral)}#mvg-root .mvg-prod-card.selected .mvg-select-btn{background:var(--accent);border-color:var(--accent);color:var(--white)}#mvg-root .mvg-prod-card.sub-card.selected .mvg-select-btn{background:var(--coral);border-color:var(--coral);color:var(--white)}.mvg-header{text-align:center;}#mvg-root .mvg-lock-note{font-size:.7rem;color:var(--ink-muted);text-align:center;margin:-0.5rem 0 1.5rem;font-style:italic}#mvg-root .mvg-divider{border:none;border-top:2px solid var(--border);margin:0 0 2rem}#mvg-root .mvg-sticky{position:sticky;top:132px;z-index:100;background:var(--accent);border-radius:var(--radius);padding:.9rem 1.5rem;margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;box-shadow:var(--shadow-lg)}#mvg-root .mvg-sticky-grp{display:flex;gap:1.5rem;flex-wrap:wrap}#mvg-root .mvg-sticky-lbl{font-size:.68rem;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.15rem}#mvg-root .mvg-sticky-amt{font-size:1.5rem;color:var(--white);line-height:1}#mvg-root .mvg-sticky-freq{font-size:.72rem;color:rgba(255,255,255,.45);margin-top:.15rem}#mvg-root .mvg-sticky-div{width:1px;height:36px;background:rgba(255,255,255,.15);flex-shrink:0;align-self:center}#mvg-root .mvg-freq{display:flex;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.2);border-radius:var(--radius-sm);padding:3px;gap:3px}#mvg-root .mvg-freq-btn{flex:1;padding:.45rem .7rem;border:none;border-radius:6px;font-size:.78rem;cursor:pointer;background:transparent;color:rgba(255,255,255,.7);transition:all .2s;white-space:nowrap;line-height:1}#mvg-root .mvg-freq-btn.active{background:var(--white);color:var(--accent)}#mvg-root .mvg-collapse-btn{display:none;width:100%;padding:.7rem 1rem;background:var(--accent);color:var(--white);border:none;border-radius:var(--radius-sm);font-size:.85rem;cursor:pointer;text-align:left;margin-bottom:1rem;line-height:1}@media(max-width:600px){#mvg-root .mvg-sticky{flex-direction:column;align-items:flex-start}#mvg-root .mvg-sticky-div{display:none}#mvg-root .mvg-collapse-btn{display:block}#mvg-root .mvg-calc-body{display:none}#mvg-root .mvg-calc-body.open{display:block}}#mvg-root .mvg-calc-card{background:var(--white);border-radius:var(--radius);box-shadow:var(--shadow);border:1px solid var(--border);overflow:hidden;margin-bottom:1.25rem}#mvg-root .mvg-calc-header{display:flex;align-items:center;gap:.85rem;padding:1.1rem 1.5rem;border-bottom:1px solid var(--border);background:var(--cream)}#mvg-root .mvg-calc-icon{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0;color:var(--white)}#mvg-root .mvg-calc-icon.finance{background:var(--accent);padding-bottom:3px;}#mvg-root .mvg-calc-icon.sub{background:var(--coral);padding-bottom:4px;}#mvg-root .mvg-calc-title{font-size:1.05rem;color:var(--ink);margin:0}#mvg-root .mvg-calc-body-inner{padding:1.4rem 1.5rem}#mvg-root .mvg-field{margin-bottom:1.2rem}#mvg-root .mvg-field:last-child{margin-bottom:0}#mvg-root .mvg-lbl{display:block;font-size:.76rem;color:var(--ink-soft);margin-bottom:.4rem;text-transform:uppercase;letter-spacing:.05em}#mvg-root .mvg-dollar{position:relative}#mvg-root .mvg-dsign{position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:var(--ink-soft);pointer-events:none}#mvg-root .mvg-input{width:100%;border:1.5px solid var(--border);border-radius:var(--radius-sm);padding:.75rem 1rem;font-size:1rem;color:var(--ink);background:var(--white);outline:none;transition:border-color .2s;-webkit-appearance:none;appearance:none}#mvg-root .mvg-input:focus{border-color:var(--accent)}#mvg-root .mvg-input.invalid{border-color:var(--warn)!important}#mvg-root .mvg-input-num{padding-left:2.1rem;font-size:1.05rem;-moz-appearance:textfield}#mvg-root .mvg-input-num::-webkit-inner-spin-button,#mvg-root .mvg-input-num::-webkit-outer-spin-button{-webkit-appearance:none}#mvg-root .mvg-range{-webkit-appearance:none;width:100%;height:5px;border-radius:3px;background:var(--border);outline:none;margin-top:.7rem;cursor:pointer}#mvg-root .mvg-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:var(--accent);cursor:pointer;border:3px solid var(--white);box-shadow:0 1px 4px rgba(0,0,0,.2);transition:transform .15s}#mvg-root .mvg-range::-webkit-slider-thumb:hover{transform:scale(1.15)}#mvg-root .mvg-range-labels{display:flex;justify-content:space-between;font-size:.7rem;color:var(--ink-muted);margin-top:.3rem}#mvg-root .mvg-range-labels span{margin:0}#mvg-root .mvg-range-val{font-size:1.5rem;color:var(--ink);line-height:1}#mvg-root .mvg-three-col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.25rem}#mvg-root .mvg-two-col{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}@media(max-width:600px){#mvg-root .mvg-three-col,#mvg-root .mvg-two-col{grid-template-columns:1fr}}#mvg-root .mvg-error{font-size:.74rem;color:var(--warn);margin-top:.3rem;display:none}#mvg-root .mvg-error.show{display:block}#mvg-root .mvg-hint{font-size:.74rem;color:var(--ink-muted);margin-top:.25rem;line-height:1.4}#mvg-root .mvg-finance-out{margin-top:1.1rem;padding:.9rem 1rem;background:var(--accent-pale);border-radius:var(--radius-sm);border:1px solid var(--accent)}#mvg-root .mvg-out-lbl{font-size:.68rem;text-transform:uppercase;letter-spacing:.06em;color:var(--accent);margin-bottom:.3rem}#mvg-root .mvg-out-amt{font-size:1.75rem;color:var(--accent);line-height:1}#mvg-root .mvg-out-freq{font-size:.75rem;color:var(--accent-light);margin-top:.2rem}#mvg-root .mvg-disclaimer{font-size:.7rem;color:var(--ink-muted);line-height:1.5;margin-top:.65rem;padding-top:.65rem;border-top:1px dashed var(--border)}#mvg-root .mvg-sub-total{display:flex;justify-content:space-between;align-items:center;padding:.85rem 1rem 0;border-top:1.5px dashed var(--border);margin-top:.5rem}#mvg-root .mvg-sub-total-lbl{font-size:.76rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-soft)}#mvg-root .mvg-sub-total-amt{font-size:1.35rem;color:var(--ink)}#mvg-root .mvg-save-bar{background:var(--cream);border:1.5px solid var(--border);border-radius:var(--radius-sm);padding:.85rem 1.1rem;margin-bottom:1.1rem}#mvg-root .mvg-save-title{font-size:.72rem;color:var(--ink-soft);margin-bottom:.55rem;text-transform:uppercase;letter-spacing:.04em}#mvg-root .mvg-save-opts{display:flex;gap:.55rem;flex-wrap:wrap}#mvg-root .mvg-save-btn{display:flex;align-items:center;gap:.4rem;padding:.5rem .85rem;border:1.5px solid var(--border);border-radius:var(--radius-sm);background:var(--white);font-size:.78rem;color:var(--ink-soft);cursor:pointer;transition:all .18s;line-height:1}#mvg-root .mvg-save-btn:hover{border-color:var(--accent);color:var(--accent)}#mvg-root .mvg-toast{display:none;font-size:.73rem;color:var(--accent);margin-top:.45rem}#mvg-root .mvg-toast.show{display:block}#mvg-root .mvg-overlay{display:none;position:fixed;inset:0;background:rgba(15,25,35,.5);z-index:9999;align-items:center;justify-content:center;padding:1rem}#mvg-root .mvg-overlay.show{display:flex}#mvg-root .mvg-modal{background:var(--white);border-radius:var(--radius);padding:1.75rem;max-width:400px;width:100%;box-shadow:var(--shadow-lg)}#mvg-root .mvg-modal h3{font-size:1.2rem;margin:0 0 .4rem}#mvg-root .mvg-modal p{font-size:.84rem;color:var(--ink-soft);margin:0 0 1rem;line-height:1.5}#mvg-root .mvg-modal-btns{display:flex;gap:.65rem;margin-top:1rem}#mvg-root .mvg-btn-sec{flex:1;padding:.65rem;border:1.5px solid var(--border);border-radius:var(--radius-sm);background:var(--white);font-size:.86rem;color:var(--ink-soft);cursor:pointer;transition:all .2s;line-height:1}#mvg-root .mvg-btn-sec:hover{border-color:var(--ink);color:var(--ink)}#mvg-root .mvg-btn-pri{flex:1;padding:.65rem;border:none;border-radius:var(--radius-sm);background:var(--accent);color:var(--white);font-size:.86rem;cursor:pointer;transition:opacity .2s;line-height:1}#mvg-root .mvg-btn-pri:hover{opacity:.88}#mvg-root .mvg-rtable{width:100%;border-collapse:collapse}#mvg-root .mvg-rtable td{padding:.55rem 0;font-size:.86rem;border-bottom:1px solid var(--border);color:var(--ink);vertical-align:top}#mvg-root .mvg-rtable td:first-child{color:var(--ink-soft);width:55%}#mvg-root .mvg-rtable td:last-child{text-align:right;font-variant-numeric:tabular-nums}#mvg-root .mvg-rtable tr:last-child td{border-bottom:none}#mvg-root .mvg-rtable tr.mvg-tot td{padding-top:.8rem;border-bottom:none}#mvg-root .mvg-slbl{font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:var(--accent);padding:.85rem 0 .3rem;display:block}#mvg-root .mvg-slbl.sub{color:var(--coral)}#mvg-root .mvg-cgrid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}@media(max-width:540px){#mvg-root .mvg-cgrid{grid-template-columns:1fr}}#mvg-root .mvg-legal{font-size:.7rem;color:var(--ink-muted);line-height:1.6;margin-top:.9rem;padding-top:.9rem;border-top:1px solid var(--border)}#mvg-root .mvg-actions{display:flex;gap:1rem;margin-top:1.4rem;flex-wrap:wrap}#mvg-root .mvg-btn-review{flex:1;padding:.95rem 2rem;background:var(--accent);color:var(--white);border:none;border-radius:var(--radius-sm);font-size:.95rem;cursor:pointer;transition:all .2s;box-shadow:0 3px 12px rgba(1,75,67,.2);line-height:1}#mvg-root .mvg-btn-review:hover{background:var(--accent-light)}#mvg-root .mvg-btn-back{padding:.95rem 1.4rem;background:transparent;color:var(--ink-soft);border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:.9rem;cursor:pointer;transition:all .2s;line-height:1}#mvg-root .mvg-btn-back:hover{border-color:var(--ink);color:var(--ink)}#mvg-root .mvg-btn-apply{flex:1;min-width:180px;padding:.95rem 2rem;background:var(--accent);color:var(--white);border:none;border-radius:var(--radius-sm);font-size:.95rem;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:.55rem;box-shadow:0 4px 16px rgba(1,75,67,.25);line-height:1}#mvg-root .mvg-btn-apply:hover{background:var(--accent-light);transform:translateY(-1px)}#mvg-root .mvg-btn-apply:active{transform:none}#mvg-root .mvg-btn-apply:disabled{opacity:.7;cursor:not-allowed;transform:none}#mvg-root .mvg-builder.hide{display:none}#mvg-root .mvg-review-view{display:none}#mvg-root .mvg-review-view.show{display:block}#mvg-root .mvg-section{display:none}#mvg-root .mvg-section.show{display:block}#mvg-root .mvg-intro{font-size:.82rem;color:var(--ink-soft);margin-bottom:.9rem;line-height:1.5}#mvg-root .mvg-review-view .mvg-calc-icon.finance.contactd{padding-bottom:8px;font-size:1.4rem;}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── Inject HTML into #mvg-root ── */
  const root = document.getElementById('mvg-root');
  if (!root) { console.error('MOVOGO: No #mvg-root element found on page.'); return; }

  root.innerHTML = `
<div class="mvg-overlay" id="mvgModal">
<div class="mvg-modal">
<h3>Email yourself this link</h3>
<p>We'll send a link so you can return to your plan where you left off.</p>
<div class="mvg-field">
<label class="mvg-lbl" for="mvgSaveEmail">Your email</label>
<input class="mvg-input" type="email" id="mvgSaveEmail" placeholder="you@example.com">
</div>
<div class="mvg-modal-btns">
<button class="mvg-btn-sec" onclick="mvgCloseModal()">Cancel</button>
<button class="mvg-btn-pri" onclick="mvgSendEmail()">Send link</button>
</div>
<div class="mvg-toast" id="mvgEmailToast">✓ Sent! Check your inbox.</div>
</div>
</div>
<div class="mvg-wrap">
<div class="mvg-header">
<h3>Build Your Plan</h3>
<p>Choose what you need and we'll put together an estimated cost.</p>
</div>
<div class="mvg-builder" id="mvgBuilder">
<div class="mvg-zone-label">Our Products</div>
<div class="mvg-filter">
<button class="mvg-filter-btn active" data-filter="all" onclick="mvgFilter(this)">All</button>
<button class="mvg-filter-btn active sub" data-filter="sub" onclick="mvgFilter(this)">Membership</button>
<button class="mvg-filter-btn" data-filter="finance" onclick="mvgFilter(this)">Finance</button>
<button class="mvg-filter-btn" data-filter="protection" onclick="mvgFilter(this)">Protection</button>
</div>
<div class="mvg-gallery" id="mvgGallery">
<div class="mvg-prod-card sub-card" data-type="sub" data-key="wof" data-annual="90">
<div class="mvg-prod-tag sub">Membership</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">WoF / CoF</div>
<div class="mvg-prod-preview">Keep your vehicle road-legal with your warrant or certificate of fitness covered.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgWofMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgWofMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" data-sub-amt="wof">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card sub-card" data-type="sub" data-key="rego" data-annual="172.97">
<div class="mvg-prod-tag sub">Membership</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Registration</div>
<div class="mvg-prod-preview">We handle your annual vehicle registration so you never miss the due date.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgRegoMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgRegoMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" data-sub-amt="rego">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card sub-card" data-type="sub" data-key="ruc" data-annual="760">
<div class="mvg-prod-tag sub">Membership</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Road User Charges</div>
<div class="mvg-prod-preview">Spread the cost of RUC across your regular payments — no surprise top-ups.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgRucMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgRucMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" data-sub-amt="ruc">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card sub-card" data-type="sub" data-key="service" data-annual="300">
<div class="mvg-prod-tag sub">Membership</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Servicing &amp; Repairs</div>
<div class="mvg-prod-preview">Regular servicing keeps your car reliable — we help budget for it in advance.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgServiceMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgServiceMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" data-sub-amt="service">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card sub-card" data-type="sub" data-key="tyres" data-annual="0">
<div class="mvg-prod-tag sub">Membership</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Tyres &amp; Repairs</div>
<div class="mvg-prod-preview">Budget for tyre replacements and unexpected repairs without the stress.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgTyresMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgTyresMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt">Pricing TBC</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card sub-card" data-type="sub" data-key="roadside" data-annual="65">
<div class="mvg-prod-tag sub">Membership</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Roadside Assistance</div>
<div class="mvg-prod-preview">Help when you need it most — breakdowns, flat tyres, lockouts and more.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgRoadsideMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgRoadsideMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" data-sub-amt="roadside">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card sub-card" data-type="sub" data-key="insurance" data-annual="0">
<div class="mvg-prod-tag sub">Membership</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Insurance</div>
<div class="mvg-prod-preview">Comprehensive vehicle insurance bundled into your plan.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgInsMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgInsMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt">Pricing TBC</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card" data-type="finance" data-key="buy">
<div class="mvg-prod-tag finance">Finance</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Buy my next car</div>
<div class="mvg-prod-preview">Get the finance you need to purchase your next vehicle.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgBuyMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgBuyMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" id="mvgBuyAmt">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card" data-type="finance" data-key="refinance">
<div class="mvg-prod-tag finance">Finance</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Refinance existing loan</div>
<div class="mvg-prod-preview">Replace your current car loan and potentially reduce your repayments.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgRefiMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgRefiMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" id="mvgRefiAmt">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card" data-type="finance" data-key="repairs">
<div class="mvg-prod-tag finance">Finance</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Fund repairs</div>
<div class="mvg-prod-preview">Finance unexpected or planned vehicle repairs and spread the cost.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgRepMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgRepMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt" id="mvgRepAmt">—</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card locked" data-type="protection" data-key="mbi">
<div class="mvg-prod-tag protection">Protection</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">MBI <span style="font-size:.65rem;background:var(--gold-pale);color:var(--gold);padding:.1rem .4rem;border-radius:20px;border:1px solid #e8d5a3;vertical-align:middle">Quote required</span></div>
<div class="mvg-prod-preview">Mechanical Breakdown Insurance covers unexpected mechanical failures.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgMbiMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgMbiMore">[Read more copy to be provided.] Pricing depends on vehicle make, model, age and mileage and will be confirmed separately.</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt">Requires finance</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card locked" data-type="protection" data-key="work">
<div class="mvg-prod-tag protection">Protection</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Work Waiver</div>
<div class="mvg-prod-preview">Waives your loan repayments if you lose your job involuntarily.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgWorkMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgWorkMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt">Requires finance</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card locked" data-type="protection" data-key="health">
<div class="mvg-prod-tag protection">Protection</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Health Waiver</div>
<div class="mvg-prod-preview">Waives repayments if you're unable to work due to illness or injury.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgHealthMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgHealthMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt">Requires finance</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card locked" data-type="protection" data-key="restart">
<div class="mvg-prod-tag protection">Protection</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Restart Waiver</div>
<div class="mvg-prod-preview">Waives your remaining balance in qualifying life events to help you start fresh.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgRestartMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgRestartMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt">Requires finance</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
<div class="mvg-prod-card locked" data-type="protection" data-key="holiday">
<div class="mvg-prod-tag protection">Protection</div>
<div class="mvg-prod-body">
<div class="mvg-prod-name">Repayment Holiday</div>
<div class="mvg-prod-preview">Pause your loan repayments for an approved period when life gets tough.</div>
<button class="mvg-prod-more-btn" onclick="mvgMore(event,'mvgHolMore')">Read more</button>
</div>
<div class="mvg-prod-more-body" id="mvgHolMore">[Read more copy to be provided.]</div>
<div class="mvg-prod-footer">
<span class="mvg-prod-amt">Requires finance</span>
<button class="mvg-select-btn" onclick="mvgSelectProd(this.closest('.mvg-prod-card'))">Select</button>
</div>
</div>
</div>
<div class="mvg-lock-note" id="mvgLockNote">Select a finance product above to unlock Protection options</div>
<hr class="mvg-divider">
<div class="mvg-zone-label">Your Estimate</div>
<div class="mvg-sticky">
<div class="mvg-sticky-grp">
<div id="mvgStickyFinWrap" style="display:none">
<div class="mvg-sticky-lbl">Finance Estimate</div>
<div class="mvg-sticky-amt" id="mvgStickyFin">—</div>
<div class="mvg-sticky-freq" id="mvgStickyFinFreq">per week</div>
</div>
<div class="mvg-sticky-div" id="mvgStickyDiv" style="display:none"></div>
<div>
<div class="mvg-sticky-lbl">Membership Estimate</div>
<div class="mvg-sticky-amt" id="mvgStickySub">—</div>
<div class="mvg-sticky-freq" id="mvgStickySubFreq">per week</div>
</div>
</div>
<div>
<div class="mvg-freq" id="mvgFreq">
<button class="mvg-freq-btn active" data-freq="weekly">Weekly</button>
<button class="mvg-freq-btn" data-freq="fortnightly">Fortnightly</button>
<button class="mvg-freq-btn" data-freq="monthly">Monthly</button>
</div>
</div>
</div>
<button class="mvg-collapse-btn" id="mvgCollapseBtn" onclick="mvgToggleCalc()">▼ Show estimate details</button>
<div class="mvg-calc-body" id="mvgCalcBody">
<div class="mvg-save-bar">
<div class="mvg-save-title">Save &amp; Return Later</div>
<div class="mvg-save-opts">
<button class="mvg-save-btn" onclick="mvgCopyLink()">
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
Copy link
</button>
<button class="mvg-save-btn" onclick="mvgOpenModal()">
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
Email me this link
</button>
</div>
<div class="mvg-toast" id="mvgCopyToast">✓ Link copied!</div>
</div>
<div class="mvg-section" id="mvgFinCalc">
<div class="mvg-calc-card">
<div class="mvg-calc-header">
<div class="mvg-calc-icon finance">$</div>
<div class="mvg-calc-title">Finance Calculator</div>
</div>
<div class="mvg-calc-body-inner">
<div class="mvg-three-col">
<div class="mvg-field">
<label class="mvg-lbl">Total to borrow</label>
<div class="mvg-dollar">
<span class="mvg-dsign">$</span>
<input class="mvg-input mvg-input-num" type="number" id="mvgLoanAmt" value="20000" min="5000" max="70000" step="500">
</div>
<input class="mvg-range" type="range" id="mvgLoanSlider" min="5000" max="70000" step="500" value="20000">
<div class="mvg-range-labels"><span>$5,000</span><span>$70,000</span></div>
<div class="mvg-error" id="mvgLoanErr">Enter an amount between $5,000 and $70,000.</div>
</div>
<div class="mvg-field">
<label class="mvg-lbl">Loan term</label>
<div style="display:flex;align-items:center;gap:.4rem">
<span class="mvg-range-val" id="mvgTermDisp">66</span>
<span style="color:var(--ink-soft);font-size:.85rem;margin-top:2px">months</span>
</div>
<input class="mvg-range" type="range" id="mvgTermSlider" min="36" max="66" step="1" value="66">
<div class="mvg-range-labels"><span>36 mo</span><span>66 mo</span></div>
</div>
<div class="mvg-field">
<label class="mvg-lbl">Interest rate</label>
<div style="display:flex;align-items:center;gap:.4rem">
<span class="mvg-range-val" id="mvgRateDisp">9.95</span>
<span style="color:var(--ink-soft);font-size:.85rem;margin-top:2px">% p.a.</span>
</div>
<input class="mvg-range" type="range" id="mvgRateSlider" min="7.95" max="29.95" step="0.5" value="9.95">
<div class="mvg-range-labels"><span>7.95%</span><span>29.95%</span></div>
<div class="mvg-hint">Your actual rate is determined by your credit assessment.</div>
</div>
</div>
<div class="mvg-finance-out">
<div class="mvg-out-lbl">Finance Estimate</div>
<div class="mvg-out-amt" id="mvgFinAmt">—</div>
<div class="mvg-out-freq" id="mvgFinFreq">per week</div>
<div class="mvg-disclaimer">Disclaimer text: [Finance disclaimer to be provided.]</div>
</div>
</div>
</div>
</div>
<div class="mvg-calc-card">
<div class="mvg-calc-header">
<div class="mvg-calc-icon sub">★</div>
<div class="mvg-calc-title">Membership Calculator</div>
</div>
<div class="mvg-calc-body-inner">
<p class="mvg-intro" id="mvgSubIntro">Your selected membership items are shown below. Costs are spread across your payments.</p>
<div id="mvgSubEmptyNote" style="display:none;font-size:.82rem;color:var(--ink-muted);padding:.75rem;background:var(--cream);border-radius:var(--radius-sm);text-align:center">No membership items selected yet — choose from the product cards above.</div>
<div id="mvgSubSelectedList"></div>
<div class="mvg-sub-total">
<div class="mvg-sub-total-lbl">Membership Estimate</div>
<div class="mvg-sub-total-amt" id="mvgSubTotal">—</div>
</div>
<div class="mvg-disclaimer">Disclaimer text: [Membership disclaimer to be provided.]</div>
</div>
</div>
<div class="mvg-actions">
<button class="mvg-btn-review" onclick="mvgGoReview()">Review my plan →</button>
</div>
</div>
</div>
<div class="mvg-review-view" id="mvgReview">
<div class="mvg-calc-card">
<div class="mvg-calc-header">
<div class="mvg-calc-icon finance">✓</div>
<div class="mvg-calc-title">Your Plan Summary</div>
</div>
<div class="mvg-calc-body-inner">
<div id="mvgRevFinBlock">
<span class="mvg-slbl">Finance</span>
<table class="mvg-rtable" id="mvgRevFin"></table>
</div>
<div id="mvgRevProtBlock">
<span class="mvg-slbl">Protection</span>
<table class="mvg-rtable" id="mvgRevProt"></table>
</div>
<span class="mvg-slbl sub">Membership</span>
<table class="mvg-rtable" id="mvgRevSub"></table>
<span class="mvg-slbl">Estimated Costs</span>
<table class="mvg-rtable" id="mvgRevTotals"></table>
<div class="mvg-disclaimer" style="margin-top:.9rem">Disclaimer text: [Summary disclaimer to be provided.]</div>
</div>
</div>
<div class="mvg-calc-card">
<div class="mvg-calc-header">
<div class="mvg-calc-icon finance contactd">✉</div>
<div class="mvg-calc-title">Your Contact Details</div>
</div>
<div class="mvg-calc-body-inner">
<p class="mvg-intro">To submit your application, we just need a few details so we can be in touch.</p>
<div class="mvg-cgrid">
<div class="mvg-field">
<label class="mvg-lbl" for="mvgFirst">First Name</label>
<input class="mvg-input" type="text" id="mvgFirst" placeholder="Jane">
<div class="mvg-error" id="mvgFirstErr">Please enter your first name.</div>
</div>
<div class="mvg-field">
<label class="mvg-lbl" for="mvgLast">Last Name</label>
<input class="mvg-input" type="text" id="mvgLast" placeholder="Smith">
<div class="mvg-error" id="mvgLastErr">Please enter your last name.</div>
</div>
<div class="mvg-field">
<label class="mvg-lbl" for="mvgEmail">Email Address</label>
<input class="mvg-input" type="email" id="mvgEmail" placeholder="jane@example.com">
<div class="mvg-error" id="mvgEmailErr">Please enter a valid email address.</div>
</div>
<div class="mvg-field">
<label class="mvg-lbl" for="mvgPhone">Contact Number</label>
<input class="mvg-input" type="tel" id="mvgPhone" placeholder="021 123 4567">
<div class="mvg-error" id="mvgPhoneErr">Please enter your contact number.</div>
</div>
</div>
<div class="mvg-legal">By submitting this form you consent to being contacted regarding your enquiry. All estimates are indicative only and do not constitute an offer of finance or membership. Final terms are subject to assessment and approval.</div>
</div>
</div>
<div class="mvg-actions">
<button class="mvg-btn-back" onclick="mvgGoBack()">← Edit my plan</button>
<button class="mvg-btn-apply" id="mvgApplyBtn" onclick="mvgSubmit()">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
Submit Application
</button>
</div>
</div>
</div>
`;

  /* ── Logic ── */
  const FREQS={weekly:52,fortnightly:26,monthly:12};
  const FL={weekly:'per week',fortnightly:'per fortnight',monthly:'per month'};
  const SUB_NAMES={wof:'WoF / CoF',rego:'Registration',ruc:'Road User Charges',service:'Servicing & Repairs',tyres:'Tyres & Repairs',roadside:'Roadside Assistance',insurance:'Insurance'};
  const PROT_NAMES={mbi:'MBI',work:'Work Waiver',health:'Health Waiver',restart:'Restart Waiver',holiday:'Repayment Holiday'};
  const EST=200,MGMT=6,HW_P=.095,HW_F=50,WW_P=.145,WW_F=50,RW_P=.0005,RW_F=385;

  let S={
    loan:20000,term:66,rate:9.95,freq:'weekly',
    finance:{buy:false,refinance:false,repairs:false},
    protection:{mbi:false,work:false,health:false,restart:false,holiday:false},
    subs:{wof:false,rego:false,ruc:false,service:false,tyres:false,roadside:false,insurance:false}
  };

  const fmt=n=>'$'+n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
  const fmtI=n=>'$'+Math.round(n).toLocaleString();
  const el=id=>document.getElementById(id);

  function pmt(r,n,pv){return r===0?pv/n:(r*pv)/(1-Math.pow(1+r,-n));}
  function hasFinance(){return Object.values(S.finance).some(v=>v);}

  function calcFinance(){
    if(!hasFinance()||S.loan<5000||S.loan>70000)return null;
    const r=Math.pow(1+S.rate/100/365,365/12)-1;
    const ppy=FREQS[S.freq];
    const baseMo=pmt(r,S.term,S.loan+EST);
    const baseWk=baseMo*12/52;
    const hC=S.protection.health?S.term*baseWk*HW_P+HW_F:0;
    const wC=S.protection.work?S.term*baseWk*WW_P+WW_F:0;
    const rC=S.protection.restart?S.term*S.loan*RW_P+RW_F:0;
    const tw=hC+wC+rC;
    const ff=S.loan+EST+tw;
    const fm=pmt(r,S.term,ff)+MGMT;
    return{periodic:fm*12/ppy,hC,wC,rC,tw,ff,totalRep:fm*S.term};
  }

  function calcSub(){
    const ppy=FREQS[S.freq];
    let annual=0;
    document.querySelectorAll('#mvgGallery .mvg-prod-card.sub-card.selected').forEach(c=>{
      annual+=parseFloat(c.dataset.annual)||0;
    });
    return{annual,periodic:annual/ppy};
  }

  function update(){
    const hf=hasFinance();
    const F=calcFinance();
    const Sub=calcSub();
    const fl=FL[S.freq];
    const ppy=FREQS[S.freq];

    if(hf&&F){
      el('mvgStickyFinWrap').style.display='';
      el('mvgStickyDiv').style.display='';
      el('mvgStickyFin').textContent=fmt(F.periodic);
      el('mvgStickyFinFreq').textContent=fl;
    } else {
      el('mvgStickyFinWrap').style.display='none';
      el('mvgStickyDiv').style.display='none';
    }
    el('mvgStickySub').textContent=fmt(Sub.periodic);
    el('mvgStickySubFreq').textContent=fl;
    el('mvgFinCalc').classList.toggle('show',hf);

    if(hf&&F){
      el('mvgFinAmt').textContent=fmt(F.periodic);
      el('mvgFinFreq').textContent=fl;
    }

    const finPeriodic=hf&&F?F.periodic:null;
    ['buy','refinance','repairs'].forEach(k=>{
      const amEl=el('mvg'+k.charAt(0).toUpperCase()+k.slice(1)+'Amt');
      if(amEl) amEl.textContent=finPeriodic?fmt(finPeriodic)+' est. '+fl:'—';
    });

    document.querySelectorAll('#mvgGallery .mvg-prod-card.sub-card').forEach(c=>{
      const annual=parseFloat(c.dataset.annual)||0;
      const amEl=c.querySelector('[data-sub-amt]');
      if(amEl&&annual>0) amEl.textContent=fmt(annual/ppy)+' est. '+fl;
    });

    const selSubs=[];
    document.querySelectorAll('#mvgGallery .mvg-prod-card.sub-card.selected').forEach(c=>{
      const key=c.dataset.key;
      const annual=parseFloat(c.dataset.annual)||0;
      const amtStr=annual>0?fmt(annual/ppy)+' '+fl:'TBC';
      selSubs.push(`<div style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid var(--border);font-size:.86rem"><span style="color:var(--ink-soft)">${SUB_NAMES[key]||key}</span><span style="color:var(--coral);font-variant-numeric:tabular-nums">${amtStr}</span></div>`);
    });

    const listEl=el('mvgSubSelectedList');
    const emptyEl=el('mvgSubEmptyNote');
    if(selSubs.length){
      listEl.innerHTML=selSubs.join('');
      listEl.style.display='';
      emptyEl.style.display='none';
    } else {
      listEl.innerHTML='';
      listEl.style.display='none';
      emptyEl.style.display='';
    }
    el('mvgSubTotal').textContent=fmt(Sub.periodic)+' '+fl;
  }

  /* ── Global functions (called from inline onclick) ── */
  window.mvgFilter=function(btn){
    const f=btn.dataset.filter;
    document.querySelectorAll('.mvg-filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#mvgGallery .mvg-prod-card').forEach(c=>{
      if(f==='all') c.classList.remove('hidden');
      else c.classList.toggle('hidden',c.dataset.type!==f);
    });
  };

  window.mvgSelectProd=function(card){
    if(card.classList.contains('locked'))return;
    card.classList.toggle('selected');
    const key=card.dataset.key;
    const type=card.dataset.type;
    const sel=card.classList.contains('selected');
    const btn=card.querySelector('.mvg-select-btn');
    if(btn) btn.textContent=sel?'Selected':'Select';

    if(type==='finance'){
      S.finance[key]=sel;
      const hf=hasFinance();
      document.querySelectorAll('#mvgGallery .mvg-prod-card[data-type="protection"]').forEach(c=>{
        c.classList.toggle('locked',!hf);
        const fb=c.querySelector('.mvg-prod-footer .mvg-prod-amt');
        if(fb&&!c.dataset.annual) fb.textContent=hf?'Selected product':'Requires finance';
      });
      el('mvgLockNote').style.display=hf?'none':'block';
      if(!hf){
        document.querySelectorAll('#mvgGallery .mvg-prod-card[data-type="protection"].selected').forEach(c=>{
          c.classList.remove('selected');
          const b=c.querySelector('.mvg-select-btn');
          if(b) b.textContent='Select';
          S.protection[c.dataset.key]=false;
        });
      }
    } else if(type==='protection'){
      S.protection[key]=sel;
    } else if(type==='sub'){
      S.subs[key]=sel;
    }
    pushHash(); update();
  };

  window.mvgMore=function(e,id){
    e.stopPropagation();
    const body=el(id);
    body.classList.toggle('show');
    e.target.textContent=body.classList.contains('show')?'Close':'Read more';
  };

  window.mvgToggleCalc=function(){
    const body=el('mvgCalcBody');
    const btn=el('mvgCollapseBtn');
    body.classList.toggle('open');
    btn.textContent=body.classList.contains('open')?'▲ Hide estimate details':'▼ Show estimate details';
  };

  window.mvgGoReview=function(){
    const hf=hasFinance();
    if(hf&&(S.loan<5000||S.loan>70000)){
      el('mvgLoanErr').classList.add('show');
      el('mvgLoanAmt').scrollIntoView({behavior:'smooth'});
      return;
    }
    pushHash(); buildReview();
    el('mvgBuilder').classList.add('hide');
    el('mvgReview').classList.add('show');
    el('mvg-root').scrollIntoView({behavior:'smooth'});
  };

  window.mvgGoBack=function(){
    el('mvgBuilder').classList.remove('hide');
    el('mvgReview').classList.remove('show');
    el('mvg-root').scrollIntoView({behavior:'smooth'});
  };

  function buildReview(){
    const hf=hasFinance();
    const F=hf?calcFinance():null;
    const Sub=calcSub();
    const fl=FL[S.freq];
    const ppy=FREQS[S.freq];

    el('mvgRevFinBlock').style.display=hf?'':'none';
    if(hf&&F){
      const selFin=Object.entries(S.finance).filter(([,v])=>v).map(([k])=>k==='buy'?'Buy next car':k==='refinance'?'Refinance existing loan':'Fund repairs').join(', ');
      el('mvgRevFin').innerHTML=`<tr><td>Finance products</td><td>${selFin}</td></tr>
<tr><td>Total to borrow</td><td>${fmtI(S.loan)}</td></tr>
<tr><td>Term</td><td>${S.term} months</td></tr>
<tr><td>Indicative rate</td><td>${S.rate}% p.a.</td></tr>
<tr class="mvg-tot"><td><strong>Finance Estimate</strong></td><td><strong>${fmt(F.periodic)} ${fl}</strong></td></tr>`;
    }

    el('mvgRevProtBlock').style.display=hf?'':'none';
    if(hf){
      const sp=Object.entries(S.protection).filter(([,v])=>v);
      el('mvgRevProt').innerHTML=sp.length
        ?sp.map(([k])=>`<tr><td>${PROT_NAMES[k]}</td><td>${k==='mbi'?'<em style="color:var(--gold)">Quote required</em>':'Selected'}</td></tr>`).join('')
        :`<tr><td colspan="2" style="color:var(--ink-muted)">No protection selected</td></tr>`;
    }

    const selSubCards=[];
    document.querySelectorAll('#mvgGallery .mvg-prod-card.sub-card.selected').forEach(c=>{
      const annual=parseFloat(c.dataset.annual)||0;
      selSubCards.push(`<tr><td>${SUB_NAMES[c.dataset.key]||c.dataset.key}</td><td>${annual>0?fmt(annual/ppy)+' '+fl:'TBC'}</td></tr>`);
    });
    el('mvgRevSub').innerHTML=selSubCards.length
      ?selSubCards.join('')+`<tr class="mvg-tot"><td><strong>Membership Estimate</strong></td><td><strong>${fmt(Sub.periodic)} ${fl}</strong></td></tr>`
      :`<tr><td colspan="2" style="color:var(--ink-muted)">No membership items selected</td></tr>`;

    let tots='';
    if(hf&&F) tots+=`<tr><td>Finance estimate</td><td>${fmt(F.periodic)} ${fl}</td></tr>`;
    tots+=`<tr><td>Membership estimate</td><td>${fmt(Sub.periodic)} ${fl}</td></tr>`;
    if(hf&&F){
      tots+=`<tr class="mvg-tot"><td><strong>Combined estimate</strong></td><td><strong>${fmt(F.periodic+Sub.periodic)} ${fl}</strong></td></tr>`;
      tots+=`<tr><td style="font-size:.74rem;color:var(--ink-muted)">Est. total repayable (finance)</td><td style="font-size:.74rem;color:var(--ink-muted)">${fmt(F.totalRep)}</td></tr>`;
    }
    el('mvgRevTotals').innerHTML=tots;
  }

  window.mvgSubmit=async function(){
    const first=el('mvgFirst').value.trim(),last=el('mvgLast').value.trim();
    const email=el('mvgEmail').value.trim(),phone=el('mvgPhone').value.trim();
    let ok=true;
    const tog=(id,s)=>el(id).classList.toggle('show',s);
    if(!first){tog('mvgFirstErr',true);ok=false;}else tog('mvgFirstErr',false);
    if(!last){tog('mvgLastErr',true);ok=false;}else tog('mvgLastErr',false);
    if(!email||!email.includes('@')){tog('mvgEmailErr',true);ok=false;}else tog('mvgEmailErr',false);
    if(!phone){tog('mvgPhoneErr',true);ok=false;}else tog('mvgPhoneErr',false);
    if(!ok)return;

    const hf=hasFinance();
    const F=hf?calcFinance():null;
    const Sub=calcSub();
    const fl=FL[S.freq];
    const selFin=Object.entries(S.finance).filter(([,v])=>v).map(([k])=>k).join(', ')||'None';
    const selProt=Object.entries(S.protection).filter(([,v])=>v).map(([k])=>PROT_NAMES[k]).join(', ')||'None';
    const selSubs=[];
    document.querySelectorAll('#mvgGallery .mvg-prod-card.sub-card.selected').forEach(c=>selSubs.push(SUB_NAMES[c.dataset.key]||c.dataset.key));

    const btn=el('mvgApplyBtn');
    btn.textContent='Sending…'; btn.disabled=true;

    const payload={name:`${first} ${last}`,email,phone,frequency:S.freq,
      finance_products:selFin,protection_selected:selProt,
      membership_items:selSubs.join(', ')||'None',
      membership_estimate:fmt(Sub.periodic)+' '+fl};
    if(hf&&F){
      payload.loan_amount=fmtI(S.loan);
      payload.loan_term=S.term+' months';
      payload.indicative_rate=S.rate+'% p.a.';
      payload.finance_estimate=fmt(F.periodic)+' '+fl;
      payload.total_repayable=fmt(F.totalRep);
      if(Sub.periodic>0) payload.combined_estimate=fmt(F.periodic+Sub.periodic)+' '+fl;
    }

    try{
      const res=await fetch('https://formspree.io/f/xeeryage',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)});
      if(res.ok){btn.innerHTML='✓ Application Submitted';btn.style.background='var(--lime)';btn.style.color='var(--ink)';}
      else throw new Error();
    }catch{btn.textContent='Submit Application';btn.disabled=false;alert('Something went wrong. Please try again.');}
  };

  /* ── Hash save/restore ── */
  function toHash(){
    const fk=Object.entries(S.finance).map(([,v])=>v?1:0).join('');
    const pk=Object.entries(S.protection).map(([,v])=>v?1:0).join('');
    const sk=Object.entries(S.subs).map(([,v])=>v?1:0).join('');
    return`mvg3-l=${S.loan}&t=${S.term}&r=${S.rate}&f=${S.freq}&fi=${fk}&pr=${pk}&s=${sk}`;
  }

  function pushHash(){
    history.replaceState(null,'',window.location.href.split('#')[0]+'#'+toHash());
  }

  function fromHash(){
    const h=window.location.hash;
    if(!h||!h.includes('mvg3-l='))return;
    const p={};
    h.slice(1).split('&').forEach(pair=>{const[k,v]=pair.split('=');p[k]=v;});
    if(p['mvg3-l']){S.loan=parseInt(p['mvg3-l']);el('mvgLoanAmt').value=S.loan;el('mvgLoanSlider').value=S.loan;}
    if(p.t){S.term=parseInt(p.t);el('mvgTermSlider').value=S.term;el('mvgTermDisp').textContent=S.term;}
    if(p.r){S.rate=parseFloat(p.r);el('mvgRateSlider').value=S.rate;el('mvgRateDisp').textContent=S.rate;}
    if(p.f&&FREQS[p.f]){
      S.freq=p.f;
      document.querySelectorAll('.mvg-freq-btn').forEach(b=>b.classList.toggle('active',b.dataset.freq===p.f));
    }
    const finKeys=['buy','refinance','repairs'];
    const protKeys=['mbi','work','health','restart','holiday'];
    const subKeys=['wof','rego','ruc','service','tyres','roadside','insurance'];
    if(p.fi&&p.fi.length>=3){
      finKeys.forEach((k,i)=>{if(p.fi[i]==='1'){S.finance[k]=true;const c=document.querySelector(`[data-key="${k}"]`);if(c){c.classList.add('selected');const b=c.querySelector('.mvg-select-btn');if(b)b.textContent='Selected';}}});
    }
    if(p.pr&&p.pr.length>=5){
      protKeys.forEach((k,i)=>{if(p.pr[i]==='1'){S.protection[k]=true;const c=document.querySelector(`[data-type="protection"][data-key="${k}"]`);if(c){c.classList.remove('locked');c.classList.add('selected');const b=c.querySelector('.mvg-select-btn');if(b)b.textContent='Selected';}}});
    }
    if(p.s&&p.s.length>=7){
      subKeys.forEach((k,i)=>{if(p.s[i]==='1'){S.subs[k]=true;const c=document.querySelector(`[data-type="sub"][data-key="${k}"]`);if(c){c.classList.add('selected');const b=c.querySelector('.mvg-select-btn');if(b)b.textContent='Selected';}}});
    }
    if(hasFinance()){
      document.querySelectorAll('[data-type="protection"]').forEach(c=>c.classList.remove('locked'));
      el('mvgLockNote').style.display='none';
    }
  }

  /* ── Event listeners ── */
  el('mvgLoanAmt').addEventListener('input',function(){S.loan=parseFloat(this.value)||0;el('mvgLoanSlider').value=Math.min(70000,Math.max(5000,S.loan));el('mvgLoanErr').classList.remove('show');pushHash();update();});
  el('mvgLoanSlider').addEventListener('input',function(){S.loan=parseInt(this.value);el('mvgLoanAmt').value=S.loan;pushHash();update();});
  el('mvgTermSlider').addEventListener('input',function(){S.term=parseInt(this.value);el('mvgTermDisp').textContent=S.term;pushHash();update();});
  el('mvgRateSlider').addEventListener('input',function(){S.rate=parseFloat(this.value);el('mvgRateDisp').textContent=S.rate;pushHash();update();});
  el('mvgFreq').addEventListener('click',function(e){const b=e.target.closest('.mvg-freq-btn');if(!b)return;document.querySelectorAll('.mvg-freq-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');S.freq=b.dataset.freq;pushHash();update();});
  el('mvgModal').addEventListener('click',function(e){if(e.target===this)mvgCloseModal();});

  window.mvgCopyLink=function(){pushHash();navigator.clipboard.writeText(window.location.href).then(()=>{const t=el('mvgCopyToast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}).catch(()=>prompt('Copy this link:',window.location.href));};
  window.mvgOpenModal=function(){pushHash();el('mvgModal').classList.add('show');el('mvgEmailToast').classList.remove('show');};
  window.mvgCloseModal=function(){el('mvgModal').classList.remove('show');};
  window.mvgSendEmail=function(){
    const email=el('mvgSaveEmail').value.trim();
    if(!email||!email.includes('@')){alert('Please enter a valid email address.');return;}
    window.location.href=`mailto:${email}?subject=${encodeURIComponent('Your MOVOGO Plan')}&body=${encodeURIComponent('Here\'s a link to your MOVOGO plan:\n\n'+window.location.href)}`;
    el('mvgEmailToast').classList.add('show');
    setTimeout(mvgCloseModal,2500);
  };

  fromHash();
  update();

})();
