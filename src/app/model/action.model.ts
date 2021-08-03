export type Action = {
    label: string,
    labelColor: string,
    key: string,
    keyColor: string,
    showKey: boolean,
    backgroundColor: string,
    position: string
}

export enum ActionPosition {
    LEFT_TOP = "LEFT_TOP",
    LEFT_MIDDLE = "LEFT_MIDDLE",
    LEFT_BOTTOM = "LEFT_BOTTOM",
    CENTER_TOP = "CENTER_TOP",
    CENTER_BOTTOM = "CENTER_BOTTOM",
    RIGHT_TOP = "RIGHT_TOP",
    RIGHT_MIDDLE = "RIGHT_MIDDLE",
    RIGHT_BOTTOM = "RIGHT_BOTTOM"
}