export type Progress = {
	label: string,
	labelColor: string,
	labelOnComplete: string,
	fillColor: string,
	backgroundColor: string,
	striped: boolean,
	animated: boolean,
	position: string,
	time: number
}

export type ProgressCancel = {
	label: string,
	labelColor: string,
	fillColor: string,
	striped: boolean,
	position: string,
	time: number
}

export enum ProgressPosition {
	CENTER_TOP = "CENTER_TOP",
	CENTER_BOTTOM = "CENTER_BOTTOM",
}