import React from "react";
import DataTable from "react-data-table-component";
import {schedule} from "app/data/schedule";

function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
    const results = [];

    for (let i = 1; i < pages; i++) {
        results.push(i);
    }

    return results;
}

const columns = [
    {
        name: "Session",
        selector: (row) => row.sessions,
        sortable: true
    },
    {
        name: "name",
        selector: (row) => row.name,
        sortable: true
    },
    {
        name: "Location",
        selector: (row) => row.location,
        sortable: true,
    },
    {
        name: "Date",
        selector: (row) => row.createdAt,
        sortable: true,
    },
    {
        button: true,
        
    }
];

// RDT exposes the following internal pagination properties
export const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage
}) => {
    const handleBackButtonClick = () => {
        onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
        onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
        onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleBackButtonClick}
                        disabled={previosDisabled}
                        aria-disabled={previosDisabled}
                        aria-label="previous page"
                    >
                        Previous
                    </button>
                </li>
                {pageItems.map((page) => {
                    const className =
                        page === currentPage ? "page-item active" : "page-item";

                    return (
                        <li key={page} className={className}>
                            <button
                                className="page-link"
                                onClick={handlePageNumber}
                                value={page}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleNextButtonClick}
                        disabled={nextDisabled}
                        aria-disabled={nextDisabled}
                        aria-label="next page"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
        <input
            htmlFor="booty-check"
            type="checkbox"
            className="form-check-input"
            ref={ref}
            onClick={onClick}
            {...rest}
        />
        <label className="form-check-label" id="booty-check" />
    </div>
));

const ScheduleTable = () => {
    return (
        <DataTable
            columns={columns}
            data={schedule}
            defaultSortFieldID={1}
            pagination
            // paginationComponent={BootyPagination}
            // selectableRows
            // selectableRowsComponent={BootyCheckbox}
        />
    );
}

export default ScheduleTable