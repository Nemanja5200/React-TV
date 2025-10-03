import {FC, useEffect} from 'react';
import { NabBarItemsWrappper, NavBarContainer } from "@/components/NavBar/styled/NavBar.style.ts";
import { Button } from "@/components/Button";
import { GENRES, getGenreNameByKey } from "@/constance/NavBarItems.ts";
import {FocusContext, setFocus, useFocusable} from "@noriginmedia/norigin-spatial-navigation";


interface NavBarProps {
    focusKey?: string;
}
export const NavBar: FC<NavBarProps> = ({focusKey}) => {
    const{ref} = useFocusable({
        focusable: true,
        focusKey: focusKey,
        isFocusBoundary: true,
    })

    useEffect(() => {
        setFocus('ACTION_BTN')
    }, []);
    return (
        <FocusContext.Provider value={focusKey as string}>
        <NavBarContainer ref={ref}>
            <NabBarItemsWrappper>
                <Button focusKey="ACTION_BTN">
                    {getGenreNameByKey(GENRES.ACTION)}
                </Button>
                <Button focusKey="DRAMA_BTN">
                    {getGenreNameByKey(GENRES.DRAMA)}
                </Button>
                <Button focusKey="COMEDY_BTN">
                    {getGenreNameByKey(GENRES.COMEDY)}
                </Button>
                <Button focusKey="HORROR_BTN">
                    {getGenreNameByKey(GENRES.HORROR)}
                </Button>
                <Button focusKey="ROMANCE_BTN">
                    {getGenreNameByKey(GENRES.ROMANCE)}
                </Button>
            </NabBarItemsWrappper>
        </NavBarContainer>
        </FocusContext.Provider>
    );
};