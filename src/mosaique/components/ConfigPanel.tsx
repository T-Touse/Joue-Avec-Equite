import { useState } from "react";
import type { IGameSettings } from "../types";

export default function SetupMenu({ onStart }: { onStart: (settings: IGameSettings) => void }) {
	const [settings, setSettings] = useState<IGameSettings>({
		mode: "offline",
		playerCount: 2,
		gridSize: 4, // 4x4 = 16 tuiles
		theme: "diversité",
	});

	return (
		<div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
			<h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Configuration</h2>

			<div className="space-y-6">
				{/* Mode de jeu */}
				<div>
					<label className="block text-sm font-semibold mb-2">Mode de jeu</label>
					<div className="flex gap-2">
						{["offline"].map((m) => (
							<button
								key={m}
								onClick={() => setSettings({ ...settings, mode: m as any })}
								className={`flex-1 py-2 rounded-lg capitalize border-2 transition-all ${settings.mode === m ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-200 text-slate-500"
									}`}
							>
								{m === "offline" ? "📍 Local" : "🌐 En ligne"}
							</button>
						))}
					</div>
				</div>
				{/* Nombre de joueurs */}
				<div>
					{settings.mode == "offline" ?
						<p>1 équipe à vous de vous repartir entre espoin et agent</p>
						:
						<>
							<label className="block text-sm font-semibold mb-2">
								Nombre de joueurs : <span className="text-blue-600">{settings.playerCount}</span>
							</label>
							<input
								type="range" min="2" max="6" step="1"
								value={settings.playerCount}
								onChange={(e:any) => setSettings({ ...settings, playerCount: parseInt(e.target.value) })}
								className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
							/>
						</>
					}
				</div>

				{/* Taille de la grille */}
				<div>
					<label className="block text-sm font-semibold mb-2">Taille de la grille</label>
					<select
						className="w-full p-2 border-2 border-slate-200 rounded-lg outline-none focus:border-blue-500"
						value={settings.gridSize}
						onChange={(e:any) => setSettings({ ...settings, gridSize: parseInt(e.target.value) })}
					>
						<option value="4">Petit (4x4 - 16 tuiles)</option>
						<option value="5">Standard (5x5 - 25 tuiles)</option>
						<option value="6">Grand (6x6 - 36 tuiles)</option>
					</select>
				</div>

				<button
					onClick={() => onStart(settings)}
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-200"
				>
					Lancer la partie
				</button>
			</div>
		</div>
	);
}