import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs() {
  
  return (
    <>
      <Breadcrumb className="breadcrumb-bar-two">

        <div className="container-fluid">
          <div className="row align-items-start inner-banner">
            <div className="col-md-12 col-12 text-start">
              
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <Breadcrumb.Item to="/index" className="breadcrumb-item">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active className="breadcrumb-item" aria-current="page">Dashboard</Breadcrumb.Item>
                </ol>
              </nav>
              <Breadcrumb.Item to="#" className="breadcrumb-title"
              >

                Dashboard
              </Breadcrumb.Item>
            </div>
          </div>
        </div>
      </Breadcrumb>

    </>
  );
}

export default Breadcrumbs;