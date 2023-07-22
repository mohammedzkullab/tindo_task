import { HTMLProps, ReactNode } from "react";

export type Children = React.ReactNode



export type SizeVariantsType = "small" | "medium" | "large";

export type ButtonLoadingPropsType = {
    loader?: ReactNode;
    loadingText?: string;
    containerClasses?: string;
    loadingTextClasses?: string;
};

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    buttonSize?: SizeVariantsType;
    fullWidth?: boolean;
    loading?: boolean | any;
    ref?: React.Ref<HTMLButtonElement>;
    buttonLoadingProps?: ButtonLoadingPropsType;
}


/********/
type ModalSize = "small" | "medium" | "large"
export interface Modal_Wrapper {
    children: Children;
    onClose: () => void;
    open?: boolean;
    closeOnEsc?: boolean;
    closeOnClickOutside?: boolean;
    className?: string;
    size?: ModalSize
}

/*******/
export interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
    children: Children;
    title: string;
    pageDescription?: string;
    withoutNavbar?: boolean;
    contentClassName?: string;
    withoutFooter?: boolean;
}
export type MainLayoutType = React.FC<MainLayoutProps>;

/*******/
export type ChildrenProp = {
    children: ReactNode;
};
export interface NoSsrProps extends ChildrenProp { }

export type NoSsrType = React.FC<NoSsrProps>;