import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Contat.css"

function MonFormulaire() {


  return (
    <div id="" className=" container-fluid orange text-white align-items-center justify-content-center d-flex">
      <div className="row">
        <div className="col-12">
          <h2>Nous Contacter</h2>
          <Form >
            <Form.Group controlId="prenom">
              <Form.Label>Prénom :</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
            <Form.Group controlId="nom">
              <Form.Label>Nom :</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
            <Form.Group controlId="telephone">
              <Form.Label>Téléphone :</Form.Label>
              <Form.Control type="tel"   required />
            </Form.Group>
            <Form.Group controlId="niveau">
              <Form.Label>Niveau :</Form.Label>
              <Form.Control as="select" >
                <option value="" ><span className="text-danger"> Sélectionnez votre niveau</span></option>
                <option value="Débutant">petite Section</option>
                <option value="Intermédiaire">Moyenne section</option>
                <option value="Avancé">Grande section</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" className="orange bg-white text-danger">Envoyer</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default MonFormulaire;
