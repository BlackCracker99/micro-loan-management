import { Table } from "flowbite-react";

export default function NovaTable(props) {
    const columns = props.tblColumns.map((clm) => (
        <Table.HeadCell>{clm}</Table.HeadCell>
    ));
    return (
        <Table className={props.classes} hoverable>
            <Table.Head>{columns}</Table.Head>

            {props.children}
        </Table>
    );
}
