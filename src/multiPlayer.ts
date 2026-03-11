import { Peer, DataConnection } from "peerjs";
import { useState, useEffect } from "react";

export function useMultiplayer() {
	const [peer, setPeer] = useState<Peer | null>(null);
	const [conn, setConn] = useState<DataConnection | null>(null);
	const [myId, setMyId] = useState("");
	const [isHost, setIsHost] = useState(false);

	// Initialisation
	useEffect(() => {
		const newPeer = new Peer(); // PeerJS génère un ID aléatoire
		newPeer.on("open", (id) => setMyId(id));

		// Écouter les connexions entrantes (Mode Host)
		newPeer.on("connection", (c) => {
			setIsHost(true);
			setConn(c);
			console.log("Un joueur a rejoint !");
		});

		setPeer(newPeer);
		return () => newPeer.destroy();
	}, []);

	// Fonction pour rejoindre (Mode Guest)
	const joinGame = (remoteId: string) => {
		const c = peer?.connect(remoteId);
		if (c) {
			setIsHost(false);
			setConn(c);
		}
	};

	// Envoyer une mise à jour (la grille, le score, etc.)
	const sendUpdate = (data: any) => {
		if (conn && conn.open) {
			conn.send(data);
		}
	};

	return { myId, joinGame, sendUpdate, conn, isHost };
}