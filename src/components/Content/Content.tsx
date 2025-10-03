import {FC, useEffect} from 'react';
import {ContentContainer} from "@/components/Content/style/Content.style.ts";
import {Button} from "@/components/Button";
import {setFocus, useFocusable} from "@noriginmedia/norigin-spatial-navigation";

interface ContentProps {
    focusKey: string;
}
export const Content: FC<ContentProps> = ({focusKey}) => {
    const{ref } = useFocusable({
        focusKey:focusKey,
        focusable:false,
    })

    useEffect(() => {
        setFocus('Hello')
    }, []);
  return (
    <>
        <ContentContainer ref={ref}>
            <Button focusKey={"Hello"}>Hello</Button>
            <Button focusKey={"World"}>World</Button>
        </ContentContainer>
    </>
  );
};


