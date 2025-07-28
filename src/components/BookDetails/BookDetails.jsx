import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreReadList } from '../../Utility/AddToDb';

const BookDetails = () => {
    const { bookId } = useParams();
    //bookId aita string akare ache aitake number a convert kore tarpor dekhano hoyece
    const id = parseInt(bookId);

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    // console.log(book,data,bookId,id);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save : => bookId
         * 2. where to store : database
         * 3.array,list,collection : 
         * 4. check: if the book is already in the readList
         * 5. if not, then add book to the list
         * 6.if yes, do not add the book
         */
        addToStoreReadList(id)
    }
    return (
        <div className="my-10 font-mono">
            <div className="flex gap-6 flex-col lg:flex-row">
                <div className='bg-base-200 rounded-2xl p-20'>
                    <img
                        src={image}
                        className="w-[425px] h-[564px] rounded-2xl"
                    />
                </div>
                <div className='w-[600px]'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">
                        By : {author}
                    </p>
                    <div className='border-t-1'></div>
                    <p className='my-5'>{category}</p>
                    <div className='border-t-1'></div>
                    <h1 className='my-5 text-gray-500'><span className='font-bold text-gray-950'>Review</span> : {review}</h1>
                    <div className='my-5'>
                        <h2><span className='font-bold mr-5'>Tag</span>
                            {
                                tags.map(tag => <button className="btn btn-xs mr-5 rounded-full text-[#23BE0A] bg-[#d5ecd2]"># {tag}</button>)
                            }
                        </h2>
                    </div>
                    <div className='border-t-1'></div>
                    <div className='my-5'>
                        <p><span className='text-gray-500 mr-20'>Number of Pages:</span> {totalPages}</p>   
                        <p><span className='text-gray-500 mr-36'>Publisher:</span>{publisher}</p>   
                        <p><span className='text-gray-500 mr-14'>Year of Publishing:</span> {yearOfPublishing}</p>   
                        <p><span className='text-gray-500 mr-40'>Rating:</span> {rating}</p>   
                    </div>
                    <div>
                        <button onClick={()=> handleMarkAsRead(bookId)} class="btn btn-outline btn-accent text-black mr-4">Mark as Read</button>
                        <button class="btn btn-accent text-white">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;