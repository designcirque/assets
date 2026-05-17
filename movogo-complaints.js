/* ============================================================
   MOVOGO Complaints Form — movogo-complaints.js
   Host at: https://designcirque.github.io/assets/movogo-complaints.js
   Webflow embed: <div id="mvg-complaints"></div><script src="..." defer></script>
   Formspree: xeedjppl → complaints@movogo.co.nz
   ============================================================ */

(function () {

  const CSS = `
#mvg-complaints {
  --g900:#014b43;--g700:#0A665A;
  --lime:#b8d87c;
  --cream:#f2ece9;
  --coral:#e47250;
  --ink:#1A2824;--ink-f:#8A958F;
  --paper:#ffffff;--line:#E5E0D8;
  --rs:14px;--rm:20px;--rl:28px;
  font-family:area-normal,sans-serif;
  color:#333;box-sizing:border-box;
  -webkit-font-smoothing:antialiased;
}
#mvg-complaints *,#mvg-complaints *::before,#mvg-complaints *::after{box-sizing:border-box;font-family:area-normal,sans-serif;}
#mvg-complaints p,#mvg-complaints h1,#mvg-complaints h2,#mvg-complaints h3{margin:0;}

#mvg-complaints .cc-wrap{max-width:640px;}
#mvg-complaints .cc-field{margin-bottom:28px;}
#mvg-complaints .cc-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px;}
@media(max-width:540px){#mvg-complaints .cc-row{grid-template-columns:1fr;}}

#mvg-complaints .cc-lbl{display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--g900);margin-bottom:6px;}
#mvg-complaints .cc-optional{font-size:11px;font-weight:600;color:var(--ink-f);text-transform:none;letter-spacing:0;margin-left:4px;}

#mvg-complaints .cc-input,
#mvg-complaints .cc-textarea{
  width:100%;padding:13px 20px;
  border-radius:999px;
  border:2px solid var(--g900);
  font-size:15px;font-family:area-normal,sans-serif;font-weight:600;
  color:#333;background:#fff;
  outline:none;transition:border-color 0.15s;
  -webkit-appearance:none;appearance:none;
}
#mvg-complaints .cc-textarea{border-radius:20px;resize:vertical;min-height:140px;padding:14px 20px;line-height:1.5;}
#mvg-complaints .cc-input:focus,#mvg-complaints .cc-textarea:focus{border-color:var(--lime);}
#mvg-complaints .cc-input.error,#mvg-complaints .cc-textarea.error{border-color:var(--coral);}
#mvg-complaints .cc-input::placeholder,#mvg-complaints .cc-textarea::placeholder{color:var(--ink-f);font-weight:600;}

#mvg-complaints .cc-error{font-size:12px;color:var(--coral);font-weight:700;margin-top:5px;display:none;padding-left:20px;}
#mvg-complaints .cc-error.show{display:block;}

/* Radio buttons */
#mvg-complaints .cc-radios{display:flex;flex-direction:column;gap:10px;margin-top:4px;}
#mvg-complaints .cc-radio-opt{display:flex;align-items:center;gap:12px;cursor:pointer;}
#mvg-complaints .cc-radio-opt input[type=radio]{display:none;}
#mvg-complaints .cc-radio-custom{width:22px;height:22px;border-radius:50%;flex-shrink:0;border:2px solid var(--g900);background:#fff;position:relative;transition:all 0.15s;}
#mvg-complaints .cc-radio-opt input[type=radio]:checked + .cc-radio-custom{background:var(--g900);border-color:var(--g900);}
#mvg-complaints .cc-radio-opt input[type=radio]:checked + .cc-radio-custom::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:#fff;}
#mvg-complaints .cc-radio-label{font-size:15px;font-weight:600;color:#333;}
#mvg-complaints .cc-radio-opt:hover .cc-radio-custom{border-color:var(--lime);}

/* Submit */
#mvg-complaints .cc-submit{
  display:inline-flex;align-items:center;
  padding:14px 36px;border-radius:999px;
  background:var(--g900);color:#fff;
  font-size:15px;font-weight:700;font-family:area-normal,sans-serif;
  border:none;cursor:pointer;margin-top:8px;
  transition:background 0.15s,opacity 0.15s;
}
#mvg-complaints .cc-submit:hover{background:var(--g700);}
#mvg-complaints .cc-submit:disabled{opacity:0.65;cursor:not-allowed;}

/* Success */
#mvg-complaints .cc-success{
  display:none;background:var(--lime);border-radius:var(--rm);
  padding:20px 24px;margin-top:8px;
  color:var(--g900);font-size:15px;font-weight:700;line-height:1.5;
}
#mvg-complaints .cc-success.show{display:block;}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  const root = document.getElementById('mvg-complaints');
  if (!root) { console.error('MOVOGO Complaints: #mvg-complaints not found'); return; }

  root.innerHTML = `
<div class="cc-wrap">

  <div class="cc-row">
    <div>
      <label class="cc-lbl" for="ccFirst">First name</label>
      <input class="cc-input" type="text" id="ccFirst" placeholder="Jane" autocomplete="given-name">
      <div class="cc-error" id="ccFirstErr">Please enter your first name.</div>
    </div>
    <div>
      <label class="cc-lbl" for="ccLast">Last name</label>
      <input class="cc-input" type="text" id="ccLast" placeholder="Smith" autocomplete="family-name">
      <div class="cc-error" id="ccLastErr">Please enter your last name.</div>
    </div>
  </div>

  <div class="cc-row">
    <div>
      <label class="cc-lbl" for="ccEmail">Email address</label>
      <input class="cc-input" type="email" id="ccEmail" placeholder="jane@example.com" autocomplete="email">
      <div class="cc-error" id="ccEmailErr">Please enter a valid email address.</div>
    </div>
    <div>
      <label class="cc-lbl" for="ccPhone">Contact number</label>
      <input class="cc-input" type="tel" id="ccPhone" placeholder="021 123 4567" autocomplete="tel">
      <div class="cc-error" id="ccPhoneErr">Please enter your contact number.</div>
    </div>
  </div>

  <div class="cc-field">
    <label class="cc-lbl" for="ccLoanRef">Loan number or registration <span class="cc-optional">(optional)</span></label>
    <input class="cc-input" type="text" id="ccLoanRef" placeholder="e.g. LN-12345 or ABC123">
  </div>

  <div class="cc-field">
    <label class="cc-lbl">Nature of complaint</label>
    <div class="cc-radios">
      <label class="cc-radio-opt"><input type="radio" name="ccNature" value="Service"><span class="cc-radio-custom"></span><span class="cc-radio-label">Service</span></label>
      <label class="cc-radio-opt"><input type="radio" name="ccNature" value="Billing"><span class="cc-radio-custom"></span><span class="cc-radio-label">Billing</span></label>
      <label class="cc-radio-opt"><input type="radio" name="ccNature" value="Communication"><span class="cc-radio-custom"></span><span class="cc-radio-label">Communication</span></label>
      <label class="cc-radio-opt"><input type="radio" name="ccNature" value="Staff conduct"><span class="cc-radio-custom"></span><span class="cc-radio-label">Staff conduct</span></label>
      <label class="cc-radio-opt"><input type="radio" name="ccNature" value="Other"><span class="cc-radio-custom"></span><span class="cc-radio-label">Other</span></label>
    </div>
    <div class="cc-error" id="ccNatureErr">Please select a nature of complaint.</div>
  </div>

  <div class="cc-field">
    <label class="cc-lbl" for="ccDetails">Details of your complaint</label>
    <textarea class="cc-textarea" id="ccDetails" placeholder="Please describe what happened, when it occurred, and what outcome you're seeking…"></textarea>
    <div class="cc-error" id="ccDetailsErr">Please provide details of your complaint.</div>
  </div>

  <div class="cc-success" id="ccSuccess">
    ✓ Thank you — your complaint has been received. We'll acknowledge it within one business day and aim to resolve it within five.
  </div>

  <button class="cc-submit" id="ccSubmit" onclick="mvgComplaintsSubmit()">Submit complaint</button>

</div>
`;

  const el = id => document.getElementById(id);

  window.mvgComplaintsSubmit = async function() {
    const first   = el('ccFirst').value.trim();
    const last    = el('ccLast').value.trim();
    const email   = el('ccEmail').value.trim();
    const phone   = el('ccPhone').value.trim();
    const loanRef = el('ccLoanRef').value.trim();
    const nature  = (document.querySelector('input[name="ccNature"]:checked') || {}).value || '';
    const details = el('ccDetails').value.trim();

    let ok = true;
    const setErr = (errId, inputId, show) => {
      el(errId).classList.toggle('show', show);
      if (inputId) el(inputId).classList.toggle('error', show);
      if (show) ok = false;
    };

    setErr('ccFirstErr',   'ccFirst',   !first);
    setErr('ccLastErr',    'ccLast',    !last);
    setErr('ccEmailErr',   'ccEmail',   !email || !email.includes('@'));
    setErr('ccPhoneErr',   'ccPhone',   !phone);
    setErr('ccNatureErr',  null,        !nature);
    setErr('ccDetailsErr', 'ccDetails', !details);

    if (!ok) {
      document.querySelector('#mvg-complaints .cc-input.error, #mvg-complaints .cc-textarea.error')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const btn = el('ccSubmit');
    btn.textContent = 'Submitting…'; btn.disabled = true;

    try {
      const res = await fetch('https://formspree.io/f/xeedjppl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject:          'Complaint',
          first_name:        first,
          last_name:         last,
          email,
          phone,
          loan_reference:    loanRef || 'Not provided',
          nature_of_complaint: nature,
          complaint_details: details,
        })
      });
      if (res.ok) {
        el('ccSuccess').classList.add('show');
        btn.style.display = 'none';
        el('ccSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else throw new Error();
    } catch {
      btn.textContent = 'Submit complaint';
      btn.disabled = false;
      alert('Something went wrong. Please try again or email complaints@movogo.co.nz directly.');
    }
  };

})();
