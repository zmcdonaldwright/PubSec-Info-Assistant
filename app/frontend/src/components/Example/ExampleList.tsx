// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "Is HMNZS Aotearoa faster than HMNZS Te Kaha?", value: "Is HMNZS Aotearoa faster than HMNZS Te Kaha?" },
    { text: "What are the privileged access controls outlined in the NZISM?", value: "What are the privileged access controls outlined in the NZISM?" },
    { text: "What are some feature differences between SQL Server 2022 editions?", value: "What are some feature differences between SQL Server 2022 editions?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
