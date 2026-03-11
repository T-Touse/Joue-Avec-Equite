import { useEffect, useState } from "react";
import type { ICard, IFeedback, IGameSettings, IHint, IRole } from "../types";
import { getRoleText } from "../types";
import { Tile } from "./Tile";
import { FeedbackPopup, GameOverScreen, HintPopup, RolePopup } from "./Screens";
import { useGameLogic } from "../hooks/useGameLogic";
import { SpyControls } from "./SpyControls";

export function GameBoard({ settings }: { settings: IGameSettings }) {
	const {
		cards, setCards, role, hint, setHint,
		guessesLeft, setGuessesLeft, fails, setFails,
		isGameOver, startAgentTurn, startSpyTurn,
		showTransition, setShowTransition
	} = useGameLogic(settings);

	const [feedback, setFeedback] = useState<IFeedback | null>(null);
	const [isAnimatingHint, setIsAnimatingHint] = useState(false);

	// Déclenchement de l'animation quand l'agent ferme la popup de transition
	useEffect(() => {
		if (!showTransition && role === "agent" && hint.text) {
			setIsAnimatingHint(true);
			const timer = setTimeout(() => setIsAnimatingHint(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [showTransition, role, hint.text]);

	const handleSendHint = (hint: IHint) => {
		if (!hint.text) return;
		if (settings.mode === "offline") {
			startAgentTurn(hint)
		}
	};

	const handleGuess = (word: string) => {
		if (role !== "agent" || guessesLeft <= 0 || feedback || isGameOver) return;

		setCards(prev => {
			const newCards = [...prev];
			const cardIndex = newCards.findIndex(c => c.word === word);
			const card = newCards[cardIndex];

			if (!card || card.isFound || card.isNeutral) return prev;

			if (card.isConcept) {
				card.isFound = true;
				const newLeft = guessesLeft - 1;
				console.log(guessesLeft,newLeft,fails)
				setGuessesLeft(newLeft);
				if (newLeft === 1 && fails > 0) {
					setFeedback({ title: "Bonus d'Adelfité", message: "", type: 'bonus' });
					setTimeout(() => {
						setFeedback(null);
					}, 1500)
				} else if (newLeft === 0) {
					setFeedback({ title: "Bien joué !", message: " Fin des essais.", type: 'success' });
					setTimeout(() => {
						setFeedback(null);
						endTurn();
					}, 2000); // On laisse 2 secondes pour lire
				}
			} else {
				card.isNeutral = true;
				setFails(fails + 1)
				setGuessesLeft(0);
				setFeedback({ title: "Oups perdu", message: " c'était pas ça... Retente au prochain tour !", type: 'error' });
				setTimeout(() => {
					setFeedback(null);
					endTurn();
				}, 2500); // Un peu plus long pour l'échec
			}
			return newCards;
		});
	};

	const endTurn = () => {
		if (isGameOver) return; // Si c'est fini, on ne change plus de rôle
		setFeedback(null);
		startSpyTurn()
	};

	return (
		<div className="max-w-4xl mx-auto p-4 relative">
			{isAnimatingHint && <HintPopup {...hint} />}
			{feedback && <FeedbackPopup {...feedback} />}
			{isGameOver && <GameOverScreen />}

			<Header {...{ fails, guessesLeft, role, hint }} />
			<Grid onGuess={handleGuess} {...{ cards, settings, role }} />

			<div className="border-t-2 border-slate-100 pt-6 mt-6">
				{role === "spy" ? <SpyControls {...{ hint, handleSendHint,cards }} /> : <BottomAgent {...{ hint, endTurn }} />}
			</div>

			{/* Modal de transition (Ton code préféré) */}
			{showTransition && settings.mode === "offline" && <RolePopup role={role} onAccept={setShowTransition} />}
		</div>
	);
}

function Header({ role, guessesLeft, hint, fails }: { role: IRole, hint: IHint, guessesLeft: number, fails: number }) {
	return (<header className="text-center mb-6">
		<h2 className="text-xl font-bold text-slate-800">
			Tour : <span className={role === "spy" ? "text-purple-600" : "text-blue-600"}>{getRoleText(role)}</span>
		</h2>
		{role === "agent" && (
			<div className="mt-2 flex flex-col items-center">
				<div className="bg-blue-100 px-4 py-1 rounded-full text-blue-700 font-bold animate-pulse">
					Essais restants : {guessesLeft}
				</div>
				<p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">
					(Indice : {hint.count} {fails}{fails > 0 && " + 1 bonus"})
				</p>
			</div>
		)}
	</header>)
}
function Grid({ cards, settings, role, onGuess }: { cards: ICard[], settings: IGameSettings, role: IRole, onGuess(s: string): void }) {
	return (<div className="grid gap-4 mb-8" style={{ gridTemplateColumns: `repeat(${settings.gridSize}, minmax(0, 1fr))` }}>
		{cards.map((card) => (
			<Tile key={card.word} {...{ card, role, onGuess }} />
		))}
	</div>)
}

function BottomAgent({ hint, endTurn }: { hint: IHint, endTurn(): void }) {
	return (<div className="flex justify-between items-center bg-blue-50 p-6 rounded-2xl border-l-8 border-blue-500 shadow-sm">
		<div>
			<p className="text-xs text-blue-400 font-black uppercase">Indice à deviner</p>
			<p className="text-3xl font-black text-blue-900">{hint.text} <span className="opacity-30">×</span> {hint.count}</p>
		</div>
		<button onClick={endTurn} className="bg-slate-200 text-slate-600 px-6 py-2 rounded-lg font-bold hover:bg-red-100 hover:text-red-600 transition-colors">
			Arrêter
		</button>
	</div>)
}