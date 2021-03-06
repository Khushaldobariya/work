import React from "react";
import avatar1 from '../assets/images/users/avatar1.jpg';
import profileImg from  '../assets/images/profile-img.png';

function Dashbord(props) {
  return (
    <div class="main-content">
    <div class="page-content">
      <div className="container-fluid">
    <div className="row">
    <div className="col-xl-4">
      <div className="card ">
        <div className="bg-primary bg-soft">
          <div className="row">
            <div className="col-7">
              <div className="text-primary p-3">
                <h5 className="text-primary">Welcome Back !</h5>
                <p>Skote Dashboard</p>
              </div>
            </div>
            <div className="col-5 align-self-end">
              <img
                src={profileImg}
                alt
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col-sm-4">
              <div className="avatar-md profile-user-wid mb-4">
                <img
                  src={avatar1}
                  alt
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h5 className="font-size-15 text-truncate">Henry Price</h5>
              <p className="text-muted mb-0 text-truncate">
                UI/UX Designer
              </p>
            </div>
            <div className="col-sm-8">
              <div className="pt-4">
                <div className="row">
                  <div className="col-6">
                    <h5 className="font-size-15">125</h5>
                    <p className="text-muted mb-0">Projects</p>
                  </div>
                  <div className="col-6">
                    <h5 className="font-size-15">$1245</h5>
                    <p className="text-muted mb-0">Revenue</p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="javascript: void(0);"
                    className="btn btn-primary waves-effect waves-light btn-sm"
                  >
                    View Profile <i className="mdi mdi-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">Monthly Earning</h4>
          <div className="row">
            <div className="col-sm-6">
              <p className="text-muted">This month</p>
              <h3>$34,252</h3>
              <p className="text-muted">
                <span className="text-success me-2">
                  {" "}
                  12% <i className="mdi mdi-arrow-up" />{" "}
                </span>{" "}
                From previous period
              </p>
              <div className="mt-4">
                <a
                  href="javascript: void(0);"
                  className="btn btn-primary waves-effect waves-light btn-sm"
                >
                  View More <i className="mdi mdi-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mt-4 mt-sm-0">
                <div id="radialBar-chart" className="apex-charts" />
              </div>
            </div>
          </div>
          <p className="text-muted mb-0">
            We craft digital, graphic and dimensional thinking.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xl-8">
      <div className="row">
        <div className="col-md-4">
          <div className="card mini-stats-wid">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-grow-1">
                  <p className="text-muted fw-medium">Orders</p>
                  <h4 className="mb-0">1,235</h4>
                </div>
                <div className="flex-shrink-0 align-self-center">
                  <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                    <span className="avatar-title">
                      <i className="bx bx-copy-alt font-size-24" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mini-stats-wid">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-grow-1">
                  <p className="text-muted fw-medium">Revenue</p>
                  <h4 className="mb-0">$35, 723</h4>
                </div>
                <div className="flex-shrink-0 align-self-center ">
                  <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                    <span className="avatar-title rounded-circle bg-primary">
                      <i className="bx bx-archive-in font-size-24" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mini-stats-wid">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-grow-1">
                  <p className="text-muted fw-medium">Average Price</p>
                  <h4 className="mb-0">$16.2</h4>
                </div>
                <div className="flex-shrink-0 align-self-center">
                  <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                    <span className="avatar-title rounded-circle bg-primary">
                      <i className="bx bx-purchase-tag-alt font-size-24" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
      <div className="card">
        <div className="card-body">
          <div className="d-sm-flex flex-wrap">
            <h4 className="card-title mb-4">Email Sent</h4>
            <div className="ms-auto">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Week
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Year
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="stacked-column-chart"
            className="apex-charts"
            dir="ltr"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  
  );
}

export default Dashbord;
