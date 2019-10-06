export const TEST = "TEST";
export function createTestAction() {
	return {
		type: TEST,
		payload: {
			id: Math.floor(Math.random() * 1000),
			creationDate: Date.now()
		}
	};
}
