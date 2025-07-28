import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
    const {bookId} = useParams();
    console.log(bookId)
    return (
        <div>
            <h2>book details : {bookId}</h2>
        </div>
    );
};

export default BookDetails;