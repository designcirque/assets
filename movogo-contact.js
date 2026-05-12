/* ============================================================
   MOVOGO Contact Form — movogo-contact.js
   Host at: https://designcirque.github.io/assets/movogo-contact.js
   Webflow embed: <div id="mvg-contact"></div><script src="..." defer></script>
   ============================================================ */

(function () {

  const CSS = `
#mvg-contact {
  --g900:#014b43;--g700:#0A665A;
  --lime:#b8d87c;
  --cream:#f2ece9;
  --coral:#e47250;
  --ink:#1A2824;--ink-f:#8A958F;
  --paper:#ffffff;--line:#E5E0D8;
  --rs:14px;--rm:20px;--rl:28px;
  font-family:area-normal,sans-serif;
  color:#333;
  box-sizing:border-box;
  -webkit-font-smoothing:antialiased;
}
#mvg-contact *,#mvg-contact *::before,#mvg-contact *::after{box-sizing:border-box;font-family:area-normal,sans-serif;}
#mvg-contact p,#mvg-contact h1,#mvg-contact h2,#mvg-contact h3{margin:0;}

/* Layout */
#mvg-contact .cf-wrap{max-width:640px;}

/* Field */
#mvg-contact .cf-field{margin-bottom:20px;}
#mvg-contact .cf-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;}
@media(max-width:540px){#mvg-contact .cf-row{grid-template-columns:1fr;}}

/* Label */
#mvg-contact .cf-lbl{display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--g900);margin-bottom:6px;}
#mvg-contact .cf-optional{font-size:11px;font-weight:600;color:var(--ink-f);text-transform:none;letter-spacing:0;margin-left:4px;}

/* Input & Textarea */
#mvg-contact .cf-input,
#mvg-contact .cf-textarea{
  width:100%;padding:13px 20px;
  border-radius:999px;
  border:2px solid var(--g900);
  font-size:15px;font-family:area-normal,sans-serif;font-weight:600;
  color:var(--ink);background:#fff;
  outline:none;transition:border-color 0.15s;
  -webkit-appearance:none;appearance:none;
}
#mvg-contact .cf-textarea{
  border-radius:20px;
  resize:vertical;min-height:130px;
  padding:14px 20px;line-height:1.5;
}
#mvg-contact .cf-input:focus,
#mvg-contact .cf-textarea:focus{border-color:var(--lime);}
#mvg-contact .cf-input.error,
#mvg-contact .cf-textarea.error{border-color:var(--coral);}
#mvg-contact .cf-input::placeholder,
#mvg-contact .cf-textarea::placeholder{color:var(--ink-f);font-weight:600;}

/* Error */
#mvg-contact .cf-error{font-size:12px;color:var(--coral);font-weight:700;margin-top:5px;display:none;padding-left:20px;}
#mvg-contact .cf-error.show{display:block;}

/* Radio group */
#mvg-contact .cf-radios{display:flex;flex-direction:column;gap:10px;margin-top:2px;}
#mvg-contact .cf-radio-opt{display:flex;align-items:center;gap:12px;cursor:pointer;}
#mvg-contact .cf-radio-opt input[type=radio]{display:none;}
#mvg-contact .cf-radio-custom{
  width:22px;height:22px;border-radius:50%;flex-shrink:0;
  border:2px solid var(--g900);background:#fff;
  position:relative;transition:all 0.15s;
}
#mvg-contact .cf-radio-opt input[type=radio]:checked + .cf-radio-custom{
  border-color:var(--g900);background:var(--g900);
}
#mvg-contact .cf-radio-opt input[type=radio]:checked + .cf-radio-custom::after{
  content:'';position:absolute;
  top:50%;left:50%;transform:translate(-50%,-50%);
  width:8px;height:8px;border-radius:50%;background:#fff;
}
#mvg-contact .cf-radio-label{font-size:15px;font-weight:600;color:#333;line-height:1.2;}
#mvg-contact .cf-radio-opt:hover .cf-radio-custom{border-color:var(--lime);}

/* Submit button */
#mvg-contact .cf-submit{
  display:inline-flex;align-items:center;gap:8px;
  padding:14px 36px;border-radius:999px;
  background:var(--g900);color:#fff;
  font-size:15px;font-weight:700;font-family:area-normal,sans-serif;
  border:none;cursor:pointer;
  transition:background 0.15s,opacity 0.15s;
  margin-top:8px;
}
#mvg-contact .cf-submit:hover{background:var(--g700);}
#mvg-contact .cf-submit:disabled{opacity:0.65;cursor:not-allowed;}

/* Success */
#mvg-contact .cf-success{
  display:none;
  background:var(--lime);border-radius:var(--rm);
  padding:20px 24px;margin-top:8px;
  color:var(--g900);font-size:15px;font-weight:700;line-height:1.5;
}
#mvg-contact .cf-success.show{display:block;}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  const root = document.getElementById('mvg-contact');
  if (!root) { console.error('MOVOGO Contact: #mvg-contact not found'); return; }

  root.innerHTML = `
<div class="cf-wrap">
  <div class="cf-row">
    <div>
      <label class="cf-lbl" for="cfFirst">First name</label>
      <input class="cf-input" type="text" id="cfFirst" placeholder="Jane" autocomplete="given-name">
      <div class="cf-error" id="cfFirstErr">Please enter your first name.</div>
    </div>
    <div>
      <label class="cf-lbl" for="cfLast">Last name</label>
      <input class="cf-input" type="text" id="cfLast" placeholder="Smith" autocomplete="family-name">
      <div class="cf-error" id="cfLastErr">Please enter your last name.</div>
    </div>
  </div>

  <div class="cf-row">
    <div>
      <label class="cf-lbl" for="cfEmail">Email address</label>
      <input class="cf-input" type="email" id="cfEmail" placeholder="jane@example.com" autocomplete="email">
      <div class="cf-error" id="cfEmailErr">Please enter a valid email address.</div>
    </div>
    <div>
      <label class="cf-lbl" for="cfPhone">Contact number</label>
      <input class="cf-input" type="tel" id="cfPhone" placeholder="021 123 4567" autocomplete="tel">
      <div class="cf-error" id="cfPhoneErr">Please enter your contact number.</div>
    </div>
  </div>

  <div class="cf-field">
    <label class="cf-lbl" for="cfLoanRef">Loan number or registration <span class="cf-optional">(optional)</span></label>
    <input class="cf-input" type="text" id="cfLoanRef" placeholder="e.g. LN-12345 or ABC123">
  </div>

  <div class="cf-field">
    <label class="cf-lbl">Nature of enquiry</label>
    <div class="cf-radios" id="cfNatureGroup">
      <label class="cf-radio-opt"><input type="radio" name="cfNature" value="Apply for finance"><span class="cf-radio-custom"></span><span class="cf-radio-label">Apply for finance</span></label>
      <label class="cf-radio-opt"><input type="radio" name="cfNature" value="Update my details"><span class="cf-radio-custom"></span><span class="cf-radio-label">Update my details</span></label>
      <label class="cf-radio-opt"><input type="radio" name="cfNature" value="Loan information"><span class="cf-radio-custom"></span><span class="cf-radio-label">Loan information</span></label>
      <label class="cf-radio-opt"><input type="radio" name="cfNature" value="Change payments"><span class="cf-radio-custom"></span><span class="cf-radio-label">Change payments</span></label>
      <label class="cf-radio-opt"><input type="radio" name="cfNature" value="Other"><span class="cf-radio-custom"></span><span class="cf-radio-label">Other</span></label>
    </div>
    <div class="cf-error" id="cfNatureErr">Please select a nature of enquiry.</div>
  </div>

  <div class="cf-field">
    <label class="cf-lbl" for="cfMessage">How can we help?</label>
    <textarea class="cf-textarea" id="cfMessage" placeholder="Tell us a bit about what you need…"></textarea>
    <div class="cf-error" id="cfMessageErr">Please tell us how we can help.</div>
  </div>

  <div class="cf-success" id="cfSuccess">
    ✓ Thanks for getting in touch! We'll get back to you within one business day.
  </div>

  <button class="cf-submit" id="cfSubmit" onclick="mvgContactSubmit()">Send message</button>
</div>
`;

  const el = id => document.getElementById(id);

  window.mvgContactSubmit = async function () {
    const first   = el('cfFirst').value.trim();
    const last    = el('cfLast').value.trim();
    const email   = el('cfEmail').value.trim();
    const phone   = el('cfPhone').value.trim();
    const loanRef = el('cfLoanRef').value.trim();
    const nature  = (document.querySelector('input[name="cfNature"]:checked') || {}).value || '';
    const message = el('cfMessage').value.trim();

    let ok = true;
    const setErr = (id, inputId, show) => {
      el(id).classList.toggle('show', show);
      if (inputId) el(inputId).classList.toggle('error', show);
      if (show) ok = false;
    };

    setErr('cfFirstErr',   'cfFirst',   !first);
    setErr('cfLastErr',    'cfLast',    !last);
    setErr('cfEmailErr',   'cfEmail',   !email || !email.includes('@'));
    setErr('cfPhoneErr',   'cfPhone',   !phone);
    setErr('cfNatureErr',  null,        !nature);
    setErr('cfMessageErr', 'cfMessage', !message);

    if (!ok) return;

    const btn = el('cfSubmit');
    btn.textContent = 'Sending…'; btn.disabled = true;

    try {
      const res = await fetch('https://formspree.io/f/xwvyypvw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          first_name:    first,
          last_name:     last,
          email,
          phone,
          loan_reference: loanRef || 'Not provided',
          nature_of_enquiry: nature,
          message,
        })
      });
      if (res.ok) {
        el('cfSuccess').classList.add('show');
        btn.style.display = 'none';
      } else throw new Error();
    } catch {
      btn.textContent = 'Send message';
      btn.disabled = false;
      alert('Something went wrong. Please try again or email us directly.');
    }
  };

})();
