import './App.css'

function App() {
  return (
  <>

    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Lebenslauf - Can Talas</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <div className="cv">


    <aside className="sidebar">

        <div className="profile">
            <img src="profil.jpg" alt="Profilbild"/>
        </div>

        <section>
            <h3>PERSÖNLICHE DATEN</h3>

            <div className="info-item">
                <i className="fa-solid fa-user"></i>
                <div>
                    <strong>Name</strong>
                    <p>Can Talas</p>
                </div>
            </div>

            <div className="info-item">
                <i className="fa-solid fa-house"></i>
                <div>
                    <strong>Adresse</strong>
                    <p>Urbanstraße 48 D<br/>Berlin, 10967</p>
                </div>
            </div>

            <div className="info-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                    <strong>Telefonnummer</strong>
                    <p>+49 1794107700</p>
                </div>
            </div>

            <div className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                    <strong>E-Mail-Adresse</strong>
                    <p>talascan@googlemail.com</p>
                </div>
            </div>

            <div className="info-item">
                <i className="fa-solid fa-calendar"></i>
                <div>
                    <strong>Geburtsdatum</strong>
                    <p>05.06.1995</p>
                </div>
            </div>

            <div className="info-item">
                <i className="fa-solid fa-car"></i>
                <div>
                    <strong>Führerschein</strong>
                    <p>B</p>
                </div>
            </div>
        </section>

        <section>
            <h3>PROGRAMMIERSPRACHEN</h3>

            <div className="skill">
                <span>Ruby on Rails</span>
                <span>★★★★★</span>
            </div>

            <div className="skill">
                <span>React</span>
                <span>★★★★★</span>
            </div>

            <div className="skill">
                <span>C#/.Net</span>
                <span>★★★★★</span>
            </div>

            <div className="skill">
                <span>Angular</span>
                <span>★★★★☆</span>
            </div>

            <div className="skill">
                <span>Typescript</span>
                <span>★★★★☆</span>
            </div>

            <div className="skill">
                <span>MongoDB</span>
                <span>★★★★☆</span>
            </div>

            <div className="skill">
                <span>NodeJS</span>
                <span>★★★☆☆</span>
            </div>

            <div className="skill">
                <span>PostgreSQL</span>
                <span>★★★★☆</span>
            </div>
        </section>

        <section>
            <h3>ANDERE FÄHIGKEITEN</h3>

            <div className="skill"><span>AWS</span><span>★★★☆☆</span></div>
            <div className="skill"><span>Linux</span><span>★★★☆☆</span></div>
            <div className="skill"><span>CSS/HTML</span><span>★★★★☆</span></div>
            <div className="skill"><span>Wordpress</span><span>★★★★☆</span></div>
            <div className="skill"><span>Video-/Bildbearbeitung</span><span>★★★★☆</span></div>
            <div className="skill"><span>Git</span><span>★★★★★</span></div>
        </section>

        <section>
            <h3>SPRACHKENNTNISSE</h3>

            <div className="skill"><span>Englisch</span><span>★★★★★</span></div>
            <div className="skill"><span>Deutsch</span><span>★★★★★</span></div>
            <div className="skill"><span>Türkisch</span><span>★★★★☆</span></div>
        </section>

        <section>
            <h3>HOBBYS UND INTERESSEN</h3>
            <p className="hobby-text">
                Fotografieren, Zeichnen, Fitness,
                Klavier, Tischtennis, Bowling, Billard
            </p>
        </section>

    </aside>

    <main className="content">

        <header>
            <h1>CAN TALAS</h1>

            <p>
                Engagierter Fullstack Developer mit 4 Jahren Erfahrung
                in der Programmierung.
            </p>

            <p>
                Ich bin erfahren in allen Aspekten des Lebenszyklus
                der Softwareentwicklung.
            </p>

            <p>
                Meine Absicht ist es, eine langfristige Stelle in einem
                modernen Softwareentwicklungs-Startup zu finden.
            </p>
        </header>

        <section className="timeline-section">

            <h2>
                <i className="fa-solid fa-briefcase"></i>
                BERUFSERFAHRUNG
            </h2>

            <div className="timeline">

                <div className="entry">
                    <div className="date">
                        Dez. 2021 - Juni 2022
                    </div>

                    <div className="details">
                        <h4>Junior Entwickler</h4>
                        <span>Ionos SE, Karlsruhe</span>

                        <ul>
                            <li>Entwicklung und Dokumentation von Softwarelösungen</li>
                            <li>Ruby on Rails, Hotwire, Redis, PostgreSQL</li>
                            <li>Optimierung bestehender Software</li>
                            <li>Fehlerbehebung und Testing</li>
                        </ul>
                    </div>
                </div>

                <div className="entry">
                    <div className="date">
                        März 2023 - Gegenwärtig
                    </div>

                    <div className="details">
                        <h4>Software Entwickler</h4>
                        <span>VGV mbH, Berlin</span>

                        <ul>
                            <li>API Entwicklung in C#/.NET Core</li>
                            <li>Microservice-Architektur</li>
                            <li>Angular & Typescript Frontend</li>
                            <li>MongoDB und AWS S3</li>
                            <li>100% Testabdeckung der Backend Features</li>
                        </ul>
                    </div>
                </div>

                <div className="entry">
                    <div className="date">
                        Juni 2022 - Gegenwärtig
                    </div>

                    <div className="details">
                        <h4>Selbstständig</h4>
                        <span>Web- und Spieleentwicklung</span>
                    </div>
                </div>

            </div>
        </section>

        <section className="timeline-section">

            <h2>
                <i className="fa-solid fa-graduation-cap"></i>
                AUSBILDUNG
            </h2>

            <div className="timeline">

                <div className="entry">
                    <div className="date">
                        Juni 2015 - Juni 2018
                    </div>

                    <div className="details">
                        <h4>Biotechnologie</h4>
                        <span>Beuth Hochschule Berlin</span>
                        <p>(nicht abgeschlossen)</p>
                    </div>
                </div>

                <div className="entry">
                    <div className="date">
                        Sep. 2019 - Juli 2021
                    </div>

                    <div className="details">
                        <h4>Fachinformatiker Anwendungsentwicklung</h4>
                        <span>JustRelate GmbH, Berlin</span>

                        <p>
                            Ausbildung in Ruby on Rails, React,
                            PostgreSQL, AWS, REST APIs,
                            TDD und Clean Code.
                        </p>

                        <p>(abgeschlossen)</p>
                    </div>
                </div>

            </div>

        </section>

    </main>

</div>

    </>
  )
  
}

export default App
