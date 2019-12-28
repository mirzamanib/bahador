import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// // core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

console.log('*******************', styles.pageHeader, '\n', useStyles);

export default function LoginPage(props) {
  // const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
  // setTimeout(function() {
  //   setCardAnimation("");
  // }, 700);
  // const classes = useStyles();
  // console.log('pageHeader', classes);
  const { ...rest } = props;
  return (
      <div>
        <Header
            absolute
            color="transparent"
            brand="Material Kit React"
            rightLinks={<HeaderLinks />}
            {...rest}
        />
        <div
            className={styles.pageHeader}
            style={{
              backgroundImage: "url(" + image + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center"
            }}
        >
          <div className={styles.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={styles.form}>
                    <CardHeader color="primary" className={styles.cardHeader}>
                      <h4>Login</h4>
                      <div className={styles.socialLine}>
                        <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={styles.divider}>Or Be Classical</p>
                    <CardBody>
                      <CustomInput
                          labelText="First Name..."
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                                <InputAdornment position="end">
                                  <People className={styles.inputIconsColor} />
                                </InputAdornment>
                            )
                          }}
                      />
                      <CustomInput
                          labelText="Email..."
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "email",
                            endAdornment: (
                                <InputAdornment position="end">
                                  <Email className={styles.inputIconsColor} />
                                </InputAdornment>
                            )
                          }}
                      />
                      <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "password",
                            endAdornment: (
                                <InputAdornment position="end">
                                  <Icon className={styles.inputIconsColor}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                      />
                    </CardBody>
                    <CardFooter className={styles.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
  );
}
