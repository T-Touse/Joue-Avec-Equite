import { useState } from "react";
import type { ICard, IHint } from "../types";

export function SpyControls({
	hint,
	handleSendHint,
	cards
}: {
	cards: ICard[],
	hint: IHint,
	handleSendHint: (h: IHint) => void
}) {
	const [localError, setLocalError] = useState<string | null>(null);
	const [localHint, setLocalHint] = useState<IHint>(hint);

	const validateAndSetText = (text: string) => {
		const cleanText = text.trim().toLowerCase();
		let errorMsg: string | null = null;

		// 1. Interdire les phrases ou listes (espace si texte long)
		if (cleanText.length > 15 && cleanText.includes(" ")) {
			errorMsg = "Un seul mot autorisé (pas d'espaces) !";
		}

		// 2. Interdire les mots de la grille (ou qui contiennent le mot)
		const isInGrid = cards.some(c => {
			const gridWord = c.word.toLowerCase().trim();
			const hintWord = cleanText.toLowerCase().trim();

			if (hintWord === "") return false;

			// 1. Égalité stricte (ex: "Sexe" bloque "Sexe")
			if (gridWord === hintWord) return true;

			// 2. Vérification des racines (plus de 3 lettres)
			// On ne bloque que si l'un commence par l'autre ET que la différence est minime 
			// (pour gérer pluriels ou accords : "Français" / "Française")
			const isRootMatch = (word1: string, word2: string) => {
				if (word1.length < 4 || word2.length < 4) return false; // "Sec" ne bloquera plus "Intersectionnalité"

				// Si l'un des mots commence par l'autre et qu'il n'y a que 1 ou 2 lettres d'écart
				if (word1.startsWith(word2) && word1.length - word2.length <= 3) return true;
				if (word2.startsWith(word1) && word2.length - word1.length <= 3) return true;

				return false;
			};

			return isRootMatch(gridWord, hintWord);
		});

		if (isInGrid) {
			errorMsg = "L'indice est trop proche d'un mot du plateau.";
		}

		setLocalError(errorMsg);
		setLocalHint(prev => ({ ...prev, text: text }));
	};

	return (
		<div className="flex flex-col gap-2">
			{/* Affichage de l'erreur au-dessus pour ne pas casser le layout */}
			{localError && (
				<span className="text-red-500 text-xs font-black uppercase animate-pulse ml-2">
					{localError}
				</span>
			)}

			<div className={`flex gap-4 items-end p-6 rounded-2xl shadow-inner transition-colors ${localError ? 'bg-red-50 border-2 border-red-200' : 'bg-purple-50'}`}>
				<div className="flex-1">
					<label className="block text-xs font-black text-purple-400 mb-1 uppercase tracking-widest">
						Ton Indice {(hint.text && `Dernier Indice : ${hint.text}`)}
					</label>
					<input
						type="text"
						className={`w-full border-2 rounded-xl p-3 outline-none text-lg font-bold transition-all ${localError ? 'border-red-300 focus:border-red-500' : 'border-purple-200 focus:border-purple-600'}`}
						placeholder="Tape l'indice..."
						onChange={(e) => validateAndSetText(e.target.value)}
					/>
				</div>

				<div className="w-24">
					<label className="block text-xs font-black text-purple-400 mb-1 uppercase tracking-widest">
						Nombre
					</label>
					<select
						className="w-full border-2 border-purple-200 rounded-xl p-3 outline-none bg-white font-bold text-lg cursor-pointer"
						value={localHint.count}
						onChange={(e) => setLocalHint({ ...localHint, count: parseInt(e.target.value) })}
					>
						{[1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
					</select>
				</div>

				<button
					disabled={!!localError || !localHint.text.trim()}
					onClick={() => handleSendHint(localHint)}
					className={`px-8 py-3 rounded-xl font-black transition-all shadow-lg active:scale-95 ${localError || !localHint.text.trim()
						? "bg-slate-300 cursor-not-allowed opacity-50"
						: "bg-purple-600 text-white hover:bg-purple-700"
						}`}
				>
					VALIDER
				</button>
			</div>
		</div>
	);
}