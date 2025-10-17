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
            alert("already added")
            return;
        }
        const updatedData = [...oldData, data];
        localStorage.setItem('appData', JSON.stringify(updatedData))
    }
    catch (error) {
        console.log(error)
    }
}