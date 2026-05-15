(function () {
  const data = window.ILE_ZARABIA_DATA || { people: [] };

  const money = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  });
  const moneyExact = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const labels = {
    cash_pln: "gotówka",
    real_estate_flat: "mieszkanie",
    vehicle: "pojazd",
    employment: "umowa o pracę",
    council_allowance: "dieta samorządowa",
    supervisory_board_allowance: "rada nadzorcza",
    election_commission_allowance: "komisja wyborcza",
    pension_social_security: "ZUS",
    allowance: "dieta / wynagrodzenie",
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  const personSelect = document.querySelector("#personSelect");
  const yearSelect = document.querySelector("#yearSelect");
  const categorySelect = document.querySelector("#categorySelect");
  const compareToggle = document.querySelector("#compareToggle");
  const compareSection = document.querySelector("#compareSection");
  const metricSelect = document.querySelector("#metricSelect");

  let selectedCategory = "all";
  let selectedPerson = data.people[0] || null;
  let selectedStatement = selectedPerson?.statements?.at(-1) || null;
  let compareVisible = true;
  let comparedPeople = new Set(selectedPerson ? [String(selectedPerson.id)] : []);

  function formatValue(value, exact = false) {
    if (value === null || value === undefined) return "bez kwoty";
    return exact ? moneyExact.format(value) : money.format(value);
  }

  function normalizeText(text) {
    return text || "brak opisu";
  }

  function renderOptions() {
    const categories = ["all", ...new Set(data.people.map((person) => person.category || "Radni"))];
    categorySelect.innerHTML = categories
      .map((category) => `<option value="${escapeHtml(category)}">${category === "all" ? "Wszystkie grupy" : escapeHtml(category)}</option>`)
      .join("");
    categorySelect.value = selectedCategory;
    personSelect.innerHTML = peopleForCategory()
      .map((person) => `<option value="${person.id}">${escapeHtml(person.name)}</option>`)
      .join("");
    personSelect.value = String(selectedPerson?.id || "");
    renderYearOptions();
  }

  function peopleForCategory() {
    if (selectedCategory === "all") return data.people;
    return data.people.filter((person) => (person.category || "Radni") === selectedCategory);
  }

  function renderYearOptions() {
    if (!selectedPerson) {
      yearSelect.innerHTML = "";
      return;
    }
    yearSelect.innerHTML = selectedPerson.statements
      .map((statement, index) => `<option value="${index}">${escapeHtml(statement.year)}</option>`)
      .join("");
    yearSelect.value = String(selectedPerson.statements.indexOf(selectedStatement));
  }

  function renderHeroStats() {
    const totalStatements = data.people.reduce((sum, person) => sum + person.statements.length, 0);
    document.querySelector("#heroStatements").textContent = String(totalStatements);
    document.querySelector("#generatedAt").textContent = data.generated_at
      ? `eksport ${data.generated_at.slice(0, 10)}`
      : "baza lokalna";
  }

  function renderIdentity() {
    document.querySelector("#personName").textContent = selectedPerson?.name || "Brak danych";
    document.querySelector("#personRole").textContent = [selectedPerson?.role, selectedPerson?.category].filter(Boolean).join(" · ");
    const sourceLink = document.querySelector("#sourceLink");
    sourceLink.href = selectedStatement?.source_url || "#";
    sourceLink.textContent = selectedStatement
      ? `${selectedStatement.year}, PDF źródłowy`
      : "brak dokumentu";
  }

  function renderPillars() {
    document.querySelector("#assetsTotal").textContent = formatValue(selectedStatement?.assets_value_pln);
    document.querySelector("#incomeTotal").textContent = formatValue(selectedStatement?.income_total_pln);
    document.querySelector("#liabilitiesTotal").textContent = formatValue(selectedStatement?.liabilities_total_pln);
  }

  function itemMarkup(item, typeKey, valueKey) {
    const type = labels[item[typeKey]] || item[typeKey] || "pozycja";
    const details = [item.description, item.area, item.legal_title, item.creditor].filter(Boolean).join(" · ");
    return `
      <div class="ledger-item">
        <p><span class="item-type">${escapeHtml(type)}</span>${escapeHtml(normalizeText(details))}</p>
        <strong>${formatValue(item[valueKey], true)}</strong>
      </div>
    `;
  }

  function renderList(selector, items, typeKey, valueKey, emptyText) {
    const node = document.querySelector(selector);
    node.innerHTML = items.length
      ? items.map((item) => itemMarkup(item, typeKey, valueKey)).join("")
      : `<p class="empty">${emptyText}</p>`;
  }

  function renderDetails() {
    renderList("#assetList", selectedStatement?.assets || [], "asset_type", "value_pln", "Brak pozycji majątkowych.");
    renderList("#incomeList", selectedStatement?.incomes || [], "income_type", "amount_pln", "Brak pozycji dochodowych.");
    renderList("#liabilityList", selectedStatement?.liabilities || [], "liability_type", "amount_pln", "Brak zobowiązań powyżej progu.");
  }

  function renderTimeline() {
    const chart = document.querySelector("#timelineChart");
    const statements = selectedPerson?.statements || [];
    const max = Math.max(
      1,
      ...statements.flatMap((statement) => [
        statement.assets_value_pln || 0,
        statement.income_total_pln || 0,
        statement.liabilities_total_pln || 0,
      ]),
    );
    chart.innerHTML = statements
      .map((statement, index) => {
        const selected = statement.id === selectedStatement?.id;
        const width = (value) => `${Math.max(2, ((value || 0) / max) * 100)}%`;
        return `
          <div class="year-row">
            <button type="button" data-year-index="${index}" aria-pressed="${selected}">
              ${statement.year}
            </button>
            <div class="bars" aria-hidden="true">
              <span class="bar assets" style="--w:${width(statement.assets_value_pln)}"></span>
              <span class="bar income" style="--w:${width(statement.income_total_pln)}"></span>
              <span class="bar debts" style="--w:${width(statement.liabilities_total_pln)}"></span>
            </div>
            <span class="year-total">${formatValue(statement.assets_value_pln + statement.income_total_pln + statement.liabilities_total_pln)}</span>
          </div>
        `;
      })
      .join("");
  }

  function renderComparePeople() {
    const node = document.querySelector("#comparePeople");
    node.innerHTML = data.people
      .map((person) => `
        <label class="person-chip">
          <input type="checkbox" value="${person.id}" ${comparedPeople.has(String(person.id)) ? "checked" : ""} />
          <span>${escapeHtml(person.name)}</span>
          <small>${escapeHtml(person.category || "Radni")}</small>
        </label>
      `)
      .join("");
  }

  function renderMultiCompare() {
    const node = document.querySelector("#multiCompareChart");
    const metric = metricSelect.value;
    const selectedPeople = data.people.filter((person) => comparedPeople.has(String(person.id)));
    const values = selectedPeople.flatMap((person) => person.statements.map((statement) => statement[metric] || 0));
    const max = Math.max(1, ...values);
    node.innerHTML = selectedPeople.length
      ? selectedPeople
          .map((person) => {
            const points = person.statements
              .map((statement) => `
                <div class="multi-year">
                  <span>${statement.year}</span>
                  <i style="--w:${Math.max(2, ((statement[metric] || 0) / max) * 100)}%"></i>
                  <strong>${formatValue(statement[metric])}</strong>
                </div>
              `)
              .join("");
            return `<article class="compare-row"><h4>${escapeHtml(person.name)}</h4>${points}</article>`;
          })
          .join("")
      : '<p class="empty">Wybierz co najmniej jedną osobę do porównania.</p>';
  }

  function renderSections() {
    const node = document.querySelector("#sectionsGrid");
    node.innerHTML = (selectedStatement?.sections || [])
      .map((section) => {
        const text = section.raw_text || "Brak ręcznie zatwierdzonego tekstu.";
        return `
          <article class="section-tile">
            <header>
              <strong>${escapeHtml(section.section_code)}</strong>
              <span>${escapeHtml(section.pillar)}</span>
            </header>
            <p>${escapeHtml(text)}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderAll() {
    renderYearOptions();
    renderHeroStats();
    renderIdentity();
    renderPillars();
    renderTimeline();
    renderComparePeople();
    renderMultiCompare();
    renderDetails();
    renderSections();
    compareSection.hidden = !compareVisible;
    compareToggle.setAttribute("aria-pressed", String(compareVisible));
  }

  personSelect.addEventListener("change", (event) => {
    selectedPerson = data.people.find((person) => String(person.id) === event.target.value) || data.people[0];
    selectedStatement = selectedPerson.statements.at(-1);
    comparedPeople.add(String(selectedPerson.id));
    renderAll();
  });

  categorySelect.addEventListener("change", (event) => {
    selectedCategory = event.target.value;
    selectedPerson = peopleForCategory()[0] || data.people[0];
    selectedStatement = selectedPerson?.statements?.at(-1) || null;
    renderAll();
  });

  yearSelect.addEventListener("change", (event) => {
    selectedStatement = selectedPerson.statements[Number(event.target.value)];
    renderAll();
  });

  compareToggle.addEventListener("click", () => {
    compareVisible = !compareVisible;
    renderAll();
  });

  document.querySelector("#timelineChart").addEventListener("click", (event) => {
    const button = event.target.closest("[data-year-index]");
    if (!button) return;
    selectedStatement = selectedPerson.statements[Number(button.dataset.yearIndex)];
    renderAll();
  });

  document.querySelector("#comparePeople").addEventListener("change", (event) => {
    if (event.target.checked) comparedPeople.add(event.target.value);
    else comparedPeople.delete(event.target.value);
    renderMultiCompare();
  });

  metricSelect.addEventListener("change", renderMultiCompare);

  renderOptions();
  renderAll();
})();
