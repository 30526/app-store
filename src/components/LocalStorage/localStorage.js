
export const getItem = () => {
    try {
        const getData = JSON.parse(localStorage.getItem('appData'))
        return getData ? getData : []
    }
    catch (error) {
        console.log(error)
        return [];
    }
}

export const saveData = (data) => {
    const oldData = getItem()
    try {
        const isDuplicate = oldData.some(app => app.id === data.id)
        if (isDuplicate) {
            return;
        }
        const updatedData = [...oldData, data];
        localStorage.setItem('appData', JSON.stringify(updatedData))

    }
    catch (error) {
        console.log(error)
    }
}

export const handleRemove = (id) => {
    const oldData = getItem()
    const removeData = oldData.filter(data => data.id !== id);
    const newData = localStorage.setItem('appData', JSON.stringify(removeData))
    return newData;

}