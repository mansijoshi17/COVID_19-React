import React from 'react';
import Parser from 'rss-parser';


class NewsFeed extends React.Component {

    constructor() {
        super();
        this.state = {
            Newslist: null
        }
    }

    Fetchdata() {
        let parser = new Parser();
        // Note: some RSS feeds can't be loaded in the browser due to CORS security.
        // To get around this, you can use a proxy.
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        (async () => {
            let feed = await parser.parseURL(CORS_PROXY + "http://rss.cnn.com/rss/edition.rss");
            this.setState({ Newslist: feed.items })
        })()
    }

    componentDidMount() {
        this.Fetchdata()
    }



    render() {
        return (
            <div>
                <h1>NEWS</h1>
                <ul className="list-group">
                    {this.state.Newslist ? this.state.Newslist.filter((entry) => entry.title.includes("coronavirus")).map((entry, index) => {
                        console.log(entry)
                        return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            {entry.title}
                            <button type="button" className="btn btn-primary"><a href={entry.link} target="blank" style={{color:'white'}}>Read More</a></button>
                        </li>
                    }) : null}

                </ul>
            </div>

        )
    }
}


export default NewsFeed;