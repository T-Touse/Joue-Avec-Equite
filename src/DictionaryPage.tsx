import { useState } from "react";
import { getWords,type IWord } from "./concepts";

const allConcepts = getWords()

export default function DictionaryPage({ onBack }: { onBack: () => void }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTag, setSelectedTag] = useState<string | null>(null);

	// Extraire tous les tags uniques pour le filtre
	const allTags = Array.from(new Set(allConcepts.flatMap(w => w.tags))).sort();

	const filteredWords = allConcepts.filter(w => {
		const matchesSearch = w.word.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesTag = selectedTag ? w.tags.includes(selectedTag) : true;
		return matchesSearch && matchesTag;
	});

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white min-h-screen shadow-inner">
			<div className="flex items-center justify-between mb-8">
				<button onClick={onBack} className="text-blue-600 hover:underline">← Retour au menu</button>
				<h1 className="text-3xl font-black text-slate-800">Lexique Engagé</h1>
			</div>

			{/* Barre de recherche et Filtres */}
			<div className="sticky top-0 bg-white/80 backdrop-blur-md py-4 z-10 space-y-4 border-b mb-6">
				<input
					type="text"
					placeholder="Rechercher un concept..."
					className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 outline-none"
					onChange={(e:any) => setSearchTerm(e.target.value)}
				/>
				<div className="flex flex-wrap gap-2">
					<button
						onClick={() => setSelectedTag(null)}
						className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${!selectedTag ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}
					>
						Tous
					</button>
					{allTags.map(tag => (
						<button
							key={tag}
							onClick={() => setSelectedTag(tag)}
							className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
						>
							#{tag}
						</button>
					))}
				</div>
			</div>

			{/* Liste des mots */}
			<div className="grid gap-6 md:grid-cols-2">
				{filteredWords.map((item, index) => (
					<div key={index} className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-slate-50">
						<h3 className="text-lg font-bold text-blue-700 mb-2">{item.word}</h3>
						<p className="text-sm text-slate-600 leading-relaxed">{item.definition}</p>
						<div className="mt-3 flex gap-1 flex-wrap">
							{item.tags.map(t => (
								<span key={t} className="text-[10px] uppercase font-black text-slate-400">#{t}</span>
							))}
						</div>
					</div>
				))}
			</div>

			{filteredWords.length === 0 && (
				<p className="text-center py-20 text-slate-400">Aucun mot ne correspond à votre recherche.</p>
			)}
		</div>
	);
}