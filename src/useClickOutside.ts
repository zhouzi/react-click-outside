import * as React from 'react';

/*
 * Mostly taken from https://github.com/tj/react-click-outside
 */
function useClickOutside(callback: (target: EventTarget) => void): { ref: React.Ref<any>; } {
    const container = React.useRef<HTMLElement | null>();
    const isTouch = React.useRef(false);

    React.useEffect(() => {
        const onTouchEnd = (event: TouchEvent) => {
            // Proper support for iOS devices require to listen to "touchend"
            // but listening to both touchend and mousedown leads to this function being called twice.
            // https://github.com/tj/react-click-outside/pull/28
            isTouch.current = true;
            onClickOutside(event);
        };

        const onClickOutside = (event: MouseEvent | TouchEvent) => {
            const { target } = event;

            if (
                container.current == null
                || container.current.contains(target as Node)
            ) {
                return;
            }

            callback(target);
        };

        const onMouseDown = (event: MouseEvent) => {
            if (isTouch.current) {
                return;
            }
            onClickOutside(event);
        };

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('touchend', onTouchEnd);

        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, [callback]);

    return { ref: container };
}

export default useClickOutside;
