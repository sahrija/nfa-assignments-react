import React from "react";

export default function Contact() {
    return (
        <div className="container my-5" id="contact">
            <h2 className="text-center fw-bold mb-4">Contact Us</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="p-4 shadow rounded bg-light">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nama</label>
                            <input type="text" className="form-control" id="name" placeholder="Masukkan nama" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Masukkan email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Pesan</label>
                            <textarea className="form-control" id="message" rows={4}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Kirim</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
