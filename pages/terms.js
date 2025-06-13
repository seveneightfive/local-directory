import React from "react"

import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

import Link from "next/link"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Terms & Conditions",
    },
  }
}

const Terms = (props) => {
  return (
    <React.Fragment>
      <section className="hero py-5 py-lg-7">
        <Container className="position-relative">
          <Breadcrumb listProps={{ className: "ps-0 justify-content-center" }}>
            <Link href="/" passHref>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="hero-heading">Terms & Conditions</h1>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <div className="text-content">
                <h3>1. Terms</h3>
                <p>
                  This website,{" "}
                  <a href="https://example.com">https://example.com</a>, is
                  operated by Jack Flag and Bootstrapious. Throughout the site,
                  the terms “we”, “us” and “our” refer to Jack Flag and
                  Bootstrapious. We offer&nbsp;this website, including all
                  information, tools and services available from this site to
                  you, the user, conditioned upon your acceptance of all terms,
                  conditions, policies and notices stated here.
                </p>
                <p>
                  By visiting our site and/ or purchasing something from us, you
                  engage in our “Service” and agree to be bound by the following
                  terms and conditions (“Terms of Service”, “Terms”), including
                  those additional terms and conditions and policies referenced
                  herein and/or available by hyperlink. These Terms of Service
                  apply &nbsp;to all users of the site, including without
                  limitation users who are browsers, vendors, customers,
                  merchants, and/ or contributors of content.
                </p>
                <p>
                  Please read these Terms of Service carefully before accessing
                  or using our website. By accessing or using any part of the
                  site, you agree to be bound by these Terms of Service. If you
                  do&nbsp;not agree to all the terms and conditions of this
                  agreement, then you may not access the website or use any
                  services. If these Terms of Service are considered an offer,
                  acceptance is expressly limited to these Terms of Service.
                </p>
                <p>
                  The materials contained in this website are protected by
                  applicable copyright and trademark law.
                </p>
                <h3>2. Licenses</h3>
                <ol type="a">
                  <li>
                    Eu incididunt proident commodo occaecat commodo occaecat
                    eiusmod ex qui et. Culpa esse do laborum elit commodo
                    cupidatat veniam consequat ut nostrud non ut ea proident.
                    Fugiat eu magna sint ea fugiat commodo ad duis excepteur.
                  </li>
                  <li>
                    Ex mollit id dolore commodo do. Do incididunt aute ipsum
                    eiusmod cillum occaecat et ut voluptate aliquip occaecat
                    consequat laborum id. Consectetur fugiat sit do culpa.
                    Consequat esse sunt esse reprehenderit commodo nisi amet
                    Lorem nulla enim enim eiusmod nulla.
                  </li>
                  <li>
                    This license shall automatically terminate if you violate
                    any of these restrictions and may be terminated by
                    Bootstrapious at any time.
                  </li>
                  <li>
                    Our order process is conducted by our online reseller
                    Paddle.com. Paddle.com is the Merchant of Record for all our
                    orders. Paddle provides all customer service inquiries and
                    handles returns.
                  </li>
                </ol>
                <h3 id="intellectual-property">3. Intellectual Property</h3>
                <p>
                  Qui laboris cillum nisi nisi reprehenderit fugiat quis in
                  ipsum irure fugiat. In duis cillum exercitation magna non nisi
                  cillum. Ex in nostrud proident velit eiusmod commodo consequat
                  incididunt deserunt quis sit proident qui ut. Proident do do
                  in ipsum ipsum veniam excepteur velit pariatur veniam
                  consectetur do elit. Pariatur aliquip aute mollit nisi aute
                  anim voluptate tempor culpa sunt eu fugiat sint aliquip.
                </p>
                <h3>4. Disclaimer</h3>
                <ol type="a">
                  <li>
                    Mollit sit officia dolore reprehenderit in elit ad excepteur
                    irure tempor minim. Laborum nulla nulla aliqua sit qui
                    pariatur ullamco occaecat cillum do. Sit laborum laboris
                    voluptate qui nostrud nulla quis elit sunt amet magna.
                    Deserunt adipisicing culpa ut nostrud laboris exercitation
                    cupidatat aute. Amet sunt nisi magna dolore reprehenderit
                    quis reprehenderit quis eu ex incididunt ullamco elit.
                  </li>
                  <li>
                    Aliqua eiusmod non consectetur non fugiat. Lorem duis aute
                    non eu quis do labore proident laborum reprehenderit nisi
                    minim. Commodo aute proident do eiusmod dolor et officia
                    voluptate proident eiusmod. Cupidatat ex ipsum reprehenderit
                    ullamco qui ex sit nisi esse Lorem. Sunt adipisicing tempor
                    aliqua anim dolor tempor adipisicing ipsum irure do. Ex
                    labore deserunt cupidatat ipsum ipsum aute et sint enim
                    labore in qui ad occaecat. Cillum velit exercitation minim
                    nulla laborum dolore ea velit id enim esse duis.
                  </li>
                </ol>
                <h3>6. Limitations</h3>
                <p>
                  Sint ut ut duis esse enim ea aute ut nostrud. Eiusmod ea do
                  dolor velit Lorem ut commodo ea elit ea consectetur aliquip
                  aute. Eiusmod mollit consequat aute esse eu dolore nostrud
                  nisi esse duis cupidatat. Consequat laborum laborum esse est
                  duis est id anim magna magna cupidatat veniam. Officia labore
                  cupidatat quis irure cupidatat do nisi est. In labore ut enim
                  non Lorem cupidatat officia. Consequat proident dolore anim
                  minim proident officia excepteur aliquip magna non labore
                  officia excepteur.
                </p>
                <h3>7. Accuracy of materials</h3>
                <p>
                  Magna commodo ut est aliquip amet reprehenderit est incididunt
                  laboris. Laborum non ullamco in in quis ipsum exercitation
                  occaecat laboris. Culpa ex ex sit pariatur enim magna officia
                  esse laboris ad dolore.
                </p>
                <h3>8. Links</h3>
                <p>
                  Anim esse Lorem nostrud consequat. Aute cupidatat duis
                  deserunt reprehenderit consequat elit tempor. Ad mollit ad
                  quis nulla id irure aliqua amet velit.
                </p>
                <h3>9. Modifications</h3>
                <p>
                  Bootstrapious may revise these terms of service for its
                  website at any time without notice. By using this website you
                  are agreeing to be bound by the then current version of these
                  terms of service.
                </p>
                <h3>10. Governing Law</h3>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Czech Republic and you irrevocably
                  submit to the exclusive jurisdiction of the courts in that
                  State or location.
                </p>
                <p>Version 1.2&nbsp;- Effective date: April 23, 2020. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Terms
