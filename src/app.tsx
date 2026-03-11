import { useState } from "react";
import Mosaique from "./mosaique";
import DictionaryPage from "./DictionaryPage";
type View = 'menu' | 'game' | 'lexicon';

export default function App() {
	const [view, setView] = useState<View>('menu');
	return (<>
		<main className="min-h-screen bg-slate-50">
			{view === 'menu' && (
				<div className="flex flex-col items-center max-w-md mx-auto my-10 p-6 rounded-2xl shadow-xl border border-slate-100">
					<button
					onClick={() => setView('game')}
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-200"
				>
					Jouer en Local
				</button>
					<button
						onClick={() => setView('lexicon')}
						className="mt-4 text-slate-500 hover:text-blue-600 font-medium transition-colors"
					>
						📖 Consulter le lexique des définitions
					</button>
				</div>
			)}
			{view === 'lexicon' && <DictionaryPage onBack={() => setView('menu')} />}

			{view === 'game' && <Mosaique />}
		</main>
	</>)
}