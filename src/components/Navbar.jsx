import todoicon from "../assets/todo-icon.png";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-evenly">
            <div class="container-fluid">
                <a class="navbar-brand text-success align-items-center d-flex gap-2 fw-bold " href="#">
                    <img src={todoicon} width="30" height="30" class="d-inline-block align-text-top" />
                    Rashad's Todo App
                </a>
                <button className="btn btn-outline-success">Sign In</button>
            </div>

        </nav>
    );
}

export default Navbar;