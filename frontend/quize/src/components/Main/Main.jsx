import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./styles.css";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {useNavigate} from "react-router-dom";


function Banner(props) {
    let navigate = useNavigate()
    if (props.newProp) console.log(props.newProp);
    const contentPosition = props.contentPosition
        ? props.contentPosition
        : "left";
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">{props.item.Name}</Typography>

                <Typography className="Caption">{props.item.Caption}</Typography>

                <Button  onClick={()=>navigate('/game')} variant="outlined" className="ViewButton">
                    Play
                </Button>
            </CardContent>
        </Grid>
    );

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia className="Media" image={item.Image} title={item.Name}>
                    <Typography className="MediaCaption">{item.Name}</Typography>
                </CardMedia>
            </Grid>
        );

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    );
}

const items = [
    {
        Name: "Своя игра",
        Image: "https://leaderid.s3.amazonaws.com/event_photo/200510/6076d9848693f280642461.jpg",
        contentPosition: "left",
        Items: [
            {
                Name: "Коллективный МОЗГ – ",
                Image: "https://img2.joyreactor.cc/pics/post/%D1%81%D0%B2%D0%BE%D1%8F-%D0%B8%D0%B3%D1%80%D0%B0-%D0%B0%D0%B9%D1%82%D0%B8%D1%88%D0%BD%D0%BE%D0%B5-%D0%BA%D0%BE%D0%B4-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-4515115.png"
            },
            {
                Name: "Убойная сила!",
                Image: "https://img2.joyreactor.cc/pics/post/%D1%81%D0%B2%D0%BE%D1%8F-%D0%B8%D0%B3%D1%80%D0%B0-%D0%BF%D0%B5%D1%81%D1%81%D0%B8%D0%BC%D0%B8%D0%B7%D0%BC-%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE-6134550.jpeg"
            }
        ]
    },
    {
        Name: "Своя игра",
        contentPosition: "middle",
        Items: [
            {
                Name: "Именно тот, ",
                Image: "https://img2.reactor.cc/pics/post/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B7%D1%87%D0%B8%D0%BA-%D0%94%D0%B6%D0%B5%D0%B9%D1%81%D0%BE%D0%BD-%D0%A1%D1%82%D0%B0%D1%82%D1%85%D1%8D%D0%BC-%D0%97%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D0%BE%D1%81%D1%82%D0%B8-%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%92%D0%B0%D1%81%D1%81%D0%B5%D1%80%D0%BC%D0%B0%D0%BD-1017471.jpeg"
            },
            {
                Name: "кто сегодня победит",
                Image: "https://static.ngs.ru/news/preview/95251f4ea3027943b213713daa7dd14803bbac98_480_320_c.jpg"
            }
        ]
    },
    {
        Name: "Своя игра",
        contentPosition: "right",
        Items: [
            {
                Name: "Идущий в гору – проиграет,",
                Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKjAplW78271yPq3iHFv5DxeyPeJK515Jt-xJA-VmQnC7G2YSywQkasOZfNQEw-GKYz0&usqp=CAU"
            },
            {
                Name: "тот, кто обходит – победит",
                Image: "https://urok.1sept.ru/articles/673440/presentation/19.jpg"
            }
        ]
    }
];

class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false,
            cycleNavigation: true
        };

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        });
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        });
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        });
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        });
    }

    toggleCycleNavigation() {
        this.setState({
            cycleNavigation: !this.state.cycleNavigation
        });
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        });
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        });
    }

    render() {
        return (
            <div style={{ marginTop: "50px", color: "#494949" }}>
                <h2>Своя игра</h2>

                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    cycleNavigation={this.state.cycleNavigation}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    // next={(now, previous) =>
                    //     console.log(
                    //         `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
                    //     )
                    // }
                    // prev={(now, previous) =>
                    //     console.log(
                    //         `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
                    //     )
                    // }
                    // onChange={(now, previous) =>
                    //     console.log(
                    //         `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
                    //     )
                    // }
                    // fullHeightHover={false}
                    // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                    // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                    // indicatorContainerProps={{style: {margin: "20px"}}}
                    // NextIcon='next'
                >
                    {items.map((item, index) => {
                        return (
                            <Banner
                                item={item}
                                key={index}
                                contentPosition={item.contentPosition}
                            />
                        );
                    })}
                </Carousel>
                <div>
                    <p className='header__text' style={{textAlign:'center'}}>Основной процесс в игре — ответ на вопросы.</p>
                    <p className='header__text'>Вопросы в игре сформулированы, как правило, в виде утверждений, где искомое слово заменено местоимением. Игроки должны догадаться, о чём идёт речь в вопросе, и дать ответ. Примеры вопросов «Своей игры»:
                        «Именно в этом году Суворов перешёл Альпы»;
                        «Этот писатель владел имением Ясная Поляна»;
                        «Именно это нужно сделать с нефтью, чтобы получить из неё керосин»;
                        «Однажды Леонид Кучма запнулся, позабыв, как по-украински „дрова“. Так и не вспомнил. А вы вспомните?».</p>
                </div>
            </div>
        );
    }
}

export default BannerExample;
