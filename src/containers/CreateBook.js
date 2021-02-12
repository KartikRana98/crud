import React, { Component } from 'react'

export default class CreateBook extends Component {
    render() {
        return (
            <div className="mt-4">
                <h2>Create Record</h2>
                <form >
                    <div className="form-group">
                        <input className="form-control" type="text" name="title" placeholder="Title"></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="author" placeholder="Author"></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="year" placeholder="Year Published"></input>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mx-4">Submit</button>
                        <button type="btn" className="btn btn-default border-primary">Cancel</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
