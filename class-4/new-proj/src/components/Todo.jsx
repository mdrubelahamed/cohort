// create a todo component

function Todo({ id, title, description }) {
    return (
        <div id={id}>
            <h4>{title}</h4>
            <h5>{description}</h5>
        </div>
    );
}

export default Todo;
