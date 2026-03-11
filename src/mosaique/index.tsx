import { useState } from "react";
import type { IGameSettings } from "./types";
import SetupMenu from "./components/ConfigPanel";
import { GameBoard } from "./components/GameBoard"; // Assure-toi que l'import est correct

export default function App() {
	const [gameSettings, setGameSettings] = useState<IGameSettings | null>(null);

	if (!gameSettings) {
		return (
			<div className="min-h-screen bg-slate-50 p-4">
				<header className="text-center py-8">
					<h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
						Adelfité<span className="text-blue-600">Code</span>
					</h1>
					<p className="text-slate-500 mt-2">Le jeu de mots engagé</p>
				</header>
				<SetupMenu onStart={(settings) => setGameSettings(settings)} />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-slate-50 relative">
			<button
				onClick={() => setGameSettings(null)}
				className="absolute top-4 left-4 z-10 text-sm text-slate-500 hover:text-red-500 bg-white/80 p-2 rounded-md shadow-sm"
			>
				← Quitter
			</button>

			{/* APPEL DU COMPOSANT ICI */}
			<GameBoard settings={gameSettings} />
		</div>
	);
}