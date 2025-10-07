// MovieCard.tsx
import { FC } from 'react';
import {CardContainer} from "@/components/MovieCard/style/MovieCard.style.ts";
import {MovieCardPropsType} from "@/components/MovieCard/type/MovieCardType.ts";
import {useFocusable} from "@noriginmedia/norigin-spatial-navigation";

export const MovieCard: FC<MovieCardPropsType> = ({title, focusKey, onFocus: onCardFocus}) => {
    const {ref, focused} = useFocusable({
        focusKey: focusKey,
        onFocus: onCardFocus
    });

    return (
        <CardContainer ref={ref} $focused={focused}>
            {title}
        </CardContainer>
    );
};