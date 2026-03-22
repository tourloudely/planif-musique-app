const savoirs = {
  "1": ["Pulsation", "Rythmes simples", "Voix", "Instruments"],
  "2": ["Lecture rythmique", "Notes do-sol", "Jeu d'ensemble", "Forme ABA"],
  "3": ["Gammes", "Accords", "Creation musicale", "Analyse"]
};

const univers = [
  "Quete du dragon du rythme",
  "Forteresse des melodies",
  "Caverne des instruments",
  "Tour des compositeurs"
];

function genererPlan() {
  const cycle = document.getElementById("cycle").value;
  const periodes = parseInt(document.getElementById("periodes").value);

  let plan = "";

  let totalC1 = Math.round(periodes * 0.35);
  let totalC2 = Math.round(periodes * 0.35);
  let totalC3 = periodes - totalC1 - totalC2;

  let compCycle = [];

  for (let i = 0; i < totalC1; i++) compCycle.push("Créer");
  for (let i = 0; i < totalC2; i++) compCycle.push("Interpréter");
  for (let i = 0; i < totalC3; i++) compCycle.push("Apprécier");

  // Mélange simple
  compCycle.sort(function() {
    return Math.random() - 0.5;
  });

  for (let i = 0; i < periodes; i++) {
    let savoir = savoirs[cycle][i % savoirs[cycle].length];
    let theme = univers[i % univers.length];

    plan += "Période " + (i + 1) + "\n";
    plan += "Compétence : " + compCycle[i] + "\n";
    plan += "Savoir : " + savoir + "\n";
    plan += "Mission : " + theme + "\n";
    plan += "XP : +10\n\n";
  }

  document.getElementById("output").textContent = plan;
}

function genererSAE() {
  const cycle = document.getElementById("cycle").value;

  let savoir = savoirs[cycle][Math.floor(Math.random() * savoirs[cycle].length)];
  let theme = univers[Math.floor(Math.random() * univers.length)];

  let sae = "";

  sae += "SAE - " + theme + "\n\n";

  sae += "Intention pédagogique :\n";
  sae += "Développer la compétence musicale.\n\n";

  sae += "Compétences :\n- Créer\n- Interpréter\n\n";

  sae += "Savoir essentiel :\n- " + savoir + "\n\n";

  sae += "Déroulement :\n\n";
  sae += "Période 1 : Exploration\n";
  sae += "Période 2 : Pratique\n";
  sae += "Période 3 : Création\n";
  sae += "Période 4 : Présentation\n\n";

  sae += "Évaluation :\n";
  sae += "Créer (35%)\nInterpréter (35%)\nApprécier (30%)\n\n";

  sae += "--- CLASSROOMSCREEN ---\n\n";
  sae += "Objectif : Maîtriser " + savoir + "\n";
  sae += "Matériel : Instruments / iPad\n";
  sae += "Étapes :\n1. Échauffement\n2. Pratique\n3. Défi\n4. Retour\n";
  sae += "Consigne : " + theme;

  document.getElementById("output").textContent = sae;
}
