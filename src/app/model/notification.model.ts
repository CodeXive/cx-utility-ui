export type Notification = {
	label: string,
	labelColor: string,
	backgroundColor: string,
	position: string,
	time: number,
	empty: boolean
}

export enum NotificationPosition {
	LEFT_TOP = "LEFT_TOP",
	LEFT_MIDDLE = "LEFT_MIDDLE",
	LEFT_BOTTOM = "LEFT_BOTTOM",
	CENTER_TOP = "CENTER_TOP",
	CENTER_BOTTOM = "CENTER_BOTTOM",
	RIGHT_TOP = "RIGHT_TOP",
	RIGHT_MIDDLE = "RIGHT_MIDDLE",
	RIGHT_BOTTOM = "RIGHT_BOTTOM"
}