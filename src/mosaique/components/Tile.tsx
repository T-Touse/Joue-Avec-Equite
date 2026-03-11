import { useState } from "react";
import { ICard, IRole } from "../types";

export function Tile({ card, role, onGuess }: { card: ICard; role: IRole; onGuess: (word: string) => void }) {
	const [isSelected, setSelected] = useState(false);

	// On réinitialise la sélection si la carte est trouvée ou si le tour change (optionnel)
	const isClickable = role === "agent" && !card.isFound && !card.isNeutral;

	const getStyles = () => {
		if (card.isFound) return "bg-emerald-500 text-white border-emerald-700 shadow-inner scale-95 opacity-80";
		if (card.isNeutral) return "bg-slate-200 text-slate-400 border-slate-300";

		// Priorité au style de sélection pour l'Agent
		if (isSelected && role === "agent") return "bg-blue-50 border-blue-400 text-blue-800 shadow-md ring-2 ring-blue-200";

		if (role === "spy" && card.isConcept) return "bg-purple-100 border-purple-400 text-purple-800 shadow-sm";
		return "bg-white border-slate-200 hover:border-slate-300 text-slate-700 shadow-sm";
	};

	return (
		<div
			onClick={() => isClickable && setSelected(!isSelected)}
			className={`relative h-24 flex flex-col items-center justify-center p-3 border-2 rounded-2xl font-bold transition-all duration-200 text-center select-none ${getStyles()} ${isClickable ? "cursor-pointer" : "cursor-default"}`}
		>
			<span className={`text-sm md:text-base leading-tight uppercase tracking-tight ${isSelected ? 'mb-4' : ''}`}>
				{card.word}
			</span>

			{/* Interface d'action (Valider + Info) */}
			<div className="absolute top-2 right-2 flex gap-1 z-30">
				{/* Bouton Info toujours accessible au survol */}
				{card.definition && (
					<div className="group relative">
						<button
							onClick={(e) => e.stopPropagation()}
							className="w-6 h-6 bg-slate-800/10 hover:bg-slate-800 hover:text-white text-slate-500 text-[10px] rounded-full flex items-center justify-center transition-colors font-black"
						>
							?
						</button>
						<div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-48 md:w-64">
							<div className="bg-slate-900 text-white p-3 rounded-xl text-xs font-medium shadow-xl border border-slate-700 text-left">
								<p className="font-black text-purple-400 uppercase mb-1">{card.word}</p>
								{card.definition}
								<div className="absolute top-full right-2 w-3 h-3 bg-slate-900 rotate-45 -mt-1.5"></div>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Bouton Valider : N'apparaît que si sélectionné par l'agent */}
			{isSelected && isClickable && (
				<button
					onClick={(e) => {
						e.stopPropagation();
						onGuess(card.word);
						setSelected(false);
					}}
					className="mt-auto w-full py-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] uppercase font-black rounded-lg transition-transform active:scale-95 shadow-lg"
				>
					Confirmer
				</button>
			)}

			{/* Indicateur Spy */}
			{role === "spy" && card.isConcept && !card.isFound && (
				<div className="absolute bottom-2 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
			)}
		</div>
	);
}