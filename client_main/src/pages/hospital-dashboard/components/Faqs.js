import Accordion from "react-bootstrap/Accordion";

const Faqs = () => {
  return (
    <>
      <h3 className="fs-5 text-center text-uppercase fw-bolder">
        Frequently Asked Question
      </h3>

      <div className="faqs pt-3">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How long does it take to approve my documents
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              maiores necessitatibus ea harum, non deserunt.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How long does it take to approve my documents
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              maiores necessitatibus ea harum, non deserunt.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How long does it take to approve my documents
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              maiores necessitatibus ea harum, non deserunt.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How long does it take to approve my documents
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              maiores necessitatibus ea harum, non deserunt.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
export default Faqs;
