export function reverseString(str: string): string{
    if (!str || str !== typeof ''){
    const reversedString: string = str.split("").reverse().join("");
    console.log(reversedString);
    return reversedString;
    }
    return "Invalid input"
}

export function countCharacters(str: string): number | string{
    if (!str || str !== typeof '') {
        const countedChars = str.split(" ").join("").length
        console.log(countedChars)
        return countedChars
    }
    return "Invalid input"
}

