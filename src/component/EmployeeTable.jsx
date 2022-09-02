import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridActionsCellItem } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import {
    deleteFromList
} from "../features/globalSlice";

// const employees ={merchant, date, status, text, total};

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

export default function EmployeeTable() {
    const employees = useSelector((state) => state.employees.employees);
    console.log(employees);
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = React.useState(100);
  
    const columns = [
        { field: 'date', headerName: 'Date', type: 'date', width: 180, editable: true },
        { field: 'merchant', headerName: 'Merchant', type: 'string', editable: true },
        {
            field: 'total',
            headerName: 'Total (₦)',
            type: 'number',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            width: 180,
            editable: true,
        },
        {
            field: 'text',
            headerName: 'comment',
            type: 'string',
            width: 220,
            editable: true,
        },
        {
            field: 'actions',
            type: 'actions',
            width: 80,
            getActions: (id) => [
                <GridActionsCellItem
                    icon={<AiOutlineDelete />}
                    label="Delete"
                    onClick={() => dispatch(deleteFromList(id))}
                />,
            ],
        },
    ];

   

    return (
        <div style={{ height: 500, width: '100%' }}>

            <DataGrid

                getRowId={(row) => row.id}
                rows={employees}
                columns={columns}
                experimentalFeatures={{ newEditingApi: true }}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[25, 50, 100]}
                pagination
                components={{
                    Toolbar: CustomToolbar,
                }}
            />

        </div>
    );
}






