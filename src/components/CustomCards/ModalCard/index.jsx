import React, { useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FrontEndModal from './WebDevModal';
import DevOpsModal from './DevOpsModal';
import Card from 'react-bootstrap/Card';
import ServerCloudModal from './ServerCloudModal';
import { Container } from 'react-bootstrap';
import { FaDev } from 'react-icons';

function ModalCard() {
  const [XShow, setXShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
const[xlShow, setXlShow] = useState(false);
  return (
    <Card className="modalCard">
      <Card.Header>
        <Card.Title>
          [skills]
        </Card.Title>
        <Card.Subtitle>
        click the buttons below to see modals
        </Card.Subtitle>

      </Card.Header>
      <hr/>
      <Card.Body>

        <a className="nav-btn" onClick={() => setXShow(true)}>DevOps</a><br/>
<br/>        <a className="nav-btn" onClick={() => setLgShow(true)}>[front end]</a> <br/>
<br/>        <a className="nav-btn" onClick={() => setXlShow(true)}>[server cloud]</a>

        <DevOpsModal
          size="xl"
          show={XShow}
          onHide={() => setXShow(false)}
          aria-labelledby="example-modal-sizes-title-X"
        />
        <FrontEndModal
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        />
        <ServerCloudModal
          size="xl"
          show={xlShow}
          onHide={() => setXlShow(false)}
          aria-labelledby="example-modal-sizes-title-xl"
        />

      </Card.Body>
    </Card>
  );
}
export default ModalCard;
//   <Card>
//   <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
//   <Tab eventKey="landing" title="Skills">
//   <h3>[ skills ]</h3>
// <p>Click the tabs to check out some of the technology skills I bring to projects I work on!</p>
// </Tab>
// <Tab eventKey="web-dev" title="[web dev]">

// </Tab>
// <Tab eventKey="dev-ops" title="[dev ops]">
//   <ul>
//   <li>Linux SysAd</li>
// <li>Shell Scripting</li>
// <li>Systems Administration</li>
// <li>'Ricing'</li>
// <li>Virtualization</li>
// <li>KVM/QEMU</li>
// <li>OpenVZ</li>
// <li>Xen</li>
// <li>SSH</li>
// <li>LAMP</li>
// <li>Containerization</li>
// <li>Docker</li>
// <li>Ansible</li>
// </ul>
// </Tab>
// </Tabs>
// // </Card>

//
// <ButtonToolbar>
//   <Button onClick={() => setSmShow(true)}>Web Development</Button>
//   <Button onClick={() => setLgShow(true)}>Systems Administration</Button>
//   <Button onClick={() => setLgShow(true)}>DevOps</Button>
//   <Modal
//     size="xl"
//     show={smShow}
//     style={{ opacity: 1 }}
//     onHide={() => setSmShow(false)}
//     aria-labelledby="example-modal-sizes-title-sm"
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="example-modal-sizes-title-sm">
//         Web Development
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//
//     </Modal.Body>
//   </Modal>
//
//   <Modal
//     style={{ opacity: 1 }}
//     size="xl"
//     show={lgShow}
//     onHide={() => setLgShow(false)}
//     aria-labelledby="example-modal-sizes-title-lg"
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="example-modal-sizes-title-lg">
//         Systems Administration{' '}
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>...</Modal.Body>
//   </Modal>
//   <Modal
//     size="xl"
//     show={lgShow}
//     onHide={() => setLgShow(false)}
//     aria-labelledby="example-modal-sizes-title-lg"
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="example-modal-sizes-title-lg">
//         DevOps
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>...</Modal.Body>
//   </Modal>
// </ButtonToolbar>
