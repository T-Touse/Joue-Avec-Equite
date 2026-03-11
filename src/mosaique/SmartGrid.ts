import type { ICard, IWord } from "./types";

export function generateSmartGrid(allConcepts: IWord[], gridSize: number): ICard[] {
	const totalNeeded = gridSize * gridSize;
	const shuffled = [...allConcepts].sort(() => Math.random() - 0.5);

	// 1. CHOIX DU PILLIER (Le lien unique)
	// On prend un mot au hasard et on choisit son tag le plus intéressant
	const seedWord = shuffled[0]!;
	const pillarTag = seedWord.tags[Math.floor(Math.random() * seedWord.tags.length)]!;

	// 2. SÉPARATION DES MONDES
	const hasPillar = shuffled.filter(w => w.tags.includes(pillarTag));
	const noPillar = shuffled.filter(w => !w.tags.includes(pillarTag));

	// 3. CONSTRUCTION DES CONCEPTS (Le Cœur)
	const targetCount = Math.floor(totalNeeded / 3 + 1);
	const concepts: IWord[] = [];

	// On garantit 3 à 4 mots liés au pillier
	const pillarStrength = Math.min(4, hasPillar.length);
	concepts.push(...hasPillar.splice(0, pillarStrength));

	// On complète les concepts avec des mots aléatoires restants
	const remainingPool = [...hasPillar, ...noPillar].sort(() => Math.random() - 0.5);
	concepts.push(...remainingPool.splice(0, targetCount - concepts.length));

	// 4. CONSTRUCTION DES NEUTRES (L'Extérieur)
	// On essaie d'éviter le pillier ici pour ne pas créer de confusion
	const neutrals = noPillar
		.filter(w => !concepts.includes(w))
		.sort(() => Math.random() - 0.5)
		.slice(0, totalNeeded - targetCount);

	const finalSelection = [...concepts, ...neutrals];

	// --- DEBUG CONSOLE (Le bloc que tu demandais) ---
	console.group("🎲 DEBUG GÉNÉRATION GRILLE");
	console.log(`%cTag Pillier : ${pillarTag.toUpperCase()}`, "color: #ff00ff; font-weight: bold;");
	console.log("Mots liés au pillier (Concepts) :", concepts.filter(c => c.tags.includes(pillarTag)).map(c => c.word));
	console.log("Autres concepts :", concepts.filter(c => !c.tags.includes(pillarTag)).map(c => c.word));
	console.log("Mots neutres (sans pillier) :", neutrals.map(n => n.word));
	console.groupEnd();

	// 5. RENDU FINAL
	return finalSelection
		.sort(() => Math.random() - 0.5)
		.map(c => ({
			word: c.word,
			definition: c.definition,
			tags: c.tags,
			isConcept: concepts.some(con => con.word === c.word),
			isFound: false,
			isNeutral: false
		}));
}