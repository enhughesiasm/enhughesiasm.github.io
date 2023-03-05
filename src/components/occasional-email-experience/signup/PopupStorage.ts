export const defaultPopupStorage = {
	lastShown: null,
	showNextTime: null,
	submitted: false,
	dismissCount: 0,
};

const SUBSCRIBE_POPUP_STORAGE_KEY = 'enhughesiasm_subscribe_popup_v1';

export function setPopupStorageSubmitted() {
	// no matter the result, store this in local storage so we don't bug this user again
	let currentlyStoredPopup = localStorage.getItem(
		SUBSCRIBE_POPUP_STORAGE_KEY
	);

	let popupStorage = currentlyStoredPopup
		? JSON.parse(currentlyStoredPopup)
		: defaultPopupStorage;
	popupStorage.submitted = true;
	localStorage.setItem(
		SUBSCRIBE_POPUP_STORAGE_KEY,
		JSON.stringify(popupStorage)
	);
}
