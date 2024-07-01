function getDevRemoteEntryUrl(port) {
	return `http://localhost:${port}/remoteEntry.js`;
}

function getProdRemoteEntryUrl(domain) {
	return `${domain}/remoteEntry.js`;
}

module.exports = {
	getDevRemoteEntryUrl,
	getProdRemoteEntryUrl,
};
