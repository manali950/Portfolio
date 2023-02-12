import React from 'react';

function CommonIndexing(props) {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{props.banner} Page</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                            <li className="breadcrumb-item active">{props.banner} Page</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommonIndexing
