import React from 'react';
import {books} from '../data';
import Book from "../components/Book";

export default class Books extends React.Component{
    constructor(props){
        super(props);
        // this.state={}
    }

    render(){
        return(
            <div>
                <h2>Year Book</h2>
                <table className="table table-striped border" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book)=>{
                            return(
                                <Book key={book.id} book={book}/>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        )
    }



}


