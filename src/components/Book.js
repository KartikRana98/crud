import React from "react";

const Book =({book})=>{
    console.log(book)
    return(
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>
                <button type="button" className="btn btn-danger mx-2 my-1">Delete</button>
                <button type="button" className="btn btn-warning">Edit</button>
            </td>
        </tr>
    )
}

export default Book;