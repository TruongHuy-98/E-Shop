

function index() {
    const [getItem, setItem] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/laravel8/laravel8/public/api/blog')
        .then(response => {
            setItem(response.data.blog)
        })
        .catch(function (error) {
            console.log(error)
        })
    },[])

    const handlePageChange = (pageNumber) => {
        
    }
    function fetchData() {
        if (Object.keys(getItem).length > 0) {
            return getItem.data.map((value, key) => {
                
            })
        }
    }

    return (
        <div className="col-sm-9">
            <div className="blog-post-area">    
                <h2 className="title text-center">Latest From our Blog</h2>
                {fetchData()}
            </div>

        </div>
    )
}
export default index;