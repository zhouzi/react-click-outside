# `@zhouzi/react-click-outside`

Listen to clicks happening outside a given container. The work here is mostly an update of https://github.com/tj/react-click-outside

## Installation

```
npm install @zhouzi/react-click-outside
```

## Usage

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useClickOutside } from '@zhouzi/react-click-outside';

function Modal() {
    const [isOpen, setOpen] = React.useState(false);
    const onClickOutside = React.useCallback(() => {
        if (isOpen) {
            setOpen(false);
        }
    }, [isOpen]);

    return (
        <>
            <button onClick={() => setOpen(true)}>
                Open
            </button>
            {isOpen && <div>Modal is open</div>}
        </>
    );
}

ReactDOM.render(
    <Modal />,
    window.document.getElementById('root')
);
```
