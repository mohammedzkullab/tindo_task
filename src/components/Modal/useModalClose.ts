import { usePortal } from "hooks/usePortal";
import { useEffect, useRef } from "react";

export const useModalClose = (closeOnEsc: boolean, open: boolean, onClose: () => void) => {
    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            if (closeOnEsc && open && e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyPress);
        return () => window.removeEventListener("keydown", onKeyPress);
    }, [closeOnEsc, onClose, open]);

    const container = useRef<HTMLDivElement>(null);
    const onOverlayClick = (e: React.MouseEvent) => {
        if (!container.current?.contains(e.target as Node)) onClose();
    };
    const portal = usePortal();

    return { onOverlayClick, container, portal }
}