import { SVGProps } from 'react';

export const CssIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M30 0L71.0864 460.816L255.464 512L440.344 460.741L481.474 0H30ZM405.323 431.748L256.116 472.795L256.116 414.143L255.667 414.249L139.698 382.139L131.78 293.458H188.518L192.637 338.473L255.68 355.403L256.116 355.337V264.112L128.996 264.112L124.047 207.678L256.116 151.152L256.116 147.248H119.021L114.013 90.8141H255.543H256.116L256.116 38.3764H440.282L405.323 431.748Z'
                fill='currentColor'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M265.226 147.248L256.116 151.152V207.678L256.116 264.112H325.138L318.864 337.896L256.116 355.386V414.187L371.701 382.077L386.921 207.678L256.116 207.678L392.052 147.248L396.906 90.8141H256.116V146.541V147.248H265.226Z'
                fill='currentColor'
            />
        </svg>
    );
};
