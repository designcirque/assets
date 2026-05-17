/* ============================================================
   MOVOGO Financial Hardship Form — movogo-hardship.js
   Host at: https://designcirque.github.io/assets/movogo-hardship.js
   Webflow embed: <div id="mvg-hardship"></div><script src="..." defer></script>
   Uploadcare public key: meedjpgp
   Formspree: hardship form endpoint
   ============================================================ */

(function () {

  const CSS = `
#mvg-hardship {
  --g900:#014b43;--g700:#0A665A;
  --lime:#b8d87c;
  --cream:#f2ece9;
  --coral:#e47250;
  --blue:#4E89BF;
  --ink:#1A2824;--ink-f:#8A958F;
  --paper:#ffffff;--line:#E5E0D8;
  --rs:14px;--rm:20px;--rl:28px;
  font-family:area-normal,sans-serif;
  color:#333;box-sizing:border-box;
  -webkit-font-smoothing:antialiased;
}
#mvg-hardship *,#mvg-hardship *::before,#mvg-hardship *::after{box-sizing:border-box;font-family:area-normal,sans-serif;}
#mvg-hardship h2,#mvg-hardship h3,#mvg-hardship p{margin:0;}

/* Layout */
#mvg-hardship .hf-wrap{max-width:720px;}
#mvg-hardship .hf-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px;}
#mvg-hardship .hf-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}
@media(max-width:600px){#mvg-hardship .hf-row{grid-template-columns:1fr;} #mvg-hardship .hf-row-3{grid-template-columns:1fr;}}
#mvg-hardship .hf-field{margin-bottom:28px;}
#mvg-hardship .hf-field:last-child{margin-bottom:0;}

/* Section headings */
#mvg-hardship .hf-section{margin:40px 0 24px;}
#mvg-hardship .hf-section h3{font-size:20px;font-weight:800;color:var(--g900);margin-bottom:4px;}
#mvg-hardship .hf-section p{font-size:14px;color:var(--ink-f);font-weight:600;}
#mvg-hardship .hf-divider{border:none;border-top:2px solid var(--line);margin:40px 0;}

/* Labels */
#mvg-hardship .hf-lbl{display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--g900);margin-bottom:6px;}
#mvg-hardship .hf-optional{font-size:11px;font-weight:600;color:var(--ink-f);text-transform:none;letter-spacing:0;margin-left:4px;}
#mvg-hardship .hf-hint{font-size:12px;color:var(--ink-f);font-weight:600;margin-top:5px;padding-left:4px;}

/* Inputs */
#mvg-hardship .hf-input,
#mvg-hardship .hf-select,
#mvg-hardship .hf-textarea{
  width:100%;padding:13px 20px;
  border-radius:999px;
  border:2px solid var(--g900);
  font-size:15px;font-family:area-normal,sans-serif;font-weight:600;
  color:#333;background:#fff;
  outline:none;transition:border-color 0.15s;
  -webkit-appearance:none;appearance:none;
}
#mvg-hardship .hf-textarea{border-radius:20px;resize:vertical;min-height:110px;padding:14px 20px;line-height:1.5;}
#mvg-hardship .hf-select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23014b43' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 20px center;padding-right:44px;cursor:pointer;}
#mvg-hardship .hf-input:focus,#mvg-hardship .hf-select:focus,#mvg-hardship .hf-textarea:focus{border-color:var(--lime);}
#mvg-hardship .hf-input.error,#mvg-hardship .hf-select.error,#mvg-hardship .hf-textarea.error{border-color:var(--coral);}
#mvg-hardship .hf-input::placeholder,#mvg-hardship .hf-textarea::placeholder{color:var(--ink-f);font-weight:600;}

/* Dollar prefix input */
#mvg-hardship .hf-money{position:relative;}
#mvg-hardship .hf-money-sign{position:absolute;left:20px;top:50%;transform:translateY(-50%);font-weight:700;color:var(--ink-f);pointer-events:none;font-size:15px;}
#mvg-hardship .hf-money .hf-input{padding-left:36px;}

/* Error */
#mvg-hardship .hf-error{font-size:12px;color:var(--coral);font-weight:700;margin-top:5px;display:none;padding-left:20px;}
#mvg-hardship .hf-error.show{display:block;}

/* Radio buttons */
#mvg-hardship .hf-radios{display:flex;flex-direction:column;gap:10px;margin-top:2px;}
#mvg-hardship .hf-radio-opt{display:flex;align-items:center;gap:12px;cursor:pointer;}
#mvg-hardship .hf-radio-opt input[type=radio]{display:none;}
#mvg-hardship .hf-radio-custom{width:22px;height:22px;border-radius:50%;flex-shrink:0;border:2px solid var(--g900);background:#fff;position:relative;transition:all 0.15s;}
#mvg-hardship .hf-radio-opt input[type=radio]:checked + .hf-radio-custom{border-color:var(--g900);background:var(--g900);}
#mvg-hardship .hf-radio-opt input[type=radio]:checked + .hf-radio-custom::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:#fff;}
#mvg-hardship .hf-radio-label{font-size:15px;font-weight:600;color:#333;line-height:1.2;}
#mvg-hardship .hf-radio-opt:hover .hf-radio-custom{border-color:var(--lime);}

/* Statement section */
#mvg-hardship .hf-statement{display:none;margin-top:32px;}
#mvg-hardship .hf-statement.show{display:block;}
#mvg-hardship .hf-statement-intro{
  background:var(--lime);border-radius:var(--rm);
  padding:16px 22px;margin-bottom:32px;
  font-size:14px;font-weight:600;color:var(--g900);line-height:1.5;
}

/* Income / Expense grid */
#mvg-hardship .hf-ie-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
@media(max-width:600px){#mvg-hardship .hf-ie-grid{grid-template-columns:1fr;}}

/* Debtor rows */
#mvg-hardship .hf-debtor-row{display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:12px;align-items:center;margin-bottom:12px;}
@media(max-width:600px){#mvg-hardship .hf-debtor-row{grid-template-columns:1fr;}}
#mvg-hardship .hf-debtor-remove{width:36px;height:36px;border-radius:50%;border:2px solid var(--line);background:#fff;cursor:pointer;font-size:18px;color:var(--ink-f);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s;font-family:inherit;}
#mvg-hardship .hf-debtor-remove:hover{border-color:var(--coral);color:var(--coral);}
#mvg-hardship .hf-add-row{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:999px;border:2px solid var(--g900);background:#fff;font-size:13px;font-weight:700;color:var(--g900);cursor:pointer;font-family:inherit;transition:all 0.15s;margin-top:4px;}
#mvg-hardship .hf-add-row:hover{background:var(--g900);color:#fff;}



/* File upload */
#mvg-hardship .hf-file-label{
  display:flex;align-items:center;gap:14px;
  padding:16px 22px;border-radius:var(--rm);
  border:2px dashed var(--g900);background:#fff;
  cursor:pointer;transition:all 0.15s;
}
#mvg-hardship .hf-file-label:hover{background:var(--cream);}
#mvg-hardship .hf-file-label.has-file{border-style:solid;border-color:var(--lime);background:var(--lime);}
#mvg-hardship .hf-file-icon{font-size:24px;flex-shrink:0;}
#mvg-hardship .hf-file-text{flex:1;}
#mvg-hardship .hf-file-main{font-size:14px;font-weight:700;color:var(--g900);}
#mvg-hardship .hf-file-label.has-file .hf-file-main{color:var(--g900);}
#mvg-hardship .hf-file-sub{font-size:12px;color:var(--ink-f);font-weight:600;margin-top:2px;}
#mvg-hardship .hf-file-label.has-file .hf-file-sub{color:var(--g900);}
#mvg-hardship input[type=file]{display:none;}

#mvg-hardship .hf-submit{
  display:inline-flex;align-items:center;gap:8px;
  padding:15px 40px;border-radius:999px;
  background:var(--g900);color:#fff;
  font-size:15px;font-weight:700;font-family:area-normal,sans-serif;
  border:none;cursor:pointer;margin-top:16px;
  transition:background 0.15s,opacity 0.15s;
}
#mvg-hardship .hf-submit:hover{background:var(--g700);}
#mvg-hardship .hf-submit:disabled{opacity:0.65;cursor:not-allowed;}

/* Success */
#mvg-hardship .hf-success{
  display:none;background:var(--lime);border-radius:var(--rm);
  padding:24px 28px;margin-top:16px;
  color:var(--g900);font-size:15px;font-weight:700;line-height:1.6;
}
#mvg-hardship .hf-success.show{display:block;}
#mvg-hardship .hf-success h3{font-size:20px;font-weight:800;margin-bottom:8px;}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  const root = document.getElementById('mvg-hardship');
  if (!root) { console.error('MOVOGO Hardship: #mvg-hardship not found'); return; }

  root.innerHTML = `
<div class="hf-wrap">

  <!-- ── SECTION 1: Personal details ── -->
  <div class="hf-row">
    <div>
      <label class="hf-lbl" for="hfFirst">First name</label>
      <input class="hf-input" type="text" id="hfFirst" placeholder="Jane" autocomplete="given-name">
      <div class="hf-error" id="hfFirstErr">Please enter your first name.</div>
    </div>
    <div>
      <label class="hf-lbl" for="hfLast">Last name</label>
      <input class="hf-input" type="text" id="hfLast" placeholder="Smith" autocomplete="family-name">
      <div class="hf-error" id="hfLastErr">Please enter your last name.</div>
    </div>
  </div>

  <div class="hf-row">
    <div>
      <label class="hf-lbl" for="hfDob">Date of birth</label>
      <input class="hf-input" type="text" id="hfDob" placeholder="DD/MM/YYYY" autocomplete="bday">
      <div class="hf-error" id="hfDobErr">Please enter your date of birth.</div>
    </div>
    <div>
      <label class="hf-lbl" for="hfPhone">Contact number</label>
      <input class="hf-input" type="tel" id="hfPhone" placeholder="021 123 4567" autocomplete="tel">
      <div class="hf-error" id="hfPhoneErr">Please enter your contact number.</div>
    </div>
  </div>

  <div class="hf-field">
    <label class="hf-lbl" for="hfEmail">Email address</label>
    <input class="hf-input" type="email" id="hfEmail" placeholder="jane@example.com" autocomplete="email">
    <div class="hf-error" id="hfEmailErr">Please enter a valid email address.</div>
  </div>

  <hr class="hf-divider">

  <!-- ── SECTION 2: Hardship details ── -->
  <div class="hf-field">
    <label class="hf-lbl" for="hfReason">What is the reason for your hardship application? (What circumstances have changed since the beginning of your loan?)</label>
    <textarea class="hf-textarea" id="hfReason" placeholder="e.g. I was made redundant in March and am currently seeking new employment…"></textarea>
    <div class="hf-error" id="hfReasonErr">Please describe your circumstances.</div>
  </div>

  <div class="hf-row">
    <div>
      <label class="hf-lbl" for="hfAfford">How much can you afford to pay if your hardship application is approved?</label>
      <div class="hf-money">
        <span class="hf-money-sign">$</span>
        <input class="hf-input" type="number" id="hfAfford" placeholder="0.00" min="0" step="0.01">
      </div>
      <div class="hf-error" id="hfAffordErr">Please enter an amount.</div>
    </div>
    <div>
      <label class="hf-lbl" for="hfDuration">How long do you need financial hardship assistance for?</label>
      <select class="hf-select" id="hfDuration">
        <option value="">Select a period…</option>
        <option>1 month</option>
        <option>2 months</option>
        <option>3 months</option>
        <option>4 months</option>
        <option>5 months</option>
        <option>6 months</option>
        <option>7–9 months</option>
        <option>10–12 months</option>
        <option>More than 12 months</option>
      </select>
      <div class="hf-error" id="hfDurationErr">Please select a period.</div>
    </div>
  </div>

  <div class="hf-field">
    <label class="hf-lbl" for="hfBackOnTrack">What actions are you taking in order to get back on track with your regular loan payments once your hardship period ends?</label>
    <textarea class="hf-textarea" id="hfBackOnTrack" placeholder="e.g. I have interviews lined up and expect to be employed again within 8 weeks…"></textarea>
    <div class="hf-error" id="hfBackOnTrackErr">Please describe your plan.</div>
  </div>

  <div class="hf-field">
    <label class="hf-lbl">Supporting documents <span class="hf-optional">(optional)</span></label>
    <label class="hf-file-label" id="hfFileLabel" for="hfFileInput">
      <span class="hf-file-icon">📎</span>
      <span class="hf-file-text">
        <span class="hf-file-main">Choose files to attach</span>
        <span class="hf-file-sub">PDF, JPG, PNG, DOC — up to 2MB per file</span>
      </span>
    </label>
    <input type="file" id="hfFileInput" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx">
  </div>

  <hr class="hf-divider">

  <!-- ── SECTION 3: Statement of Position toggle ── -->

  <div class="hf-field">
    <label class="hf-lbl">Statement of Position</label>
    <div class="hf-radios" style="margin-top:6px;">
      <label class="hf-radio-opt">
        <input type="radio" name="hfStatement" value="now" id="hfStatementNow" onchange="hfToggleStatement('now')">
        <span class="hf-radio-custom"></span>
        <span class="hf-radio-label">Complete it now</span>
      </label>
      <label class="hf-radio-opt">
        <input type="radio" name="hfStatement" value="later" id="hfStatementLater" onchange="hfToggleStatement('later')" checked>
        <span class="hf-radio-custom"></span>
        <span class="hf-radio-label">Do it later</span>
      </label>
    </div>
    <div class="hf-error" id="hfStatementErr">Please select an option.</div>
  </div>

  <!-- ── STATEMENT OF POSITION (conditional) ── -->
  <div class="hf-statement" id="hfStatementSection">
    <div class="hf-statement-intro">
      Complete as accurately as you can. Estimates are fine — we'll go through this together when we're in touch.
    </div>

    <div class="hf-field">
      <label class="hf-lbl" for="hfDependents">Number of dependents</label>
      <select class="hf-select" id="hfDependents" style="max-width:200px;">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9+">9+</option>
      </select>
    </div>

    <!-- Income -->
    <div class="hf-section" style="margin-top:24px;">
      <h3>Income <span style="font-size:13px;font-weight:600;color:var(--ink-f);">per week</span></h3>
    </div>
    <div class="hf-ie-grid">
      <div>
        <label class="hf-lbl" for="hfSalary">Salary / wages</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfSalary" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfEmployer">Employer name</label>
        <input class="hf-input" type="text" id="hfEmployer" placeholder="e.g. Countdown">
      </div>
      <div>
        <label class="hf-lbl" for="hfBenefits">Government benefits</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfBenefits" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfChildSupport">Child support received</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfChildSupport" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div style="grid-column:1/-1;">
        <label class="hf-lbl">Do you have any other income to declare?</label>
        <div id="hfOtherIncomeRows">
          <div class="hf-debtor-row" style="grid-template-columns:1fr 1fr auto;">
            <div><label class="hf-lbl">Income source</label><input class="hf-input" type="text" placeholder="e.g. Rental income"></div>
            <div><label class="hf-lbl">Amount per week</label><div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div></div>
            <div style="padding-top:28px;"><button class="hf-debtor-remove" onclick="hfRemoveRow(this,'hfOtherIncomeRows')" title="Remove">×</button></div>
          </div>
        </div>
        <button class="hf-add-row" onclick="hfAddOtherIncome()" style="margin-top:8px;">+ Add new</button>
      </div>
    </div>

    <!-- Expenses -->
    <div class="hf-section">
      <h3>Expenses <span style="font-size:13px;font-weight:600;color:var(--ink-f);">per week</span></h3>
    </div>
    <div class="hf-ie-grid">
      <div>
        <label class="hf-lbl" for="hfRent">Rent or mortgage</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfRent" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfUtilities">Utilities (power, water)</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfUtilities" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfFood">Food and groceries</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfFood" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfFuel">Fuel or transport</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfFuel" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfInsurance">Insurance (vehicle, health)</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfInsurance" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfMedical">Medical and health</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfMedical" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfPhone">Phone and internet</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfPhoneExp" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfChildcare">Childcare or school</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfChildcare" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div style="grid-column:1/-1;">
        <label class="hf-lbl">Other essential expenses</label>
        <div id="hfOtherExpRows">
          <div class="hf-debtor-row" style="grid-template-columns:1fr 1fr auto;">
            <div><label class="hf-lbl">Expense type</label><input class="hf-input" type="text" placeholder="e.g. Pet insurance"></div>
            <div><label class="hf-lbl">Amount per week</label><div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div></div>
            <div style="padding-top:28px;"><button class="hf-debtor-remove" onclick="hfRemoveRow(this,'hfOtherExpRows')" title="Remove">×</button></div>
          </div>
        </div>
        <button class="hf-add-row" onclick="hfAddOtherExp()" style="margin-top:8px;">+ Add new</button>
      </div>
    </div>

    <!-- Debtor commitments -->
    <div class="hf-section">
      <h3>Debtor commitments</h3>
      <p>List any other loans or credit commitments.</p>
    </div>
    <div id="hfDebtorRows">
      <div class="hf-debtor-row" id="hfDebtorRow0">
        <div>
          <label class="hf-lbl">Creditor name</label>
          <input class="hf-input" type="text" placeholder="e.g. ANZ Bank">
        </div>
        <div>
          <label class="hf-lbl">Balance owing</label>
          <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div>
        </div>
        <div>
          <label class="hf-lbl">Weekly repayments</label>
          <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div>
        </div>
        <div style="padding-top:28px;">
          <button class="hf-debtor-remove" onclick="hfRemoveDebtor(this)" title="Remove row">×</button>
        </div>
      </div>
    </div>
    <button class="hf-add-row" onclick="hfAddDebtor()">+ Add another creditor</button>

    <!-- Assets -->
    <div class="hf-section">
      <h3>Assets</h3>
    </div>
    <div class="hf-ie-grid">
      <div>
        <label class="hf-lbl" for="hfVehicleVal">Vehicle(s) estimated value</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfVehicleVal" placeholder="0.00" min="0" step="0.01"></div>
      </div>
      <div>
        <label class="hf-lbl" for="hfSavings">Savings and investments</label>
        <div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" id="hfSavings" placeholder="0.00" min="0" step="0.01"></div>
      </div>
    </div>
  </div><!-- /hf-statement -->

  <div class="hf-success" id="hfSuccess">
    <h3>Application received.</h3>
    Thank you — we've received your hardship application and will be in touch within two business days.<br><br>
    If you chose to complete the Statement of Financial Position later, keep an eye on your inbox — we'll send it through shortly.
  </div>

  <div style="margin-top:40px;">
    <button class="hf-submit" id="hfSubmit" onclick="hfSubmit()">Submit application</button>
  </div>

</div>
`;

  /* ── Helpers ── */
  const el = id => document.getElementById(id);
  let debtorCount = 1;
  /* ── Toggle statement section ── */
  window.hfToggleStatement = function(val) {
    const section = el('hfStatementSection');
    section.classList.toggle('show', val === 'now');
  };

  /* ── Debtor rows ── */
  window.hfAddDebtor = function() {
    const container = el('hfDebtorRows');
    const row = document.createElement('div');
    row.className = 'hf-debtor-row';
    row.innerHTML = `
      <div><label class="hf-lbl">Creditor name</label><input class="hf-input" type="text" placeholder="e.g. Westpac"></div>
      <div><label class="hf-lbl">Balance owing</label><div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div></div>
      <div><label class="hf-lbl">Weekly repayments</label><div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div></div>
      <div style="padding-top:28px;"><button class="hf-debtor-remove" onclick="hfRemoveDebtor(this)" title="Remove">×</button></div>
    `;
    container.appendChild(row);
  };

  window.hfRemoveRow = function(btn, containerId) {
    const row = btn.closest('.hf-debtor-row');
    const container = el(containerId);
    if (container.children.length > 1) row.remove();
  };

  window.hfAddOtherIncome = function() {
    const container = el('hfOtherIncomeRows');
    const row = document.createElement('div');
    row.className = 'hf-debtor-row';
    row.style.gridTemplateColumns = '1fr 1fr auto';
    row.innerHTML = `
      <div><label class="hf-lbl">Income source</label><input class="hf-input" type="text" placeholder="e.g. Freelance work"></div>
      <div><label class="hf-lbl">Amount per week</label><div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div></div>
      <div style="padding-top:28px;"><button class="hf-debtor-remove" onclick="hfRemoveRow(this,'hfOtherIncomeRows')" title="Remove">×</button></div>
    `;
    container.appendChild(row);
  };

  window.hfAddOtherExp = function() {
    const container = el('hfOtherExpRows');
    const row = document.createElement('div');
    row.className = 'hf-debtor-row';
    row.style.gridTemplateColumns = '1fr 1fr auto';
    row.innerHTML = `
      <div><label class="hf-lbl">Expense type</label><input class="hf-input" type="text" placeholder="e.g. Gym membership"></div>
      <div><label class="hf-lbl">Amount per week</label><div class="hf-money"><span class="hf-money-sign">$</span><input class="hf-input" type="number" placeholder="0.00" min="0" step="0.01"></div></div>
      <div style="padding-top:28px;"><button class="hf-debtor-remove" onclick="hfRemoveRow(this,'hfOtherExpRows')" title="Remove">×</button></div>
    `;
    container.appendChild(row);
  };



  /* ── Collect debtor rows ── */
  function collectRepeatable(containerId, col1Name, col2Name, col3Name) {
    const rows = el(containerId).querySelectorAll('.hf-debtor-row');
    const result = [];
    rows.forEach(row => {
      const inputs = row.querySelectorAll('input');
      const v1 = inputs[0]?.value.trim();
      const v2 = inputs[1]?.value.trim();
      const v3 = inputs[2]?.value.trim();
      if (v1 || v2 || v3) {
        const obj = {};
        if (col1Name) obj[col1Name] = v1 || '';
        if (col2Name) obj[col2Name] = v2 ? '$'+v2 : '';
        if (col3Name) obj[col3Name] = v3 ? '$'+v3 : '';
        result.push(obj);
      }
    });
    return result;
  }
  function collectDebtors() { return collectRepeatable('hfDebtorRows','creditor','balance_owing','weekly_repayments'); }

  /* ── File input feedback ── */
  document.getElementById('hfFileInput').addEventListener('change', function() {
    const label = el('hfFileLabel');
    if (this.files.length > 0) {
      const names = Array.from(this.files).map(f => f.name).join(', ');
      label.classList.add('has-file');
      label.querySelector('.hf-file-main').textContent = this.files.length === 1 ? this.files[0].name : `${this.files.length} files selected`;
      label.querySelector('.hf-file-sub').textContent = names;
    } else {
      label.classList.remove('has-file');
      label.querySelector('.hf-file-main').textContent = 'Choose files to attach';
      label.querySelector('.hf-file-sub').textContent = 'PDF, JPG, PNG, DOC — up to 2MB per file';
    }
  });


  function setErr(errId, inputId, show) {
    el(errId).classList.toggle('show', show);
    if (inputId && el(inputId)) el(inputId).classList.toggle('error', show);
    return show;
  }

  /* ── Submit ── */
  window.hfSubmit = async function() {
    let invalid = false;
    invalid |= setErr('hfFirstErr',       'hfFirst',       !el('hfFirst').value.trim());
    invalid |= setErr('hfLastErr',        'hfLast',        !el('hfLast').value.trim());
    invalid |= setErr('hfDobErr',         'hfDob',         !el('hfDob').value.trim());
    invalid |= setErr('hfPhoneErr',       'hfPhone',       !el('hfPhone').value.trim());
    invalid |= setErr('hfEmailErr',       'hfEmail',       !el('hfEmail').value.trim() || !el('hfEmail').value.includes('@'));
    invalid |= setErr('hfReasonErr',      'hfReason',      !el('hfReason').value.trim());
    invalid |= setErr('hfAffordErr',      'hfAfford',      !el('hfAfford').value.trim());
    invalid |= setErr('hfDurationErr',    'hfDuration',    !el('hfDuration').value);
    invalid |= setErr('hfBackOnTrackErr', 'hfBackOnTrack', !el('hfBackOnTrack').value.trim());
    if (invalid) { document.querySelector('#mvg-hardship .hf-input.error, #mvg-hardship .hf-textarea.error, #mvg-hardship .hf-select.error')?.scrollIntoView({behavior:'smooth', block:'center'}); return; }

    const btn = el('hfSubmit');
    btn.textContent = 'Submitting…'; btn.disabled = true;

    const statementMode = document.querySelector('input[name="hfStatement"]:checked')?.value || 'later';
    const includeStatement = statementMode === 'now';

    const payload = {
      _subject: 'Financial hardship application',
      first_name:       el('hfFirst').value.trim(),
      last_name:        el('hfLast').value.trim(),
      date_of_birth:    el('hfDob').value.trim(),
      contact_number:   el('hfPhone').value.trim(),
      email:            el('hfEmail').value.trim(),
      reason_for_hardship:        el('hfReason').value.trim(),
      affordable_repayment:       '$' + el('hfAfford').value.trim() + ' per week',
      assistance_duration:        el('hfDuration').value,
      plan_to_get_back_on_track:  el('hfBackOnTrack').value.trim(),
      statement_of_position:      statementMode === 'later' ? 'To be sent separately' : 'Completed below',
    };

    if (includeStatement) {
      payload.dependents              = el('hfDependents').value;
      payload.income_salary           = el('hfSalary').value ? '$'+el('hfSalary').value : '—';
      payload.income_employer         = el('hfEmployer').value.trim() || '—';
      payload.income_benefits         = el('hfBenefits').value ? '$'+el('hfBenefits').value : '—';
      payload.income_child_support    = el('hfChildSupport').value ? '$'+el('hfChildSupport').value : '—';
      payload.income_other            = el('hfOtherIncome').value ? '$'+el('hfOtherIncome').value : '—';
      payload.expense_rent            = el('hfRent').value ? '$'+el('hfRent').value : '—';
      payload.expense_utilities       = el('hfUtilities').value ? '$'+el('hfUtilities').value : '—';
      payload.expense_food            = el('hfFood').value ? '$'+el('hfFood').value : '—';
      payload.expense_fuel            = el('hfFuel').value ? '$'+el('hfFuel').value : '—';
      payload.expense_insurance       = el('hfInsurance').value ? '$'+el('hfInsurance').value : '—';
      payload.expense_medical         = el('hfMedical').value ? '$'+el('hfMedical').value : '—';
      payload.expense_phone           = el('hfPhoneExp').value ? '$'+el('hfPhoneExp').value : '—';
      payload.expense_childcare       = el('hfChildcare').value ? '$'+el('hfChildcare').value : '—';
      payload.expense_other           = el('hfOtherExp').value ? '$'+el('hfOtherExp').value : '—';
      payload.asset_vehicle_value     = el('hfVehicleVal').value ? '$'+el('hfVehicleVal').value : '—';
      payload.asset_savings           = el('hfSavings').value ? '$'+el('hfSavings').value : '—';
      const debtors = collectDebtors();
      payload.debtor_commitments      = debtors.length ? JSON.stringify(debtors) : 'None declared';
      const otherIncome = collectRepeatable('hfOtherIncomeRows','source','amount_per_week',null);
      payload.other_income            = otherIncome.length ? JSON.stringify(otherIncome) : 'None declared';
      const otherExp = collectRepeatable('hfOtherExpRows','expense_type','amount_per_week',null);
      payload.other_essential_expenses = otherExp.length ? JSON.stringify(otherExp) : 'None declared';
    }

    // Use JSON (fast) when no file attached, FormData (slower) only when file is present
    const fileInput = document.getElementById('hfFileInput');
    const hasFiles = fileInput.files.length > 0;

    // Validate file sizes — 2MB max per file
    if (hasFiles) {
      const oversized = Array.from(fileInput.files).filter(f => f.size > 2 * 1024 * 1024);
      if (oversized.length > 0) {
        alert(`The following file${oversized.length > 1 ? 's are' : ' is'} too large (max 2MB each):\n\n${oversized.map(f => f.name).join('\n')}\n\nPlease choose a smaller file.`);
        return;
      }
    }

    let body, headers;
    if (hasFiles) {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
      Array.from(fileInput.files).forEach(file => formData.append('supporting_documents', file));
      body = formData;
      headers = { 'Accept': 'application/json' };
    } else {
      body = JSON.stringify(payload);
      headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    }

    try {
      const res = await fetch('https://formspree.io/f/meedjpgp', {
        method: 'POST',
        headers,
        body
      });
      if (res.ok) {
        el('hfSuccess').classList.add('show');
        btn.style.display = 'none';
        el('hfSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else throw new Error();
    } catch {
      btn.textContent = 'Submit application';
      btn.disabled = false;
      alert('Something went wrong. Please try again or email hardship@movogo.co.nz directly.');
    }
  };

})();
