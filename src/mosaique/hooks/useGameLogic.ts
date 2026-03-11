// hooks/useGameLogic.ts
import { useState, useEffect } from "react";
import type { ICard, IRole, IGameSettings, IHint } from "../types";
import { generateSmartGrid } from "../SmartGrid";
import { getWords } from "../../concepts";

export function useGameLogic(settings: IGameSettings) {
	const [cards, setCards] = useState<ICard[]>([]);
	const [role, setRole] = useState<IRole>(settings.mode === "online" ? "agent" : "spy");
	const [hint, setHint] = useState({ text: "", count: 1 });
	const [guessesLeft, setGuessesLeft] = useState(0);
	const [fails, setFails] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);
	const [showTransition, setShowTransition] = useState(settings.mode === "offline")

	// Initialisation des cartes (à remplacer plus tard par ton JSON)
	useEffect(() => {
		setCards(generateSmartGrid(getWords(),settings.gridSize));
	}, [settings.gridSize]);

	// Vérification de la victoire après chaque clic
	useEffect(() => {
		if (cards.length > 0) {
			const targets = cards.filter(c => c.isConcept);
			const found = targets.filter(c => c.isFound);
			if (targets.length > 0 && found.length === targets.length) {
				setIsGameOver(true);
			}
		}
	}, [cards]);

	// Calcul du maximum de mots devinables (ta logique de sécurité)
	const calculateMaxGuesses = (hintCount: number) => {
		const remainingConcepts = cards.filter(c => c.isConcept && !c.isFound).length;
		// On limite : soit le nombre annoncé + bonus (si fail), mais jamais plus que le total restant
		const potential = hintCount + (fails > 0 ? 1 : 0);
		console.log(potential, remainingConcepts)
		return Math.min(potential, remainingConcepts);
	};

	const startSpyTurn = () => {
		if (settings.mode === "offline") {
			setRole("spy");
			setShowTransition(true);
		}
	}
	const startAgentTurn = (currentHint:IHint) => {
		const activeHint = currentHint || hint;
		const amount = calculateMaxGuesses(activeHint.count)
		setHint(activeHint);
		setGuessesLeft(amount);
		if (settings.mode === "offline") {
			setRole("agent");
			setShowTransition(true);
		}
	};

	return {
		cards, setCards, role, setRole, hint, setHint,
		guessesLeft, setGuessesLeft, fails, setFails,
		isGameOver, setIsGameOver, startAgentTurn,startSpyTurn,
		showTransition, setShowTransition
	};
}