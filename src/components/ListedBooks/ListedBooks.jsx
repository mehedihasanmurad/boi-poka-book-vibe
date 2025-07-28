import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const listedBooksData = useLoaderData();
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, listedBooksData);
        const readBookList = listedBooksData.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    },[])
    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center bg-slate-100 py-5 rounded-lg font-bold font-mono'>Listed books</h2>
            <div className='my-10'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Books</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl'>Book I Read : {readList.length}</h2>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl'>My Wish List</h2>
                    </TabPanel>
                </Tabs>
           </div>
        </div>
    );
};

export default ListedBooks;