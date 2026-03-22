function genererPlan() {
  const cycle = document.getElementById("cycle").value;
  const periodes = document.getElementById("periodes").value;

  let competences = ["Créer", "Interpréter", "Apprécier"];
  let plan = "";

  for (let i = 1; i <= periodes; i++) {
    let comp = competences[i % 3];

    plan += `Période ${i} :
- Compétence : ${comp}
- Activité : Atelier musical
- Univers : Quête musicale (Chansons & Dragons)

`;
  }

  document.getElementById("output").textContent = plan;
}

function genererSAE() {
  let sae = `
SAÉ - Mission : Le dragon des rythmes

Intention pédagogique :
Développer la compétence Interpréter à travers une pièce rythmique.

Compétences :
- Interpréter
- Créer

Savoirs essentiels :
- Pulsation
- Rythmes simples

Déroulement :

Période 1 :
Découverte du rythme

Période 2 :
Pratique en groupe

Période 3 :
Création

Période 4 :
Présentation

Évaluation :
- Précision rythmique
- Participation
- Créativité

ClassroomScreen :

Objectif :
Maîtriser un rythme

Matériel :
Instruments Orff

Étapes :
1. Échauffement
2. Pratique
3. Jeu musical
`;

  document.getElementById("output").textContent = sae;
}
