
export interface MovieCardPropsType {
    title: string;
    focusKey: string;
    onFocus: (
        layout: FocusableComponentLayout,
        props: object,
        details: FocusDetails
    ) => void;
}