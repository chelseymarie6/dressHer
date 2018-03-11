import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardImgOverlay, Button, Container, Row, Col } from 'reactstrap';

const ItemCard = (props) => {
  return (
    <div>
  
  <Container></Container>

      <Container>
        <Row></Row>
        <Row>
          
          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg width="100%"  height="100%" src="https://www.rankandstyle.com/media/products/o/old-navy-classic-ponte-knit-blazer-for-women-w_1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Burgundy Blazer</CardTitle>
                <CardText>Gently used blazer ideal for business professional wear</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://slimages.macysassets.com/is/image/MCY/products/8/optimized/509858_fpx.tif?op_sharpen=1&wid=400&hei=489&fit=fit,1&$filterlrg$" alt="Card image cap" />
              <CardBody>
                <CardTitle>Black pants</CardTitle>
                <CardText>Almost new black professional pants - fits comfortably!</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/61ZUu-Cd1qL._UL1500_.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Black dress</CardTitle>
                <CardText>Dress this up, or down, depending on the occasion. Worn only five times!</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row></Row>
      </Container>

  <Container></Container>

      <Container>
        <Row></Row>
        <Row>
          
          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg width="100%"  height="100%" src="http://www.jeetly.com/images/products/olivia_30.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Wrap skirt (black)</CardTitle>
                <CardText>Simple skirt made of stretchy material. Gently used, great buy.</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="http://images.us.christianlouboutin.com/media/catalog/product/cache/1/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/3/0/8/0/christianlouboutin-simplepump-3080377_BK01_1_1200x1200_1511939337.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Black pumps</CardTitle>
                <CardText>BRAND NEW! Never worn - wrong size for me.</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://i.pinimg.com/originals/f3/8a/29/f38a29e3167309be00d871288ae0a105.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Brown boots (tall)</CardTitle>
                <CardText>Slightly used boots great for dressing up casual outfits for work.</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row></Row>
      </Container>

  <Container></Container>

      <Container>
        <Row></Row>
        <Row>
          
          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/51oYlM5M5qL._UX385_.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Flare skirt</CardTitle>
                <CardText>Old fashioned skirt that goes to knees in length. Worn only a few times and fits like a dream!</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg top width="100%" src="https://uniqlo.scene7.com/is/image/UNIQLO/goods_08_173707?$detail$" alt="Card image cap" />
              <CardBody>
                <CardTitle>Black pants</CardTitle>
                <CardText>New pants - fits comfortably and goes with just about any top.</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card body inverse style={{ backgroundColor: '#2C6B58', borderColor: '#fff' }}>
              <CardImg width="100%"  height="100%" src="http://s3-ap-southeast-2.amazonaws.com/bettss3/images/002ux570t_w600_h600.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Pumps (nude colored)</CardTitle>
                <CardText>Newer shoes worn only once and didn't fit. I hope they can work for you!</CardText>
                <Button>View Details</Button>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row></Row>
      </Container>

      
    </div>
  );
};

export default ItemCard;