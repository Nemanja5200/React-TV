import {FC, useCallback, useRef} from 'react';
import {ContentContainer, MovieCardGrid, MovieCardWrapper} from "@/components/Content/style/Content.style.ts";
import {FocusContext, useFocusable} from "@noriginmedia/norigin-spatial-navigation";
import {MovieCard} from "@/components/MovieCard";
import {assets} from "@/constance/TempAssets.ts";

interface ContentProps {
    focusKey: string;
}

export const Content: FC<ContentProps> = ({focusKey}) => {
    const {ref, focusKey: currentFocusKey} = useFocusable({
        focusKey: focusKey,
        trackChildren: true,
        autoRestoreFocus: true,
    });

    const scrollingRef = useRef(null);

    const onCardFocus = useCallback(
        ({ y }: { y: number }) => {
            const offset = 100;
            if (scrollingRef.current) {
                scrollingRef.current.scrollTo({
                    top: y-offset,
                    behavior: 'smooth'
                });
            }
        },
        [scrollingRef]
    );

    return (
        <FocusContext.Provider value={currentFocusKey}>
            <ContentContainer ref={ref}>
                <MovieCardWrapper ref={scrollingRef}>
                <MovieCardGrid>
                    {assets.map((asset, index) => (
                        <MovieCard
                            key={asset.id || index}
                            title={asset.title}
                            focusKey={`movie-card-${index}`}
                            onFocus={onCardFocus}
                        />
                    ))}
                </MovieCardGrid>
                </MovieCardWrapper>
            </ContentContainer>
        </FocusContext.Provider>
    );
};