
const BlogPagination = () => {
    return (
        <nav>
            <ul>
                <li>
                    <button>
                        <i className="fa-regular fa-angle-left"></i>
                    </button>
                </li>{" "}
                <li>
                    <span className="current">1</span>
                </li>{" "}
                <li>
                    <button>2</button>
                </li>{" "}
                <li>
                    <button>3</button>
                </li>{" "}
                <li>
                    <button>
                        <i className="fa-regular fa-angle-right"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default BlogPagination;