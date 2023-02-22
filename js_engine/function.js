const add = (a, b) => a + b;

const add2 = (a, b) => {
    return a + b;
};

function calculator(func, a, b) {
    return func(a, b);
}

add(3, 5); // 8
calculator(add, 3, 5); // 8

// 함수 자리에 함수 호출을 넣으면 안됨
calculator(add(), 3, 5); // undefined + undefined
document.querySelector('#header').addEventListener('click', add()); // undefined + undefined

// 함수 호출 -> 리턴 값으로 대체

const onClick = () => {
    console.log('hello');
};

document.querySelector('#header').addEventListener('click', onClick()); // return 값 안적으면 undefined

const onClick2 = () => (event) => {
    // return 이 명시적으로 안보이지만
    console.log('hello');
};

const onClick3 = () => {
    // onClick2 onClick3 같음
    return () => {
        console.log('hello');
    };
};
document.querySelector('#header').addEventListener('click', onClick2());
document.querySelector('#header').addEventListener('click', () => {
    console.log('hello');
});

import { useCallback } from 'react';

export const App = () => {
    const onClick = useCallback((e) => {
        console.log(e.target);
    }, []);

    // 기본꼴
    // const onClick = (e) => {
    //     console.log(e.target);
    // };
    const onClick2 = useCallback(
        () => (e) => {
            console.log(e.target);
        },
        []
    );

    return (
        <>
            <div onClick={onClick}></div>
            {/* <div onClick={onClick()}></div> */}
            {/* <div onClick={undefined}></div> */}
            <div onClick={onClick2()}></div>
            <div
                onClick={(e) => {
                    console.log(e.target);
                }}
            ></div>
        </>
    );
};
