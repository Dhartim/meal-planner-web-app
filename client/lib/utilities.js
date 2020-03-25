function decamelize(str, separator){
	separator = typeof separator === 'undefined' ? '_' : separator;
	let str2 = str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

  return str2.charAt(0).toUpperCase() + str2.slice(1);
}

export default {
  decamelize
}