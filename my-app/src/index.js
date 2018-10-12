import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Icon, Image, Grid, List, Button} from 'semantic-ui-react';

class LebronShoe extends React.Component {
  render() {
    return (

        <Container fluid>
          <Image fluid className="ui fluid image"
              src="https://content.nike.com/content/dam/one-nike/en_us/season-2018-fl/Homepage/NA/0924/lebron_HP_p1_d.jpg.transform/full-screen/lebron_HP_p1_d.jpg"/>

          <p className="strongest">
            <b>FOR THE STRONGEST:</b>
          </p>
          <p className="lebron">
            <b>LEBRON 16 'FRESH BRED'</b>
          </p>
          <p className="inspired">
            Inspired by past greatness. Focused on future excellence.
          </p>
          <Button className="ui shoe button">
            SHOP NOW</Button>
        </Container>
    )
  }
}

class SecondImage extends React.Component {
  render(){
    return(
        <Image fluid className= "ui fluid second image" src="https://content.nike.com/content/dam/one-nike/en_us/season-2018-fl/Homepage/NA/0924/Tech_Arrivals_HP_P2_d.jpg.transform/full-screen/Tech_Arrivals_HP_P2_d.jpg"/>
    )
  }
}

class ThirdImage extends React.Component {
  render() {
    return(
        <Image fluid className= "ui fluid third image"
               src="https://content.nike.com/content/dam/one-nike/en_us/season-2018-fl/Homepage/NA/0924/ZoomFly_HP_p3_d.jpg.transform/full-screen/ZoomFly_HP_p3_d.jpg"/>
    )
  }
}

class FourthImage extends React.Component{
  render(){
    return(
        <Image className= "ui fluid fourth image" src="https://content.nike.com/content/dam/one-nike/en_us/season-2018-fl/Homepage/NA/0924/YA_HP_p5_d.jpg.transform/full-screen/YA_HP_p5_d.jpg"/>
    )
  }
}

class TopMenu extends React.Component{
  render(){
    return(

          <Container>
            <Menu fixed className='ui topmenu fixed menu'>
            <Menu.Item as={'a'}>
              NikePlus
            </Menu.Item>

            <Menu.Item as={'a'}>
              <Image className="ui text image" src="https://mbtskoudsalg.com/images/air-jordan-logo-png-8.png" width="21px"/>
            </Menu.Item>

            <Menu.Item as={'a'}>
              <Image className="ui image" src="https://cdn.dresscodeclothing.com/images/logo/Hurley.png" width="40px"/>
            </Menu.Item>

            <Menu.Item as={'a'}>
              <Image className="ui image" src="https://www.underconsideration.com/brandnew/archives/converse_logo.png" width="70px"/>
            </Menu.Item>

            <Menu.Item as={'a'} className="right item">
              Join/Log In To NikePlus Account
            </Menu.Item>
            <Dropdown className="ui dropdown item" text="Help">
              <Dropdown.Menu>
                <Dropdown.Item>Order Status</Dropdown.Item>
                <Dropdown.Item>Shipping and Delivery</Dropdown.Item>
                <Dropdown.Item>Returns</Dropdown.Item>
                <Dropdown.Item>Contact Us</Dropdown.Item>
                <Dropdown.Item>Privacy Policy</Dropdown.Item>
                <Dropdown.Item>Terms & Conditions</Dropdown.Item>
                <Dropdown.Item>Site Feedback</Dropdown.Item>
                <Dropdown.Item>View All</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item><Icon name="cart" /></Menu.Item>
            <Menu.Item>
              <Image className="ui flag image" src="https://content.nike.com/content/dam/nike/global/country_flags/us_sml.png"/>
            </Menu.Item>
            </Menu>
          </Container>

    )
  }
}

class SecondMenu extends React.Component{
  render() {
    return (
        <Menu borderless className="ui borderless fixed menu">
          <Container>
            <Menu.Item> <Image className="ui nike image" src="//assets.bounceexchange.com/assets/uploads/clients/2163/creatives/d3987e1d7ab75e355af1eed73c993df8.svg" width="70px" height="70px"/>
            </Menu.Item>
          </Container>

        <Container>
            <Grid centered>
              <Menu.Item >
                <Dropdown item text="MEN">
                  <Dropdown.Menu>
                    <Dropdown.Item><b>NEW RELEASES</b></Dropdown.Item>
                    <Dropdown.Item><b>FLEECE FAVORITES</b></Dropdown.Item>
                    <Dropdown.Item><b>FALL FAVORITES</b></Dropdown.Item>
                    <Dropdown.Item><b>THE BLACK AND WHITE TREND</b></Dropdown.Item>
                    <Dropdown.Item><b>BEST SELLERS</b></Dropdown.Item>
                    <Dropdown.Item><b>ACCESSORIES</b></Dropdown.Item>
                    <Dropdown.Item><b>BAGS & WALLETS</b></Dropdown.Item>
                    <Dropdown.Item><b>STICKERS</b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="WOMEN">
                  <Dropdown.Menu>
                    <Dropdown.Item><b>NEW RELEASES</b></Dropdown.Item>
                    <Dropdown.Item><b>BEST SELLERS</b></Dropdown.Item>
                    <Dropdown.Item><b>TRENDING: UNISEX STYLES</b></Dropdown.Item>
                    <Dropdown.Item><b>FLEECE FAVORITES</b></Dropdown.Item>
                    <Dropdown.Item><b>FALL ESSENTIALS</b></Dropdown.Item>
                    <Dropdown.Item><b>SALE</b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="KIDS">
                  <Dropdown.Menu>
                    <Dropdown.Item><b>NEW RELEASES</b></Dropdown.Item>
                    <Dropdown.Item><b>FLEECE FAVORITES</b></Dropdown.Item>
                    <Dropdown.Item><b>FALL ESSENTIALS</b></Dropdown.Item>
                    <Dropdown.Item><b>TRENDING: LOOK OF CAMO</b></Dropdown.Item>
                    <Dropdown.Item><b>BOYS SALE</b></Dropdown.Item>
                    <Dropdown.Item><b>GIRLS SALE</b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="CUSTOMIZE">
                  <Dropdown.Menu>
                    <Dropdown.Item><b>NIKEiD NEW RELEASES</b></Dropdown.Item>
                    <Dropdown.Item><b>NEUTRALS BY YOU</b></Dropdown.Item>
                    <Dropdown.Item><b>GEAR UP FOR BASKETBALL</b></Dropdown.Item>
                    <Dropdown.Item><b>CONVERSE CUSTOM</b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="FAVORITES">
                  <Dropdown.Menu>
                    <Dropdown.Item><b>EXPLORE ICONS</b></Dropdown.Item>
                    <Dropdown.Item><b>AIR MAX COLLECTION</b></Dropdown.Item>
                    <Dropdown.Item><b>NIKE REACT</b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Grid>
        </Container>

        <Container>
          <Menu.Item right item><Icon name="search icon"/></Menu.Item>
        </Container>
        </Menu>
    )
  }
}

class FooterMenu extends React.Component{
  render(){
    return(
        <Container className="footer-background">
          <Grid divided='vertically'>
            <Grid.Row internally celled columns={4}>
              <Grid.Column>
                <b>ICONS</b>
                <List link className="ui link list">
                  <List.Item as='a'>Air Force 1</List.Item>
                  <List.Item as='a'>VaporMax</List.Item>
                  <List.Item as='a'>Air Max 90</List.Item>
                  <List.Item as='a'>Air Max 95</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <b>SHOES</b>
                <List link className="ui link list">
                  <List.Item as='a'>Running Shoes</List.Item>
                  <List.Item as='a'>Basketball Shoes</List.Item>
                  <List.Item as='a'>Jordan Shoes</List.Item>
                  <List.Item as='a'>Training Shoes</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <b>KIDS</b>
                <List link className="ui link list">
                  <List.Item as='a'>Kids' Shoes</List.Item>
                  <List.Item as='a'>Kids' Jordan Shoes</List.Item>
                  <List.Item as='a'>Kids' Running Shoes</List.Item>
                  <List.Item as='a'>Kids' Basketball Shoes</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <b>FEAUTURES</b>
                <List link className="ui link list">
                  <List.Item as='a'>Jordan Retro</List.Item>
                  <List.Item as='a'>NBA Jerseys</List.Item>
                  <List.Item as='a'>Joggers</List.Item>
                  <List.Item as='a'>Sports Bras</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class FooterMenuTwo extends React.Component{
  render(){
    return(
        <Container fluid className="footer-background-two">
          <Grid  divided='vertically'>
            <Grid.Row  columns={4} className="ui four column grid container two">
              <Grid.Column>
                <p> <b>GIFT CARDS</b> </p>
                <p> <b>RECYCLE OLD SHOES</b> </p>
                <p><b>MILITARY DISCOUNT</b></p>
                <p> <b>FIND A STORE</b></p>
                <p> <b>SIGN UP FOR EMAIL</b></p>
                <p> <b>BECOME A MEMBER</b></p>
                <p> <b>SITE FEEDBACK</b></p>
              </Grid.Column>

              <Grid.Column>
                <b>GET HELP</b>
                <List inverted className="ui link list">
                  <List.Item as='a'>Order status</List.Item>
                  <List.Item as='a'>Shipping and Delivery</List.Item>
                  <List.Item as='a'>Returns</List.Item>
                  <List.Item as='a'>Payment Options</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <b>ABOUT NIKE</b>
                <List inverted className="ui link list">
                  <List.Item as='a'>News</List.Item>
                  <List.Item as='a'>Careers</List.Item>
                  <List.Item as='a'>Converse Culture & Careers</List.Item>
                  <List.Item as='a'>Investors</List.Item>
                  <List.Item as='a'>Sustainable Innovation</List.Item>
                  <List.Item as='a'>CA Supply Chains Act</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <Menu.Item>
                  <Icon name="twitter circular inverted icon" />
                  <Icon name="facebook f circular inverted  icon" />
                  <Icon name="youtube square circular inverted  icon" />
                  <Icon name="instagram circular inverted  icon" />
                </Menu.Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class Nike extends React.Component {

  render() {
    return (
        <div>
          <LebronShoe/>
          <SecondImage/>
          <ThirdImage/>
          <FourthImage/>
          <TopMenu/>
          <SecondMenu/>
          <FooterMenu/>
          <FooterMenuTwo/>
        </div>
    );
  }
}

ReactDOM.render(<Nike/>, document.getElementById('root'));
