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
    foreign_currency: "waluty i krypto",
    securities: "akcje / papiery",
    real_estate_flat: "mieszkanie",
    real_estate_house: "dom",
    real_estate_land: "działka",
    movable_property: "ruchomości",
    vehicle: "pojazd",
    employment: "umowa o pracę",
    business_income: "działalność gospodarcza",
    company_role_income: "funkcje w spółkach",
    other_income: "inne dochody",
    council_allowance: "dieta samorządowa",
    supervisory_board_allowance: "rada nadzorcza",
    election_commission_allowance: "komisja wyborcza",
    pension_social_security: "ZUS",
    allowance: "dieta / wynagrodzenie",
    mortgage: "kredyt hipoteczny",
    cash_loan: "kredyt gotówkowy",
  };
  const pillarLabels = {
    assets: "majątek",
    earnings: "dochody",
    debts: "zobowiązania",
  };
  const metricLabels = {
    assets_value_pln: "Majątek deklarowany",
    assets_estimated_total_pln: "Majątek z wyceną",
    income_total_pln: "Dochody",
    liabilities_total_pln: "Zobowiązania",
  };
  const metricColors = {
    assets_value_pln: "var(--mint)",
    assets_estimated_total_pln: "var(--civic)",
    income_total_pln: "var(--signal)",
    liabilities_total_pln: "var(--oxide)",
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
  const chartTooltip = document.querySelector("#chartTooltip");

  let selectedCategory = "all";
  let selectedPerson = data.people[0] || null;
  let selectedStatement = selectedPerson?.statements?.at(-1) || null;
  let compareVisible = true;
  let comparedPeople = new Set(selectedPerson ? [String(selectedPerson.id)] : []);

  function formatValue(value, exact = false) {
    if (value === null || value === undefined) return "bez kwoty";
    return exact ? moneyExact.format(value) : money.format(value);
  }

  function displayYear(statement) {
    return statement?.report_year || statement?.year || "";
  }

  function yearLabel(statement) {
    if (!statement) return "";
    return `${displayYear(statement)} (złożone ${statement.filing_year || statement.year})`;
  }

  function normalizeText(text) {
    return text || "brak opisu";
  }

  function showTooltip(event, lines) {
    chartTooltip.innerHTML = lines.map((line) => `<span>${escapeHtml(line)}</span>`).join("");
    chartTooltip.style.left = `${event.clientX + 12}px`;
    chartTooltip.style.top = `${event.clientY + 12}px`;
    chartTooltip.dataset.visible = "true";
  }

  function hideTooltip() {
    chartTooltip.dataset.visible = "false";
  }

  function linePath(points) {
    return points.map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
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
      .map((statement, index) => `<option value="${index}">${escapeHtml(yearLabel(statement))}</option>`)
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
      ? `dane za ${displayYear(selectedStatement)}, PDF źródłowy`
      : "brak dokumentu";
  }

  function renderPillars() {
    const estimatedTotal = selectedStatement?.assets_estimated_total_pln;
    const estimatedExtra = selectedStatement?.assets_estimated_extra_pln || 0;
    document.querySelector("#assetsTotal").textContent = formatValue(selectedStatement?.assets_value_pln);
    document.querySelector("#assetsEstimate").textContent = estimatedExtra
      ? `z instrumentami: ${formatValue(estimatedTotal)}`
      : "bez dodatkowej wyceny rynkowej";
    document.querySelector("#incomeTotal").textContent = formatValue(selectedStatement?.income_total_pln);
    document.querySelector("#liabilitiesTotal").textContent = formatValue(selectedStatement?.liabilities_total_pln);
  }

  function itemMarkup(item, typeKey, valueKey) {
    const type = labels[item[typeKey]] || item[typeKey] || "pozycja";
    const details = [item.description, item.area, item.legal_title, item.creditor].filter(Boolean).join(" · ");
    const estimate = item.estimated_value_pln
      ? `<span class="estimate-line">szacunek dziś: ${formatValue(item.estimated_value_pln, true)}</span>`
      : "";
    const note = item.estimate_note ? `<span class="estimate-note">${escapeHtml(item.estimate_note)}</span>` : "";
    return `
      <div class="ledger-item">
        <p><span class="item-type">${escapeHtml(type)}</span>${escapeHtml(normalizeText(details))}${estimate}${note}</p>
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
    if (!statements.length) {
      chart.innerHTML = '<p class="empty">Brak danych do wykresu.</p>';
      return;
    }
    const metrics = ["assets_value_pln", "income_total_pln", "liabilities_total_pln"];
    const max = Math.max(1, ...statements.flatMap((statement) => metrics.map((metric) => statement[metric] || 0)));
    const legend = metrics.map((metric) => `<span><i style="background:${metricColors[metric]}"></i>${metricLabels[metric]}</span>`).join("");
    chart.innerHTML = `
      <div class="chart-legend">${legend}</div>
      ${statements
        .map((statement, index) => {
          const selected = statement.id === selectedStatement?.id;
          const bars = metrics
            .map((metric) => {
              const value = statement[metric] || 0;
              const tooltip = `${yearLabel(statement)} · ${metricLabels[metric]} · ${formatValue(value, true)}`;
              return `<button class="bar-hit" aria-label="${escapeHtml(tooltip)}" data-tooltip="${escapeHtml(tooltip)}" style="--w:${Math.max(2, (value / max) * 100)}%; --bar:${metricColors[metric]}"><span></span></button>`;
            })
            .join("");
          return `
            <div class="year-row">
              <button type="button" data-year-index="${index}" aria-pressed="${selected}">${displayYear(statement)}</button>
              <div class="bars">${bars}</div>
              <span class="year-total">${formatValue(statement.assets_value_pln + statement.income_total_pln + statement.liabilities_total_pln)}</span>
            </div>
          `;
        })
        .join("")}
    `;
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
    if (!selectedPeople.length) {
      node.innerHTML = '<p class="empty">Wybierz co najmniej jedną osobę do porównania.</p>';
      return;
    }
    const years = [...new Set(selectedPeople.flatMap((person) => person.statements.map((statement) => displayYear(statement))))].sort();
    const width = 920;
    const height = 230;
    const pad = { left: 44, right: 24, top: 20, bottom: 34 };
    const xStep = years.length > 1 ? (width - pad.left - pad.right) / (years.length - 1) : 0;
    const x = (year) => pad.left + xStep * years.indexOf(year);
    const y = (value) => pad.top + (height - pad.top - pad.bottom) * (1 - (value || 0) / max);
    const palette = ["var(--civic)", "var(--oxide)", "var(--mint)", "var(--signal)", "#5a4d93", "#2f6d52"];
    const lines = selectedPeople
      .map((person, personIndex) => {
        const points = person.statements.map((statement) => ({ x: x(displayYear(statement)), y: y(statement[metric]) }));
        return `<path class="line person-line" d="${linePath(points)}" style="--line:${palette[personIndex % palette.length]}" />`;
      })
      .join("");
    const dots = selectedPeople
      .flatMap((person, personIndex) =>
        person.statements.map((statement) => {
          const tooltip = `${person.name} · ${yearLabel(statement)} · ${metricLabels[metric]} · ${formatValue(statement[metric], true)}`;
          return `
          <button class="chart-point-wrap" aria-label="${escapeHtml(tooltip)}" data-tooltip="${escapeHtml(tooltip)}" style="left:${((x(displayYear(statement)) - 10) / width) * 100}%; top:${((y(statement[metric]) - 10) / height) * 100}%">
            <svg class="point-svg" viewBox="0 0 20 20">
              <circle class="point" cx="10" cy="10" r="5" style="--line:${palette[personIndex % palette.length]}" />
            </svg>
          </button>
        `;
        }),
      )
      .join("");
    const axis = years.map((year) => `<span style="left:${((x(year) - 14) / width) * 100}%">${year}</span>`).join("");
    const legend = selectedPeople
      .map((person, personIndex) => `<span><i style="background:${palette[personIndex % palette.length]}"></i>${escapeHtml(person.name)}</span>`)
      .join("");
    node.innerHTML = `
      <div class="chart-legend">${legend}</div>
      <div class="svg-stage">
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
          ${[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const gy = pad.top + (height - pad.top - pad.bottom) * ratio;
            return `<line class="grid-line" x1="${pad.left}" y1="${gy}" x2="${width - pad.right}" y2="${gy}" />`;
          }).join("")}
          ${lines}
        </svg>
        ${dots}
        <div class="year-axis">${axis}</div>
      </div>
    `;
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
              <span>${escapeHtml(pillarLabels[section.pillar] || section.pillar)}</span>
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

  document.body.addEventListener("pointerover", (event) => {
    const point = event.target.closest("[data-tooltip]");
    if (!point) return;
    showTooltip(event, point.dataset.tooltip.split(" · "));
  });

  document.body.addEventListener("pointermove", (event) => {
    if (chartTooltip.dataset.visible !== "true") return;
    chartTooltip.style.left = `${event.clientX + 12}px`;
    chartTooltip.style.top = `${event.clientY + 12}px`;
  });

  document.body.addEventListener("pointerout", (event) => {
    if (!event.target.closest("[data-tooltip]")) return;
    hideTooltip();
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
