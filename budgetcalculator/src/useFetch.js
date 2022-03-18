const useFetch = () => {
    useEffect(() => {
        setTimeout(() =>{
            fetch('http://localhost:8000/budget')
        })
    })
}