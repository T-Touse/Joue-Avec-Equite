export interface IWord {
	word: string;
	definition?: string;
	tags: string[];
}

const LGBTQ_CONCEPTS = [
	{
		word: "Abrosexuel",
		definition: "Orientation fluide qui change au fil du temps (ex: passer de gay à pan).",
		tags: ["orientation", "fluide", "lgbtqia+"]
	},
	{
		word: "Allosexuel",
		definition: "Personne qui ressent de l'attirance sexuelle (le contraire d'asexuel).",
		tags: ["orientation", "attirance", "lgbtqia+"]
	},
	{
		word: "Minsexuel",
		definition: "Attirance pour la masculinité (virilité, esthétique masculine) quel que soit le genre.",
		tags: ["orientation", "attirance", "masculinité", "lgbtqia+", "femme"]
	},
	{
		word: "Magnsexuel",
		definition: "Attirance spécifique pour la virilité imposante, la protection ou la force masculine.",
		tags: ["orientation", "attirance", "masculinité", "lgbtqia+"]
	},
	{
		word: "Finsexuel",
		definition: "Attirance pour la féminité (énergie féminine, douceur, esthétique) quel que soit le genre.",
		tags: ["orientation", "attirance", "féminité", "lgbtqia+", "femme"]
	},
	{
		word: "Gynesexuel",
		definition: "Attirance pour les femmes ou la féminité (plus centré sur l'identité de femme).",
		tags: ["orientation", "attirance", "féminité", "lgbtqia+", "femme"]
	},
	{
		word: "Masculosexuel",
		definition: "Attirance pour les personnes s'identifiant comme hommes (le genre, pas seulement l'apparence).",
		tags: ["orientation", "genre", "masculinité", "lgbtqia+"]
	},
	{
		word: "Asexuel",
		definition: "Personne qui ressent peu ou pas d'attirance sexuelle pour autrui. C'est un spectre.",
		tags: ["orientation", "ace", "lgbtqia+"]
	},
	{
		word: "Grisexuel",
		definition: "Se situe entre l'asexualité et l'allosexualité : l'attirance est rare ou très faible.",
		tags: ["orientation", "ace", "attirance", "lgbtqia+"]
	},
	{
		word: "Demisexuel",
		definition: "L'attirance sexuelle ne vient qu'après avoir créé un lien émotionnel profond.",
		tags: ["orientation", "ace", "émotion", "lgbtqia+"]
	},
	{
		word: "Fraysexuel",
		definition: "L'inverse de demisexuel : l'attirance diminue quand le lien émotionnel augmente.",
		tags: ["orientation", "ace", "émotion", "lgbtqia+"]
	},
	{
		word: "Non-binaire",
		definition: "Identité de genre qui ne s'inscrit ni exclusivement dans le genre masculin, ni dans le féminin.",
		tags: ["identité", "genre", "lgbtqia+"]
	},
	{
		word: "Transgenre",
		definition: "Personne dont l'identité de genre diffère du sexe assigné à la naissance.",
		tags: ["identité", "genre", "trans", "lgbtqia+"]
	},
	{
		word: "Mégenrage",
		definition: "Fait d'utiliser des pronoms ou des termes qui ne correspondent pas à l'identité de la personne.",
		tags: ["discrimination", "genre", "trans", "lgbtqia+"]
	},
	{
		word: "Deadname",
		definition: "Ancien prénom d'une personne transgenre, qu'elle ne souhaite plus utiliser.",
		tags: ["identité", "nom", "trans", "lgbtqia+"]
	},
	{
		word: "Cissexisme",
		definition: "Préjugé selon lequel l'identité cisgenre est la seule normale ou supérieure.",
		tags: ["discrimination", "systémique", "lgbtqia+"]
	}, {
		word: "Pansexuel",
		definition: "Attirance pour une personne sans considération pour son genre ou son sexe.",
		tags: ["orientation", "attirance", "lgbtqia+"]
	},
	{
		word: "Genre-fluide",
		definition: "Identité de genre qui varie entre masculin, féminin ou neutre selon les moments.",
		tags: ["identité", "genre", "fluide", "lgbtqia+"]
	},
	{
		word: "Intersexe",
		definition: "Personne née avec des caractéristiques biologiques ne correspondant pas aux définitions types de mâle ou femelle.",
		tags: ["corps", "santé", "identité", "lgbtqia+"]
	},
	{
		word: "Coming-out",
		definition: "Fait d'annoncer volontairement son orientation sexuelle ou son identité de genre.",
		tags: ["social", "identité", "lgbtqia+"]
	},
	{
		word: "Hétéronormativité",
		definition: "Système de pensée qui considère l'hétérosexualité comme la seule norme sociale.",
		tags: ["systémique", "social", "lgbtqia+"]
	}
];
const NUANCES_ATTIRANCE = [
	{
		word: "Acéplatonique",
		definition: "Personne qui ne ressent pas d'attirance platonique (envie d'amitié forte) pour autrui.",
		tags: ["orientation", "social", "ace", "lgbtqia+"]
	},
	{
		word: "Sapiosexuel",
		definition: "Attirance déclenchée principalement par l'intelligence ou l'esprit de l'autre.",
		tags: ["orientation", "attirance", "mental", "lgbtqia+"]
	},
	{
		word: "Objectophilie",
		definition: "Attirance sexuelle ou sentimentale envers des objets inanimés.",
		tags: ["orientation", "attirance", "lgbtqia+"]
	},
	{
		word: "Aromantique",
		definition: "Personne qui ne ressent pas d'attirance romantique (l'envie d'être en couple amoureux).",
		tags: ["orientation", "social", "lgbtqia+"]
	},
	{
		word: "Skoliosexuel",
		definition: "Attirance envers les personnes non-binaires ou transgenres.",
		tags: ["orientation", "attirance", "trans", "lgbtqia+"]
	}
];

const BODY_AND_APPEARANCE = [
	{
		word: "Grossophobie",
		definition: "Discrimination et stigmatisation des personnes grosses ou en surpoids.",
		tags: ["discrimination", "corps", "poids", "femme"]
	},
	{
		word: "Surpoids/Obésité",
		definition: "États de santé liés à l'IMC, souvent sujets à des jugements médicaux ou sociaux biaisés.",
		tags: ["santé", "corps", "poids"]
	},
	{
		word: "Featurisme",
		definition: "Discrimination basée sur les traits du visage selon des standards de beauté occidentaux.",
		tags: ["discrimination", "esthétique", "systémique", "femme"]
	},
	{
		word: "Privilège de minceur",
		definition: "Avantages sociaux dont bénéficient les personnes minces dans une société qui rejette les corps gros.",
		tags: ["privilège", "corps", "poids", "femme"]
	},
	{
		word: "Blond",
		definition: "Couleur de cheveux claire. Peut être lié à des stéréotypes de beauté standardisés.",
		tags: ["esthétique", "cheveux", "stéréotype"]
	},
	{
		word: "Brun",
		definition: "Couleur de cheveux foncée, la plus répandue mondialement.",
		tags: ["esthétique", "cheveux"]
	},
	{
		word: "Roux",
		definition: "Couleur de cheveux rare, souvent sujette à des moqueries ou préjugés historiques.",
		tags: ["esthétique", "cheveux", "discrimination", "femme"]
	}, {
		word: "Blanc",
		definition: "Couleur de cheveux souvent associée au vieillissement ou à l'albinisme.",
		tags: ["esthétique", "cheveux", "temps", "peau", "femme"]
	},
	{
		word: "Noir",
		definition: "Couleur de cheveux la plus répandue, souvent associée à la jeunesse dans certaines cultures.",
		tags: ["esthétique", "cheveux", "peau"]
	},
	{
		word: "Âgisme",
		definition: "Discrimination ou préjugés basés sur l'âge, touchant souvent les seniors ou les très jeunes.",
		tags: ["discrimination", "systémique", "temps"]
	},
	{
		word: "Jeune",
		definition: "Période de la vie caractérisée par le développement. Sujet à des stéréotypes d'immaturité.",
		tags: ["cycle", "temps", "identité"]
	},
	{
		word: "Adulte",
		definition: "Stade de maturité biologique et sociale, souvent considéré comme la 'norme' productivité.",
		tags: ["cycle", "temps", "social"]
	},
	{
		word: "Sénior",
		definition: "Dernière étape du cycle de vie. Souvent associé à la sagesse ou, à l'inverse, marginalisé.",
		tags: ["cycle", "temps", "âgisme", "femme"]
	},
	{
		word: "Minceur",
		definition: "Standard de corps souvent valorisé par la société, créant des pressions sociales.",
		tags: ["esthétique", "corps", "poids"]
	},
	{
		word: "Anorexie",
		definition: "Trouble du comportement alimentaire (TCA) grave, souvent lié à une vision déformée du corps.",
		tags: ["santé", "corps", "mental", "femme"]
	},
	{
		word: "Colorisme",
		definition: "Discrimination au sein d'une même communauté basée sur la nuance de couleur de peau.",
		tags: ["discrimination", "systémique", "esthétique", "peau"]
	},
	{
		word: "Lookisme",
		definition: "Préjugés ou discriminations basés sur l'apparence physique générale et les standards de beauté.",
		tags: ["discrimination", "femme", "systémique", "esthétique", "stéréotype"]
	},
]

const FEMINISM_AND_RIGHTS = [
	{
		word: "Féminisme",
		definition: "Mouvement social et politique visant à l'égalité réelle des droits entre les femmes et les hommes",
		tags: ["lutte", "social", "féminisme", "sexisme", "femme"]
	}, {
		word: "Suffrage",
		definition: "Le droit de vote des femmes, acquis à différentes époques selon les pays (1944 en France).",
		tags: ["politique", "histoire", "féminisme", "femme"]
	},
	{
		word: "Écart Salarial",
		definition: "Différence de rémunération moyenne entre les hommes et les femmes pour un travail égal.",
		tags: ["travail", "économie", "sexisme", "femme"]
	},
	{
		word: "Sororité",
		definition: "Lien de solidarité entre femmes, basée sur le partage d'expériences liées à l'oppression de genre.",
		tags: ["social", "solidarité", "féminisme", "famille", "femme"]
	},
	{
		word: "Charge Mentale",
		definition: "Le poids invisible de la gestion et de l'organisation du foyer, reposant souvent majoritairement sur les femmes.",
		tags: ["domestique", "mental", "sexisme", "femme"]
	},
	{
		word: "Féminicide",
		definition: "Le meurtre d'une femme parce qu'elle est une femme, souvent par son conjoint ou ex-conjoint.",
		tags: ["violence", "justice", "systémique", "sexisme", "femme"]
	},
	{
		word: "Intersectionnalité",
		definition: "Cumul de plusieurs discriminations (ex: être une femme, noire et handicapée).",
		tags: ["systémique", "social", "théorie", "femme"]
	},
	{
		word: "Sexisme",
		definition: "Discrimination basée sur le sexe ou le genre, favorisant souvent un genre sur l'autre.",
		tags: ["discrimination", "genre", "systémique", "sexisme", "femme"]
	},
	{
		word: "Parité",
		definition: "Exigence d'une représentation égale des femmes et des hommes dans les assemblées et les postes de décision.",
		tags: ["politique", "justice", "parité", "femme"]
	},
	{
		word: "Slut-shaming",
		definition: "Stigmatisation ou insulte d'une personne (souvent une femme) pour son comportement sexuel supposé.",
		tags: ["social", "sexualité", "sexisme", "femme"]
	},
	{
		word: "Mansplaining",
		definition: "Fait pour un homme d'expliquer à une femme un sujet qu'elle maîtrise déjà, de façon condescendante.",
		tags: ["social", "communication", "sexisme", "femme"]
	}, {
		word: "Patriarcat",
		definition: "Forme d'organisation sociale où les hommes détiennent le pouvoir et les privilèges.",
		tags: ["systémique", "sexisme", "féminisme", "femme"]
	},
	{
		word: "IVG",
		definition: "Interruption Volontaire de Grossesse. Droit fondamental à disposer de son corps.",
		tags: ["santé", "justice", "corps", "femme"]
	},
	{
		word: "Contraception",
		definition: "Moyens utilisés pour éviter une grossesse, pilier de l'autonomie des femmes.",
		tags: ["santé", "corps", "femme"]
	},
	{
		word: "Misogynie",
		definition: "Haine ou mépris viscéral envers les femmes.",
		tags: ["discrimination", "violence", "sexisme", "femme"]
	},
	{
		word: "Culture du viol",
		definition: "Environnement social qui minimise, normalise ou excuse les violences sexuelles.",
		tags: ["violence", "systémique", "sexisme", "femme"]
	},
	{
		word: "Consentement",
		definition: "Accord libre, explicite et enthousiaste donné avant toute activité sexuelle.",
		tags: ["social", "justice", "sexualité", "femme"]
	},
	{
		word: "Matriarcat",
		definition: "Société où l'autorité et la lignée reposent sur les femmes.",
		tags: ["social", "famille", "femme"]
	},
	{
		word: "Maternité",
		definition: "État ou rôle de mère, souvent source d'injonctions sociales contradictoires.",
		tags: ["famille", "corps", "femme"]
	},
	{
		word: "Gynécologie",
		definition: "Spécialité médicale consacrée à la santé de l'appareil génital féminin.",
		tags: ["santé", "corps", "femme"]
	},
	{
		word: "Menstruations",
		definition: "Cycle biologique féminin, encore tabou et source de précarité pour certaines.",
		tags: ["corps", "santé", "femme"]
	}
];

const DISABILITY_AND_HEALTH = [
	{
		word: "Neuroatypique",
		definition: "Personne dont le fonctionnement cérébral diffère de la norme (Autisme, TDAH, Dys...).",
		tags: ["neuro", "santé", "identité"]
	},
	{
		word: "Handicap Invisible",
		definition: "Handicap non détectable visuellement (80% des cas : diabète, fatigue chronique, surdité...).",
		tags: ["handicap", "santé", "systémique"]
	},
	{
		word: "Handisplaining",
		definition: "Fait pour une personne valide d'expliquer à une personne handicapée comment elle devrait vivre.",
		tags: ["discrimination", "social", "validisme"]
	},
	{
		word: "Accessibilité",
		definition: "Capacité d'un lieu ou d'un outil à être utilisé par tous (rampes, sous-titres, contrastes).",
		tags: ["systémique", "technique", "inclusion"]
	},
	{
		word: "Neurodiversité",
		definition: "Concept selon lequel les différences du cerveau humain sont des variations naturelles, pas des maladies.",
		tags: ["neuro", "théorie", "identité"]
	},
	{
		word: "Diabète",
		definition: "Maladie chronique où le corps ne gère plus le sucre. Handicap invisible.",
		tags: ["santé", "invisible"]
	},
	{
		word: "Fatigue Chronique",
		definition: "Épuisement persistant qui ne disparaît pas avec le repos.",
		tags: ["santé", "invisible"]
	},
	{
		word: "Surdité",
		definition: "Diminution ou perte de l'audition. Implique souvent une culture (LSF).",
		tags: ["handicap", "sensoriel", "culture"]
	},
	{
		word: "Dyslexie",
		definition: "Trouble de l'apprentissage de la lecture et de l'écriture.",
		tags: ["neuro", "apprentissage"]
	},
	{
		word: "Prothèse",
		definition: "Appareil artificiel remplaçant un membre ou un organe.",
		tags: ["technique", "moteur", "santé"]
	},
	{
		word: "Fauteuil Roulant",
		definition: "Équipement de mobilité. Symbole universel du handicap physique.",
		tags: ["technique", "moteur", "mobilité"]
	},
	{
		word: "Paralysie",
		definition: "Perte de motricité. Peut être partielle ou totale.",
		tags: ["handicap", "moteur", "santé"]
	},
	{
		word: "Cécité",
		definition: "Déficience visuelle totale. Implique souvent l'usage du Braille.",
		tags: ["handicap", "sensoriel"]
	},
	{
		word: "Amputation",
		definition: "Absence d'un membre. Demande des technologies d'assistance.",
		tags: ["handicap", "moteur", "corps"]
	},
	{
		word: "Validisme",
		definition: "Discrimination contre les personnes en situation de handicap.",
		tags: ["discrimination", "systémique", "validisme"]
	},
	{
		word: "TDAH",
		definition: "Trouble du Déficit de l'Attention avec ou sans Hyperactivité.",
		tags: ["neuro", "santé", "mental"]
	},
	{
		word: "HPI",
		definition: "Haut Potentiel Intellectuel. Rapidité de traitement et grande sensibilité.",
		tags: ["neuro", "mental"]
	},
	{
		word: "Dépression",
		definition: "Maladie psychique qui affecte l'humeur, l'énergie et le sommeil.",
		tags: ["santé", "mental", "invisible"]
	},
	{
		word: "Anxiété",
		definition: "Trouble caractérisé par une inquiétude constante et excessive.",
		tags: ["santé", "mental", "invisible"]
	}, {
		word: "Burn-out",
		definition: "Épuisement professionnel physique et mental lié à une surcharge de travail.",
		tags: ["santé", "travail", "mental"]
	},
	{
		word: "Stigmatisation",
		definition: "Marquage social négatif d'une personne en raison de sa maladie ou de son handicap.",
		tags: ["discrimination", "social", "santé"]
	}
];

const HUMANITY = [
	{
		word: "Fraternité",
		definition: "Lien de solidarité entre hommes (ou sens général de peuple).",
		tags: ["social", "solidarité", "famille"]
	},
	{
		word: "Adelphité",
		definition: "Solidarité inclusive qui dépasse les distinctions de frères/sœurs pour englober tous les humains (quelque soit le genre).",
		tags: ["social", "solidarité", "femme", "identité", "genre", "lgbtq", "trans", "famille", "humains"]
	},
]

const POLITICS_AND_FREEDOM = [
	{
		word: "Discrimination politique",
		definition: "Traiter quelqu'un différemment (emploi, logement) à cause de ses convictions.",
		tags: ["discrimination", "politique", "systémique"]
	},
	{
		word: "Délit d'opinion",
		definition: "Situation où une personne est poursuivie par la justice pour une pensée divergente.",
		tags: ["justice", "politique", "liberté"]
	},
	{
		word: "Épuration",
		definition: "Action d'exclure massivement des personnes d'un poste pour leur parti politique.",
		tags: ["politique", "exclusion", "histoire"]
	},
	{
		word: "Fichage",
		definition: "Collecte de données sur les opinions des citoyens pour surveiller ou discriminer.",
		tags: ["technique", "surveillance", "politique"]
	},
	{
		word: "Sectarisme",
		definition: "Intolérance totale envers ceux qui n'ont pas les mêmes opinions politiques.",
		tags: ["social", "exclusion", "opinion"]
	},
	{
		word: "Harcèlement idéologique",
		definition: "Pression répétée pour forcer quelqu'un à changer d'avis ou le punir de ses idées.",
		tags: ["violence", "mental", "opinion"]
	},
	{
		word: "Bannissement",
		definition: "Exclure une personne d'un débat ou d'un espace social à cause de son étiquette.",
		tags: ["social", "exclusion", "communication"]
	},
	{
		word: "Ostracisme",
		definition: "Action d'exclure une personne d'un groupe à cause de ses opinions.",
		tags: ["social", "exclusion", "histoire"]
	},
	{
		word: "Clientélisme",
		definition: "Accorder des faveurs en échange d'un soutien ou d'un vote.",
		tags: ["politique", "économie", "systémique"]
	},
	{
		word: "Répression syndicale",
		definition: "Mesures prises par un employeur pour punir l'action d'un salarié syndiqué.",
		tags: ["travail", "politique", "discrimination", "violence"]
	},
	{
		word: "Macarthysme",
		definition: "Pratique consistant à accuser quelqu'un de trahison sans preuves réelles (chasse aux sorcières).",
		tags: ["politique", "pression", "histoire"]
	},
	{
		word: "Listes noires",
		definition: "Listes de personnes à exclure de l'embauche en raison de leurs engagements.",
		tags: ["travail", "exclusion", "discrimination"]
	},
	{
		word: "Transfuge",
		definition: "Personne qui abandonne son parti pour un autre, souvent victime de harcèlement.",
		tags: ["politique", "social", "pression", "violence"]
	},
	{
		word: "Mise au placard",
		definition: "Isoler un salarié en ne lui donnant plus de travail, souvent pour ses opinions.",
		tags: ["travail", "pression", "exclusion"]
	},
	{
		word: "Boycott citoyen",
		definition: "Action d'exclure un commerce ou une personne de la vie économique pour ses idées.",
		tags: ["économie", "social", "pression"]
	},
	{
		word: "Entrisme",
		definition: "Stratégie d'infiltration d'une organisation pour la transformer de l'intérieur.",
		tags: ["politique", "stratégie", "pression"]
	},
	{
		word: "Police des mœurs",
		definition: "Contrôle visant à imposer une seule manière de vivre, de s'habiller ou d'aimer.",
		tags: ["systémique", "genre", "liberté"]
	},
	{
		word: "Dissidence",
		definition: "Fait de se séparer d'une doctrine officielle. Souvent puni par l'exclusion.",
		tags: ["politique", "liberté", "opinion"]
	},
	{
		word: "Réactionnaire",
		definition: "Opinion visant à revenir à un ordre passé en s'opposant aux nouveaux droits.",
		tags: ["politique", "histoire", "opinion"]
	},
	{
		word: "Liberticide",
		definition: "Se dit d'une mesure ou d'une opinion qui détruit les libertés individuelles.",
		tags: ["justice", "liberté", "systémique"]
	},
	{
		word: "Pluralisme",
		definition: "Système qui accepte la diversité des opinions.",
		tags: ["politique", "liberté", "opinion"]
	},
	{
		word: "Propagande",
		definition: "Manipulation de l'information pour imposer une opinion unique.",
		tags: ["politique", "communication", "pression"]
	},
	{
		word: "Conformisme",
		definition: "Pression sociale poussant à avoir les mêmes opinions que la majorité.",
		tags: ["social", "pression", "opinion"]
	},
	{
		word: "Lanceur d'alerte",
		definition: "Personne qui dénonce une injustice au risque de subir des représailles.",
		tags: ["justice", "travail", "liberté"]
	}, {
		word: "Souveraineté",
		definition: "Droit absolu d'un peuple ou d'un État à exercer son autorité sur son territoire.",
		tags: ["politique", "pouvoir", "territoire"]
	}
];

const SOCIAL_CLASSES_AND_ECONOMY = [
	{
		word: "Riche",
		definition: "Personne disposant de ressources financières importantes, associée au privilège de classe.",
		tags: ["classe", "économie", "privilège"]
	},
	{
		word: "Pauvre",
		definition: "Personne manquant de ressources pour ses besoins, souvent victime de classisme.",
		tags: ["classe", "économie", "précarité"]
	},
	{
		word: "Précarité",
		definition: "État d'instabilité financière qui rend l'avenir incertain (emploi, logement).",
		tags: ["économie", "travail", "précarité"]
	},
	{
		word: "Élitisme",
		definition: "Attitude favorisant une 'élite' au détriment de la majorité.",
		tags: ["social", "exclusion", "classe"]
	},
	{
		word: "Classisme",
		definition: "Discrimination basée sur la classe sociale ou le niveau de richesse.",
		tags: ["discrimination", "systémique", "classe"]
	},
	{
		word: "Fracture Numérique",
		definition: "Inégalité d'accès aux technologies et à internet, créant une exclusion sociale et administrative.",
		tags: ["économie", "travail", "précarité", "numérique"]
	},
];

const ECOLOGY = [
	{
		word: "Éco-anxiété",
		definition: "Détresse psychologique ou peur chronique liée aux changements climatiques et à l'avenir de la planète.",
		tags: ["politique", "lutte", "écologie"]
	},
	{
		word: "Éco-féminisme",
		definition: "Mouvement faisant un lien entre l'exploitation de la nature et l'oppression des femmes dans les sociétés patriarcales.",
		tags: ["politique", "lutte", "féminisme", "femme", "écologie"]
	},
]

const SYSTEMIC_AND_RELIGIOUS = [
	{
		word: "Linguisme",
		definition: "Discrimination basée sur la manière de parler, l'accent ou la maîtrise d'une langue.",
		tags: ["discrimination", "social", "langage"]
	},
	{
		word: "Profilage",
		definition: "Action de cibler une personne selon son origine ou sa religion supposée.",
		tags: ["police", "systémique", "discrimination"]
	},
	{
		word: "Racisme Environnemental",
		definition: "Infrastructures polluantes installées majoritairement près de populations précaires.",
		tags: ["territoire", "écologie", "systémique"]
	},
	{
		word: "Délit de faciès idéologique",
		definition: "Exclure quelqu'un sur son appartenance supposée à un courant politique.",
		tags: ["discrimination", "opinion", "politique"]
	},
	{
		word: "I.C.E",
		definition: "Police de l'immigration américaine.",
		tags: ["police", "frontière", "xénophobie", "violence"]
	},
	{
		word: "Islamophobie",
		definition: "Hostilité ou actes de discrimination envers les personnes musulmanes.",
		tags: ["religion", "discrimination", "systémique"]
	},
	{
		word: "Antisémitisme",
		definition: "Hostilité ou haine dirigée contre les Juifs.",
		tags: ["religion", "discrimination", "systémique"]
	},
	{
		word: "Amalgame",
		definition: "Confondre un groupe entier avec les actions d'une minorité.",
		tags: ["opinion", "social", "stéréotype"]
	},
	{
		word: "Sikhisme",
		definition: "Religion souvent victime d'amalgame à cause du port du turban.",
		tags: ["religion", "identité", "culture"]
	},
	{
		word: "Laïcité dévoyée",
		definition: "Utilisation de la laïcité comme outil d'exclusion de certaines pratiques religieuses.",
		tags: ["religion", "politique", "systémique"]
	},
	{
		word: "Contrôle au faciès",
		definition: "Contrôle policier basé sur l'apparence physique ou l'origine supposée.",
		tags: ["police", "systémique", "corps"]
	},
	{
		word: "Discrimination à l'adresse",
		definition: "Rejet d'un dossier basé sur le quartier de résidence.",
		tags: ["territoire", "travail", "économie"]
	},
	{
		word: "Ghettoïsation",
		definition: "Concentration forcée de populations précaires dans des zones isolées.",
		tags: ["territoire", "social", "systémique"]
	},
	{
		word: "Exil",
		definition: "Contrainte de quitter son pays, perte de droits et stigmatisation.",
		tags: ["frontière", "identité", "xénophobie"]
	}, { word: "Agnostique", definition: "Personne qui pense que l'existence d'une divinité ne peut être prouvée.", tags: ["religion", "opinion"] },
	{ word: "Athée", definition: "Personne qui ne croit en aucune divinité.", tags: ["religion", "opinion"] },
	{ word: "Bouddhisme", definition: "Philosophie et religion basée sur l'enseignement de Bouddha.", tags: ["religion", "asie"] },
	{ word: "Chrétienté", definition: "Ensemble des peuples et pays chrétiens (Catholiques, Protestants, Orthodoxes).", tags: ["religion", "europe"] },
	{ word: "Cléricalisme", definition: "Volonté de donner au clergé un pouvoir politique direct.", tags: ["religion", "politique"] },
	{ word: "Dogme", definition: "Vérité fondamentale considérée comme incontestable dans une religion.", tags: ["religion", "pression"] },
	{ word: "Hérésie", definition: "Idée jugée contraire à la doctrine officielle d'une religion.", tags: ["religion", "exclusion", "opinion"] },
	{ word: "Laïcité", definition: "Principe de séparation de l'État et des organisations religieuses.", tags: ["religion", "politique", "justice"] },
	{ word: "Monothéisme", definition: "Croyance en un dieu unique.", tags: ["religion"] },
	{ word: "Polythéisme", definition: "Croyance en plusieurs dieux.", tags: ["religion"] },
	{ word: "Pèlerinage", definition: "Voyage vers un lieu sacré pour des motifs religieux.", tags: ["religion", "territoire"] },
	{ word: "Radicalisation", definition: "Processus d'adhésion à une idéologie extrémiste.", tags: ["religion", "politique", "violence"] },
	{ word: "Sacré", definition: "Ce qui est séparé du profane et inspire un respect religieux.", tags: ["religion", "culture"] },
	{ word: "Théocratie", definition: "Gouvernement exercé par des autorités religieuses au nom de Dieu.", tags: ["religion", "politique", "pouvoir"] }
];

const VIOLENCE_AND_XENOPHOBIA = [
	// Ajoute le tag "violence" à Féminicide, Harcèlement, Répression, I.C.E

	{
		word: "Xénophobie",
		definition: "Hostilité systématique envers les personnes étrangères.",
		tags: ["xénophobie", "discrimination", "frontière"]
	}, {
		word: "Négrophobie",
		definition: "Hostilité, mépris ou haine envers les personnes noires.",
		tags: ["discrimination", "violence", "xénophobie", "peau"]
	},
	{
		word: "Déportation",
		definition: "Déplacement forcé de populations pour des motifs politiques ou raciaux.",
		tags: ["violence", "histoire", "politique", "xénophobie"]
	},
	{
		word: "Génocide",
		definition: "Extermination programmée d'un peuple pour des raisons ethniques ou religieuses.",
		tags: ["violence", "justice", "histoire", "politique"]
	},
	{
		word: "Apartheid",
		definition: "Régime de ségrégation raciale (historiquement en Afrique du Sud).",
		tags: ["violence", "systémique", "politique", "xénophobie"]
	}
];

const GLOBALS = [

	{
		word: "Plafond de verre",
		definition: "Barrière invisible limitant l'accès des minorités aux hauts postes.",
		tags: ["travail", "systémique", "privilège"]
	},
	{
		word: "Wokisme",
		definition: "Concept de vigilance face aux injustices, souvent utilisé pour discréditer les luttes.",
		tags: ["politique", "opinion", "théorie"]
	},
	{
		word: "Biais algorithmique",
		definition: "Reproduction de préjugés humains par des logiciels ou des intelligences artificielles.",
		tags: ["technique", "algorithme", "discrimination"]
	},
	{
		word: "Shadowban",
		definition: "Action d'un réseau social de rendre un utilisateur invisible sans l'en informer.",
		tags: ["numérique", "communication", "algorithme"]
	}
];

const GEOGRAPHY = [
	{ word: "Canada", tags: ["amérique", "nord", "francophonie", "pays"] },
	{ word: "Mexique", tags: ["amérique", "nord", "latin", "pays"] },
	{ word: "Suisse", tags: ["europe", "francophonie", "neutre", "pays"] },
	{ word: "Belgique", tags: ["atlantique", "europe", "francophonie", "ue", "pays"] },
	{ word: "Sénégal", tags: ["afrique", "ouest", "francophonie", "pays"] },
	{ word: "Espagne", tags: ["atlantique", "mediterané", "europe", "latin", "ue", "pays"] },
	{ word: "Italie", tags: ["mediterané", "europe", "latin", "ue", "pays"] },
	{ word: "Mediteranné", tags: ["europe", "mediterané"] },
	{ word: "Atlantique", tags: ["océan", "europe", "atlantique"] },
	{ word: "Pacifique", tags: ["océan", "conflit"] },
	{ word: "Indien", tags: ["océan"] },
	{ word: "Europe", tags: ["continent", "ue"] },
	{ word: "Asie", tags: ["continent"] },
	{ word: "Afrique", tags: ["continent"] },
	{ word: "Océanie", tags: ["continent"] },
	{ word: "Amérique", tags: ["continent"] },
	{ word: "Amérique du Sud", tags: ["continent", "latin"] },
	{ word: "Amérique du Nord", tags: ["continent", "nord"] },
	{ word: "Antarctique", tags: ["continent", "pôle", "froid"] },
	{ word: "Arctique", tags: ["continent", "pôle", "froid"] },
	{ word: "Iran", tags: ["asie", "moyen-orient", "pays"] },
	{ word: "Russie", tags: ["europe", "asie", "froid", "pays", "URSS", "puissance", "conflit"] },
	{ word: "Ukraine", tags: ["europe", "froid", "pays", "URSS", "conflit"] },
	{ word: "Chine", tags: ["asie", "est", "pays"] },
	{ word: "Japon", tags: ["asie", "est", "île", "pays"] },
	{ word: "Corée du Sud", tags: ["asie", "est", "pays"] },
	{ word: "Corée du Nord", tags: ["asie", "est", "dictature", "pays"] },
	{ word: "Maghreb", tags: ["afrique", "nord", "arabe", "maghreb"] },
	{ word: "Algérie", tags: ["afrique", "maghreb", "arabe", "pays", "colon"] },
	{ word: "Maroc", tags: ["afrique", "maghreb", "arabe", "pays", "colon"] },
	{ word: "Tunisie", tags: ["afrique", "maghreb", "arabe", "pays"] },
	{ word: "Egypte", tags: ["afrique", "moyen-orient", "arabe", "pays"] },
	{ word: "Soudan", tags: ["afrique", "est", "arabe", "pays"] },
	{ word: "Inde", tags: ["asie", "sud", "pays", "colon"] },
	{ word: "Pakistan", tags: ["asie", "sud", "pays"] },
	{ word: "Turquie", tags: ["europe", "asie", "moyen-orient"] },
	{ word: "Arabe", tags: ["langue", "culture", "moyen-orient"] },
	{ word: "Palestine", tags: ["moyen-orient", "conflit", "arabe", "pays", "colon"] },
	{ word: "Israël", tags: ["moyen-orient", "conflit", "pays", "colon"] },
	{ word: "Syrie", tags: ["moyen-orient", "arabe", "conflit", "pays", "colon"] },
	{ word: "États-Unis", tags: ["amérique", "nord", "puissance", "pays"] },
	{ word: "Allemagne", tags: ["europe", "ue", "pays"] },
	{ word: "Dubaï", tags: ["moyen-orient", "ville", "golfe", "pays"] },
	{ word: "Golfe du Mexique", tags: ["eau", "amérique"] },
	{ word: "Golfe Persique", tags: ["eau", "moyen-orient"] },
	{ word: "France", tags: ["europe", "ue", "francophonie", "pays"] },
	{ word: "Liban", tags: ["moyen-orient", "arabe", "francophonie", "pays", "colon"] },
	{ word: "Irak", tags: ["moyen-orient", "arabe", "conflit"] },
	{ word: "Bolivie", tags: ["amérique", "sud", "latin", "pays"] },
	{ word: "Équateur", tags: ["amérique", "sud", "latin", "pays"] },
	{ word: "Brésil", tags: ["amérique", "sud", "latin", "pays"] },
	{ word: "Vietnam", tags: ["asie", "sud-est", "francophonie", "pays", "colon"] },
	{ word: "Laos", tags: ["asie", "sud-est", "francophonie", "pays", "colon"] },
	{ word: "Thaïlande", tags: ["asie", "sud-est", "pays"] },
	{ word: "Philippines", tags: ["asie", "sud-est", "île", "pays"] },
	{ word: "Canaquie", tags: ["océanie", "pacifique", "île", "pays"] },
	{ word: "Haïtien", tags: ["amérique", "caraïbes", "francophonie", "pays"] },
	{ word: "Guadeloupéen", tags: ["amérique", "caraïbes", "île", "france", "pays"] },
	{ word: "Guyanais", tags: ["amérique", "sud", "france", "pays"] },
	{ word: "Martinique", tags: ["amérique", "caraïbes", "île", "france", "pays"] },
	{ word: "Réunion", tags: ["afrique", "océan-indien", "île", "france", "pays"] },
	{ word: "Maurice", tags: ["afrique", "océan-indien", "île", "francophonie", "pays", "colon"] }
];

const CATS: IWord[][] = [
	BODY_AND_APPEARANCE,
	DISABILITY_AND_HEALTH,
	ECOLOGY,
	FEMINISM_AND_RIGHTS,
	GEOGRAPHY,
	HUMANITY,
	LGBTQ_CONCEPTS,
	NUANCES_ATTIRANCE,
	POLITICS_AND_FREEDOM,
	SOCIAL_CLASSES_AND_ECONOMY,
	SYSTEMIC_AND_RELIGIOUS,
	VIOLENCE_AND_XENOPHOBIA,
	GLOBALS,
]

export function getWords():IWord[]{
	const select = Math.random()*4+3
	const cats = []
	for(let i = 0;i<select;i++){
		const r = Math.floor(Math.random()*CATS.length)
		if(CATS[r])
			cats.push(CATS[r])
	}
	let words = cats.flat().sort(() => 0.5 - Math.random())
	const subjects = new Set(...words.slice(10).map(x=>x.tags))
	words = words.filter(x=>{
		if(!x)return false
		return x.tags.some(y=>subjects.has(y)) || Math.random()>.1
	})
	return [...new Set(words)]
}