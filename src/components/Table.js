import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import FinanceData from "../data/finance-data.json";

import DataModal from "./Modal";

const columns = [
  { field: "invoiceNo", headerName: "Invoice No.", width: 100 },
  { field: "projectName", headerName: "Project Name", width: 200 },
  { field: "clientName", headerName: "Client Name", width: 200 },
  {
    field: "invoiceDate",
    headerName: "Invoice Date",
    type: "date",
    width: 100,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    type: "date",
    width: 100,
  },
  {
    field: "invoiceAmount",
    headerName: "Invoice Amount",
    type: "number",
    width: 200,
  },
  {
    field: "receivedAmount",
    headerName: "Received Amount",
    type: "number",
    width: 200,
  },
  {
    field: "outstandingAmount",
    headerName: "Outstanding Amount",
    type: "number",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
  },
];

const rows = FinanceData.projects.map(
    (item, index) => {
        return {
            id: index + 1,
            invoiceNo: item.invoiceNo,
            projectName: item.projectName,
            clientName: item.clientName,
            invoiceDate: new Date(item.invoiceDate),
            dueDate: new Date(item.dueDate),
            invoiceAmount: item.invoiceAmount,
            receivedAmount: item.receivedAmount,
            outstandingAmount: item.outstandingAmount,
            status: item.invoiceStatus,
            notes: item.notes,
            breakDown: item.breakdownSummary,
        };
    }
);

const paginationModel = { page: 0, pageSize: 5 };

function Table() {

    const [ShowModal, setShowModal] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        onRowClick={(params) => {
            console.log(params.row);
            setSelectedRowData(params.row);
            setShowModal(true);
        }}
      />
      {
        selectedRowData && <DataModal showModal={ShowModal} data={selectedRowData} onClose={(data) => setShowModal(data)} />
      }
    </Paper>
  );
}

export default Table;
