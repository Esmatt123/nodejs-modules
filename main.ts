import { countCharacters, reverseString } from "./StringUtils";
import fs from 'fs';

const data = "Learning node js is important because it is one of the most popular backend frameworks today";

const atad = reverseString(data)

countCharacters(data)

//fs.writeFileSync("reverse.txt", atad)