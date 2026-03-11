import { useState } from "react";
import type { IGameSettings } from "../types";
import { useMultiplayer } from "../../multiPlayer";

function OnlinePanel({ myId, conn, isHost, remoteCode, onCodeChange, onJoin }: any) {
	return (
		<div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
			{/* Partie HOST */}
			<div className="pb-4 border-b border-slate-200">
				<label className="block text-xs font-bold uppercase text-slate-400 mb-1">Héberger</label>
				<div className="flex items-center justify-between bg-white p-2 rounded border">
					<code className="text-blue-600 font-mono">{myId || "Génération..."}</code>
					<span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded">Ton Code</span>
				</div>
			</div>

			{/* Partie GUEST */}
			<div>
				<label className="block text-xs font-bold uppercase text-slate-400 mb-1">Rejoindre</label>
				<div className="flex gap-2">
					<input
						className="flex-1 p-2 text-sm border rounded outline-none focus:border-blue-500"
						placeholder="Code de l'ami..."
						value={remoteCode}
						onChange={(e:any) => onCodeChange(e.target.value)}
					/>
					<button 
						onClick={onJoin}
						className="px-4 py-2 bg-slate-800 text-white text-sm rounded hover:bg-black transition-colors"
					>
						Connecter
					</button>
				</div>
			</div>

			{/* Status de connexion */}
			{conn && (
				<div className="text-center p-1 bg-green-100 text-green-700 text-xs rounded animate-pulse">
					{isHost ? "Joueur connecté !" : "Connecté à l'hôte !"}
				</div>
			)}
		</div>
	);
}

function ModeSelector({ currentMode, onChange }: { currentMode: string, onChange: (m: any) => void }) {
	return (
		<div>
			<label className="block text-sm font-semibold mb-2">Mode de jeu</label>
			<div className="flex gap-2">
				{["offline", "online"].map((m) => (
					<button
						key={m}
						onClick={() => onChange(m)}
						className={`flex-1 py-2 rounded-lg capitalize border-2 transition-all ${
							currentMode === m ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-200 text-slate-500"
						}`}
					>
						{m === "offline" ? "📍 Local" : "🌐 En ligne"}
					</button>
				))}
			</div>
		</div>
	);
}

function GridSizeSelector({ value, onChange }: { value: number, onChange: (v: number) => void }) {
	return (
		<div>
			<label className="block text-sm font-semibold mb-2">Taille de la grille</label>
			<select
				className="w-full p-2 border-2 border-slate-200 rounded-lg outline-none focus:border-blue-500"
				value={value}
				onChange={(e:any) => onChange(parseInt(e.target.value))}
			>
				<option value="4">Petit (4x4)</option>
				<option value="5">Standard (5x5)</option>
				<option value="6">Grand (6x6)</option>
			</select>
		</div>
	);
}
export default function SetupMenu({ onStart }: { onStart: (settings: IGameSettings) => void }) {
	const [settings, setSettings] = useState<IGameSettings>({
		mode: "offline",
		playerCount: 2,
		gridSize: 4,
		theme: "diversité",
	});
	const [remoteCode, setRemoteCode] = useState("");
	const { myId, joinGame, conn, isHost } = useMultiplayer();

	return (
		<div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
			<h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Configuration</h2>

			<div className="space-y-6">
				<ModeSelector 
					currentMode={settings.mode} 
					onChange={(m) => setSettings({ ...settings, mode: m })} 
				/>

				{settings.mode === "offline" ? (
					<p className="text-sm text-slate-500 italic">Mode local : Une seule équipe sur cet appareil.</p>
				) : (
					<OnlinePanel 
						myId={myId} 
						conn={conn} 
						isHost={isHost}
						remoteCode={remoteCode}
						onCodeChange={setRemoteCode}
						onJoin={() => joinGame(remoteCode)}
					/>
				)}

				<GridSizeSelector 
					value={settings.gridSize} 
					onChange={(val) => setSettings({ ...settings, gridSize: val })} 
				/>

				<button
					onClick={() => onStart(settings)}
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
				>
					Lancer la partie
				</button>
			</div>
		</div>
	);
}