import React from "react";

const AdmissionPage = () => {
    return (
        <main className="admission-page" style={{ padding: "2rem", maxWidth: 600, margin: "0 auto" }}>
            <h1>University Admission</h1>
            <p>
                Welcome to the University Admission page. Start your journey with us!
            </p>
            <section>
                <h2>How to Apply</h2>
                <ol>
                    <li>Fill out the online application form.</li>
                    <li>Upload required documents (transcripts, certificates, etc.).</li>
                    <li>Pay the application fee.</li>
                    <li>Wait for confirmation email.</li>
                </ol>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>
                    For any queries, email us at <a href="mailto:admissions@university.edu">admissions@university.edu</a>
                </p>
            </section>
        </main>
    );
};

export default AdmissionPage;