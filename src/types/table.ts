export interface TableTH {
    name: string,
    key: string
}

export interface TableProps {
    items: Array<unknown>,
    tableTHList: Array<TableTH>
}

export interface TableCellProps {
    prop: string,
    data: unknown
}
