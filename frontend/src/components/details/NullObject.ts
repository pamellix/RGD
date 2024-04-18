export function isEmptyObject(obj: { [key: string]: string }): boolean {
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			const value = obj[key];
			if (value !== null && value !== undefined && value !== "") {
				return false;
			}
		}
	}
	return true;
}
  