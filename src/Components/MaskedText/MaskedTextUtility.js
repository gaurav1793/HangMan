function maskedUtility(original , usedLetters){
    usedLetters=usedLetters.map(ele => ele.toUpperCase());
    const guessedLetter = new Set(usedLetters);

    const characters =original.toUpperCase().split('').map(char => {
        if(guessedLetter.has(char)){
            return char;
        }
        else{
            return '_';
        }
    })

    return characters;
}

export default maskedUtility;