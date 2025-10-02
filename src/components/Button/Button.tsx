import { FC, ReactNode } from "react";
import {
  ButtonStyle,
  ButtonWrapper,
} from "@/components/Button/styles/Button.style.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface ButtonPropsType {
  children?: ReactNode;
  focusKey?: string;
}

export const Button: FC<ButtonPropsType> = ({
  children = "Press me",
  focusKey,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: focusKey,
  });

  return (
    <ButtonWrapper>
      <ButtonStyle ref={ref} $focused={focused}>
        {children}
      </ButtonStyle>
    </ButtonWrapper>
  );
};

Button.displayName = "Button";
