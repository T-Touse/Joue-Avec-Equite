export interface IHint {
	text: string,
	count: number
}
export interface IGameSettings {
	mode: "offline" | "online";
	playerCount: number;
	gridSize: number;
	theme: string;
}

export type IRole = "agent" | "spy";

export interface ICard {
	word: string;
	definition?: string;
	isConcept: boolean;
	isFound: boolean;
	isNeutral: boolean;
}

export type IFeedback = { title: string, message: string, type: 'error' | 'success' | 'bonus' }

export function getRoleText(role: IRole) {
	return role === "spy" ? "Transmetteur" : "Décodeur"
}

export interface IWord {
	word: string;
	definition?: string;
	tags: string[];
}