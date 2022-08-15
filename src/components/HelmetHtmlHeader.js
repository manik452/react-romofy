import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

const HelmetHtmlHeader = () => {
    return (
        <Helmet>

            {/* <!-- basic -->*/}
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            {/*<!-- mobile metas -->*/}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            {/* <!-- site metas -->*/}
            <title>romofyi</title>
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="" />

            {/*<!-- bootstrap css -->*/}
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            {/*<!-- style css -->*/}
            <link rel="stylesheet" href="/css/style.css" />
            {/*<!-- Responsive-->*/}
            <link rel="stylesheet" href="/css/responsive.css" />
            {/*<!-- fevicon -->*/}
            <link rel="icon" href="/images/fevicon.png" type="image/gif" />
            {/*<!-- Scrollbar Custom CSS -->*/}
            <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
            {/*<!-- Tweaks for older IEs-->*/}
            <link rel="stylesheet" href="/css/font-awesome.css"/>
            <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />

        </Helmet>
    )
}

export default HelmetHtmlHeader