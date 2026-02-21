/* CSV-only version (no external libraries) */
(() => {
  const $ = (id) => document.getElementById(id);

  const els = {
    fileInput: $("fileInput"),
    fileInfo: $("fileInfo"),
    delimiterSelect: $("delimiterSelect"),

    useDefaultHolidays: $("useDefaultHolidays"),
    holidaysFileInput: $("holidaysFileInput"),
    btnImportHolidays: $("btnImportHolidays"),
    holidaysInfo: $("holidaysInfo"),

    chkSat: $("chkSat"),
    chkSun: $("chkSun"),
    chkHol: $("chkHol"),
    chkHolidayPriority: $("chkHolidayPriority"),

    btnRun: $("btnRun"),
    btnDownload: $("btnDownload"),
    btnClear: $("btnClear"),

    statusMsg: $("statusMsg"),
    summary: $("summary"),
    previewTable: $("previewTable"),
  };

  const DEFAULT_HOLIDAYS = [{"date": "2018-01-01", "name": "Confraternização Universal"}, {"date": "2018-03-30", "name": "Sexta-feira da Paixão"}, {"date": "2018-04-21", "name": "Tiradentes"}, {"date": "2018-05-01", "name": "Dia do Trabalho"}, {"date": "2018-05-31", "name": "Corpus Christi"}, {"date": "2018-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2018-09-07", "name": "Independência do Brasil"}, {"date": "2018-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2018-11-02", "name": "Finados"}, {"date": "2018-11-15", "name": "Proclamação da República"}, {"date": "2018-12-08", "name": "Imaculada Conceição"}, {"date": "2018-12-25", "name": "Natal"}, {"date": "2019-01-01", "name": "Confraternização Universal"}, {"date": "2019-04-19", "name": "Sexta-feira da Paixão"}, {"date": "2019-04-21", "name": "Tiradentes"}, {"date": "2019-05-01", "name": "Dia do Trabalho"}, {"date": "2019-06-20", "name": "Corpus Christi"}, {"date": "2019-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2019-09-07", "name": "Independência do Brasil"}, {"date": "2019-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2019-11-02", "name": "Finados"}, {"date": "2019-11-15", "name": "Proclamação da República"}, {"date": "2019-12-08", "name": "Imaculada Conceição"}, {"date": "2019-12-25", "name": "Natal"}, {"date": "2020-01-01", "name": "Confraternização Universal"}, {"date": "2020-04-10", "name": "Sexta-feira da Paixão"}, {"date": "2020-04-21", "name": "Tiradentes"}, {"date": "2020-05-01", "name": "Dia do Trabalho"}, {"date": "2020-06-11", "name": "Corpus Christi"}, {"date": "2020-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2020-09-07", "name": "Independência do Brasil"}, {"date": "2020-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2020-11-02", "name": "Finados"}, {"date": "2020-11-15", "name": "Proclamação da República"}, {"date": "2020-12-08", "name": "Imaculada Conceição"}, {"date": "2020-12-25", "name": "Natal"}, {"date": "2021-01-01", "name": "Confraternização Universal"}, {"date": "2021-04-02", "name": "Sexta-feira da Paixão"}, {"date": "2021-04-21", "name": "Tiradentes"}, {"date": "2021-05-01", "name": "Dia do Trabalho"}, {"date": "2021-06-03", "name": "Corpus Christi"}, {"date": "2021-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2021-09-07", "name": "Independência do Brasil"}, {"date": "2021-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2021-11-02", "name": "Finados"}, {"date": "2021-11-15", "name": "Proclamação da República"}, {"date": "2021-12-08", "name": "Imaculada Conceição"}, {"date": "2021-12-25", "name": "Natal"}, {"date": "2022-01-01", "name": "Confraternização Universal"}, {"date": "2022-04-15", "name": "Sexta-feira da Paixão"}, {"date": "2022-04-21", "name": "Tiradentes"}, {"date": "2022-05-01", "name": "Dia do Trabalho"}, {"date": "2022-06-16", "name": "Corpus Christi"}, {"date": "2022-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2022-09-07", "name": "Independência do Brasil"}, {"date": "2022-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2022-11-02", "name": "Finados"}, {"date": "2022-11-15", "name": "Proclamação da República"}, {"date": "2022-12-08", "name": "Imaculada Conceição"}, {"date": "2022-12-25", "name": "Natal"}, {"date": "2023-01-01", "name": "Confraternização Universal"}, {"date": "2023-04-07", "name": "Sexta-feira da Paixão"}, {"date": "2023-04-21", "name": "Tiradentes"}, {"date": "2023-05-01", "name": "Dia do Trabalho"}, {"date": "2023-06-08", "name": "Corpus Christi"}, {"date": "2023-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2023-09-07", "name": "Independência do Brasil"}, {"date": "2023-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2023-11-02", "name": "Finados"}, {"date": "2023-11-15", "name": "Proclamação da República"}, {"date": "2023-12-08", "name": "Imaculada Conceição"}, {"date": "2023-12-25", "name": "Natal"}, {"date": "2024-01-01", "name": "Confraternização Universal"}, {"date": "2024-03-29", "name": "Sexta-feira da Paixão"}, {"date": "2024-04-21", "name": "Tiradentes"}, {"date": "2024-05-01", "name": "Dia do Trabalho"}, {"date": "2024-05-30", "name": "Corpus Christi"}, {"date": "2024-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2024-09-07", "name": "Independência do Brasil"}, {"date": "2024-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2024-11-02", "name": "Finados"}, {"date": "2024-11-15", "name": "Proclamação da República"}, {"date": "2024-12-08", "name": "Imaculada Conceição"}, {"date": "2024-12-25", "name": "Natal"}, {"date": "2025-01-01", "name": "Confraternização Universal"}, {"date": "2025-04-18", "name": "Sexta-feira da Paixão"}, {"date": "2025-04-21", "name": "Tiradentes"}, {"date": "2025-05-01", "name": "Dia do Trabalho"}, {"date": "2025-06-19", "name": "Corpus Christi"}, {"date": "2025-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2025-09-07", "name": "Independência do Brasil"}, {"date": "2025-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2025-11-02", "name": "Finados"}, {"date": "2025-11-15", "name": "Proclamação da República"}, {"date": "2025-12-08", "name": "Imaculada Conceição"}, {"date": "2025-12-25", "name": "Natal"}, {"date": "2026-01-01", "name": "Confraternização Universal"}, {"date": "2026-04-03", "name": "Sexta-feira da Paixão"}, {"date": "2026-04-21", "name": "Tiradentes"}, {"date": "2026-05-01", "name": "Dia do Trabalho"}, {"date": "2026-06-04", "name": "Corpus Christi"}, {"date": "2026-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2026-09-07", "name": "Independência do Brasil"}, {"date": "2026-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2026-11-02", "name": "Finados"}, {"date": "2026-11-15", "name": "Proclamação da República"}, {"date": "2026-12-08", "name": "Imaculada Conceição"}, {"date": "2026-12-25", "name": "Natal"}, {"date": "2027-01-01", "name": "Confraternização Universal"}, {"date": "2027-03-26", "name": "Sexta-feira da Paixão"}, {"date": "2027-04-21", "name": "Tiradentes"}, {"date": "2027-05-01", "name": "Dia do Trabalho"}, {"date": "2027-05-27", "name": "Corpus Christi"}, {"date": "2027-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2027-09-07", "name": "Independência do Brasil"}, {"date": "2027-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2027-11-02", "name": "Finados"}, {"date": "2027-11-15", "name": "Proclamação da República"}, {"date": "2027-12-08", "name": "Imaculada Conceição"}, {"date": "2027-12-25", "name": "Natal"}, {"date": "2028-01-01", "name": "Confraternização Universal"}, {"date": "2028-04-14", "name": "Sexta-feira da Paixão"}, {"date": "2028-04-21", "name": "Tiradentes"}, {"date": "2028-05-01", "name": "Dia do Trabalho"}, {"date": "2028-06-15", "name": "Corpus Christi"}, {"date": "2028-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2028-09-07", "name": "Independência do Brasil"}, {"date": "2028-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2028-11-02", "name": "Finados"}, {"date": "2028-11-15", "name": "Proclamação da República"}, {"date": "2028-12-08", "name": "Imaculada Conceição"}, {"date": "2028-12-25", "name": "Natal"}, {"date": "2029-01-01", "name": "Confraternização Universal"}, {"date": "2029-03-30", "name": "Sexta-feira da Paixão"}, {"date": "2029-04-21", "name": "Tiradentes"}, {"date": "2029-05-01", "name": "Dia do Trabalho"}, {"date": "2029-05-31", "name": "Corpus Christi"}, {"date": "2029-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2029-09-07", "name": "Independência do Brasil"}, {"date": "2029-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2029-11-02", "name": "Finados"}, {"date": "2029-11-15", "name": "Proclamação da República"}, {"date": "2029-12-08", "name": "Imaculada Conceição"}, {"date": "2029-12-25", "name": "Natal"}, {"date": "2030-01-01", "name": "Confraternização Universal"}, {"date": "2030-04-19", "name": "Sexta-feira da Paixão"}, {"date": "2030-04-21", "name": "Tiradentes"}, {"date": "2030-05-01", "name": "Dia do Trabalho"}, {"date": "2030-06-20", "name": "Corpus Christi"}, {"date": "2030-08-15", "name": "Assunção de Nossa Senhora"}, {"date": "2030-09-07", "name": "Independência do Brasil"}, {"date": "2030-10-12", "name": "Nossa Senhora Aparecida"}, {"date": "2030-11-02", "name": "Finados"}, {"date": "2030-11-15", "name": "Proclamação da República"}, {"date": "2030-12-08", "name": "Imaculada Conceição"}, {"date": "2030-12-25", "name": "Natal"}];
  let importedHolidays = new Map(); // iso -> name
  let holidayMap = new Map();

  let exportText = null; // CSV content
  let exportFilename = null;
  let lastBlobUrl = null;

  const pad2 = (n) => String(n).padStart(2, "0");
  const dowShort = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

  function setStatus(msg) {
    els.statusMsg.textContent = msg || "";
  }

  function rebuildHolidayMap() {
    holidayMap = new Map();
    if (els.useDefaultHolidays.checked) {
      DEFAULT_HOLIDAYS.forEach(h => holidayMap.set(h.date, h.name));
    }
    for (const [k,v] of importedHolidays.entries()) holidayMap.set(k, v);
    els.holidaysInfo.textContent = `Feriados carregados: ${holidayMap.size}` + (importedHolidays.size ? ` (importados: ${importedHolidays.size})` : "");
  }

  function detectDelimiter(text) {
    // Look at first non-empty line, count separators
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (!lines.length) return ";";
    const l = lines[0];
    const count = (ch) => (l.match(new RegExp('\\' + ch, 'g')) || []).length;
    const cSemi = count(";");
    const cComma = count(",");
    const cTab = count("\t");
    if (cTab > cSemi && cTab > cComma) return "\t";
    return (cSemi >= cComma) ? ";" : ",";
  }

  function parseCSV(text, delimiter) {
    // Basic CSV parser with quotes, supports ; , or tab
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i=0;i<text.length;i++) {
      const ch = text[i];
      const next = text[i+1];

      if (inQuotes) {
        if (ch === '"' && next === '"') {
          field += '"'; i++;
        } else if (ch === '"') {
          inQuotes = false;
        } else {
          field += ch;
        }
        continue;
      }

      if (ch === '"') {
        inQuotes = true;
        continue;
      }

      if (ch === delimiter) {
        row.push(field);
        field = "";
        continue;
      }

      if (ch === "\n") {
        row.push(field);
        field = "";
        // trim \r on last col
        row = row.map(x => x.endsWith("\r") ? x.slice(0,-1) : x);
        // avoid pushing empty last line
        if (row.length > 1 || row[0].trim() !== "") rows.push(row);
        row = [];
        continue;
      }

      field += ch;
    }

    // last field
    if (field.length || row.length) {
      row.push(field);
      row = row.map(x => x.endsWith("\r") ? x.slice(0,-1) : x);
      if (row.length > 1 || row[0].trim() !== "") rows.push(row);
    }

    return rows;
  }

  function toISODateKey(d) {
    return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
  }

  function formatDateWithDow(d) {
    return `${pad2(d.getDate())}/${pad2(d.getMonth()+1)}/${d.getFullYear()} ${dowShort[d.getDay()]}`;
  }

  function parseDateAny(v) {
    if (v == null) return null;
    const s = String(v).trim();
    if (!s) return null;

    const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (m) {
      const dd = parseInt(m[1],10);
      const mm = parseInt(m[2],10);
      const yy = parseInt(m[3],10);
      const d = new Date(yy, mm-1, dd);
      if (!isNaN(d.getTime())) return d;
    }

    const m2 = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (m2) {
      const yy = parseInt(m2[1],10);
      const mm = parseInt(m2[2],10);
      const dd = parseInt(m2[3],10);
      const d = new Date(yy, mm-1, dd);
      if (!isNaN(d.getTime())) return d;
    }

    return null;
  }

  function parseHHMM(v) {
    if (v == null) return null;
    const s = String(v).trim();
    if (!s) return null;
    const m = s.match(/(\d{1,3}):(\d{2})/);
    if (!m) return null;
    const h = parseInt(m[1],10);
    const min = parseInt(m[2],10);
    if (!isFinite(h) || !isFinite(min)) return null;
    return h*60 + min; // minutes
  }

  function minutesToHHMM(mins) {
    if (mins == null || !isFinite(mins)) return "";
    mins = Math.max(0, Math.round(mins));
    const h = Math.floor(mins/60);
    const m = mins % 60;
    return `${h}:${pad2(m)}`;
  }

  function isEmptyNormalHours(v) {
    const mins = parseHHMM(v);
    return (mins == null || mins === 0);
  }

  function normalizeText(v) {
    if (v == null) return "";
    return String(v).trim();
  }

  function headerIndexMap(headerRow) {
    const h = headerRow.map(x => String(x||"").trim());
    const lc = h.map(x => x.toLowerCase());

    const findIndex = (needles) => {
      for (const needle of needles) {
        const idx = lc.findIndex(x => x === needle || x.includes(needle));
        if (idx >= 0) return idx;
      }
      return -1;
    };

    const idxDate = findIndex(["data"]);
    const idxNormal = findIndex(["horas normais", "hora normal", "horas normal", "normal"]);
    const idxExtra = findIndex(["horas excedidas", "excedidas", "excedida", "extras", "extra"]);
    const idxDiff = findIndex(["diferenciada", "diferenciado"]);
    const idxJust = findIndex(["justificativa", "motivo"]);

    const entradaIdxs = lc.map((x,i)=> x.includes("entrada") ? i : -1).filter(i=>i>=0);
    const saidaIdxs = lc.map((x,i)=> (x.includes("saída")||x.includes("saida")) ? i : -1).filter(i=>i>=0);

    return {
      h,
      idxDate,
      idxNormal,
      idxExtra,
      idxDiff,
      idxJust,
      idxIn1: entradaIdxs.length>0 ? entradaIdxs[0] : -1,
      idxOut1: saidaIdxs.length>0 ? saidaIdxs[0] : -1,
      idxIn2: entradaIdxs.length>1 ? entradaIdxs[1] : -1,
      idxOut2: saidaIdxs.length>1 ? saidaIdxs[1] : -1,
    };
  }

  function computeFromCSV(text) {
    const delimSetting = els.delimiterSelect.value;
    const delimiter = (delimSetting === "auto") ? detectDelimiter(text) : (delimSetting === "\\t" ? "\t" : delimSetting);

    const raw = parseCSV(text, delimiter);
    if (raw.length < 2) throw new Error("CSV vazio ou sem dados.");

    const header = raw[0];
    const map = headerIndexMap(header);

    if (map.idxDate < 0 || map.idxNormal < 0) {
      throw new Error("Não encontrei as colunas 'Data' e/ou 'Horas Normais' no CSV. Confira o cabeçalho.");
    }

    const wantSat = els.chkSat.checked;
    const wantSun = els.chkSun.checked;
    const wantHol = els.chkHol.checked;
    const holidayPriority = els.chkHolidayPriority.checked;

    const out = [];
    let read=0, ignoredNoNormal=0, ignoredNotSelected=0, badDate=0;
    const counts = { "SÁBADO":0, "DOMINGO":0, "FERIADO":0 };

    for (let i=1;i<raw.length;i++) {
      const r = raw[i];
      read += 1;

      const d = parseDateAny(r[map.idxDate]);
      if (!d) { badDate += 1; continue; }

      const normalRaw = r[map.idxNormal];
      if (isEmptyNormalHours(normalRaw)) { ignoredNoNormal += 1; continue; }

      const iso = toISODateKey(d);
      const isHoliday = holidayMap.has(iso);
      const dow = d.getDay();
      const isSat = dow === 6;
      const isSun = dow === 0;

      const isSpecial = isSat || isSun || isHoliday;
      if (!isSpecial) { ignoredNotSelected += 1; continue; }

      let type = null;
      if (holidayPriority && isHoliday) type = "FERIADO";
      else if (isSat) type = "SÁBADO";
      else if (isSun) type = "DOMINGO";
      else if (!holidayPriority && isHoliday) type = "FERIADO";

      if (type === "SÁBADO" && !wantSat) { ignoredNotSelected += 1; continue; }
      if (type === "DOMINGO" && !wantSun) { ignoredNotSelected += 1; continue; }
      if (type === "FERIADO" && !wantHol) { ignoredNotSelected += 1; continue; }

      const normalM = parseHHMM(normalRaw);
      const extraM = (map.idxExtra >= 0) ? (parseHHMM(r[map.idxExtra]) ?? 0) : 0;
      const doubledM = (normalM + extraM) * 2;

      out.push({
        Data: formatDateWithDow(d),
        Entrada1: map.idxIn1>=0 ? normalizeText(r[map.idxIn1]) : "",
        Saida1: map.idxOut1>=0 ? normalizeText(r[map.idxOut1]) : "",
        Entrada2: map.idxIn2>=0 ? normalizeText(r[map.idxIn2]) : "",
        Saida2: map.idxOut2>=0 ? normalizeText(r[map.idxOut2]) : "",
        HorasNormais: minutesToHHMM(normalM),
        HorasExcedidas: minutesToHHMM(extraM),
        Diferenciada: map.idxDiff>=0 ? normalizeText(r[map.idxDiff]) : "",
        Justificativa: map.idxJust>=0 ? normalizeText(r[map.idxJust]) : "",
        Feriado: isHoliday ? holidayMap.get(iso) : "",
        TipoDoDia: type,
        HorasEmDobro: minutesToHHMM(doubledM),
      });
      counts[type] += 1;
    }

    return { out, stats: { read, exported: out.length, ignoredNoNormal, ignoredNotSelected, badDate, counts } };
  }

  function renderSummary(stats) {
    const pills = [];
    const add = (label, value) => pills.push(`<div class="pill"><strong>${label}:</strong> ${value}</div>`);
    add("Linhas lidas", stats.read);
    add("Exportadas", stats.exported);
    add("Ignoradas (Horas Normais vazia)", stats.ignoredNoNormal);
    add("Ignoradas (fora do filtro)", stats.ignoredNotSelected);
    add("Datas inválidas", stats.badDate);
    add("Sábado", stats.counts["SÁBADO"]);
    add("Domingo", stats.counts["DOMINGO"]);
    add("Feriado", stats.counts["FERIADO"]);
    els.summary.innerHTML = pills.join("");
  }

  function renderPreview(rows, limit=30) {
    const cols = ["Data","Entrada1","Saida1","Entrada2","Saida2","HorasNormais","HorasExcedidas","Diferenciada","Justificativa","Feriado","TipoDoDia","HorasEmDobro"];
    const thead = els.previewTable.querySelector("thead");
    const tbody = els.previewTable.querySelector("tbody");
    thead.innerHTML = "";
    tbody.innerHTML = "";

    const trh = document.createElement("tr");
    cols.forEach(c => {
      const th = document.createElement("th");
      th.textContent = c;
      trh.appendChild(th);
    });
    thead.appendChild(trh);

    rows.slice(0, limit).forEach(r => {
      const tr = document.createElement("tr");
      cols.forEach(c => {
        const td = document.createElement("td");
        td.textContent = r[c] ?? "";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  function toCSV(rows) {
    const sep = ";"; // Excel PT-BR friendly
    const header = ["Data","Entrada","Saida","Entrada","Saida","Horas Normais","Horas Excedidas","Diferenciada","Justificativa","Feriado","Tipo do Dia","Horas em Dobro"];

    const esc = (v) => {
      const s = String(v ?? "");
      // quote if contains sep, quote, newline
      if (s.includes(sep) || s.includes('"') || s.includes("\n") || s.includes("\r")) {
        return '"' + s.replaceAll('"','""') + '"';
      }
      return s;
    };

    const lines = [];
    lines.push(header.map(esc).join(sep));
    rows.forEach(r => {
      lines.push([
        r.Data, r.Entrada1, r.Saida1, r.Entrada2, r.Saida2,
        r.HorasNormais, r.HorasExcedidas, r.Diferenciada, r.Justificativa,
        r.Feriado, r.TipoDoDia, r.HorasEmDobro
      ].map(esc).join(sep));
    });
    return lines.join("\r\n");
  }

  function enableRunIfReady() {
    const ready = !!(exportText && (els.chkSat.checked || els.chkSun.checked || els.chkHol.checked));
    els.btnRun.disabled = !ready;
  }

  // Events
  els.fileInput.addEventListener("change", async () => {
    const f = els.fileInput.files?.[0];
    if (!f) return;

    exportFilename = f.name;
    exportText = await f.text();

    els.fileInfo.textContent = `Arquivo: ${f.name}`;
    setStatus("CSV carregado. Clique em Executar.");
    enableRunIfReady();
  });

  [els.chkSat, els.chkSun, els.chkHol].forEach(el => el.addEventListener("change", enableRunIfReady));

  els.holidaysFileInput.addEventListener("change", () => {
    els.btnImportHolidays.disabled = !els.holidaysFileInput.files?.length;
  });

  els.useDefaultHolidays.addEventListener("change", rebuildHolidayMap);

  els.btnImportHolidays.addEventListener("click", async () => {
    const f = els.holidaysFileInput.files?.[0];
    if (!f) return;
    const text = await f.text();

    const delim = detectDelimiter(text);
    const raw = parseCSV(text, delim);
    if (raw.length < 2) {
      setStatus("CSV de feriados vazio.");
      return;
    }

    const hdr = raw[0].map(x => String(x||"").trim().toLowerCase());
    const idxDate = hdr.findIndex(x => x === "data" || x.includes("data"));
    const idxName = hdr.findIndex(x => x === "feriado" || x.includes("feriado") || x === "nome" || x.includes("nome"));

    if (idxDate < 0 || idxName < 0) {
      setStatus("Feriados: preciso de colunas DATA e FERIADO/NOME.");
      return;
    }

    importedHolidays = new Map();
    for (let i=1;i<raw.length;i++) {
      const d = parseDateAny(raw[i][idxDate]);
      const n = normalizeText(raw[i][idxName]);
      if (d && n) importedHolidays.set(toISODateKey(d), n);
    }

    rebuildHolidayMap();
    setStatus("Feriados importados com sucesso.");
  });

  els.btnRun.addEventListener("click", () => {
    try {
      els.btnDownload.hidden = true;
      setStatus("Executando...");

      const { out, stats } = computeFromCSV(exportText);
      renderSummary(stats);
      renderPreview(out, 30);

      const csvOut = toCSV(out);
      const blob = new Blob([csvOut], { type:"text/csv;charset=utf-8" });

      if (lastBlobUrl) URL.revokeObjectURL(lastBlobUrl);
      lastBlobUrl = URL.createObjectURL(blob);

      els.btnDownload.href = lastBlobUrl;
      els.btnDownload.hidden = false;

      setStatus("Pronto! Clique em 'Baixar CSV pronto'.");
    } catch (e) {
      console.error(e);
      setStatus(e.message || "Erro ao executar.");
    }
  });

  els.btnClear.addEventListener("click", () => {
    exportText = null;
    exportFilename = null;

    els.fileInput.value = "";
    els.fileInfo.textContent = "Nenhum arquivo selecionado.";

    importedHolidays = new Map();
    els.holidaysFileInput.value = "";
    els.btnImportHolidays.disabled = true;

    rebuildHolidayMap();

    els.summary.innerHTML = "";
    els.previewTable.querySelector("thead").innerHTML = "";
    els.previewTable.querySelector("tbody").innerHTML = "";

    els.btnRun.disabled = true;
    els.btnDownload.hidden = true;
    setStatus("");

    if (lastBlobUrl) URL.revokeObjectURL(lastBlobUrl);
    lastBlobUrl = null;
  });

  rebuildHolidayMap();
  enableRunIfReady();
})();
