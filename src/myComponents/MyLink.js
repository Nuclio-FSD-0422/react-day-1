import MyTitle from "../myTitle";

const MyLink = (props) => {
    console.log('soy las properties que habéis pasado: ', props)
    return <a className="App-link"><MyTitle>{props.title}</MyTitle><p>{props.description}</p></a>;
}

export default MyLink;