import avatar from "../../../../assets/images/avatar/avatar-7.jpg";
import stars from "../../../../assets/images/stars.png";
import EditIcon from "../../../../assets/images/icons/EditIcon";
import Plus from "../../../../assets/images/icons/Plus";

const PracticingProfile = () => {
  return (
    <section className="bg-white m-5 open-sans practicing-profile">
      <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom">
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <button className="bg-white edit-container">
              <EditIcon />
            </button>
            <img src={avatar} alt="" width={80} className="rounded-circle" />
            <div className="online-tag"></div>
          </div>

          <div>
            <h2 className="fs-3 fw-bolder montserrat">Collins M.</h2>
            <p>Nasarrawa State, Nigeria</p>
          </div>
        </div>

        <button
          className="btn btn-primary px-4 rounded-pill"
          style={{ backgroundColor: "#2387D4", border: "0" }}>
          Profile Settings
        </button>
      </header>

      <section className="row">
        <div className="col-3 border-end">
          <div className="p-4 border-bottom">
            <div className="d-flex align-items-center gap-3">
              <h3 className="montserrat fs-5">Profiles</h3>

              <div className="d-flex gap-2">
                <button>
                  <EditIcon width={18} height={18} />
                </button>
                <button>
                  <Plus />
                </button>
              </div>
            </div>

            <ul className="pt-4 d-flex flex-column gap-3 mb-0">
              <li>Optician</li>
              <li>Dentist</li>
            </ul>
          </div>

          <div className="px-4 py-3 border-bottom d-flex align-items-center gap-3">
            <p>Total Jobs</p>
            <p className="noti-count fw-bolder">6</p>
          </div>

          <div className="px-4 py-3 border-bottom">
            <div className="d-flex align-items-center gap-3">
              <p className="montserrat fs-5">Availability</p>
              <button>
                <EditIcon width={18} height={18} />
              </button>
            </div>

            <div className="pt-2">
              <p>Available</p>
              <p style={{ fontSize: "0.75rem" }}>As Need - Open to offers</p>
            </div>
          </div>
        </div>

        <div className="col">
          <article className="p-4 border-bottom">
            <div className="d-flex align-items-center gap-3">
              <h3 className="montserrat fs-4">Doctor</h3>
              <button>
                <EditIcon width={18} height={18} />
              </button>
            </div>

            <div
              className="d-flex align-items-start pt-3"
              style={{ width: "95%" }}>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem, similique alias. Explicabo necessitatibus
                  fugit sunt odit dicta incidunt nam, tenetur aliquam placeat
                  ad, consectetur eum, numquam nemo expedita voluptates sequi.
                </p>
                <p className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam dolorum dolores repellat quas error asperiores et esse
                  cum expedita velit libero, ratione, vero rerum sapiente dicta.
                  Delectus aspernatur vel velit!
                </p>
              </div>
              <button>
                <EditIcon width={18} height={18} />
              </button>
            </div>
          </article>

          <div>
            <div className="px-4 border-bottom">
              <h3 className="montserrat fs-5 py-2">Work History</h3>

              <div className="d-flex align-items-center gap-5">
                <h4 style={{ fontSize: "0.9rem" }}>Completed (2)</h4>
                <h4 style={{ fontSize: "0.9rem" }}>In Progress (1)</h4>
              </div>
            </div>

            <section className="p-4 work-history">
              <div className="row gap-5">
                <div className="col">
                  <div>
                    <h4 className="fs-6 montserrat text-decoration-underline">
                      Occasional Itching Eyes
                    </h4>
                    <p className="w-75">
                      I need an optician to check on a patient’s eye, he
                      experiences blurriness after 10 hours of consistently
                      working with his computer.{" "}
                    </p>
                  </div>

                  <footer className="pt-4 work-history-footer">
                    <h4 className="fs-6">Clients feedback</h4>

                    <div>
                      <img src={stars} alt="" width={80} />
                      <p className="">
                        “Excellent, he was patient, cheerful and extremely
                        friendly.”
                      </p>
                    </div>
                  </footer>
                </div>

                <p className="col-3">April 13, 2021 - April 18, 2021</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};
export default PracticingProfile;
