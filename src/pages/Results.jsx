import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchData from '../component/SearchData'

const Results = () => {
  const [searchResults, setSearchResults] = useState({
    "kind": "customsearch#search",
    "url": {
      "type": "application/json",
      "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
      "request": [
        {
          "title": "Google Custom Search - elon musk",
          "totalResults": "295000000",
          "searchTerms": "elon musk",
          "count": 10,
          "startIndex": 1,
          "inputEncoding": "utf8",
          "outputEncoding": "utf8",
          "safe": "off",
          "cx": "728cda582580e48ff"
        }
      ],
      "nextPage": [
        {
          "title": "Google Custom Search - elon musk",
          "totalResults": "295000000",
          "searchTerms": "elon musk",
          "count": 10,
          "startIndex": 11,
          "inputEncoding": "utf8",
          "outputEncoding": "utf8",
          "safe": "off",
          "cx": "728cda582580e48ff"
        }
      ]
    },
    "context": {
      "title": "Google-Clone"
    },
    "searchInformation": {
      "searchTime": 0.327166,
      "formattedSearchTime": "0.33",
      "totalResults": "295000000",
      "formattedTotalResults": "295,000,000"
    },
    "items": [
      {
        "kind": "customsearch#result",
        "title": "Elon Musk - Wikipedia",
        "htmlTitle": "<b>Elon Musk</b> - Wikipedia",
        "link": "https://en.wikipedia.org/wiki/Elon_Musk",
        "displayLink": "en.wikipedia.org",
        "snippet": "Elon Musk ; Elon Reeve Musk FRS (/ˈiːlɒn/ EE-lon ; Musk was born in Pretoria ; With $175.8 million, Musk founded SpaceX in 2002, a spaceflight ; Musk has made ...",
        "htmlSnippet": "<b>Elon Musk</b> ; Elon Reeve Musk FRS (/ˈiːlɒn/ EE-lon ; Musk was born in Pretoria ; With $175.8 million, Musk founded SpaceX in 2002, a spaceflight ; Musk has made&nbsp;...",
        "cacheId": "cElLiMk8T9MJ",
        "formattedUrl": "https://en.wikipedia.org/wiki/Elon_Musk",
        "htmlFormattedUrl": "https://en.wikipedia.org/wiki/<b>Elon</b>_<b>Musk</b>",
        "pagemap": {
          "hcard": [
            {
              "bday": "1971-06-28",
              "fn": "Elon Musk",
              "nickname": "Elon Reeve Musk",
              "title": ".mw-parser-output .plainlist ol,.mw-parser-output .plainlist ul{line-height:inherit;list-style:none;margin:0;padding:0}.mw-parser-output .plainlist ol li,.mw-parser-output .plainlist ul li{margin-b..."
            }
          ],
          "person": [
            {
              "role": ".mw-parser-output .plainlist ol,.mw-parser-output .plainlist ul{line-height:inherit;list-style:none;margin:0;padding:0}.mw-parser-output .plainlist ol li,.mw-parser-output .plainlist ul li{margin-b..."
            }
          ],
          "metatags": [
            {
              "referrer": "origin",
              "og:image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
              "theme-color": "#eaecf0",
              "og:image:width": "1200",
              "og:type": "website",
              "viewport": "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
              "og:title": "Elon Musk - Wikipedia",
              "og:image:height": "1590",
              "format-detection": "telephone=no"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Mr. Tweet (@elonmusk) / Twitter",
        "htmlTitle": "Mr. Tweet (@<b>elonmusk</b>) / Twitter",
        "link": "https://twitter.com/elonmusk",
        "displayLink": "twitter.com",
        "snippet": "I'm trying to assemble a list of news stories and TV segments pegged to Hamilton 68 and will publish it once done, hopefully this weekend.",
        "htmlSnippet": "I&#39;m trying to assemble a list of news stories and TV segments pegged to Hamilton 68 and will publish it once done, hopefully this weekend.",
        "cacheId": "QjQEmo2sFzcJ",
        "formattedUrl": "https://twitter.com/elonmusk",
        "htmlFormattedUrl": "https://twitter.com/<b>elonmusk</b>",
        "pagemap": {
          "cse_thumbnail": [
            {
              "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxINkihnQzrE6p8R1dOVc075aT41J_P4423EgT2sJ4N2aLL7Uaoiqf",
              "width": "48",
              "height": "48"
            }
          ],
          "imageobject": [
            {
              "contenturl": "https://pbs.twimg.com/media/FngUGkDXEA8OMoC.jpg",
              "width": "1170",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FngUGkDXEA8OMoC?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnXOZXGXwAEw5Tr.jpg",
              "width": "1536",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnXOZXGXwAEw5Tr?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnXOZWeWIAIT8MI.jpg",
              "width": "2048",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnXOZWeWIAIT8MI?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnXfADMagAEHrDi.jpg",
              "width": "1600",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnXfADMagAEHrDi?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnWLhW9XkAAVahy.jpg",
              "width": "4096",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnWLhW9XkAAVahy?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnVxCkgaYAA1r8_.jpg",
              "width": "1440",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnVxCkgaYAA1r8_?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnRXWqoXkAA6fpC.jpg",
              "width": "4096",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnRXWqoXkAA6fpC?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnRXWqoXkAA6fpC.jpg",
              "width": "4096",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnRXWqoXkAA6fpC?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnQP9tnakAQH4f6.jpg",
              "width": "3840",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnQP9tnakAQH4f6?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnQP95qagAA3T4h.jpg",
              "width": "2880",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnQP95qagAA3T4h?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/FnBsNMuakAAoHG4.jpg",
              "width": "2048",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/FnBsNMuakAAoHG4?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/Fm3mpwpXEAk0oSH.jpg",
              "width": "2048",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/Fm3mpwpXEAk0oSH?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/Fm3KQ6BXkAEHtyL.jpg",
              "width": "2908",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/Fm3KQ6BXkAEHtyL?format=jpg&name=thumb"
            },
            {
              "contenturl": "https://pbs.twimg.com/media/Fm8OF7UWIAEFDie.jpg",
              "width": "1170",
              "caption": "Image",
              "thumbnailurl": "https://pbs.twimg.com/media/Fm8OF7UWIAEFDie?format=jpg&name=thumb"
            }
          ],
          "person": [
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "38271276",
              "givenname": "Matt Taibbi",
              "disambiguatingdescription": "verified",
              "additionalname": "mtaibbi"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "38271276",
              "givenname": "Matt Taibbi",
              "disambiguatingdescription": "verified",
              "additionalname": "mtaibbi"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "34743251",
              "givenname": "SpaceX",
              "disambiguatingdescription": "verified",
              "additionalname": "SpaceX"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "34743251",
              "givenname": "SpaceX",
              "disambiguatingdescription": "verified",
              "additionalname": "SpaceX"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "34743251",
              "givenname": "SpaceX",
              "disambiguatingdescription": "verified",
              "additionalname": "SpaceX"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "34743251",
              "givenname": "SpaceX",
              "disambiguatingdescription": "verified",
              "additionalname": "SpaceX"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "17874544",
              "givenname": "Twitter Support",
              "disambiguatingdescription": "verified,Twitter",
              "additionalname": "TwitterSupport"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "13298072",
              "givenname": "Tesla",
              "disambiguatingdescription": "verified",
              "additionalname": "Tesla"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "additionalname": "elonmusk"
            },
            {
              "identifier": "30699048",
              "givenname": "Shibetoshi Nakamoto",
              "disambiguatingdescription": "verified",
              "additionalname": "BillyM2k"
            },
            {
              "identifier": "44196397",
              "givenname": "Mr. Tweet",
              "disambiguatingdescription": "verified",
              "additionalname": "elonmusk"
            }
          ],
          "interactioncounter": [
            {
              "userinteractioncount": "67688",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1619419638873595905/likes"
            },
            {
              "userinteractioncount": "4901",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1619419638873595905/retweets"
            },
            {
              "userinteractioncount": "701",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1619419638873595905/retweets/with_comments"
            },
            {
              "userinteractioncount": "6230",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1619419638873595905"
            },
            {
              "userinteractioncount": "306402",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1619145539802796033/likes"
            },
            {
              "userinteractioncount": "18306",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1619145539802796033/retweets"
            },
            {
              "userinteractioncount": "2409",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1619145539802796033/retweets/with_comments"
            },
            {
              "userinteractioncount": "22067",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1619145539802796033"
            },
            {
              "userinteractioncount": "17815",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/mtaibbi/status/1619058860131602434/likes"
            },
            {
              "userinteractioncount": "4340",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/mtaibbi/status/1619058860131602434/retweets"
            },
            {
              "userinteractioncount": "163",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/mtaibbi/status/1619058860131602434/retweets/with_comments"
            },
            {
              "userinteractioncount": "680",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/mtaibbi/status/1619058860131602434"
            },
            {
              "userinteractioncount": "165548",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1619069893344903172/likes"
            },
            {
              "userinteractioncount": "10144",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1619069893344903172/retweets"
            },
            {
              "userinteractioncount": "1209",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1619069893344903172/retweets/with_comments"
            },
            {
              "userinteractioncount": "13198",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1619069893344903172"
            },
            {
              "userinteractioncount": "129444",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1619066176113606656/likes"
            },
            {
              "userinteractioncount": "13901",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1619066176113606656/retweets"
            },
            {
              "userinteractioncount": "1519",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1619066176113606656/retweets/with_comments"
            },
            {
              "userinteractioncount": "8594",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1619066176113606656"
            },
            {
              "userinteractioncount": "25605",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/mtaibbi/status/1619062579883814913/likes"
            },
            {
              "userinteractioncount": "4372",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/mtaibbi/status/1619062579883814913/retweets"
            },
            {
              "userinteractioncount": "131",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/mtaibbi/status/1619062579883814913/retweets/with_comments"
            },
            {
              "userinteractioncount": "901",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/mtaibbi/status/1619062579883814913"
            },
            {
              "userinteractioncount": "66107",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1619059852210503680/likes"
            },
            {
              "userinteractioncount": "16560",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1619059852210503680/retweets"
            },
            {
              "userinteractioncount": "781",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1619059852210503680/retweets/with_comments"
            },
            {
              "userinteractioncount": "3776",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1619059852210503680"
            },
            {
              "userinteractioncount": "64249",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1619037727307202560/likes"
            },
            {
              "userinteractioncount": "15916",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1619037727307202560/retweets"
            },
            {
              "userinteractioncount": "679",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1619037727307202560/retweets/with_comments"
            },
            {
              "userinteractioncount": "5012",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1619037727307202560"
            },
            {
              "userinteractioncount": "27909",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/SpaceX/status/1618542564638068738/likes"
            },
            {
              "userinteractioncount": "3353",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/SpaceX/status/1618542564638068738/retweets"
            },
            {
              "userinteractioncount": "194",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/SpaceX/status/1618542564638068738/retweets/with_comments"
            },
            {
              "userinteractioncount": "1137",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/SpaceX/status/1618542564638068738"
            },
            {
              "userinteractioncount": "266751",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1618826074724634625/likes"
            },
            {
              "userinteractioncount": "25379",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1618826074724634625/retweets"
            },
            {
              "userinteractioncount": "2690",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1618826074724634625/retweets/with_comments"
            },
            {
              "userinteractioncount": "15137",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1618826074724634625"
            },
            {
              "userinteractioncount": "184123",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1618747157963735040/likes"
            },
            {
              "userinteractioncount": "15746",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1618747157963735040/retweets"
            },
            {
              "userinteractioncount": "2025",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1618747157963735040/retweets/with_comments"
            },
            {
              "userinteractioncount": "18910",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1618747157963735040"
            },
            {
              "userinteractioncount": "38259",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/SpaceX/status/1618426581428621317/likes"
            },
            {
              "userinteractioncount": "3961",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/SpaceX/status/1618426581428621317/retweets"
            },
            {
              "userinteractioncount": "218",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/SpaceX/status/1618426581428621317/retweets/with_comments"
            },
            {
              "userinteractioncount": "1404",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/SpaceX/status/1618426581428621317"
            },
            {
              "userinteractioncount": "165462",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1618444845701562370/likes"
            },
            {
              "userinteractioncount": "8672",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1618444845701562370/retweets"
            },
            {
              "userinteractioncount": "1014",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1618444845701562370/retweets/with_comments"
            },
            {
              "userinteractioncount": "7690",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1618444845701562370"
            },
            {
              "userinteractioncount": "16335",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1618376081802674176/likes"
            },
            {
              "userinteractioncount": "2654",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1618376081802674176/retweets"
            },
            {
              "userinteractioncount": "129",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1618376081802674176/retweets/with_comments"
            },
            {
              "userinteractioncount": "956",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1618376081802674176"
            },
            {
              "userinteractioncount": "909024",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1618371072486936578/likes"
            },
            {
              "userinteractioncount": "56602",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1618371072486936578/retweets"
            },
            {
              "userinteractioncount": "11863",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1618371072486936578/retweets/with_comments"
            },
            {
              "userinteractioncount": "63412",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1618371072486936578"
            },
            {
              "userinteractioncount": "24778",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1618363090449600515/likes"
            },
            {
              "userinteractioncount": "2933",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1618363090449600515/retweets"
            },
            {
              "userinteractioncount": "239",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1618363090449600515/retweets/with_comments"
            },
            {
              "userinteractioncount": "990",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1618363090449600515"
            },
            {
              "userinteractioncount": "128394",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1618323939557806080/likes"
            },
            {
              "userinteractioncount": "10006",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1618323939557806080/retweets"
            },
            {
              "userinteractioncount": "813",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1618323939557806080/retweets/with_comments"
            },
            {
              "userinteractioncount": "6897",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1618323939557806080"
            },
            {
              "userinteractioncount": "19226",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1618285517887668230/likes"
            },
            {
              "userinteractioncount": "2260",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1618285517887668230/retweets"
            },
            {
              "userinteractioncount": "126",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1618285517887668230/retweets/with_comments"
            },
            {
              "userinteractioncount": "843",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1618285517887668230"
            },
            {
              "userinteractioncount": "42471",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1618197615715450881/likes"
            },
            {
              "userinteractioncount": "3232",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1618197615715450881/retweets"
            },
            {
              "userinteractioncount": "448",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1618197615715450881/retweets/with_comments"
            },
            {
              "userinteractioncount": "5940",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1618197615715450881"
            },
            {
              "userinteractioncount": "322080",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1618196880479092742/likes"
            },
            {
              "userinteractioncount": "32708",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1618196880479092742/retweets"
            },
            {
              "userinteractioncount": "2987",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1618196880479092742/retweets/with_comments"
            },
            {
              "userinteractioncount": "20036",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1618196880479092742"
            },
            {
              "userinteractioncount": "21969",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1618016126377799680/likes"
            },
            {
              "userinteractioncount": "2080",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1618016126377799680/retweets"
            },
            {
              "userinteractioncount": "114",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1618016126377799680/retweets/with_comments"
            },
            {
              "userinteractioncount": "835",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1618016126377799680"
            },
            {
              "userinteractioncount": "18924",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1618016068852932610/likes"
            },
            {
              "userinteractioncount": "1645",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1618016068852932610/retweets"
            },
            {
              "userinteractioncount": "66",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1618016068852932610/retweets/with_comments"
            },
            {
              "userinteractioncount": "499",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1618016068852932610"
            },
            {
              "userinteractioncount": "49506",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1618016066504118272/likes"
            },
            {
              "userinteractioncount": "6247",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1618016066504118272/retweets"
            },
            {
              "userinteractioncount": "796",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1618016066504118272/retweets/with_comments"
            },
            {
              "userinteractioncount": "1731",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1618016066504118272"
            },
            {
              "userinteractioncount": "37727",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/SpaceX/status/1617936157295411200/likes"
            },
            {
              "userinteractioncount": "4330",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/SpaceX/status/1617936157295411200/retweets"
            },
            {
              "userinteractioncount": "386",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/SpaceX/status/1617936157295411200/retweets/with_comments"
            },
            {
              "userinteractioncount": "1306",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/SpaceX/status/1617936157295411200"
            },
            {
              "userinteractioncount": "55842",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/SpaceX/status/1617676629001801728/likes"
            },
            {
              "userinteractioncount": "8240",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/SpaceX/status/1617676629001801728/retweets"
            },
            {
              "userinteractioncount": "859",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/SpaceX/status/1617676629001801728/retweets/with_comments"
            },
            {
              "userinteractioncount": "2131",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/SpaceX/status/1617676629001801728"
            },
            {
              "userinteractioncount": "193017",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616930908115984384/likes"
            },
            {
              "userinteractioncount": "11661",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616930908115984384/retweets"
            },
            {
              "userinteractioncount": "780",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616930908115984384/retweets/with_comments"
            },
            {
              "userinteractioncount": "11493",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616930908115984384"
            },
            {
              "userinteractioncount": "66186",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616855485294215168/likes"
            },
            {
              "userinteractioncount": "3817",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616855485294215168/retweets"
            },
            {
              "userinteractioncount": "1262",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616855485294215168/retweets/with_comments"
            },
            {
              "userinteractioncount": "5847",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616855485294215168"
            },
            {
              "userinteractioncount": "257739",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616853475220156417/likes"
            },
            {
              "userinteractioncount": "15626",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616853475220156417/retweets"
            },
            {
              "userinteractioncount": "2635",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616853475220156417/retweets/with_comments"
            },
            {
              "userinteractioncount": "15021",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616853475220156417"
            },
            {
              "userinteractioncount": "159670",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616724195035197440/likes"
            },
            {
              "userinteractioncount": "9193",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616724195035197440/retweets"
            },
            {
              "userinteractioncount": "1677",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616724195035197440/retweets/with_comments"
            },
            {
              "userinteractioncount": "13674",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616724195035197440"
            },
            {
              "userinteractioncount": "58072",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616596584174882816/likes"
            },
            {
              "userinteractioncount": "3199",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616596584174882816/retweets"
            },
            {
              "userinteractioncount": "295",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616596584174882816/retweets/with_comments"
            },
            {
              "userinteractioncount": "2345",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616596584174882816"
            },
            {
              "userinteractioncount": "82981",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616595415675330563/likes"
            },
            {
              "userinteractioncount": "7693",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616595415675330563/retweets"
            },
            {
              "userinteractioncount": "1814",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616595415675330563/retweets/with_comments"
            },
            {
              "userinteractioncount": "2765",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616595415675330563"
            },
            {
              "userinteractioncount": "76542",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616594332907372544/likes"
            },
            {
              "userinteractioncount": "6782",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616594332907372544/retweets"
            },
            {
              "userinteractioncount": "2149",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616594332907372544/retweets/with_comments"
            },
            {
              "userinteractioncount": "5634",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616594332907372544"
            },
            {
              "userinteractioncount": "293864",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616590989145313283/likes"
            },
            {
              "userinteractioncount": "25597",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616590989145313283/retweets"
            },
            {
              "userinteractioncount": "6520",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616590989145313283/retweets/with_comments"
            },
            {
              "userinteractioncount": "19197",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616590989145313283"
            },
            {
              "userinteractioncount": "9891",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/TwitterSupport/status/1616528345700728835/likes"
            },
            {
              "userinteractioncount": "1345",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/TwitterSupport/status/1616528345700728835/retweets"
            },
            {
              "userinteractioncount": "100",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/TwitterSupport/status/1616528345700728835/retweets/with_comments"
            },
            {
              "userinteractioncount": "664",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/TwitterSupport/status/1616528345700728835"
            },
            {
              "userinteractioncount": "35771",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616577133945688065/likes"
            },
            {
              "userinteractioncount": "3346",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616577133945688065/retweets"
            },
            {
              "userinteractioncount": "256",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616577133945688065/retweets/with_comments"
            },
            {
              "userinteractioncount": "2193",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616577133945688065"
            },
            {
              "userinteractioncount": "16536",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1616172179690766362/likes"
            },
            {
              "userinteractioncount": "1680",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1616172179690766362/retweets"
            },
            {
              "userinteractioncount": "90",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1616172179690766362/retweets/with_comments"
            },
            {
              "userinteractioncount": "864",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1616172179690766362"
            },
            {
              "userinteractioncount": "13121",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/Tesla/status/1616575113452732423/likes"
            },
            {
              "userinteractioncount": "1337",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/Tesla/status/1616575113452732423/retweets"
            },
            {
              "userinteractioncount": "77",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/Tesla/status/1616575113452732423/retweets/with_comments"
            },
            {
              "userinteractioncount": "512",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/Tesla/status/1616575113452732423"
            },
            {
              "userinteractioncount": "132528",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616533691156819968/likes"
            },
            {
              "userinteractioncount": "11289",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616533691156819968/retweets"
            },
            {
              "userinteractioncount": "1519",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616533691156819968/retweets/with_comments"
            },
            {
              "userinteractioncount": "7852",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616533691156819968"
            },
            {
              "userinteractioncount": "12766",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/BillyM2k/status/1616526294967091220/likes"
            },
            {
              "userinteractioncount": "1334",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/BillyM2k/status/1616526294967091220/retweets"
            },
            {
              "userinteractioncount": "76",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/BillyM2k/status/1616526294967091220/retweets/with_comments"
            },
            {
              "userinteractioncount": "497",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/BillyM2k/status/1616526294967091220"
            },
            {
              "userinteractioncount": "138041",
              "interactiontype": "https://schema.org/LikeAction",
              "name": "Likes",
              "url": "https://twitter.com/elonmusk/status/1616531077790826497/likes"
            },
            {
              "userinteractioncount": "10501",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Retweets",
              "url": "https://twitter.com/elonmusk/status/1616531077790826497/retweets"
            },
            {
              "userinteractioncount": "1186",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Quotes",
              "url": "https://twitter.com/elonmusk/status/1616531077790826497/retweets/with_comments"
            },
            {
              "userinteractioncount": "8004",
              "interactiontype": "https://schema.org/InteractAction",
              "name": "Replies",
              "url": "https://twitter.com/elonmusk/status/1616531077790826497"
            }
          ],
          "metatags": [
            {
              "og:image": "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
              "theme-color": "#ffffff",
              "og:type": "profile",
              "og:site_name": "Twitter",
              "al:ios:app_name": "Twitter",
              "apple-mobile-web-app-title": "Twitter",
              "og:title": "Mr. Tweet (@elonmusk) / Twitter",
              "al:android:package": "com.twitter.android",
              "al:ios:url": "twitter://user?screen_name=elonmusk",
              "al:ios:app_store_id": "333903271",
              "facebook-domain-verification": "x6sdcc8b5ju3bh8nbm59eswogvg6t1",
              "al:android:url": "twitter://user?screen_name=elonmusk",
              "fb:app_id": "2231777543",
              "apple-mobile-web-app-status-bar-style": "white",
              "viewport": "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover",
              "mobile-web-app-capable": "yes",
              "og:url": "https://twitter.com/elonmusk",
              "al:android:app_name": "Twitter"
            }
          ],
          "videoobject": [
            {
              "duration": "PT0H0M13S",
              "embedurl": "https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-1&frame=false&hideCard=false&hideThread=false&lang=en&id=1619029772977455105",
              "contenturl": "https://video.twimg.com/ext_tw_video/1619028099609378835/pu/vid/1280x720/2AKD2z1zrHEIXtpj.mp4?tag=12",
              "uploaddate": "2023-01-27T17:49:12.000Z",
              "name": "@mtaibbi's video Tweet",
              "description": "Embedded video",
              "caption": "Embedded video",
              "thumbnailurl": "https://pbs.twimg.com/ext_tw_video_thumb/1619028099609378835/pu/img/WpulbtiMrTsWnbp5.jpg"
            },
            {
              "duration": "PT0H0M19S",
              "embedurl": "https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-1&frame=false&hideCard=false&hideThread=false&lang=en&id=1618542564638068738",
              "contenturl": "https://video.twimg.com/amplify_video/1618542470702460929/vid/1280x720/P9bcNedXjSoVDhx6.mp4?tag=14",
              "uploaddate": "2023-01-26T09:33:13.000Z",
              "name": "@SpaceX's video Tweet",
              "description": "Embedded video",
              "caption": "Embedded video",
              "thumbnailurl": "https://pbs.twimg.com/amplify_video_thumb/1618542470702460929/img/9IbhlaNCWHpVNQoS.jpg"
            },
            {
              "duration": "PT0H0M50S",
              "embedurl": "https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-1&frame=false&hideCard=false&hideThread=false&lang=en&id=1618016126377799680",
              "contenturl": "https://video.twimg.com/ext_tw_video/1618014625261359109/pu/vid/1280x720/zoQoIAILSygRRvzH.mp4?tag=12",
              "uploaddate": "2023-01-24T22:41:20.000Z",
              "name": "@Tesla's video Tweet",
              "description": "Embedded video",
              "caption": "Embedded video",
              "thumbnailurl": "https://pbs.twimg.com/ext_tw_video_thumb/1618014625261359109/pu/img/EXWXZMiGGp-6vkrk.jpg"
            },
            {
              "duration": "PT0H0M22S",
              "embedurl": "https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-1&frame=false&hideCard=false&hideThread=false&lang=en&id=1617676629001801728",
              "contenturl": "https://video.twimg.com/ext_tw_video/1617676160653197314/pu/vid/1280x720/FbjyTAQxEm41eDas.mp4?tag=12",
              "uploaddate": "2023-01-24T00:12:17.000Z",
              "name": "@SpaceX's video Tweet",
              "description": "Embedded video",
              "caption": "Embedded video",
              "thumbnailurl": "https://pbs.twimg.com/ext_tw_video_thumb/1617676160653197314/pu/img/I_moS1hO8TayqgVZ.jpg"
            }
          ],
          "collection": [
            {
              "name": "Profile Tweets"
            }
          ],
          "creativework": [
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/vxnKAoI9T7"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/DPdQYjXfdO"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/nLJdSIiPZZ"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/JPcKh7fcvp"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/1aF53hgWgM"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/JNL5ovciRJ"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/6WkUryAhKO"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/GbyEshomft"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/82uFyKANI8"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/k4onev0rQP"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/4CBOIFLwAW"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/YXSfyBufmX"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/btprGNGZ1G"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/DXPmsEBz4d"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/EwKh0BU8sT"
            },
            {
              "name": "Expanded Tweet URLs",
              "url": "https://t.co/5m3XiMnazJ"
            }
          ],
          "cse_image": [
            {
              "src": "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg"
            }
          ],
          "socialmediaposting": [
            {
              "identifier": "1619419638873595905",
              "commentcount": "6230",
              "articlebody": "Another major improvement in timeline refresh speed just released – now 10X faster than a few months ago",
              "position": "1",
              "datecreated": "2023-01-28T19:38:23.000Z",
              "datepublished": "2023-01-28T19:38:23.000Z",
              "url": "https://twitter.com/elonmusk/status/1619419638873595905"
            },
            {
              "identifier": "1619145539802796033",
              "commentcount": "22067",
              "articlebody": "I work all day, then go home & play work simulator",
              "position": "2",
              "datecreated": "2023-01-28T01:29:13.000Z",
              "datepublished": "2023-01-28T01:29:13.000Z",
              "url": "https://twitter.com/elonmusk/status/1619145539802796033"
            },
            {
              "identifier": "1619117180599078913",
              "position": "3",
              "datecreated": "2023-01-27T23:36:32.000Z",
              "datepublished": "2023-01-27T23:36:32.000Z"
            },
            {
              "identifier": "1619058860131602434",
              "commentcount": "680",
              "articlebody": "Instead of tracking how “Russia” influenced American attitudes, Hamilton 68 simply collected a handful of mostly real, mostly American accounts, and described their organic conversations...",
              "datecreated": "2023-01-27T19:44:47.000Z",
              "datepublished": "2023-01-27T19:44:47.000Z",
              "url": "https://twitter.com/mtaibbi/status/1619058860131602434"
            },
            {
              "identifier": "1619069893344903172",
              "commentcount": "13198",
              "articlebody": "Nothing conveys gravitas better than being called Mr. Tweet 🐥",
              "position": "4",
              "datecreated": "2023-01-27T20:28:38.000Z",
              "datepublished": "2023-01-27T20:28:38.000Z",
              "url": "https://twitter.com/elonmusk/status/1619069893344903172"
            },
            {
              "identifier": "1619066176113606656",
              "commentcount": "8594",
              "articlebody": "So then why do call yourself “The” Associated Press 😂",
              "position": "5",
              "datecreated": "2023-01-27T20:13:51.000Z",
              "datepublished": "2023-01-27T20:13:51.000Z",
              "url": "https://twitter.com/elonmusk/status/1619066176113606656"
            },
            {
              "identifier": "1619062805243777026",
              "position": "6",
              "datecreated": "2023-01-27T20:00:28.000Z",
              "datepublished": "2023-01-27T20:00:28.000Z"
            },
            {
              "identifier": "1619062579883814913",
              "commentcount": "901",
              "articlebody": "I’m trying to assemble a list of news stories and TV segments pegged to Hamilton 68 and will publish it once done, hopefully this weekend. I think people will be shocked by the scale of this",
              "datecreated": "2023-01-27T19:59:34.000Z",
              "datepublished": "2023-01-27T19:59:34.000Z",
              "url": "https://twitter.com/mtaibbi/status/1619062579883814913"
            },
            {
              "identifier": "1619059852210503680",
              "commentcount": "3776",
              "articlebody": "An American group made false claims about Russian election interference to interfere with American elections",
              "position": "7",
              "datecreated": "2023-01-27T19:48:44.000Z",
              "isbasedon": "https://twitter.com/mtaibbi/status/1619058695114989568",
              "datepublished": "2023-01-27T19:48:44.000Z",
              "url": "https://twitter.com/elonmusk/status/1619059852210503680"
            },
            {
              "identifier": "1619037727307202560",
              "commentcount": "5012",
              "articlebody": "Shame on @MSNBC for misleading the public!",
              "position": "8",
              "datecreated": "2023-01-27T18:20:49.000Z",
              "isbasedon": "https://twitter.com/mtaibbi/status/1619029772977455105",
              "datepublished": "2023-01-27T18:20:49.000Z",
              "url": "https://twitter.com/elonmusk/status/1619037727307202560"
            },
            {
              "identifier": "1618847291686928385",
              "position": "9",
              "datecreated": "2023-01-27T05:44:05.000Z",
              "datepublished": "2023-01-27T05:44:05.000Z"
            },
            {
              "identifier": "1618542564638068738",
              "commentcount": "1137",
              "articlebody": "Liftoff!",
              "datecreated": "2023-01-26T09:33:13.000Z",
              "datepublished": "2023-01-26T09:33:13.000Z",
              "url": "https://twitter.com/SpaceX/status/1618542564638068738"
            },
            {
              "identifier": "1618826074724634625",
              "commentcount": "15137",
              "articlebody": "Twitter is the PvP of social media",
              "position": "10",
              "datecreated": "2023-01-27T04:19:47.000Z",
              "datepublished": "2023-01-27T04:19:47.000Z",
              "url": "https://twitter.com/elonmusk/status/1618826074724634625"
            },
            {
              "identifier": "1618747157963735040",
              "commentcount": "18910",
              "articlebody": "Just met with @SpeakerMcCarthy & @RepJeffries to discuss ensuring that this platform is fair to both parties",
              "position": "11",
              "datecreated": "2023-01-26T23:06:11.000Z",
              "datepublished": "2023-01-26T23:06:11.000Z",
              "url": "https://twitter.com/elonmusk/status/1618747157963735040"
            },
            {
              "identifier": "1618446608584290306",
              "position": "12",
              "datecreated": "2023-01-26T03:11:55.000Z",
              "datepublished": "2023-01-26T03:11:55.000Z"
            },
            {
              "identifier": "1618426581428621317",
              "commentcount": "1404",
              "articlebody": "Launch and catch tower destacked Ship 24 from Booster 7 on the orbital pad today ahead of the Booster’s static fire test",
              "datecreated": "2023-01-26T01:52:20.000Z",
              "datepublished": "2023-01-26T01:52:20.000Z",
              "url": "https://twitter.com/SpaceX/status/1618426581428621317"
            },
            {
              "identifier": "1618444845701562370",
              "commentcount": "7690",
              "articlebody": "Congrats Tesla California factory team on all-time record production!",
              "position": "13",
              "datecreated": "2023-01-26T03:04:55.000Z",
              "datepublished": "2023-01-26T03:04:55.000Z",
              "url": "https://twitter.com/elonmusk/status/1618444845701562370"
            },
            {
              "identifier": "1618378967165333504",
              "position": "14",
              "datecreated": "2023-01-25T22:43:08.000Z",
              "datepublished": "2023-01-25T22:43:08.000Z"
            },
            {
              "identifier": "1618376081802674176",
              "commentcount": "956",
              "articlebody": "Q4 2022 Earnings Call",
              "datecreated": "2023-01-25T22:31:40.000Z",
              "datepublished": "2023-01-25T22:31:40.000Z",
              "url": "https://twitter.com/Tesla/status/1618376081802674176"
            },
            {
              "identifier": "1618371072486936578",
              "commentcount": "63412",
              "articlebody": "Changed my name to Mr. Tweet, now Twitter won’t let me change it back 🤣",
              "position": "15",
              "datecreated": "2023-01-25T22:11:46.000Z",
              "datepublished": "2023-01-25T22:11:46.000Z",
              "url": "https://twitter.com/elonmusk/status/1618371072486936578"
            },
            {
              "identifier": "1618366388401483777",
              "position": "16",
              "datecreated": "2023-01-25T21:53:09.000Z",
              "datepublished": "2023-01-25T21:53:09.000Z"
            },
            {
              "identifier": "1618363090449600515",
              "commentcount": "990",
              "articlebody": "In 2022, we produced & delivered 1.3M+ vehicles 💪 In Q4 we achieved our highest-ever quarterly revenue, operating income & net income → https://tesla-cdn.thron.com/static/GZR0GS_TSLA_Q4_2022_U...",
              "datecreated": "2023-01-25T21:40:03.000Z",
              "datepublished": "2023-01-25T21:40:03.000Z",
              "url": "https://twitter.com/Tesla/status/1618363090449600515"
            },
            {
              "identifier": "1618323939557806080",
              "commentcount": "6897",
              "articlebody": "Starship fully loaded with cryogenic propellant",
              "position": "17",
              "datecreated": "2023-01-25T19:04:28.000Z",
              "datepublished": "2023-01-25T19:04:28.000Z",
              "url": "https://twitter.com/elonmusk/status/1618323939557806080"
            },
            {
              "identifier": "1618290497453436929",
              "position": "18",
              "datecreated": "2023-01-25T16:51:35.000Z",
              "datepublished": "2023-01-25T16:51:35.000Z"
            },
            {
              "identifier": "1618285517887668230",
              "commentcount": "843",
              "articlebody": "Full presentation → https://youtu.be/OLdIPmE4dCs",
              "datecreated": "2023-01-25T16:31:48.000Z",
              "isbasedon": "https://twitter.com/Tesla/status/1618016066504118272",
              "datepublished": "2023-01-25T16:31:48.000Z",
              "url": "https://twitter.com/Tesla/status/1618285517887668230"
            },
            {
              "identifier": "1618197615715450881",
              "commentcount": "5940",
              "articlebody": "1/2 a 🐝 philosophically must ipso facto 1/2 not 🐝",
              "position": "19",
              "datecreated": "2023-01-25T10:42:30.000Z",
              "datepublished": "2023-01-25T10:42:30.000Z",
              "url": "https://twitter.com/elonmusk/status/1618197615715450881"
            },
            {
              "identifier": "1618196880479092742",
              "commentcount": "20036",
              "articlebody": "🐝 all u can🐝",
              "position": "20",
              "datecreated": "2023-01-25T10:39:35.000Z",
              "datepublished": "2023-01-25T10:39:35.000Z",
              "url": "https://twitter.com/elonmusk/status/1618196880479092742"
            },
            {
              "identifier": "1618029820553875456",
              "position": "21",
              "datecreated": "2023-01-24T23:35:45.000Z",
              "datepublished": "2023-01-24T23:35:45.000Z"
            },
            {
              "identifier": "1618016126377799680",
              "commentcount": "835",
              "articlebody": "Thank you to the Tesla team, our supply chain partners & the local community that helped us get here!",
              "ispartof": "https://twitter.com/Tesla/status/1618016068852932610",
              "datecreated": "2023-01-24T22:41:20.000Z",
              "datepublished": "2023-01-24T22:41:20.000Z",
              "url": "https://twitter.com/Tesla/status/1618016126377799680"
            },
            {
              "identifier": "1618029785376260096",
              "position": "22",
              "datecreated": "2023-01-24T23:35:37.000Z",
              "datepublished": "2023-01-24T23:35:37.000Z"
            },
            {
              "identifier": "1618016068852932610",
              "commentcount": "499",
              "articlebody": "We've come a long way since we broke ground at Giga Nevada in 2014. To date, the team there has successfully produced: - 7 billion battery cells - 1.5 million battery packs - 3.6 million drive...",
              "ispartof": "https://twitter.com/Tesla/status/1618016066504118272",
              "datecreated": "2023-01-24T22:41:06.000Z",
              "datepublished": "2023-01-24T22:41:06.000Z",
              "url": "https://twitter.com/Tesla/status/1618016068852932610"
            },
            {
              "identifier": "1618029749598851072",
              "position": "23",
              "datecreated": "2023-01-24T23:35:28.000Z",
              "datepublished": "2023-01-24T23:35:28.000Z"
            },
            {
              "identifier": "1618016066504118272",
              "commentcount": "1731",
              "articlebody": "Today, we’re announcing $3.6B of new investment in Giga Nevada. - 4M sq ft of new manufacturing footprint - 3k additional team members - 2 new manufacturing facilities: a 100 GWh 4680 cell...",
              "datecreated": "2023-01-24T22:41:06.000Z",
              "datepublished": "2023-01-24T22:41:06.000Z",
              "url": "https://twitter.com/Tesla/status/1618016066504118272"
            },
            {
              "identifier": "1617949635326398464",
              "position": "24",
              "datecreated": "2023-01-24T18:17:07.000Z",
              "datepublished": "2023-01-24T18:17:07.000Z"
            },
            {
              "identifier": "1617936157295411200",
              "commentcount": "1306",
              "articlebody": "After completing Starship’s first full flight-like wet dress rehearsal, Ship 24 will be destacked from Booster 7 in preparation for a static fire of the Booster’s 33 Raptor engines",
              "datecreated": "2023-01-24T17:23:34.000Z",
              "datepublished": "2023-01-24T17:23:34.000Z",
              "url": "https://twitter.com/SpaceX/status/1617936157295411200"
            },
            {
              "identifier": "1617697416517652480",
              "position": "25",
              "datecreated": "2023-01-24T01:34:54.000Z",
              "datepublished": "2023-01-24T01:34:54.000Z"
            },
            {
              "identifier": "1617676629001801728",
              "commentcount": "2131",
              "articlebody": "Starship completed its first full flight-like wet dress rehearsal at Starbase today. This was the first time an integrated Ship and Booster were fully loaded with more than 10 million pounds...",
              "datecreated": "2023-01-24T00:12:17.000Z",
              "datepublished": "2023-01-24T00:12:17.000Z",
              "url": "https://twitter.com/SpaceX/status/1617676629001801728"
            },
            {
              "identifier": "1616930908115984384",
              "commentcount": "11493",
              "articlebody": "🤗",
              "position": "26",
              "datecreated": "2023-01-21T22:49:04.000Z",
              "isbasedon": "https://twitter.com/Fidias0/status/1616911249765445632",
              "datepublished": "2023-01-21T22:49:04.000Z",
              "url": "https://twitter.com/elonmusk/status/1616930908115984384"
            },
            {
              "identifier": "1616855485294215168",
              "commentcount": "5847",
              "articlebody": "Also, there will be a higher priced subscription that allows zero ads",
              "ispartof": "https://twitter.com/elonmusk/status/1616853475220156417",
              "position": "27",
              "datecreated": "2023-01-21T17:49:22.000Z",
              "datepublished": "2023-01-21T17:49:22.000Z",
              "url": "https://twitter.com/elonmusk/status/1616855485294215168"
            },
            {
              "identifier": "1616853475220156417",
              "commentcount": "15021",
              "articlebody": "Ads are too frequent on Twitter and too big. Taking steps to address both in coming weeks.",
              "position": "28",
              "datecreated": "2023-01-21T17:41:22.000Z",
              "datepublished": "2023-01-21T17:41:22.000Z",
              "url": "https://twitter.com/elonmusk/status/1616853475220156417"
            },
            {
              "identifier": "1616724195035197440",
              "commentcount": "13674",
              "articlebody": "Je me souviens Pluto 🥹",
              "position": "29",
              "datecreated": "2023-01-21T09:07:40.000Z",
              "datepublished": "2023-01-21T09:07:40.000Z",
              "url": "https://twitter.com/elonmusk/status/1616724195035197440"
            },
            {
              "identifier": "1616596584174882816",
              "commentcount": "2345",
              "articlebody": "(Tweets will be translated before being recommended)",
              "ispartof": "https://twitter.com/elonmusk/status/1616595415675330563",
              "position": "30",
              "datecreated": "2023-01-21T00:40:35.000Z",
              "datepublished": "2023-01-21T00:40:35.000Z",
              "url": "https://twitter.com/elonmusk/status/1616596584174882816"
            },
            {
              "identifier": "1616595415675330563",
              "commentcount": "2765",
              "articlebody": "There are epic tweets in other countries every day (Japan especially)",
              "ispartof": "https://twitter.com/elonmusk/status/1616590989145313283",
              "position": "31",
              "datecreated": "2023-01-21T00:35:56.000Z",
              "datepublished": "2023-01-21T00:35:56.000Z",
              "url": "https://twitter.com/elonmusk/status/1616595415675330563"
            },
            {
              "identifier": "1616594332907372544",
              "commentcount": "5634",
              "articlebody": "Next Twitter update will remember whether you were on For You (ie recommended), Following or list you made & stop switching you back to recommended tweets",
              "position": "32",
              "datecreated": "2023-01-21T00:31:38.000Z",
              "datepublished": "2023-01-21T00:31:38.000Z",
              "url": "https://twitter.com/elonmusk/status/1616594332907372544"
            },
            {
              "identifier": "1616590989145313283",
              "commentcount": "19197",
              "articlebody": "In coming months, Twitter will translate & recommend amazing tweets from people in other countries & cultures",
              "position": "33",
              "datecreated": "2023-01-21T00:18:21.000Z",
              "datepublished": "2023-01-21T00:18:21.000Z",
              "url": "https://twitter.com/elonmusk/status/1616590989145313283"
            },
            {
              "identifier": "1616581611847581697",
              "position": "34",
              "datecreated": "2023-01-20T23:41:05.000Z",
              "datepublished": "2023-01-20T23:41:05.000Z"
            },
            {
              "identifier": "1616528345700728835",
              "commentcount": "664",
              "articlebody": "For @TwitterBlue subscribers, when you save a new Bookmark, you can still save directly to a folder by holding down the new flag icon. Long press from the Tweet details to access Bookmark folders...",
              "ispartof": "https://twitter.com/TwitterSupport/status/1616528343389667331",
              "datecreated": "2023-01-20T20:09:25.000Z",
              "datepublished": "2023-01-20T20:09:25.000Z",
              "url": "https://twitter.com/TwitterSupport/status/1616528345700728835"
            },
            {
              "identifier": "1616577133945688065",
              "commentcount": "2193",
              "articlebody": "Exactly! If companies post interesting or entertaining content, they will gain an audience rapidly.",
              "position": "35",
              "datecreated": "2023-01-20T23:23:17.000Z",
              "isbasedon": "https://twitter.com/FonsDK/status/1616201453013504007",
              "datepublished": "2023-01-20T23:23:17.000Z",
              "url": "https://twitter.com/elonmusk/status/1616577133945688065"
            },
            {
              "identifier": "1616575683878342661",
              "position": "36",
              "datecreated": "2023-01-20T23:17:32.000Z",
              "datepublished": "2023-01-20T23:17:32.000Z"
            },
            {
              "identifier": "1616172179690766362",
              "commentcount": "864",
              "articlebody": "Track Mode lets you use your Tesla’s instant response & motor torque to feel superhuman on the track—available on Model S Plaid + Model 3 & Y Performance",
              "datecreated": "2023-01-19T20:34:09.000Z",
              "datepublished": "2023-01-19T20:34:09.000Z",
              "url": "https://twitter.com/Tesla/status/1616172179690766362"
            },
            {
              "identifier": "1616575625325867013",
              "position": "37",
              "datecreated": "2023-01-20T23:17:18.000Z",
              "datepublished": "2023-01-20T23:17:18.000Z"
            },
            {
              "identifier": "1616575113452732423",
              "commentcount": "512",
              "articlebody": "Heat Pump allows us to move heat around to whatever system needs it most, giving Tesla vehicles unmatched efficiency in cold weather →",
              "datecreated": "2023-01-20T23:15:16.000Z",
              "datepublished": "2023-01-20T23:15:16.000Z",
              "url": "https://twitter.com/Tesla/status/1616575113452732423"
            },
            {
              "identifier": "1616533691156819968",
              "commentcount": "7852",
              "articlebody": "Major Twitter improvement we just released is that you can now bookmark tweets from tweet details page. Importantly, bookmarks are *private*, unlike likes. No one other than you can see your...",
              "position": "38",
              "datecreated": "2023-01-20T20:30:40.000Z",
              "datepublished": "2023-01-20T20:30:40.000Z",
              "url": "https://twitter.com/elonmusk/status/1616533691156819968"
            },
            {
              "identifier": "1616531874763116544",
              "position": "39",
              "datecreated": "2023-01-20T20:23:27.000Z",
              "datepublished": "2023-01-20T20:23:27.000Z"
            },
            {
              "identifier": "1616526294967091220",
              "commentcount": "497",
              "articlebody": "oh that’s actually pretty cool!",
              "ispartof": "https://twitter.com/elonmusk/status/1616524886201225217",
              "datecreated": "2023-01-20T20:01:16.000Z",
              "datepublished": "2023-01-20T20:01:16.000Z",
              "url": "https://twitter.com/BillyM2k/status/1616526294967091220"
            },
            {
              "identifier": "1616531077790826497",
              "commentcount": "8004",
              "articlebody": "Twitter app update now available on App Store",
              "position": "40",
              "datecreated": "2023-01-20T20:20:17.000Z",
              "datepublished": "2023-01-20T20:20:17.000Z",
              "url": "https://twitter.com/elonmusk/status/1616531077790826497"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Elon Musk",
        "htmlTitle": "<b>Elon Musk</b>",
        "link": "https://www.forbes.com/profile/elon-musk/",
        "displayLink": "www.forbes.com",
        "snippet": "Elon Musk cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company.",
        "htmlSnippet": "<b>Elon Musk</b> cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company.",
        "cacheId": "pQ8CiBj7EMAJ",
        "formattedUrl": "https://www.forbes.com/profile/elon-musk/",
        "htmlFormattedUrl": "https://www.forbes.com/profile/<b>elon</b>-<b>musk</b>/",
        "pagemap": {
          "metatags": [
            {
              "image": "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "twitter:title": "Elon Musk",
              "og:site_name": "Forbes",
              "og:title": "Elon Musk",
              "og:image:type": "image/jpeg",
              "og:description": "#1 Elon Musk on the 2022 Forbes 400 - Elon Musk cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup",
              "twitter:image": "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
              "referrer": "origin-when-cross-origin",
              "fb:app_id": "123694841080850",
              "twitter:site": "@forbes",
              "viewport": "width=device-width,initial-scale=1,maximum-scale=5,minimum-scale=1,user-scalable=yes",
              "news_keywords": "Elon Musk",
              "twitter:description": "#1 Elon Musk on the 2022 Forbes 400 - Elon Musk cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup",
              "og:url": "https://www.forbes.com/profile/elon-musk/"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Elon Musk | Tesla",
        "htmlTitle": "<b>Elon Musk</b> | Tesla",
        "link": "https://www.tesla.com/elon-musk",
        "displayLink": "www.tesla.com",
        "snippet": "Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company. As the co-founder and CEO of Tesla, Elon leads all product design, ...",
        "htmlSnippet": "<b>Elon Musk</b> co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company. As the co-founder and CEO of Tesla, Elon leads all product design,&nbsp;...",
        "cacheId": "tq8vfrgZKs4J",
        "formattedUrl": "https://www.tesla.com/elon-musk",
        "htmlFormattedUrl": "https://www.tesla.com/<b>elon</b>-<b>musk</b>",
        "pagemap": {
          "cse_thumbnail": [
            {
              "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdjCFQpsQ1vg104PPzFGsM2G51GMNgtOvFJTtfgEB5DHdsfnD9JDdtRZY",
              "width": "259",
              "height": "194"
            }
          ],
          "metatags": [
            {
              "og:image": "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
              "twitter:card": "summary_large_image",
              "theme-color": "#000000",
              "og:site_name": "Tesla",
              "twitter:url": "https://www.tesla.com/elon-musk",
              "msapplication-tileimage": "/themes/custom/tesla_frontend/assets/favicons/mstile-144x144.png",
              "og:description": "Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company. As the co-founder and CEO of Tesla, Elon leads all product design, engineering and global manufacturing of the company's electric vehicles, battery products and solar energy products.",
              "twitter:creator": "@tesla",
              "og:image:secure_url": "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
              "twitter:image": "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
              "twitter:image:alt": "Tesla logo in gray on white background",
              "twitter:site": "@tesla",
              "msapplication-tilecolor": "#cc0000",
              "og:image:alt": "Tesla logo in gray on white background",
              "twitter:title": "Elon Musk | Tesla",
              "og:image:url": "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg",
              "handheldfriendly": "true",
              "image:alt_text": "Tesla logo in gray on white background",
              "og:title": "Elon Musk | Tesla",
              "apple-mobile-web-app-status-bar-style": "black",
              "viewport": "width=device-width, minimum-scale=1.0, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover",
              "twitter:description": "Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company. As the co-founder and CEO of Tesla, Elon leads all product design, engineering and global manufacturing of the company's electric vehicles, battery products and solar energy products.",
              "apple-mobile-web-app-capable": "yes",
              "mobileoptimized": "width",
              "og:url": "https://www.tesla.com/elon-musk"
            }
          ],
          "cse_image": [
            {
              "src": "https://www.tesla.com/sites/default/files/blog_images/tesla_announcement_social.jpg"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "SpaceX",
        "htmlTitle": "SpaceX",
        "link": "https://www.spacex.com/",
        "displayLink": "www.spacex.com",
        "snippet": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, ...",
        "htmlSnippet": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology,&nbsp;...",
        "cacheId": "fpZKzykc73AJ",
        "formattedUrl": "https://www.spacex.com/",
        "htmlFormattedUrl": "https://www.spacex.com/",
        "pagemap": {
          "cse_thumbnail": [
            {
              "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRwIuqCGwH12ucCiceqeGczkdt8BwAKzqPNJBKkuAyc9UC3kHfUT-UkDSR",
              "width": "225",
              "height": "225"
            }
          ],
          "metatags": [
            {
              "og:image": "https://www.spacex.com/static/images/share.jpg",
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "twitter:title": "SpaceX",
              "og:site_name": "SpaceX",
              "og:title": "SpaceX",
              "og:description": "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
              "twitter:image": "https://www.spacex.com/static/images/share.jpg",
              "twitter:site": "@spacex",
              "viewport": "width=device-width, user-scalable=1",
              "twitter:description": "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
              "og:locale": "en_US",
              "og:url": "http://www.spacex.com"
            }
          ],
          "cse_image": [
            {
              "src": "https://www.spacex.com/static/images/share.jpg"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Tesla: Electric Cars, Solar & Clean Energy",
        "htmlTitle": "Tesla: Electric Cars, Solar &amp; Clean Energy",
        "link": "https://www.tesla.com/",
        "displayLink": "www.tesla.com",
        "snippet": "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and ...",
        "htmlSnippet": "Tesla is accelerating the world&#39;s transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and&nbsp;...",
        "cacheId": "rHYp-0etoiEJ",
        "formattedUrl": "https://www.tesla.com/",
        "htmlFormattedUrl": "https://www.tesla.com/",
        "pagemap": {
          "cse_thumbnail": [
            {
              "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUJfAMM2tg3jkc-O42gXv0qCKhk944QQTVtP42EFcQz0Zl4X4IrHLSRlAW",
              "width": "311",
              "height": "162"
            }
          ],
          "metatags": [
            {
              "msapplication-tilecolor": "#cc0000",
              "og:image": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social",
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "twitter:title": "Electric Cars, Solar & Clean Energy | Tesla",
              "theme-color": "#000000",
              "og:site_name": "Tesla",
              "og:image:url": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social",
              "handheldfriendly": "true",
              "twitter:url": "https://www.tesla.com/",
              "image:alt_text": "Red Model 3",
              "og:title": "Electric Cars, Solar & Clean Energy | Tesla",
              "msapplication-tileimage": "/themes/custom/tesla_frontend/assets/favicons/mstile-144x144.png",
              "og:description": "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
              "twitter:creator": "@tesla",
              "og:image:secure_url": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social",
              "twitter:image": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social",
              "twitter:site": "@tesla",
              "apple-mobile-web-app-status-bar-style": "black",
              "viewport": "width=device-width, minimum-scale=1.0, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover",
              "twitter:description": "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
              "apple-mobile-web-app-capable": "yes",
              "mobileoptimized": "width",
              "og:url": "https://www.tesla.com/"
            }
          ],
          "cse_image": [
            {
              "src": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Elon Musk - CNBC",
        "htmlTitle": "<b>Elon Musk</b> - CNBC",
        "link": "https://www.cnbc.com/elon-musk/",
        "displayLink": "www.cnbc.com",
        "snippet": "Elon Musk says a Chinese automaker will likely be second to Tesla: 'They work the smartest' · Arjun KharpalJanuary 26, 2023.",
        "htmlSnippet": "<b>Elon Musk</b> says a Chinese automaker will likely be second to Tesla: &#39;They work the smartest&#39; &middot; Arjun KharpalJanuary 26, 2023.",
        "cacheId": "cdvineuccqkJ",
        "formattedUrl": "https://www.cnbc.com/elon-musk/",
        "htmlFormattedUrl": "https://www.cnbc.com/<b>elon</b>-<b>musk</b>/",
        "pagemap": {
          "cse_thumbnail": [
            {
              "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaQy0DchZON8PE6-uBvU5z2kDO7RckIqUGqMuubCxy8Bv-eh_9l8oJfnh",
              "width": "310",
              "height": "163"
            }
          ],
          "newsmediaorganization": [
            {
              "foundingdate": "'1989-04-17'",
              "name": "CNBC",
              "url": "https://www.cnbc.com"
            }
          ],
          "metatags": [
            {
              "og:image": "https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804&w=1920&h=1080",
              "apple-itunes-app": "app-id=398018310",
              "twitter:card": "summary_large_image",
              "article:published_time": "2018-06-20T13:49:13+0000",
              "og:site_name": "CNBC",
              "twitter:url": "https://www.cnbc.com/elon-musk/",
              "tp:preferredformats": "M3U,MPEG4",
              "og:description": "Elon Musk, Tesla",
              "twitter:creator": "@CNBC",
              "parsely-metadata": "{\"nodeid\":100987750,\"originalImage\":\"https://sc.cnbcfm.com/applications/cnbc.com/resources/img/editorial/2015/03/30/102546467-Most-Popular--Image-Placeholder-Large.jpg\"}",
              "article:publisher": "https://www.facebook.com/cnbc",
              "al:ios:app_store_id": "398018310",
              "pagenodeid": "100987750",
              "twitter:site": "@CNBC",
              "article:modified_time": "2020-08-27T19:34:06+0000",
              "news_keywords": "Elon Musk,business news",
              "tp:preferredruntimes": "universal",
              "tp:initialize": "false",
              "assettype": "person",
              "og:type": "website",
              "twitter:title": "Elon Musk",
              "al:ios:app_name": "CNBC Business News and Finance",
              "og:title": "Elon Musk",
              "twitter:image:src": "https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804&w=1920&h=1080",
              "viewport": "initial-scale=1.0, width=device-width",
              "twitter:description": "Elon Musk, Tesla",
              "og:url": "https://www.cnbc.com/elon-musk/",
              "format-detection": "telephone=no"
            }
          ],
          "webpage": [
            {
              "image": "https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804&w=1920&h=1080",
              "contentrating": "NR",
              "specialty": "Elon Musk",
              "primaryimageofpage": "https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804",
              "datemodified": "2020-08-27T19:34:06+0000",
              "inlanguage": "en-US",
              "keywords": "Elon Musk,business news",
              "lastreviewed": "2020-08-27T19:34:06+0000",
              "name": "Elon Musk - CNBC",
              "description": "Elon Musk, Tesla",
              "datecreated": "2018-06-20T13:49:13+0000"
            }
          ],
          "cse_image": [
            {
              "src": "https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804&w=1920&h=1080"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "@elonmusk • Instagram photos and videos",
        "htmlTitle": "@<b>elonmusk</b> • Instagram photos and videos",
        "link": "https://www.instagram.com/elonmusk/?hl=en",
        "displayLink": "www.instagram.com",
        "snippet": "668k Followers, 2 Following, 689 Posts - See Instagram photos and videos from @elonmusk. ... Elon Musk's Favorites.",
        "htmlSnippet": "668k Followers, 2 Following, 689 Posts - See Instagram photos and videos from @<b>elonmusk</b>. ... <b>Elon Musk&#39;s</b> Favorites.",
        "formattedUrl": "https://www.instagram.com/elonmusk/?hl=en",
        "htmlFormattedUrl": "https://www.instagram.com/<b>elonmusk</b>/?hl=en",
        "pagemap": {
          "xfn": [
            {}
          ],
          "metatags": [
            {
              "og:image": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/307754953_3286040178333381_186331255274065067_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=KC2dL009Bo8AX-IwNFT&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AfB-B8X15Hc2mA4PkZnJ2iv7Q_VNGD5iWwQF-g2w6_nO0Q&oe=63DB0668&_nc_sid=7bff83",
              "theme-color": "#ffffff",
              "og:type": "profile",
              "al:ios:app_name": "Instagram",
              "al:android:package": "com.instagram.android",
              "al:ios:url": "instagram://user?username=elonmusk",
              "og:description": "668k Followers, 2 Following, 689 Posts - See Instagram photos and videos from @elonmusk",
              "al:ios:app_store_id": "389801252",
              "al:android:url": "https://www.instagram.com/_u/elonmusk/",
              "apple-mobile-web-app-status-bar-style": "default",
              "viewport": "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover",
              "mobile-web-app-capable": "yes",
              "og:url": "https://www.instagram.com/elonmusk/",
              "al:android:app_name": "Instagram"
            }
          ],
          "cse_image": [
            {
              "src": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/307754953_3286040178333381_186331255274065067_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=KC2dL009Bo8AX-IwNFT&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AfB-B8X15Hc2mA4PkZnJ2iv7Q_VNGD5iWwQF-g2w6_nO0Q&oe=63DB0668&_nc_sid=7bff83"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Elon Musk talks Twitter, Tesla and how his brain works — live at ...",
        "htmlTitle": "<b>Elon Musk</b> talks Twitter, Tesla and how his brain works — live at ...",
        "link": "https://www.youtube.com/watch?v=cdZZpaB2kDM",
        "displayLink": "www.youtube.com",
        "snippet": "Apr 14, 2022 ... In this unedited conversation with head of TED Chris Anderson, Elon Musk — the head of Tesla, SpaceX, Neuralink and The Boring Company ...",
        "htmlSnippet": "Apr 14, 2022 <b>...</b> In this unedited conversation with head of TED Chris Anderson, <b>Elon Musk</b> — the head of Tesla, SpaceX, Neuralink and The Boring Company&nbsp;...",
        "formattedUrl": "https://www.youtube.com/watch?v=cdZZpaB2kDM",
        "htmlFormattedUrl": "https://www.youtube.com/watch?v=cdZZpaB2kDM",
        "pagemap": {
          "cse_thumbnail": [
            {
              "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSW12NqvLJzTkpVsn_T2amMZTKUbTxqQEAVuFLnXV3BHtIJWEXJRcZJMCU",
              "width": "300",
              "height": "168"
            }
          ],
          "VideoObject": [
            {}
          ],
          "imageobject": [
            {
              "width": "1280",
              "url": "https://i.ytimg.com/vi/cdZZpaB2kDM/maxresdefault.jpg",
              "height": "720"
            }
          ],
          "broadcastevent": [
            {
              "islivebroadcast": "True",
              "enddate": "2022-04-14T18:10:14+00:00",
              "startdate": "2022-04-14T15:55:08+00:00"
            }
          ],
          "person": [
            {
              "name": "TED",
              "url": "http://www.youtube.com/user/TEDtalksDirector"
            }
          ],
          "metatags": [
            {
              "og:image": "https://i.ytimg.com/vi/cdZZpaB2kDM/maxresdefault.jpg",
              "twitter:app:url:iphone": "vnd.youtube://www.youtube.com/watch?v=cdZZpaB2kDM&feature=applinks",
              "twitter:app:id:googleplay": "com.google.android.youtube",
              "theme-color": "rgba(255, 255, 255, 0.98)",
              "og:image:width": "1280",
              "twitter:card": "player",
              "og:site_name": "YouTube",
              "twitter:url": "https://www.youtube.com/watch?v=cdZZpaB2kDM",
              "twitter:app:url:ipad": "vnd.youtube://www.youtube.com/watch?v=cdZZpaB2kDM&feature=applinks",
              "al:android:package": "com.google.android.youtube",
              "twitter:app:name:googleplay": "YouTube",
              "title": "Elon Musk talks Twitter, Tesla and how his brain works — live at TED2022",
              "al:ios:url": "vnd.youtube://www.youtube.com/watch?v=cdZZpaB2kDM&feature=applinks",
              "twitter:app:id:iphone": "544007664",
              "og:description": "In this unedited conversation with head of TED Chris Anderson, Elon Musk — the head of Tesla, SpaceX, Neuralink and The Boring Company — digs into the recent...",
              "al:ios:app_store_id": "544007664",
              "twitter:image": "https://i.ytimg.com/vi/cdZZpaB2kDM/maxresdefault.jpg",
              "twitter:player": "https://www.youtube.com/embed/cdZZpaB2kDM",
              "twitter:player:height": "720",
              "twitter:site": "@youtube",
              "og:video:type": "text/html",
              "og:video:height": "720",
              "og:video:url": "https://www.youtube.com/embed/cdZZpaB2kDM",
              "og:type": "video.other",
              "twitter:title": "Elon Musk talks Twitter, Tesla and how his brain works — live at TED2022",
              "al:ios:app_name": "YouTube",
              "og:title": "Elon Musk talks Twitter, Tesla and how his brain works — live at TED2022",
              "og:image:height": "720",
              "twitter:app:id:ipad": "544007664",
              "al:web:url": "http://www.youtube.com/watch?v=cdZZpaB2kDM&feature=applinks",
              "og:video:secure_url": "https://www.youtube.com/embed/cdZZpaB2kDM",
              "og:video:tag": "TEDTalk",
              "og:video:width": "1280",
              "al:android:url": "vnd.youtube://www.youtube.com/watch?v=cdZZpaB2kDM&feature=applinks",
              "fb:app_id": "87741124305",
              "twitter:app:url:googleplay": "https://www.youtube.com/watch?v=cdZZpaB2kDM",
              "twitter:app:name:ipad": "YouTube",
              "twitter:description": "In this unedited conversation with head of TED Chris Anderson, Elon Musk — the head of Tesla, SpaceX, Neuralink and The Boring Company — digs into the recent...",
              "og:url": "https://www.youtube.com/watch?v=cdZZpaB2kDM",
              "twitter:player:width": "1280",
              "al:android:app_name": "YouTube",
              "twitter:app:name:iphone": "YouTube"
            }
          ],
          "videoobject": [
            {
              "embedurl": "https://www.youtube.com/embed/cdZZpaB2kDM",
              "playertype": "HTML5 Flash",
              "isfamilyfriendly": "true",
              "uploaddate": "2022-04-14",
              "description": "In this unedited conversation with head of TED Chris Anderson, Elon Musk — the head of Tesla, SpaceX, Neuralink and The Boring Company — digs into the recent...",
              "videoid": "cdZZpaB2kDM",
              "url": "https://www.youtube.com/watch?v=cdZZpaB2kDM",
              "duration": "PT54M45S",
              "unlisted": "False",
              "name": "Elon Musk talks Twitter, Tesla and how his brain works — live at TED2022",
              "paid": "False",
              "width": "1280",
              "regionsallowed": "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
              "genre": "Science & Technology",
              "interactioncount": "12250715",
              "channelid": "UCAuUUnT6oDeKwE6v1NGQxug",
              "datepublished": "2022-04-14",
              "thumbnailurl": "https://i.ytimg.com/vi/cdZZpaB2kDM/maxresdefault.jpg",
              "height": "720"
            }
          ],
          "cse_image": [
            {
              "src": "https://i.ytimg.com/vi/cdZZpaB2kDM/maxresdefault.jpg"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Elon Musk | Biography, SpaceX, Tesla, Twitter, & Facts | Britannica",
        "htmlTitle": "<b>Elon Musk</b> | Biography, SpaceX, Tesla, Twitter, &amp; Facts | Britannica",
        "link": "https://www.britannica.com/biography/Elon-Musk",
        "displayLink": "www.britannica.com",
        "snippet": "7 days ago ... Elon Musk, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm ...",
        "htmlSnippet": "7 days ago <b>...</b> <b>Elon Musk</b>, (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm&nbsp;...",
        "cacheId": "S8-9ddE_y7oJ",
        "formattedUrl": "https://www.britannica.com/biography/Elon-Musk",
        "htmlFormattedUrl": "https://www.britannica.com/biography/<b>Elon</b>-<b>Musk</b>",
        "pagemap": {
          "cse_thumbnail": [
            {
              "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOlcIC1CtU3CDkUMR0O8-Qu8m_qAeZV6dpGfDBsj2uM59_HnKcKh5jl4JA",
              "width": "264",
              "height": "191"
            }
          ],
          "metatags": [
            {
              "og:image": "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
              "twitter:card": "summary_large_image",
              "og:type": "ARTICLE",
              "og:site_name": "Encyclopedia Britannica",
              "og:title": "Elon Musk | Biography, SpaceX, Tesla, Twitter, & Facts",
              "og:image:type": "image/jpeg",
              "fb:pages": "74442380906",
              "og:description": "Elon Musk,  (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal and formed SpaceX, maker of launch vehicles and spacecraft. He was also one of the first significant investors in, as well as chief executive officer of, the electric car manufacturer Tesla. In addition, Musk acquired Twitter in 2022.        Musk was born to a South African father and a Canadian mother. He displayed an early talent for computers and entrepreneurship. At age 12 he created a video game and sold it to a computer magazine. In 1988, after obtaining a Canadian passport,",
              "twitter:image": "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
              "fb:app_id": "1887621861548296",
              "twitter:site": "@britannica",
              "viewport": "width=device-width, initial-scale=1.0",
              "twitter:description": "Elon Musk,  (born June 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal and formed SpaceX, maker of launch vehicles and spacecraft. He was also one of the first significant investors in, as well as chief executive officer of, the electric car manufacturer Tesla. In addition, Musk acquired Twitter in 2022.        Musk was born to a South African father and a Canadian mother. He displayed an early talent for computers and entrepreneurship. At age 12 he created a video game and sold it to a computer magazine. In 1988, after obtaining a Canadian passport,",
              "og:url": "https://www.britannica.com/biography/Elon-Musk"
            }
          ],
          "cse_image": [
            {
              "src": "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg"
            }
          ]
        }
      }
    ]
  })
  const [searchError, setSearchError] = useState(false)

  const { query } = useParams()
  const searchQuery = decodeURIComponent(query)
  const cx = "728cda582580e48ff"
  //const api_key = "AIzaSyBhsWbuB1DNYrYeU9T0TNLlB4q8dhalA2g"
  const api_key = "AIzaSyAK-nhTzmWoiZEQVbiptBO2UNpIMMMyAmU"
  const url = `https://customsearch.googleapis.com/customsearch/v1?q=${(query)}&cx=${cx}&key=${api_key}`

  async function getData() {
    try {
      const { data } = await axios.get(url)
      setSearchResults(data)
      console.log(data)
    } catch (error) {
      setSearchError(true)
    }
  }

  useEffect(() => {
    //getData()
  }, [])

  return (
    <>
      {
        searchResults.items
          ?
          <div className='w-screen flex flex-col min-w-[800px]'>
            <div className='flex pt-10 px-16 border-b border-gray-300'>
              <img className='h-10 mr-10' src={logo} alt="" />
              <div>
                <div className='flex justify-center relative w-[450px] mb-6'>
                  <input
                    className='border border-gray-300 py-2 pr-4 pl-10 rounded-full w-full hover:shadow-lg'
                    type="text" 
                    value={searchQuery}/>
                  <FontAwesomeIcon className='text-gray-600 absolute left-4 top-3.5' icon="fa-solid fa-magnifying-glass" />
                </div>
                <ul className='flex'>
                  <li className='mx-2 py-2 px-1 text-blue-500 border-b-4 border-blue-500'>
                    <a href="" className='pt-3 pb-1 text-sm'>
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                      &nbsp; All</a>
                  </li>
                  <li className='mx-2 py-2 px-1 text-gray-400'>
                    <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                      <FontAwesomeIcon icon="fa-regular fa-image" />
                      &nbsp; Images</a>
                  </li>
                  <li className='mx-2 py-2 px-1 text-gray-400'>
                    <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                      <FontAwesomeIcon icon="fa-solid fa-tag" />
                      &nbsp; Shopping</a>
                  </li>
                  <li className='mx-2 py-2 px-1 text-gray-400'>
                    <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                      <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                      &nbsp; Maps</a>
                  </li>
                  <li className='mx-2 py-2 px-1 text-gray-400'>
                    <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                      <FontAwesomeIcon icon="fa-regular fa-newspaper" />
                      &nbsp; News</a>
                  </li>
                  <li className='mx-2 py-2 px-1 text-gray-400'>
                    <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                      <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                      &nbsp; More</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='ml-56 mt-2 max-w-[600px]'>
              <span className='text-gray-400 text-sm'>{`About ${searchResults.searchInformation.formattedTotalResults} results (${searchResults.searchInformation.formattedSearchTime} seconds)`}</span>
              <div>
                {
                  searchResults.items.map((item) => (
                    <SearchData data={item} />
                  ))
                }
              </div>
            </div>
          </div>
          :
          <h1>no results</h1>
      }
    </>
  )
}

export default Results