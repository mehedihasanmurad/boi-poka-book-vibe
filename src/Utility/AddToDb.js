const getStoredReadList = () => {
    //read list
    const storedListStr = localStorage.getItem("read-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        //already exist do not add it
        console.log(id,"already exists in the read list")
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-list", storedListStr);
    }
}

export { addToStoreReadList,getStoredReadList };