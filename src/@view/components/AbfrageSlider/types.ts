type DotType = {
    $$typeof: Symbol,
    key: string,
    props: {className: string, children: DotType},
    ref: null,
    type: string,
    _owner: object,
    _store: {
        validated: false,
    },
    _self: null,
    _source: null,
    __proto__: Object,
}

export type DotsType = Array<DotType>;

export type SettingsType = {
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    arrows: boolean,
    dotsClass: string,
    appendDots: (dots: DotsType) => JSX.Element;
};
