"use client";

import { Table } from "flowbite-react";

export default function NovaTable(props) {
    const columns = props.tblColumns.map((clm) => (
        <Table.HeadCell>{clm}</Table.HeadCell>
    ));
    return (
        <Table className="w-4/5" hoverable>
            <Table.Head>{columns}</Table.Head>

            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={1}>
                    <Table.Cell>
                        Name: John Doe
                        <br />
                        Contact : 0771234567
                        <br />
                        Address : Kandy Road , Kurunegala
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Reference : #1PQtY
                        <br />
                        Loan Type : Small Bussiness
                        <br />
                        Plan : 12 months (10%)
                        <br />
                        Amount : 100,000
                        <br />
                        Total Payble : 110,000
                        <br />
                        Monthly Payble : 9,200
                        <br />
                        Date Relesed : 2023-07-14
                    </Table.Cell>
                    <Table.Cell>
                        Date : 2023-07-14
                        <br />
                        Monthly Amount : 9,200
                        <br />
                        Penalty : 650
                    </Table.Cell>
                    <Table.Cell>
                        <p className="font-medium text-green-600 dark:text-green-500">
                            Relesed
                        </p>
                    </Table.Cell>
                    <Table.Cell>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                        >
                            <p>Edit</p>
                        </a>

                        <a
                            className="font-medium text-red-600 hover:underline dark:text-red-500"
                            href="/tables"
                        >
                            <p>Delete</p>
                        </a>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={1}>
                    <Table.Cell>
                        Name: John Doe
                        <br />
                        Contact : 0771234567
                        <br />
                        Address : Kandy Road , Kurunegala
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Reference : #1PQtY
                        <br />
                        Loan Type : Small Bussiness
                        <br />
                        Plan : 12 months (10%)
                        <br />
                        Amount : 100,000
                        <br />
                        Total Payble : 110,000
                        <br />
                        Monthly Payble : 9,200
                        <br />
                        Date Relesed : 2023-07-14
                    </Table.Cell>
                    <Table.Cell>
                        Date : 2023-07-14
                        <br />
                        Monthly Amount : 9,200
                        <br />
                        Penalty : 650
                    </Table.Cell>
                    <Table.Cell>
                        <p className="font-medium text-green-600 dark:text-green-500">
                            Relesed
                        </p>
                    </Table.Cell>
                    <Table.Cell>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                        >
                            <p>Edit</p>
                        </a>

                        <a
                            className="font-medium text-red-600 hover:underline dark:text-red-500"
                            href="/tables"
                        >
                            <p>Delete</p>
                        </a>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={1}>
                    <Table.Cell>
                        Name: John Doe
                        <br />
                        Contact : 0771234567
                        <br />
                        Address : Kandy Road , Kurunegala
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Reference : #1PQtY
                        <br />
                        Loan Type : Small Bussiness
                        <br />
                        Plan : 12 months (10%)
                        <br />
                        Amount : 100,000
                        <br />
                        Total Payble : 110,000
                        <br />
                        Monthly Payble : 9,200
                        <br />
                        Date Relesed : 2023-07-14
                    </Table.Cell>
                    <Table.Cell>
                        Date : 2023-07-14
                        <br />
                        Monthly Amount : 9,200
                        <br />
                        Penalty : 650
                    </Table.Cell>
                    <Table.Cell>
                        <p className="font-medium text-green-600 dark:text-green-500">
                            Relesed
                        </p>
                    </Table.Cell>
                    <Table.Cell>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                        >
                            <p>Edit</p>
                        </a>

                        <a
                            className="font-medium text-red-600 hover:underline dark:text-red-500"
                            href="/tables"
                        >
                            <p>Delete</p>
                        </a>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
}
