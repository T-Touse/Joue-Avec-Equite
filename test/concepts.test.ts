import { WORDS } from "../src/mosaique/concepts";

//const TAGS = new Set(WORDS.flatMap(x=>x.tags));console.log(TAGS)

let counts:{[key:string]:number} = {
	discrimination:0,
	corps:0,
	"santé":0,
	"privilège":0,
	politique:0,
	"femme":0,
	violence:0,
	pays:0,
	"lgbtqia+":0,
	"xénophobie":0,
	"religion":0,

}
WORDS.forEach(word=>{
	word.tags.forEach(tag=>{
		if(tag in counts)
			counts[tag]++
	})
})

console.log(counts)