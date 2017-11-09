function ClozeCard(text,cloze) {


	//Test to make sure provided constructors are valid
	if (text.indexOf(cloze) >= 0) {
		this.fulltext = text;
		this.cloze = cloze;
		this.partial = this.fulltext.replace(cloze,"...");
	}	
	else
		console.log('Unable to generate ClozeCard, cloze text not present in full text.'); 
}

module.exports = ClozeCard;