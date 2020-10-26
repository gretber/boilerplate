type OnMarkType = (id: number) => void;

export type OrganizationsPropTypes = {
    id: number,
    name: string,
    marked: boolean,
    onMarked: OnMarkType,
}

export type FeaturesPropTypes = {
    title: string,
    description: string,
    icon: string,
}
