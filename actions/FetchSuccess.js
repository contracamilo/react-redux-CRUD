const FetchSuccess = (streams) => {
    const FETCH_SUCCESS = 'FETCH_SUCCESS'
    return {
        type: FETCH_SUCCESS,
        status: "Success",
        streams
    }
}

export default FetchSuccess