const translations = {
  en: {
    systemHealthy: "All systems healthy", workspace: "Workspace", overview: "Overview", assets: "Assets", alerts: "Alerts", reports: "Reports", manage: "Manage", team: "Team", settings: "Settings", needHelp: "Need help?", supportTeam: "Contact support team", plantOverview: "Plant overview / Nuremberg site", goodMorning: "Good morning, Harith", subtitle: "A clear view of the equipment that keeps your operations moving.", createReport: "Create report", operationalHealth: "Operational health", activeAssets: "Active assets", allConnected: "All connected", openAlerts: "Open alerts", needsAttention: "needs attention", energyEfficiency: "Energy efficiency", vsLastMonth: "vs last month", vsLastMonth2: "vs last month", healthTrend: "Health trend", healthTrendSub: "Average equipment health over time", avgHealth: "Average health", today: "today", attentionRequired: "Attention required", attentionSub: "Prioritized by impact and urgency", viewAll: "View all", noCritical: "No critical downtime detected in the last 30 days.", assetStatus: "Asset status", assetStatusSub: "A live view of connected motors and drives", filter: "Filter", asset: "Asset", location: "Location", health: "Health", lastCheck: "Last check", status: "Status", loadMore: "Load 9 more assets"
  },
  de: {
    systemHealthy: "Alle Systeme stabil", workspace: "Arbeitsbereich", overview: "Übersicht", assets: "Anlagen", alerts: "Warnungen", reports: "Berichte", manage: "Verwalten", team: "Team", settings: "Einstellungen", needHelp: "Hilfe benötigt?", supportTeam: "Support kontaktieren", plantOverview: "Standortübersicht / Nürnberg", goodMorning: "Guten Morgen, Harith", subtitle: "Ein klarer Überblick über die Anlagen, die Ihren Betrieb bewegen.", createReport: "Bericht erstellen", operationalHealth: "Betriebszustand", activeAssets: "Aktive Anlagen", allConnected: "Alle verbunden", openAlerts: "Offene Warnungen", needsAttention: "benötigen Aufmerksamkeit", energyEfficiency: "Energieeffizienz", vsLastMonth: "zum letzten Monat", vsLastMonth2: "zum letzten Monat", healthTrend: "Zustandsverlauf", healthTrendSub: "Durchschnittlicher Anlagenzustand im Zeitverlauf", avgHealth: "Durchschnittlicher Zustand", today: "heute", attentionRequired: "Aufmerksamkeit erforderlich", attentionSub: "Nach Auswirkung und Dringlichkeit priorisiert", viewAll: "Alle anzeigen", noCritical: "In den letzten 30 Tagen kein kritischer Stillstand.", assetStatus: "Anlagenstatus", assetStatusSub: "Live-Ansicht verbundener Motoren und Antriebe", filter: "Filter", asset: "Anlage", location: "Standort", health: "Zustand", lastCheck: "Letzte Prüfung", status: "Status", loadMore: "9 weitere Anlagen laden"
  }
};

let currentLanguage = "en";
const languageToggle = document.querySelector("#languageToggle");
const toast = document.querySelector("#toast");
const dialog = document.querySelector("#detailDialog");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  languageToggle.textContent = language === "en" ? "DE" : "EN";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "de" : "en"));
document.querySelector("#reportButton").addEventListener("click", () => showToast(currentLanguage === "en" ? "Report builder opened — prototype action" : "Bericht-Builder geöffnet — Prototyp-Aktion"));
document.querySelector("#viewAllButton").addEventListener("click", () => showToast(currentLanguage === "en" ? "Showing all 3 active alerts" : "Alle 3 aktiven Warnungen werden angezeigt"));
document.querySelector(".load-more").addEventListener("click", (event) => {
  event.target.textContent = currentLanguage === "en" ? "All assets are already visible" : "Alle Anlagen sind bereits sichtbar";
});
document.querySelectorAll(".alert-row").forEach((row) => {
  row.addEventListener("click", () => {
    document.querySelector("#dialogAsset").textContent = row.dataset.alert;
    document.querySelector("#dialogTitle").textContent = row.querySelector("strong").textContent;
    dialog.showModal();
  });
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
document.querySelector("#snoozeButton").addEventListener("click", () => {
  dialog.close();
  showToast(currentLanguage === "en" ? "Alert snoozed for 24 hours" : "Warnung für 24 Stunden pausiert");
});
document.querySelector("#actionButton").addEventListener("click", () => {
  dialog.close();
  showToast(currentLanguage === "en" ? "Work order draft created" : "Arbeitsauftrag-Entwurf erstellt");
});
