import mapcodeRegex from 'mapcode-regex';
import {matches} from 'super-regex';

export default function mapcode(string) {
	return [...matches(mapcodeRegex(), string, {timeout: 1000})].map(match => match.match);
}
