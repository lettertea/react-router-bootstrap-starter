import Header from '../components/Header'
import Meta from '../components/Meta'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'
  const [show, setShow] = useState(true);

  const [modalText, setModalText] = useState("Welcome to the site. Please Choose your native language.ようこそ 母国語を選択してください。");


  const handleClose = () => { setShow(false) };
  const handleFirstClick = () => {


    setModalText("You found the button. ボタンを発見した！")
    setShow(true)
  };
  const handleWrongClick = () => {
    setModalText("Wrong Link! Try again")
    setShow(true)
  }


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />

      <div class="container">
        <div class="row">
          <div class="col-2">
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Text style={{fontSize:12}}>
                  <div>
                  <strong>
                    Newest and Recent
                  </strong>
                  <div>Find the latest update</div>
                  <strong>
                    Popular of the day
                  </strong>
                  </div>
                  <div>Shots feature today by curators</div>
                  <strong>
                    Following <span style={{background:"orange", padding:3}}>24</span>
                  </strong>
                  <div>Explore from your favorite person</div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text style={{fontSize:12}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Categories</Card.Title>
                <Card.Text style={{fontSize:12}}>
                  {[["Class Recommendations", "82,645 Posts", handleWrongClick], ["Homework Help", "65,523 Posted by this tag", handleWrongClick], ["Student Surveys", "Posts", handleFirstClick], 
                  ["Tutor Help", "48,029 Posts", handleWrongClick], ["Books Donate", "100 Posts", handleWrongClick], 
                  ["Dorm", "11,000 Posts", handleWrongClick],["Part-Time", "8,645 Posts", handleWrongClick],["Rants", "3,622 Posts", handleWrongClick]].map(category => {
                    return <div onClick={category[2]}  className='hoverable' >
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  }

                  )}
                
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div class="col-7">

            <Card style={{ "padding":20, marginBottom:20, "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <InputGroup>
        <Form.Control
        disabled={true}
          placeholder="Your first task is: find the “Student Surveys” Section"
          aria-label="Your first task is: find the “Student Surveys” Section"
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2">
          Button
        </Button>
      </InputGroup>
            </Card>

            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Survey site</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button >Wrong Button</Button>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>          <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>          <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>          <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home