import { getRoleText, IFeedback, IHint, IRole } from "../types";

const COLORS = {
	error: "bg-red-600 border-red-400",
	success: "bg-emerald-600 border-emerald-400",
	bonus: "bg-purple-600 border-purple-400"
};

export function FeedbackPopup({ title, message, type }:IFeedback) {
	return (
		<div className="fixed inset-0 flex items-center justify-center z-[80] pointer-events-none bg-slate-900/20 backdrop-blur-sm">
			<div className={`text-white p-10 rounded-[2.5rem] shadow-2xl text-center border-8 animate-in zoom-in-95 duration-300 ${COLORS[type]}`}>
				<p className="tracking-tight text-4xl font-black uppercase mb-2">
					{type === 'error' ? "⚠️ " : "✨ "}{title}
				</p>
				<p className="text-xl font-medium opacity-90">{message}</p>
			</div>
		</div>
	);
}

export function HintPopup({ count, text }: IHint) {
	return (<div className="fixed inset-0 flex items-center justify-center z-[60] pointer-events-none px-6">
		<div className="bg-blue-600 text-white p-10 rounded-3xl shadow-2xl font-black animate-bounce text-center border-4 border-white">
			<p className="text-5xl mb-2">{text}</p>
			<p className="text-xl uppercase tracking-widest opacity-90">
				En {count} mot{count > 1 ? 's' : ''}
			</p>
		</div>
	</div>)
}

export function RolePopup({role,onAccept}:{role:IRole,onAccept(b:boolean):void}) {
	return (<div className="fixed inset-0 bg-slate-900/90 flex items-center justify-center z-[100] backdrop-blur-md">
		<div className="bg-white p-10 rounded-3xl text-center max-w-xl shadow-2xl border-4 border-blue-100">
			<div className={`inline-block p-4 rounded-full mb-4 ${role === "spy" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"}`}>
				{role === "spy" ? "🔍" : "🕵️"}
			</div>
			<h2 className="text-2xl font-black mb-2 text-slate-400 uppercase tracking-tighter">Prochain tour :</h2>
			<h3 className={`text-5xl font-black mb-6 uppercase ${role === "spy" ? "text-purple-600" : "text-blue-600"}`}>
				{getRoleText(role)}
			</h3>
			<p className="mb-8 text-slate-500 leading-relaxed font-medium">
				{role === "spy" ? "Prépare ton indice sans montrer l'écran !" : "Regarde l'indice et trouve les bonnes tuiles."}
			</p>
			<button
				onClick={() => onAccept(false)}
				className={`w-full text-white px-6 py-4 rounded-2xl font-black text-xl transition-transform active:scale-95 shadow-lg ${role === "spy" ? "bg-purple-600 shadow-purple-200" : "bg-blue-600 shadow-blue-200"
					}`}
			>
				Je suis prêt !
			</button>
		</div>
	</div>)
}

export function GameOverScreen() {
	return (<div className="fixed inset-0 bg-emerald-600 flex flex-col items-center justify-center z-[110] text-white p-6">
		<h2 className="text-8xl font-black mb-4 animate-bounce text-center">VICTOIRE !</h2>
		<p className="text-2xl font-bold opacity-90 mb-8 text-center">Vous avez trouvé tous les mots engagés.</p>
		<button
			onClick={() => window.location.reload()}
			className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-black text-2xl shadow-xl hover:scale-105 transition-transform"
		>
			REJOUER
		</button>
	</div>)
}