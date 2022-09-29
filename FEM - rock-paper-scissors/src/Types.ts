// PROPS
export type TPowers = 'lizard' | 'paper' | 'rock' | 'spock' | 'scissors'

export interface IPropsIconCircle {
    name: TPowers,
    size: string,
    outlineColor: string,
    top: string,
    left: string,
    imgPath: string,
    handleSelect: (name:TPowers) => void
}

// VARIABLES

export interface IIconCircle {
    name: TPowers,
    sizeSelect: string,
    sizeResults: string,
    outlineColor: string,
    top: string,
    left: string,
    imgPath: string,
    beats: string[],
    isBeatenBy: string[]
}