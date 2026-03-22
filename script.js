const savoirs = {
  "1": ["Pulsation", "Rythmes simples", "Voix parlée/chantée", "Instruments de classe"],
  "2": ["Lecture rythmique", "Notes (do à sol)", "Ensemble instrumental", "Structure ABA"],
  "3": ["Gammes", "Accords", "Création musicale", "Analyse musicale"]
};

const univers = [
  "Quête du dragon du rythme",
  "Forteresse des mélodies",
  "Caverne des instruments",
  "Tour des compositeurs"
];

function genererPlan() {
  const cycle = document.getElementById("cycle").value;
  const periodes = parseInt(document.getElementById("periodes").value);

  let plan = "";
  let compCycle = [];

  // Répartition réelle PFEQ
  let totalC1 = Math.round(periodes * 0.35);
  let totalC2 = Math.round(periodes * 0.35);
  let totalC3 = periodes - totalC1 - totalC2;

  compCycle = [
    ...Array(totalC1).fill("Créer"),
    ...Array(totalC2).fill("Interpréter"),
    ...Array(totalC3).fill("Apprécier")
  ];

  // Mélanger pour éviter blocs
  compCycle.sort(() => Math.random() - 0.5);

  for (let i = 0; i < periodes; i++) {
    let savoir = savoirs[cycle][i % savoirs[cycle].length];
    let theme = univers[i % univers.length];

    plan += `Période ${i + 1}
Compétence : ${compCycle[i]}
Savoir : ${savoir}
Mission : ${theme}
XP : +10

`;
  }

  document.getElementById("output").textContent = plan;
}

function genererSAE() {
  const cycle = document.getElementById("cycle").value;

  let savoir = savoirs[cycle][Math.floor(Math.random() * savoirs[cycle].length)];
  let theme = univers[Math.floor(Math.random() * univers.length)];

  let sae = `
SAÉ - ${theme}

Intention pédagogique :
Développer la compétence musicale à travers une situation ludique.

Compétences :
- Créer
- Interpréter

Savoir essentiel :
- ${savoir}

Déroulement :

Période 1 :
Exploration et découverte

Période 2 :
Pratique guidée

Période 3 :
Création / collaboration

Période 4 :
Présentation finale

Évaluation :

Créer (35%) :
- Originalité
- Engagement

Interpréter (35%) :
- Précision
- Technique

Apprécier (30%) :
- Réflexion
- Participation

--- CLASSROOMSCREEN ---

Objectif :
Maîtriser ${savoir}

Matériel :
Instruments / iPad / voix

Étapes :
1. Échauffement
2. Pratique
3. Défi
4. Retour

Consigne :
Réussir la mission : ${theme}
`;

  document.getElementById("output").textContent = sae;
}
