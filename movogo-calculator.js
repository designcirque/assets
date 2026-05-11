/* ============================================================
   MOVOGO Plan Builder — movogo-calculator.js
   Host at: https://cdn.jsdelivr.net/gh/designcirque/assets@main/movogo-calculator.js
   Webflow embed: <div id="mvg-root"></div><script src="..." defer></script>
   ============================================================ */

(function () {

  /* ── CSS ── */
  const CSS = `
#mvg-root {
  --g900:#014b43;--g700:#0A665A;
  --lime:#b8d87c;--lime1:#EDF5D5;--lime0:#F7FBEB;
  --cream:#f2ece9;--cream3:#F8F4F0;
  --coral:#e47250;--coral1:#FBE3DA;
  --blue:#4E89BF;--blue1:#DCE8F2;
  --ink:#1A2824;--ink-s:#4F605C;--ink-f:#8A958F;
  --paper:#ffffff;--line:#E5E0D8;
  --rs:14px;--rm:20px;--rl:28px;--rxl:36px;
  font-family:area-normal,sans-serif;
  color:#333;background:transparent;box-sizing:border-box;
  -webkit-font-smoothing:antialiased;
}
#mvg-root *,#mvg-root *::before,#mvg-root *::after{box-sizing:border-box;font-family:area-normal,sans-serif;}
#mvg-root h2,#mvg-root h3,#mvg-root h4,#mvg-root p{margin:0;}
#mvg-root .mvg-wrap{}
#mvg-root .build{padding:72px 0;background:transparent;}
#mvg-root .build-head{text-align:left;margin-bottom:48px;}
#mvg-root .build-head h2{font-size:clamp(28px,4vw,40px);font-weight:800;color:var(--g900);letter-spacing:-0.02em;margin-bottom:10px;}
#mvg-root .build-head p{font-size:17px;color:#333;font-weight:600;}
#mvg-root .categories{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start;}
@media(max-width:860px){#mvg-root .categories{grid-template-columns:1fr;}}
#mvg-root .category{border-radius:var(--rxl);padding:0;overflow:hidden;}
#mvg-root .category--membership{background:var(--lime0);}
#mvg-root .category--finance{background:var(--cream3);}
#mvg-root .category-head{width:100%;display:flex;align-items:center;gap:16px;padding:24px 28px;}
#mvg-root .category-title-wrap{flex:1;}
#mvg-root .category-title{font-size:22px;font-weight:800;color:var(--g900);letter-spacing:-0.01em;margin-bottom:4px;}
#mvg-root .category-sub{font-size:13px;color:#333;font-weight:600;line-height:1.4;}


#mvg-root .category-body{padding:0 28px 28px;}

#mvg-root .category-sub-heading{font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:var(--g900);font-weight:800;margin:24px 0 14px;padding-left:2px;}
#mvg-root .addon-notice{background:var(--cream);border-radius:var(--rs);padding:12px 16px;font-size:13px;color:#333;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:10px;border:1.5px solid var(--line);}
#mvg-root .addon-notice.active{background:var(--lime1);border-color:var(--lime);color:var(--g900);}
#mvg-root .cards-col{display:grid;grid-template-columns:1fr 1fr;gap:28px 16px;}
@media(max-width:480px){#mvg-root .cards-col{grid-template-columns:1fr;}}
#mvg-root .card{background:var(--paper);border-radius:var(--rm);padding:22px 18px 18px;position:relative;transition:transform 0.2s,box-shadow 0.2s;display:flex;flex-direction:column;margin-top:30px;box-shadow:0 2px 0 rgba(1,75,67,0.04);min-height:220px;cursor:pointer;border:2px solid transparent;}
#mvg-root .card:hover:not(.disabled){transform:translateY(-3px) rotate(-0.5deg);box-shadow:0 12px 28px rgba(1,75,67,0.12);}
#mvg-root .card.selected{border-color:var(--g900);}
#mvg-root .category--membership .card.selected{border-color:var(--lime);}
#mvg-root .card.disabled{opacity:0.5;cursor:not-allowed;}
#mvg-root .card-wonky{position:absolute;top:-30px;left:16px;z-index:2;transform:rotate(-6deg);transition:transform 0.25s;}
#mvg-root .card:hover:not(.disabled) .card-wonky{transform:rotate(4deg) scale(1.05);}
#mvg-root .wonky{position:relative;display:inline-flex;align-items:center;justify-content:center;}
#mvg-root .wonky::before{content:"";position:absolute;inset:0;border-radius:62% 38% 54% 46% / 58% 42% 58% 42%;z-index:0;}
#mvg-root .wonky--alt::before{border-radius:44% 56% 62% 38% / 52% 40% 60% 48%;}
#mvg-root .wonky--alt2::before{border-radius:56% 44% 38% 62% / 42% 58% 42% 58%;}
#mvg-root .wonky--alt3::before{border-radius:48% 52% 58% 42% / 62% 42% 58% 38%;}
#mvg-root .wonky--alt4::before{border-radius:58% 42% 48% 52% / 38% 62% 38% 62%;}
#mvg-root .wonky--green::before{background:var(--g900);}
#mvg-root .wonky--lime::before{background:var(--lime);}
#mvg-root .wonky--coral::before{background:var(--coral);}
#mvg-root .wonky--cream::before{background:var(--cream);}
#mvg-root .wonky--blue::before{background:var(--blue);}
#mvg-root .wonky--md{width:72px;height:72px;}
#mvg-root .wonky--sm{width:44px;height:44px;}
#mvg-root .wonky .emoji{position:relative;z-index:1;font-size:28px;line-height:1;}
#mvg-root .wonky--sm .emoji{font-size:20px;}
#mvg-root .card-sticker{position:absolute;top:-10px;right:14px;z-index:3;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;padding:5px 10px;border-radius:999px;}
#mvg-root .card-sticker--soon{background:var(--coral);color:#fff;}
#mvg-root .card-sticker--requires{background:var(--blue);color:#fff;font-size:9px;}
#mvg-root .card-body{margin-top:52px;flex:1;display:flex;flex-direction:column;}
#mvg-root .card h3{font-size:16px;font-weight:800;color:var(--g900);margin-bottom:4px;letter-spacing:-0.005em;line-height:1.2;}
#mvg-root .card-subtitle{font-size:11px;color:var(--coral);font-weight:700;margin-bottom:6px;}
#mvg-root .card p{color:#333;font-size:13px;font-weight:600;flex:1;line-height:1.5;margin-bottom:10px;}
#mvg-root .card-learn{font-size:12px;font-weight:700;color:var(--g900);text-decoration:none;display:inline-block;margin-bottom:10px;opacity:0.65;transition:opacity 0.15s;}
#mvg-root .card-learn:hover{opacity:1;}
#mvg-root .card-foot{margin-top:auto;padding-top:12px;border-top:1px dashed rgba(1,75,67,0.15);display:flex;align-items:center;justify-content:space-between;gap:8px;}
#mvg-root .card-price{font-weight:800;color:var(--g900);font-size:14px;}
#mvg-root .card-price small{font-weight:600;color:#333;font-size:11px;display:block;margin-top:-2px;}
#mvg-root .price-prefix{font-size:10px;font-weight:600;color:var(--ink-f);text-transform:uppercase;letter-spacing:0.05em;display:block;}
#mvg-root .pricing-note{font-size:11px;color:var(--ink-f);font-weight:600;font-style:italic;}
#mvg-root .select-btn{width:32px;height:32px;border-radius:999px;flex-shrink:0;border:2.5px solid var(--g900);background:transparent;cursor:pointer;transition:all 0.15s;position:relative;}
#mvg-root .select-btn::before{content:'+';position:absolute;top:-7.5px;left:5.5px;font-size:31px;font-weight:700;color:var(--g900);line-height:1;}
#mvg-root .card.selected .select-btn{background:var(--g900);border-color:var(--g900);}
#mvg-root .category--membership .card.selected .select-btn{background:var(--lime);border-color:var(--lime);}
#mvg-root .card.selected .select-btn::before{content:'✓';font-size:14px;font-weight:900;color:#fff;}
#mvg-root .category--membership .card.selected .select-btn::before{color:var(--g900);}
#mvg-root .estimate-wrap{margin-top:48px;}
#mvg-root .estimate{background:var(--g900);border-radius:var(--rl);padding:28px 32px;color:#fff;}
#mvg-root .empty-estimate{text-align:center;}
#mvg-root .empty-estimate-label{font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.5);margin-bottom:6px;font-weight:700;}
#mvg-root .empty-estimate-amount{font-size:32px;font-weight:800;color:rgba(255,255,255,0.25);letter-spacing:-0.02em;line-height:1;margin-bottom:12px;}
#mvg-root .empty-estimate-amount .estimate-total-freq{font-size:15px;font-weight:600;color:rgba(255,255,255,0.3);margin-left:6px;}
#mvg-root .empty-estimate-prompt{font-size:14px;color:rgba(255,255,255,0.5);font-weight:600;margin-bottom:20px;}
#mvg-root .empty-estimate-cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
#mvg-root .btn-ghost-light{font-size:14px;font-weight:700;color:rgba(255,255,255,0.7);text-decoration:none;border:none;background:none;cursor:pointer;padding:13px 0;transition:color 0.15s;font-family:inherit;}
#mvg-root .btn-ghost-light:hover{color:#fff;}
#mvg-root .estimate-top{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:20px;margin-bottom:20px;}
#mvg-root .estimate-total-label{font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.5);font-weight:700;margin-bottom:4px;}
#mvg-root .estimate-total-amount{font-size:32px;font-weight:800;letter-spacing:-0.02em;line-height:1;}
#mvg-root .estimate-total-freq{font-size:15px;font-weight:600;color:rgba(255,255,255,0.6);margin-left:6px;}
#mvg-root .estimate-payday{font-size:12px;color:rgba(255,255,255,0.4);font-weight:600;margin-top:6px;}
#mvg-root .freq-toggle{display:flex;background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.2);border-radius:var(--rs);padding:3px;gap:3px;}
#mvg-root .freq-toggle button{padding:8px 14px;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;background:transparent;color:rgba(255,255,255,0.6);transition:all 0.2s;font-family:inherit;}
#mvg-root .freq-toggle button.active{background:#fff;color:var(--g900);}
#mvg-root .estimate-breakdown{display:flex;gap:24px;flex-wrap:wrap;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.12);}
#mvg-root .estimate-breakdown > div{display:flex;flex-direction:column;gap:2px;}
#mvg-root .estimate-breakdown .label{font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:rgba(255,255,255,0.45);font-weight:700;}
#mvg-root .estimate-breakdown .amount{font-size:20px;font-weight:800;}
#mvg-root .estimate-guide{font-size:12px;color:rgba(255,255,255,0.4);font-weight:600;line-height:1.5;margin-bottom:16px;}
#mvg-root .estimate-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;}
#mvg-root .estimate-clear{margin-left:auto;font-size:12px;font-weight:700;color:rgba(255,255,255,0.45);background:none;border:none;cursor:pointer;font-family:inherit;padding:8px 0;transition:color 0.15s;}
#mvg-root .estimate-clear:hover{color:rgba(255,255,255,0.8);}
#mvg-root .btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:999px;font-weight:700;font-size:14px;cursor:pointer;border:none;text-decoration:none;font-family:inherit;transition:transform 0.15s,box-shadow 0.15s,background 0.15s;line-height:1;}
#mvg-root .btn:active{transform:translateY(1px);}
#mvg-root .btn-primary{background:var(--g900);color:#fff;}
#mvg-root .btn-primary:hover{background:var(--g700);}
#mvg-root .btn-lime{background:var(--lime);color:var(--g900);}
#mvg-root .btn-lime:hover{background:#A6C76A;}
#mvg-root .btn-coral{background:var(--coral);color:#fff;}
#mvg-root .btn-outline{background:#fff;color:var(--g900);border:2px solid var(--g900);padding:11px 26px;}
#mvg-root .btn-outline:hover{background:var(--g900);color:#fff;}
#mvg-root .btn-sm{padding:9px 18px;font-size:13px;}
#mvg-root .calc{background:var(--cream);border-radius:var(--rl);padding:28px 32px;margin-top:20px;border:1.5px solid var(--line);}
#mvg-root .calc.hidden{display:none;}
#mvg-root .calc-head{display:flex;align-items:center;gap:14px;margin-bottom:10px;}
#mvg-root .calc-head h3{font-size:20px;font-weight:800;color:var(--g900);}
#mvg-root .calc-helper{font-size:14px;color:#333;font-weight:600;line-height:1.5;margin-bottom:20px;}
#mvg-root .calc-summary{background:var(--paper);border-radius:var(--rm);padding:18px 22px;margin-bottom:22px;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;}
#mvg-root .calc-summary.in-plan{border-color:var(--g900);}
#mvg-root .calc-summary-label{font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-f);font-weight:700;margin-bottom:3px;}
#mvg-root .calc-summary-amount{font-size:28px;font-weight:800;color:var(--g900);line-height:1;}
#mvg-root .calc-summary-freq{font-size:13px;font-weight:600;color:#333;margin-left:5px;}
#mvg-root .calc-summary-cta{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
#mvg-root .calc-summary-cta-text{font-size:13px;font-weight:600;color:#333;}
#mvg-root .sliders{display:grid;grid-template-columns:1fr 1fr 1fr;gap:28px;margin-bottom:20px;}
@media(max-width:640px){#mvg-root .sliders{grid-template-columns:1fr;}}
#mvg-root .slider-group label{display:block;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#333;font-weight:700;margin-bottom:4px;}
#mvg-root .slider-value{font-size:24px;font-weight:800;color:var(--g900);line-height:1;margin-bottom:8px;}
#mvg-root .slider-value small{font-size:14px;font-weight:600;color:#333;}
#mvg-root .slider-range{display:flex;justify-content:space-between;font-size:11px;color:var(--ink-f);font-weight:600;margin-top:4px;}
#mvg-root .slider-note{font-size:11px;color:var(--ink-f);font-weight:600;margin-top:6px;font-style:italic;}
#mvg-root input[type=range]{-webkit-appearance:none;width:100%;height:5px;border-radius:3px;background:var(--line);outline:none;cursor:pointer;}
#mvg-root input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:var(--g900);cursor:pointer;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.2);transition:transform 0.15s;}
#mvg-root input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.15);}
#mvg-root .disclaimer{font-size:11px;color:var(--ink-f);line-height:1.6;font-weight:600;padding-top:16px;border-top:1px solid var(--line);}
#mvg-root .guide-note{background:var(--lime1);border-radius:var(--rs);padding:12px 16px;font-size:13px;color:var(--g900);font-weight:600;margin-bottom:16px;border:1px solid var(--lime);}
#mvg-root .itemised{margin-bottom:16px;}
#mvg-root .itemised-row{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px dashed rgba(1,75,67,0.12);font-size:14px;font-weight:600;}
#mvg-root .itemised-row .item{color:#333;font-weight:600;}
#mvg-root .itemised-row .amt{color:var(--g900);font-weight:700;}
#mvg-root .itemised-total{display:flex;justify-content:space-between;align-items:center;padding:12px 0 0;font-size:16px;font-weight:800;color:var(--g900);}

#mvg-root .mvg-overlay{display:none;position:fixed;inset:0;background:rgba(15,25,35,0.5);z-index:9999;align-items:center;justify-content:center;padding:16px;}
#mvg-root .mvg-overlay.show{display:flex;}
#mvg-root .mvg-modal{background:var(--paper);border-radius:var(--rl);padding:32px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.2);}
#mvg-root .mvg-modal h3{font-size:22px;font-weight:800;color:var(--g900);margin-bottom:6px;}
#mvg-root .mvg-modal .modal-sub{font-size:14px;color:#333;font-weight:600;margin-bottom:22px;line-height:1.4;}
#mvg-root .mvg-field{margin-bottom:14px;}
#mvg-root .mvg-lbl{display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#333;margin-bottom:5px;}
#mvg-root .mvg-input{width:100%;padding:12px 18px;border-radius:999px;border:2px solid var(--line);font-size:15px;font-family:inherit;color:var(--ink);background:#fff;outline:none;transition:border-color 0.15s;font-weight:600;}
#mvg-root .mvg-input:focus{border-color:var(--g900);}
#mvg-root .mvg-input.error{border-color:var(--coral);}
#mvg-root .mvg-error{font-size:12px;color:var(--coral);font-weight:600;margin-top:4px;display:none;padding-left:18px;}
#mvg-root .mvg-error.show{display:block;}
#mvg-root .modal-btns{display:flex;gap:10px;margin-top:20px;}
#mvg-root .modal-btns .btn{flex:1;justify-content:center;}
#mvg-root .mvg-success{display:none;background:var(--lime1);border:2px solid var(--lime);border-radius:var(--rm);padding:16px 20px;margin-top:14px;color:var(--g900);font-size:14px;font-weight:600;}
#mvg-root .mvg-success.show{display:block;}
`;
  const styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  /* ── Product data ── */
  const MEMBERSHIP = [
    { id:'wof',       title:'WoF / CoF',           pill:'WoF / CoF',    desc:'Never miss a WOF. We track it, remind you, and help you book.',                  price:1.73,  emoji:'📋', wonky:'wonky--lime wonky--alt' },
    { id:'rego',      title:'Registration',         pill:'Rego',         desc:'We take care of your annual rego. No year-end bill to dread.',                    price:3.33,  emoji:'🚙', wonky:'wonky--coral wonky--alt2' },
    { id:'ruc',       title:'Road User Charges',    pill:'RUC',          desc:'For diesel, electric, and plug-in hybrids. We track and pay your RUC.',          price:14.62, emoji:'🛣️', wonky:'wonky--cream wonky--alt3' },
    { id:'service',   title:'Servicing & Repairs',  pill:'Servicing',    desc:'Regular servicing keeps your car reliable. We budget for it and help you book.', price:5.77,  emoji:'🔧', wonky:'wonky--blue wonky--alt4' },
    { id:'tyres',     title:'Tyres & Repairs',      pill:'Tyres',        desc:'Budget for tyres and small repairs before the bill lands.',                      price:null,  soon:true, emoji:'⚫', wonky:'wonky--lime wonky--alt' },
    { id:'roadside',  title:'Roadside Assistance',  pill:'Roadside',     desc:'Help when you need it. Breakdowns, lockouts, tows. 24/7 across NZ.',             price:1.25,  emoji:'🚨', wonky:'wonky--coral wonky--alt2' },
    { id:'insurance', title:'Insurance',            pill:'Insurance',    desc:'Comprehensive vehicle cover, bundled into your regular payment. Coming soon.',    price:null,  soon:true, emoji:'🛡️', wonky:'wonky--green wonky--alt3' },
  ];
  const FINANCE_LOANS = [
    { id:'buy',     title:'Buy my next car',         pill:'Buy a car',    desc:'Finance to buy your next vehicle. Regular repayments timed to your payday.',  price:null, isLoan:true, emoji:'🔑', wonky:'wonky--lime wonky--alt' },
    { id:'refi',    title:'Refinance existing loan', pill:'Refinance',    desc:'Replace your current car loan. Potentially lower repayments.',                price:null, isLoan:true, emoji:'↻',  wonky:'wonky--coral wonky--alt2' },
    { id:'repairs', title:'Fund repairs',            pill:'Fund repairs', desc:'Finance unexpected or planned repairs and spread the cost.',                   price:null, isLoan:true, emoji:'🛠️', wonky:'wonky--blue wonky--alt3' },
  ];
  const FINANCE_ADDONS = [
    { id:'provident',  title:'Mechanical Breakdown Insurance', pill:'Mechanical cover',  subtitle:'by Provident Insurance', desc:"Covers unexpected failures after the manufacturer's warranty.",       requiresFinance:true, emoji:'⚙️', wonky:'wonky--cream wonky--alt4' },
    { id:'redundancy', title:'Redundancy Waiver',              pill:'Job cover',          desc:"We waive your loan repayments if you're made involuntarily redundant.",             requiresFinance:true, emoji:'💼', wonky:'wonky--lime wonky--alt' },
    { id:'health',     title:'Health Waiver',                  pill:'Health cover',       desc:'We waive your repayments if illness or injury stops you working.',                   requiresFinance:true, emoji:'❤️', wonky:'wonky--coral wonky--alt2' },
    { id:'totalloss',  title:'Total Loss Waiver',              pill:'Total loss cover',   desc:'If your car is written off or stolen, we waive the outstanding balance.',             requiresFinance:true, emoji:'🚨', wonky:'wonky--blue wonky--alt3' },
    { id:'holiday',    title:'Repayment Holiday',              pill:'Repayment holiday',  desc:'Pause your repayments for an approved period when life gets tough.',                  requiresFinance:true, emoji:'⏸️', wonky:'wonky--green wonky--alt4' },
  ];
  const ALL_PRODUCTS = [...MEMBERSHIP, ...FINANCE_LOANS, ...FINANCE_ADDONS];

  const productUrl = id => '/products/' + (id || 'overview');
  const FREQ_MULT   = { weekly:1, fortnightly:2, monthly:52/12 };
  const FREQ_LABEL  = { weekly:'per week', fortnightly:'per fortnight', monthly:'per month' };
  const FREQ_SUFFIX = { weekly:'/week', fortnightly:'/fortnight', monthly:'/month' };

  const S = {
    selected: new Set(), freq:'weekly',
    borrow:20000, term:60, rate:14.95, path:'finance',
    financeCalcOpen:false, expanded:{ membership:true, finance:true }
  };

  /* ── Inject HTML ── */
  const root = document.getElementById('mvg-root');
  if (!root) { console.error('MOVOGO: #mvg-root not found'); return; }

  root.innerHTML = `
<div class="mvg-overlay" id="mvgModal">
  <div class="mvg-modal">
    <h3>Almost there 👋</h3>
    <p class="modal-sub">Give us a few details and we'll be in touch to set up your membership.</p>
    <div class="mvg-field"><label class="mvg-lbl" for="mvgName">Name</label><input class="mvg-input" type="text" id="mvgName" placeholder="Jane Smith"><div class="mvg-error" id="mvgNameErr">Please enter your name.</div></div>
    <div class="mvg-field"><label class="mvg-lbl" for="mvgPhone">Phone</label><input class="mvg-input" type="tel" id="mvgPhone" placeholder="021 123 4567"><div class="mvg-error" id="mvgPhoneErr">Please enter your phone number.</div></div>
    <div class="mvg-field"><label class="mvg-lbl" for="mvgEmail">Email</label><input class="mvg-input" type="email" id="mvgEmail" placeholder="jane@example.com"><div class="mvg-error" id="mvgEmailErr">Please enter a valid email.</div></div>
    <div class="mvg-success" id="mvgSuccess">✓ Thanks! We'll be in touch shortly.</div>
    <div class="modal-btns">
      <button class="btn btn-outline btn-sm" onclick="mvgCloseModal()">Cancel</button>
      <button class="btn btn-primary btn-sm" id="mvgModalSubmit" onclick="mvgSubmitModal()">Send enquiry</button>
    </div>
  </div>
</div>

<section class="build">
  <div class="mvg-wrap">
    <div class="build-head"><h2>Here's what you can get.</h2><p>Mix and match whatever suits your situation. Your estimate builds as you go.</p></div>
    <div class="categories">
      <div class="category category--membership" data-category="membership">
      <div class="category-head">
          <div class="wonky wonky--md wonky--lime"><span class="emoji">🔧</span></div>
          <div class="category-title-wrap"><div class="category-title">Membership</div><div class="category-sub">Look after the car you've got, or the one you're financing. Spread across your regular payment.</div></div>
        </div>
        <div class="category-body" id="membershipBody"><div class="cards-col" id="membershipGrid"></div></div>
      </div>
      <div class="category category--finance" data-category="finance">
      <div class="category-head">
          <div class="wonky wonky--md wonky--coral wonky--alt"><span class="emoji">🔑</span></div>
          <div class="category-title-wrap"><div class="category-title">Finance</div><div class="category-sub">Borrow for a car, refinance, or fund repairs. Plus optional loan cover.</div></div>
        </div>
        <div class="category-body" id="financeBody">
          <div class="cards-col" id="financeGrid"></div>
          <div class="category-sub-heading">Optional loan cover</div>
          <div class="addon-notice" id="addonNotice"><span id="addonIcon">🔒</span><span id="addonText">These need a Movogo loan. Pick a finance product above to add them.</span></div>
          <div class="cards-col" id="addonsGrid"></div>
        </div>
      </div>
    </div>

    <div class="estimate-wrap">
      <div class="estimate">
        <div class="empty-estimate" id="emptyEstimate">
          <div class="empty-estimate-label">Your estimate</div>
          <div class="empty-estimate-amount">$0<span class="estimate-total-freq">per week</span></div>
          <div class="empty-estimate-prompt">Pick products above to build your estimate, or jump in here:</div>
          <div class="empty-estimate-cta">
            <button type="button" class="btn btn-lime" id="ctaConfigureLoan">Configure your loan</button>
            <button type="button" class="btn-ghost-light" onclick="mvgHandleApply()">Apply now →</button>
          </div>
        </div>
        <div id="filledEstimate" style="display:none">
          <div class="estimate-top">
            <div>
              <div class="estimate-total-label">Your estimate so far</div>
              <div><span class="estimate-total-amount" id="totalAmount">$0</span><span class="estimate-total-freq" id="totalFreq">per week</span></div>
              <div class="estimate-payday">Shown by payday. Pick the cadence that matches yours.</div>
            </div>
            <div class="freq-toggle" id="freqToggle">
              <button class="active" data-freq="weekly">Weekly</button>
              <button data-freq="fortnightly">Fortnightly</button>
              <button data-freq="monthly">Monthly</button>
            </div>
          </div>
          <div class="estimate-breakdown" id="breakdown"></div>
          <div class="estimate-guide">This is a rough guide. Your actual cost depends on your car, how far you drive, and your credit assessment for any finance.</div>
          <div class="estimate-actions">
            <button class="btn btn-lime" onclick="mvgHandleApply()">Get started →</button>
            <button class="estimate-clear" id="clearAllBtn">Clear selection</button>
          </div>
        </div>
      </div>
    </div>

    <div class="calc hidden" id="financeCalc">
      <div class="calc-head"><div class="wonky wonky--sm wonky--coral"><span class="emoji" style="font-size:18px">$</span></div><h3>Your finance details</h3></div>
      <p class="calc-helper">Adjust the values below to see how your regular repayment changes. These are indicative only — your actual offer depends on a credit assessment and the loan documents you agree to.</p>
      <div class="calc-summary" id="calcSummary">
        <div><div class="calc-summary-label">Estimated repayment</div><div><span class="calc-summary-amount" id="calcSummaryAmount">$0</span><span class="calc-summary-freq" id="calcSummaryFreq">per week</span></div></div>
        <div class="calc-summary-cta" id="calcSummaryCta"><span class="calc-summary-cta-text">Not added to your plan yet.</span><button type="button" class="btn btn-lime btn-sm" id="addCarShortcut">Add a car to my plan</button></div>
      </div>
      <div class="sliders">
        <div class="slider-group"><label>Total to borrow</label><div class="slider-value">$<span id="borrowVal">20,000</span></div><input type="range" id="borrowSlider" min="5000" max="70000" step="1000" value="20000"><div class="slider-range"><span>$5,000</span><span>$70,000</span></div></div>
        <div class="slider-group"><label>Loan term</label><div class="slider-value"><span id="termVal">60</span> <small>months</small></div><input type="range" id="termSlider" min="36" max="72" step="6" value="60"><div class="slider-range"><span>36 mo</span><span>72 mo</span></div></div>
        <div class="slider-group"><label>Interest rate</label><div class="slider-value"><span id="rateVal">14.95</span><small>% p.a.</small></div><input type="range" id="rateSlider" min="7.95" max="24.95" step="0.5" value="14.95"><div class="slider-range"><span>7.95%</span><span>24.95%</span></div><div class="slider-note">Your actual rate is determined by your credit assessment.</div></div>
      </div>
      <div class="disclaimer">This is an estimate, not an offer of credit. Lending is provided by Movogo Finance Limited (NZCN 9357507, NZBN 9429052988677, FSP1011510). Any loan is subject to credit approval, responsible lending assessment, and standard terms and conditions. Under the CCCFA 2003, you have a statutory right to cancel your loan within 7 working days of receiving the disclosure. Movogo Finance Limited is a member of Financial Services Complaints Limited (FSCL) for dispute resolution.</div>
    </div>

    <div class="calc hidden" id="membershipCalc">
      <div class="calc-head"><div class="wonky wonky--sm wonky--lime"><span class="emoji" style="font-size:18px">★</span></div><h3>Your membership details</h3></div>
      <p class="calc-helper">Here's what you've selected. Prices are estimates only, spread evenly across your regular payment.</p>
      <div class="guide-note">This is a rough guide based on an average vehicle and typical driving patterns. Your actual price depends on your car, where you live, how far you drive, and provider pricing. We'll confirm your exact costs before you sign up.</div>
      <div class="itemised" id="itemised"></div>
      <div class="disclaimer">Membership estimates are indicative only. Actual prices will vary depending on your vehicle (make, model, age, fuel type), your address, your distance driven, and provider pricing. This is not a quote or an offer to provide services.</div>
    </div>

  </div>
</section>

`;

  /* ── Helpers ── */
  const el = id => document.getElementById(id);
  const fmt = n => n.toLocaleString('en-NZ');
  const fmtAmt = n => '$' + (Math.round(n*100)/100).toFixed(2);
  const hasLoan = () => FINANCE_LOANS.some(p => S.selected.has(p.id));
  const hasAnyMem = () => MEMBERSHIP.some(p => S.selected.has(p.id) && !p.soon && p.price !== null);

  function calcFinanceWeekly() {
    const r = S.rate/100/12, n = S.term;
    return ((S.borrow * r) / (1 - Math.pow(1+r,-n))) * 12/52;
  }

  function cardHTML(p, disabled) {
    const sel = S.selected.has(p.id);
    let sticker = '';
    if (p.soon) sticker = '<div class="card-sticker card-sticker--soon">Coming soon</div>';
    else if (p.requiresFinance && disabled) sticker = '<div class="card-sticker card-sticker--requires">Needs a loan</div>';
    const m = FREQ_MULT[S.freq], suf = FREQ_SUFFIX[S.freq];
    let priceHTML = p.soon ? '<div class="pricing-note">Pricing TBC</div>'
      : p.price != null ? `<div class="card-price"><span class="price-prefix">Around</span>$${(p.price*m).toFixed(2)}<small>${suf}</small></div>`
      : p.requiresFinance ? '<div class="pricing-note">Included with loan</div>'
      : '<div class="pricing-note">Calculated at quote</div>';
    return `<div class="${['card',sel?'selected':'',disabled?'disabled':''].filter(Boolean).join(' ')}" data-id="${p.id}">
      <div class="card-wonky"><div class="wonky wonky--md ${p.wonky}"><span class="emoji">${p.emoji}</span></div></div>
      ${sticker}
      <div class="card-body">
        <h3>${p.title}</h3>
        ${p.subtitle?`<div class="card-subtitle">${p.subtitle}</div>`:''}
        <p>${p.desc}</p>
        <a class="card-learn" href="${productUrl(p.id)}" onclick="event.stopPropagation()">Learn more →</a>
        <div class="card-foot">${priceHTML}<button class="select-btn" ${disabled?'disabled':''} aria-label="${sel?'Deselect':'Select'} ${p.title}"></button></div>
      </div></div>`;
  }

  function renderGrids() {
    const loan = hasLoan();
    el('membershipGrid').innerHTML = MEMBERSHIP.map(p => cardHTML(p,false)).join('');
    el('financeGrid').innerHTML = FINANCE_LOANS.map(p => cardHTML(p,false)).join('');
    el('addonsGrid').innerHTML = FINANCE_ADDONS.map(p => cardHTML(p,!loan)).join('');
    el('addonNotice').classList.toggle('active',loan);
    el('addonText').textContent = loan ? "Great — you've got a loan. You can now add these optional covers." : "These need a Movogo loan. Pick a finance product above to add them.";
    el('addonIcon').textContent = loan ? '✨' : '🔒';
    attachCardHandlers();
  }

  function attachCardHandlers() {
    document.querySelectorAll('#mvg-root .card').forEach(card => {
      if (card.classList.contains('disabled')) return;
      card.addEventListener('click', e => { if(e.target.classList.contains('card-learn'))return; toggleSelect(card.dataset.id); });
    });
  }

  function toggleSelect(id) {
    if (S.selected.has(id)) { S.selected.delete(id); if(!hasLoan()) FINANCE_ADDONS.forEach(p=>S.selected.delete(p.id)); }
    else S.selected.add(id);
    renderGrids(); renderEstimate();
  }

  function renderEstimate() {
    const loan = hasLoan(), mem = hasAnyMem();
    const m = FREQ_MULT[S.freq], fl = FREQ_LABEL[S.freq];
    const finW = loan ? calcFinanceWeekly() : 0;
    const memW = MEMBERSHIP.filter(p=>S.selected.has(p.id)&&!p.soon&&p.price!==null).reduce((a,p)=>a+p.price,0);
    const any = S.selected.size > 0;
    el('emptyEstimate').style.display = any ? 'none' : 'block';
    el('filledEstimate').style.display = any ? 'block' : 'none';
    if (any) {
      el('totalAmount').textContent = fmtAmt((finW+memW)*m);
      el('totalFreq').textContent = fl;
      const parts = [];
      if (loan) parts.push(`<div><span class="label">Finance</span><span class="amount">${fmtAmt(finW*m)}</span></div>`);
      if (mem) parts.push(`<div><span class="label">Membership</span><span class="amount">${fmtAmt(memW*m)}</span></div>`);
      el('breakdown').innerHTML = parts.join('');
    }
    el('financeCalc').classList.toggle('hidden', !loan && !S.financeCalcOpen);
    el('membershipCalc').classList.toggle('hidden', !mem);
    const liveW = calcFinanceWeekly();
    el('calcSummaryAmount').textContent = fmtAmt(liveW*m);
    el('calcSummaryFreq').textContent = fl;
    el('calcSummary').classList.toggle('in-plan',loan);
    el('calcSummaryCta').querySelector('.calc-summary-cta-text').textContent = loan ? 'Added to your plan.' : 'Not added to your plan yet.';
    el('addCarShortcut').style.display = loan ? 'none' : 'inline-flex';
    if (mem) {
      const items = MEMBERSHIP.filter(p=>S.selected.has(p.id)&&!p.soon&&p.price!==null);
      const tbc = MEMBERSHIP.filter(p=>S.selected.has(p.id)&&(p.soon||p.price===null));
      el('itemised').innerHTML = items.map(p=>`<div class="itemised-row"><span class="item">${p.title}</span><span class="amt">${fmtAmt(p.price*m)} ${fl}</span></div>`).join('')
        + tbc.map(p=>`<div class="itemised-row"><span class="item">${p.title}</span><span class="amt" style="color:var(--ink-f)">TBC</span></div>`).join('')
        + `<div class="itemised-total"><span>Membership estimate</span><span>${fmtAmt(memW*m)} ${fl}</span></div>`;
    }
  }

  /* ── Apply routing ── */
  window.mvgHandleApply = function() {
    if (hasLoan()) {
      const p = new URLSearchParams({
        finance: FINANCE_LOANS.filter(p=>S.selected.has(p.id)).map(p=>p.id).join(','),
        addons:  FINANCE_ADDONS.filter(p=>S.selected.has(p.id)).map(p=>p.id).join(','),
        membership: MEMBERSHIP.filter(p=>S.selected.has(p.id)).map(p=>p.id).join(','),
        borrow: S.borrow, term: S.term, rate: S.rate, freq: S.freq
      });
      window.location.href = 'https://apply.movogo.co.nz/?' + p.toString();
    } else if (S.selected.size > 0) {
      mvgOpenModal();
    } else {
      document.querySelector('#mvg-root .build-head').scrollIntoView({behavior:'smooth'});
    }
  };

  /* ── Modal ── */
  window.mvgOpenModal = function() { el('mvgModal').classList.add('show'); el('mvgSuccess').classList.remove('show'); const b=el('mvgModalSubmit'); b.disabled=false; b.textContent='Send enquiry'; };
  window.mvgCloseModal = function() { el('mvgModal').classList.remove('show'); };
  el('mvgModal').addEventListener('click', e => { if(e.target===el('mvgModal'))mvgCloseModal(); });

  window.mvgSubmitModal = async function() {
    const name=el('mvgName').value.trim(), phone=el('mvgPhone').value.trim(), email=el('mvgEmail').value.trim();
    let ok=true;
    [[name,'mvgNameErr','mvgName'],[phone,'mvgPhoneErr','mvgPhone'],[email&&email.includes('@')?email:'',' mvgEmailErr','mvgEmail']].forEach(([v,errId,inId])=>{
      if(!v){el(errId.trim()).classList.add('show');el(inId).classList.add('error');ok=false;}
      else{el(errId.trim()).classList.remove('show');el(inId).classList.remove('error');}
    });
    if(!ok)return;
    const btn=el('mvgModalSubmit'); btn.textContent='Sending…'; btn.disabled=true;
    const memKeys=MEMBERSHIP.filter(p=>S.selected.has(p.id)).map(p=>p.title);
    const memW=MEMBERSHIP.filter(p=>S.selected.has(p.id)&&!p.soon&&p.price!==null).reduce((a,p)=>a+p.price,0);
    try {
      const res=await fetch('https://formspree.io/f/xeeryage',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name,phone,email,frequency:S.freq,membership_items:memKeys.join(', ')||'None',membership_estimate:fmtAmt(memW*FREQ_MULT[S.freq])+' '+FREQ_LABEL[S.freq]})});
      if(res.ok){el('mvgSuccess').classList.add('show');btn.textContent='✓ Sent';}
      else throw new Error();
    } catch { btn.textContent='Send enquiry'; btn.disabled=false; alert('Something went wrong. Please try again or email join@movogo.co.nz'); }
  };

  /* ── Controls ── */
  el('freqToggle').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b)return; document.querySelectorAll('#freqToggle button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); S.freq=b.dataset.freq; renderGrids(); renderEstimate(); });
  el('borrowSlider').addEventListener('input',function(){ S.borrow=parseInt(this.value); el('borrowVal').textContent=fmt(S.borrow); renderEstimate(); });
  el('termSlider').addEventListener('input',function(){ S.term=parseInt(this.value); el('termVal').textContent=S.term; renderEstimate(); });
  el('rateSlider').addEventListener('input',function(){ S.rate=parseFloat(this.value); el('rateVal').textContent=S.rate.toFixed(2); renderEstimate(); });




  el('ctaConfigureLoan').addEventListener('click',()=>{ S.financeCalcOpen=true; S.expanded.finance=true; applyExpanded('finance'); renderEstimate(); setTimeout(()=>el('financeCalc').scrollIntoView({behavior:'smooth',block:'start'}),50); });
  el('addCarShortcut').addEventListener('click',()=>{ if(!S.selected.has('buy')){S.selected.add('buy');renderGrids();renderEstimate();} });
  el('clearAllBtn').addEventListener('click',()=>{ if(!S.selected.size)return; if(!confirm('Clear your current selection? This will reset your estimate.'))return; S.selected.clear(); S.financeCalcOpen=false; renderGrids(); renderEstimate(); });

  (function applyUrlParams(){
    const p=new URLSearchParams(window.location.search);
    const add=p.get('add'), rem=p.get('remove');
    const ids=ALL_PRODUCTS.map(x=>x.id);
    if(add&&ids.includes(add)) S.selected.add(add);
    if(rem&&ids.includes(rem)) S.selected.delete(rem);
  })();

  renderGrids(); renderEstimate();

})();
