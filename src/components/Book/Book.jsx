import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating } = book;
    
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 shadow-sm rounded-2xl">
                <div className='pt-5 px-5'>
                    <figure className='bg-slate-100 p-5 rounded-2xl'>
                        <img className='h-[166px] rounded-lg'
                            src={image}
                            alt={bookName} />
                    </figure>
                </div>
                <div className="card-body">
                    <div className='flex gap-6'>
                        {
                            tags.map(tag => <button className="btn btn-xs rounded-full text-[#23BE0A] bg-[#d5ecd2]">{tag}</button>)
                        }
                    </div>
                    <h2 className='font-bold font-mono text-xl md:text-2xl'>{bookName}</h2>
                    <p className='font-mono'>By : {author}</p>
                    <div className='border-t-1 my-2 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="">{category}</div>
                        <div className="flex items-center gap-2">
                            <h1>{rating}</h1>
                            <IoIosStarOutline className='text-green-500 font-bold text-lg'></IoIosStarOutline>
                            <IoIosStarOutline className='text-green-500 font-bold text-lg'></IoIosStarOutline>
                            <IoIosStarOutline className='text-green-500 font-bold text-lg'></IoIosStarOutline>
                            <IoIosStarOutline className='text-green-300 font-bold text-lg'></IoIosStarOutline>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;