import React from 'react'


export default class AddPatientModal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>
                    Add patient
                </button>
                {this.state.isOpen && (
                            <div className="row">
                                <div className="col s6 offset-s3">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">Add new patient</span>
                                            <div className="input-field">
                                                <input
                                                    placeholder="Input user name"
                                                    id="user_name"
                                                    type="text"
                                                    name="user_name"
                                                    // onChange={createHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-action">
                                            <button
                                                className="btn grey lighten-1 black-text"
                                                // disabled={loading}
                                                // onClick={addHandler}
                                            >
                                                Create patient
                                            </button>
                                            <button onClick={() => this.setState({isOpen: false})}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                )}
            </React.Fragment>
        )
    }
}