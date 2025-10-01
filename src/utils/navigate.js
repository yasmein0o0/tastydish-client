

// Generate page numbers to display
export const getPageNumbers = (totalPages, currentPage) => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Show max 5 page numbers

    if (totalPages <= maxVisiblePages) {
        // If total pages is less than max visible, show all
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        // Always include first page
        pageNumbers.push(1);

        // Calculate start and end of visible page numbers
        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        // Adjust if we're at the beginning
        if (currentPage <= 2) {
            endPage = 3;
        }

        // Adjust if we're at the end
        if (currentPage >= totalPages - 1) {
            startPage = totalPages - 2;
        }

        // Add ellipsis if needed
        if (startPage > 2) {
            pageNumbers.push('...');
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Add ellipsis if needed
        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }

        // Always include last page
        pageNumbers.push(totalPages);
    }

    return pageNumbers;
};