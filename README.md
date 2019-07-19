# `@zhouzi/react-click-outside`

Listen to clicks happening outside a given container. The work here is mostly an update of https://github.com/tj/react-click-outside

## Installation

```
npm install @zhouzi/react-click-outside
```

## Usage

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useClickOutside } from '@zhouzi/react-click-outside';

function Modal() {
    const [isOpen, setOpen] = React.useState(false);
    const { ref } = useClickOutside(() => {
        if (isOpen) {
            setOpen(false);
        }
    });

    return (
        <>
            <button onClick={() => setOpen(true)}>
                Open
            </button>
            {isOpen && <div ref={ref}>Modal is open</div>}
        </>
    );
}

ReactDOM.render(
    <Modal />,
    window.document.getElementById('root')
);
```
