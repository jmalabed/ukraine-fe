import { Card, Col, Row } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <p className="m-3 p-3">
        EMG is here to help people that require medical attention due to
        traumatic injury and do not have access to proper care. Please view our
        primary trauma care manual under PDF's and our procedural videos under
        Videos for our resources.
      </p>
      <Row>
        <Col className="d-flex ">
          <Card className="p-3 w-100">
            <h2 className="text-center">Mission</h2>
            <p>
              Our mission is to promote and empower medical professionals’
              foundational knowledge in primary trauma care working in low
              resource and austere environment. The desired outcome of
              foundational primary trauma training is so that lives are saved,
              and disabilities are reduced.
            </p>
          </Card>
        </Col>
        <Col className="d-flex">
          <Card className="p-3 w-100">
            <h2 className="text-center">Values</h2>
            <ul className="mt-3">
              <li className="mb-3">Compassion</li>
              <li className="mb-3">Education</li>
              <li className="mb-3">Empowerment</li>
              <li className="mb-3">Community</li>
            </ul>
          </Card>
        </Col>
        <Col className="d-flex">
          <Card className="p-3 w-100">
            <h2 className="text-center">Vision</h2>
            <p>
              During times of conflict, even the most developed nations can
              struggle accessing proper care. When infrastructure is
              compromised, when readily accessible resources diminish, when
              qualified personnel are being stretched thin, this is the training
              that can improved safety amongst medical personnel, improve
              knowledge base and confidence, and ultimately empower people to
              perform lifesaving interventions to reduce loss of life and
              disability.
            </p>
          </Card>
        </Col>
      </Row>
      <h2 className="mt-3 mx-3 p-3">About</h2>

      <p className="mb-3 mx-3 p-3">
        As medical professionals, we hold these values daily. Compassion for
        patients who we see in our own various settings. Compassion to students,
        trainers, and ultimately to our local and global medical family and
        understanding needs and issues without judgement. Sustainable education
        and training offers a strong emphasis on the empowerment of medical
        professionals (training-the-trainer and the See-one-do-one-teach-one
        model. Community is the bedrock of our values, we will work in line with
        individuals, organizations, government entities with transparency and
        openness and continue to rely on our joint mission and friendship.
      </p>
    </div>
  );
};
export default Home;
