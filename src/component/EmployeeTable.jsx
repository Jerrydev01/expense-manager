import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import { useSelector } from "react-redux";



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
    const [pageSize, setPageSize] = React.useState(100);

    // const [rows, setRows] = React.useState(employees);

    // const deleteUser = React.useCallback(
    //     (id) => () => {
    //         setTimeout(() => {
    //             setRows((rows) => rows.filter((row) => row.id !== id));
    //         });
    //         console.log('delete')
    //     },
    //     [],
    // );

    const columns= [
        { field: 'date', headerName: 'Date', type: 'date', width: 180, editable: true },
        {
            field: 'merchant',
            headerName: 'Merchant',
            type: 'singleSelect',
            editable: true,
            width: 120,
            valueOptions: [
                'Electronics',
                'Hotel',
                'Rental Car',
            ],
        },
        {
            field: 'total',
            headerName: 'Total (₦)',
            type: 'number',
            width: 150,
            editable: false,
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






