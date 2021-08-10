import mapcodeRegex from 'mapcode-regex';

export default function mapcode(string) {
	return string.match(mapcodeRegex()) || [];
}
