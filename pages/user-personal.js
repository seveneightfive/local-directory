import React from "react"
import Link from "next/link"

import Select from "react-select"

import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Form,
  Card,
  Breadcrumb,
} from "react-bootstrap"

import data from "../data/user-personal.json"
import Icon from "../components/Icon"
import {
  faAddressBook,
  faBirthdayCake,
  faEnvelopeOpen,
  faIdCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "Personal info - forms",
    },
  }
}

const UserPersonal = () => {
  const [personalCollapse, setPersonalCollapse] = React.useState(false)
  const [addressCollapse, setAddressCollapse] = React.useState(false)

  return (
    <section className="py-5">
      <Container>
        <Breadcrumb listProps={{ className: "ps-0 justify-content-start" }}>
          <Link href="/" passHref>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Link>
          <Link href="/user-acccount" passHref>
            <Breadcrumb.Item>Account</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item active>Personal info</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="hero-heading mb-0">{data.title}</h1>
        <p className="text-muted mb-5">{data.subtitle}</p>
        <Row>
          <Col lg="7">
            <div className="text-block">
              <Row className="mb-3">
                <Col sm="9">
                  <h5>Personal details</h5>
                </Col>
                <Col sm="3" className="text-end">
                  <Button
                    variant="link"
                    className="ps-0 collapsed"
                    onClick={() => setPersonalCollapse(!personalCollapse)}
                  >
                    Update
                  </Button>
                </Col>
              </Row>
              <p className="text-sm text-muted">
                {data.personal.map((item, index) => {
                  let userIcon
                  switch (item.icon) {
                    case "birthday-cake":
                      userIcon = faBirthdayCake
                      break
                    case "envelope-open":
                      userIcon = faEnvelopeOpen
                      break
                    case "phone":
                      userIcon = faPhone
                      break
                    default:
                      userIcon = faIdCard
                  }
                  return (
                    <React.Fragment key={index}>
                      <FontAwesomeIcon icon={userIcon} className="me-2 fa-fw" />
                      {item.title}
                      {index === data.personal.length - 2 && (
                        <span className="mx-2"> | </span>
                      )}
                      {index < data.personal.length - 2 && <br />}
                    </React.Fragment>
                  )
                })}
              </p>
              <Collapse in={personalCollapse}>
                <Form>
                  <Row className="pt-4">
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="name">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        id="name"
                        defaultValue="John Doe"
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="date">Date of birth</Form.Label>
                      <Form.Control
                        type="text"
                        name="date"
                        id="date"
                        defaultValue="06/22/1980"
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="email">Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        defaultValue="john.doe@directory.com"
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="phone">Phone number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        id="phone"
                        defaultValue="+42055544466"
                      />
                    </Col>
                  </Row>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className=" mb-4"
                  >
                    Save your personal details
                  </Button>
                </Form>
              </Collapse>
            </div>
            <div className="text-block">
              <Row className="mb-3">
                <Col sm="9">
                  <h5>Address</h5>
                </Col>
                <Col sm="3" className="text-end">
                  <Button
                    variant="link"
                    className="ps-0 text-primary collapsed"
                    onClick={() => setAddressCollapse(!addressCollapse)}
                  >
                    Change
                  </Button>
                </Col>
              </Row>
              <div className="d-flex text-sm text-muted">
                <FontAwesomeIcon icon={faAddressBook} className="fa-fw me-2" />
                <div className="mt-n1">
                  {data.address.line1}
                  <br />
                  {data.address.line2}
                </div>
              </div>
              <Collapse in={addressCollapse}>
                <Form>
                  <Row className="pt-4">
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="street">Street</Form.Label>
                      <Form.Control
                        type="text"
                        name="street"
                        id="street"
                        defaultValue="123 Main St."
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="apt">Apt. (optional)</Form.Label>
                      <Form.Control
                        type="text"
                        name="apt"
                        id="apt"
                        defaultValue="Apt #7"
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="city">City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        id="city"
                        defaultValue="San Francisco"
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="state">State</Form.Label>
                      <Select
                        id="state"
                        instanceId="state"
                        name="state"
                        options={data.options}
                        defaultValue={data.options[0]}
                        className="selectpicker z-index-20"
                        classNamePrefix="selectpicker"
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="zip">Zip</Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        id="zip"
                        defaultValue="902 10"
                      />
                    </Col>
                  </Row>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className=" mb-4"
                  >
                    Save address
                  </Button>
                </Form>
              </Collapse>
            </div>
          </Col>
          <Col md="6" lg="4" className="ms-lg-auto">
            <Card className="border-0 shadow">
              <Card.Header className="bg-primary-light py-4 border-0">
                <div className="d-flex align-items-center">
                  <div>
                    <h4 className="h6 subtitle text-sm text-primary">
                      What info is shared with others?
                    </h4>
                  </div>
                  <Icon
                    icon="identity-1"
                    className="svg-icon-light w-3rem h-3rem ms-3 text-primary flex-shrink-0"
                  />
                </div>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="text-muted text-sm card-text">
                  Directory only releases contact information for hosts and
                  guests <strong>after a reservation is confirmed</strong>.
                </p>
                <p className="text-muted text-sm card-text">
                  Amet nisi eiusmod minim commodo sit voluptate aute ut quis ea
                  veniam sunt proident ex.{" "}
                  <strong>Exercitation culpa laboris</strong> consequat fugiat
                  non ipsum veniam Lorem aliqua deserunt tempor elit veniam.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserPersonal
