export interface IVerticalTable {
  title: string;
  columns: Array<{
    header: string;
    accessor: string;
    cell?: any;
  }>;
  data: any;
}
