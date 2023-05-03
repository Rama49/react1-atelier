import  "./Blog.css"
import img2 from "../Images/img2.jpg"


const Bloge = () => {
    return(
        <div id="Activite" className="blog"  >
            <div className="row mb-5">
                <h1 className="mt-5 pt-5 mb-5 text-align-start">Nos Activites</h1>
                <h2 className="texto mb-5">Le Monde Enchanté des Petits Explorateurs"</h2>
                <p>
Chers petits élèves,

Bienvenue dans notre école maternelle, un lieu magique où vous allez apprendre et grandir chaque jour. Ici, nous allons découvrir ensemble de nouvelles choses passionnantes, explorer le monde qui nous entoure et développer nos compétences dans de nombreux domaines.

Nous allons passer du temps à jouer, à créer, à chanter et à danser. Nous allons apprendre à partager, à respecter les autres et à travailler en équipe. Nous allons développer notre imagination, notre curiosité et notre esprit critique.

Nous avons hâte de vous accompagner dans cette aventure passionnante et de voir tous les progrès que vous allez réaliser. Nous sommes là pour vous guider, vous soutenir et vous encourager tout au long de votre parcours.

Bienvenue dans notre école maternelle, où chaque jour est une occasion de grandir et de s'amuser en apprenant.

                </p>
                <div className="col-4">
                    < img src={img2} className="image img-fluid" />
                </div>
                <div className="col-4">
                    < img src={img2} className="image img-fluid" />
                </div>
                <div className="col-4">
                    < img src={img2} className="image img-fluid" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    < img src={img2} className="image img-fluid" />
                </div>
                <div className="col-4">
                    < img src={img2} className="image img-fluid" />
                </div>
                <div className="col-4">
                    < img src={img2} className="image img-fluid" />
                </div>
            </div>
            
        </div>
    )
}

export default Bloge;