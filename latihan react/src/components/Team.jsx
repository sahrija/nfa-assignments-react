import React from "react";

export default function Team() {
    const employees = ["Alice", "Bob", "Charlie"];
    return (
        <div className="container my-5" id="team">
            <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
            <div className="row g-4">
                {employees.map((name, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card shadow h-100">
                            <img
                                src={`/employee/profile.png`}
                                className="card-img-top"
                                alt={name}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Role {i + 1} - Creative Specialist</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
