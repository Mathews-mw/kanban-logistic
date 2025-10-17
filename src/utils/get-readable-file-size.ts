export const getReadableFileSize = (bytes: number) => {
	if (bytes === 0) return '0 KB';
	const suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return Math.floor(bytes / Math.pow(1024, i)) + ' ' + suffixes[i];
};
