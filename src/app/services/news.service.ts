import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getAllnews() {
    let news = {
      "status": "ok",
      "totalResults": 70,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "MI vs PBKS Highlights, IPL 2023: Mumbai Indians defeat Punjab Kings by 13 runs - Hindustan Times",
          "description": "MI vs PBKS Highlights, IPL 2023: Follow here highlights Mumbai Indians vs Punjab Kings Today's IPL Match cricket scorecard.",
          "url": "https://www.hindustantimes.com/cricket/mi-vs-pbks-live-score-ipl-2023-mumbai-indians-vs-punjab-kings-todays-ipl-match-31-latest-scorecard-updates-101682158406573.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/22/1600x900/PTI04-22-2023-000494A-0_1682186287829_1682186342901.jpg",
          "publishedAt": "2023-04-22T18:05:48Z",
          "content": "MI: Rohit Sharma(c), Ishan Kishan(w), Cameron Green, Suryakumar Yadav, Tilak Varma, Tim David, Nehal Wadhera, Arjun Tendulkar, Hrithik Shokeen, Piyush Chawla, Jason Behrendorff, Riley Meredith, Raman… [+513 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "NDTV Sports Desk",
          "title": "Watch: MS Dhoni's Heartwarming Moment With SRH Pacer's 2-Year-Old Daughter - NDTV Sports",
          "description": "MS Dhoni's heartwarming moment with T Natarajan's daughter during IPL 2023 has broken the internet.",
          "url": "https://sports.ndtv.com/ipl-2023/ipl-2023-ms-dhonis-heartwarming-moment-with-srh-pacers-2-year-old-daughter-watch-3970751",
          "urlToImage": "https://c.ndtvimg.com/2023-04/uhukuge8_dhoni_625x300_22_April_23.jpg",
          "publishedAt": "2023-04-22T17:42:13Z",
          "content": "Chennai Super Kings skipper MS Dhoni shared a sweet moment with Sunrisers Hyderabad fast bowler T Natarajan's two-year-old daughter after their Indian Premier League (IPL) 2023 encounter on Saturday.… [+3589 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Zoom"
          },
          "author": "TN Sports Desk",
          "title": "IPL 2023: Arjun Tendulkar gets smashed for 31 runs against PBKS, joins unwanted list for Mumbai Indians - Times Now",
          "description": "Mumbai Indians pacer Arjun Tendulkar joined an unwanted list after being smashed for 31 runs against Punjab Kings. Arjun leaked a total of 48 runs in his three-over spell at Wankhede Stadium.",
          "url": "https://www.timesnownews.com/sports/cricket/ipl-2023-arjun-tendulkar-gets-smashed-for-31-runs-against-pbks-joins-unwanted-list-for-mumbai-indians-article-99696052",
          "urlToImage": "https://static.tnn.in/thumb/msid-99696052,updatedat-1682184892339,width-1280,height-720,resizemode-75/99696052.jpg",
          "publishedAt": "2023-04-22T17:34:00Z",
          "content": "Karnataka Class 12 Result 2023 HIGHLIGHTS: KSEAB 2nd PUC Result Declared! Link To Check PUC II Results on karresults.nic.in soon, PUC Scorecard, Toppers"
        },
        {
          "source": {
            "id": null,
            "name": "Iftwc.com"
          },
          "author": null,
          "title": "ISL - New Era For Odisha FC As Sergio Lobera Takes Charge - IFTWC",
          "description": "Odisha FC has completed the signing of Sergio Lobera as their new head-coach, IFTWC can confirm. As previously reported, Odisha FC was leading the race to",
          "url": "https://iftwc.com/sergio-lobera-takes-charge-of-odisha/",
          "urlToImage": "https://iftwc.com/wp-content/uploads/2023/04/tr.jpg",
          "publishedAt": "2023-04-22T17:27:49Z",
          "content": "Odisha FC has completed the signing of Sergio Lobera as their new head-coach, IFTWC can confirm. As previously reported, Odisha FC was leading the race to sign the Spanish coach and has now successfu… [+2846 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "Asian News International",
          "title": "IPL 2023: Lucknow Super Giants Skipper KL Rahul Registers Unwanted Batting Record In Loss Against Gu.. - NDTV Sports",
          "description": "KL Rahul failed to guide Lucknow Super Giants to victory against Gujarat Titans in IPL 2023.",
          "url": "https://sports.ndtv.com/ipl-2023/ipl-2023-lucknow-super-giants-skipper-kl-rahul-registers-unwanted-batting-record-in-loss-against-gujarat-titans-3970994",
          "urlToImage": "https://c.ndtvimg.com/2023-04/q8kqi7q_kl-rahul_625x300_22_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-04-22T16:57:39Z",
          "content": "India and Lucknow Super Giants (LSG) batter KL Rahul registered an unwanted record to his name on Saturday in the seven-run loss to defending champions Gujarat Titans in Lucknow. He played the third-… [+2142 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": "Sidharth Monga",
          "title": "KL Rahul, Hardik Pandya, and a tale of two conservative fifties - ESPNcricinfo",
          "description": "One captain will face flak for his approach while the other batted the same way and came away with a win",
          "url": "https://www.espncricinfo.com/story/ipl-2023-lsg-vs-gt-kl-rahul-hardik-pandya-and-a-tale-of-two-conservative-fifties-1370637",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/358500/358599.6.jpg",
          "publishedAt": "2023-04-22T15:40:00Z",
          "content": "Noor, Mohit lead the way as Titans defend 135"
        },
        {
          "source": {
            "id": null,
            "name": "ESPN India"
          },
          "author": null,
          "title": "Mainz vs. Bayern Munich - Football Match Report - April 22, 2023 - ESPN India",
          "description": "Get a report of the Mainz vs. Bayern Munich 2022-23 German Bundesliga football match.",
          "url": "https://www.espn.in/football/report/_/gameId/638689",
          "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0422%2Fr1162758_1296x729_16%2D9.jpg",
          "publishedAt": "2023-04-22T15:39:09Z",
          "content": "Bundesliga leaders Bayern Munich slumped to a 3-1 loss at Mainz on Saturday, conceding all three goals in a span of 14 minutes in their latest slip-up which could prove costly in the race for the tit… [+2330 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Playing Bold in a parallel universe | RCB Shorts - Royal Challengers Bangalore",
          "description": null,
          "url": "https://www.youtube.com/watch?v=3yEWqRqsVs4",
          "urlToImage": null,
          "publishedAt": "2023-04-22T15:37:12Z",
          "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
          "source": {
            "id": null,
            "name": "Barca Blaugranes"
          },
          "author": "Gill Clark",
          "title": "Xavi talks Lamine Yamal, Julian Araujo and Lionel Messi ahead of Atletico clash - Barca Blaugranes",
          "description": "Here’s the latest from the Barcelona boss",
          "url": "https://www.barcablaugranes.com/2023/4/22/23693819/xavi-talks-lamine-yamal-julian-araujo-and-lionel-messi-ahead-of-atletico-clash",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/mtmcBsmBt0364uGN2bFPW3v1iAc=/0x248:1599x1085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24602885/1482684022.jpg",
          "publishedAt": "2023-04-22T15:00:00Z",
          "content": "Barcelona coach Xavi has faced the press ahead of Sundays La Liga clash with Atletico Madrid at the Camp Nou.\r\nThe manager faced a wide range of questions ahead of the game and spoke about several of… [+4752 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "LSG vs GT IPL 2023: Mohit Sharma, Noor Ahmad shine as Gujarat Titans defend 135 vs Lucknow Super Giants - Indiatimes.com",
          "description": "Cricket News:  Pacers Mohammed Shami, Noor Ahmad and Mohit Sharma produced magnificent death-bowling performances as defending champions Gujarat Titans beat Lucknow",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/lsg-vs-gt-ipl-2023-mohit-sharma-noor-ahmad-shine-as-gujarat-titans-defend-135-vs-lucknow-super-giants/articleshow/99695055.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-99695123,width-1070,height-580,imgsize-81406,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-04-22T14:50:00Z",
          "content": "IPL 2023: Gujarat Titans beat Lucknow Super Giants by 7 runs"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "Gambhir's gloomy reaction during Rahul's 68 in LSG's loss sparks meme fest - Hindustan Times",
          "description": "Gambhir, who had only a week back broken into a wild celebration after LSG had defeated RCB at Chinnaswamy, was left helpless in the dug out. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/gautam-gambhir-s-gloomy-reaction-during-kl-rahul-s-sluggish-68-in-lsg-s-horrifying-loss-to-gt-sparks-meme-fest-ipl-2023-101682172218414.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/22/1600x900/gambhir_kl_rahil_1682172638254_1682172644906.jpg",
          "publishedAt": "2023-04-22T14:28:45Z",
          "content": "With a target of 136 in hand in such a high-scoring IPL edition, Lucknow Super Giants were in for a comfortable win on Saturday at home against defending champions Gujarat Titans. And with a well-set… [+1919 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Crictracker.com"
          },
          "author": "CricTracker Staff",
          "title": "IPL 2023: Match 32, RCB vs RR Match Prediction – Who will win today’s IPL match between Royal Challengers Bangalore vs Rajasthan Royals? - CricTracker",
          "description": "The 32nd match of the IPL 2023 features a fiery clash between the Faf du Plessis-led Royal Challengers Bangalore (RCB) and the Sanju Samson-led Rajasthan Royals (RR) at the M Chinnaswamy Stadium in Ba",
          "url": "https://www.crictracker.com/cricket-match-predictions/ipl-2023-match-32-rcb-vs-rr-match-prediction-who-will-win-todays-ipl-match-between-rcb-vs-rr/",
          "urlToImage": "https://media.crictracker.com/media/attachments/1680676116400_RCB.jpeg",
          "publishedAt": "2023-04-22T14:28:03Z",
          "content": "The 32nd match of the IPL 2023 features a fiery clash between the Faf du Plessis-led Royal Challengers Bangalore (RCB) and the Sanju Samson-led Rajasthan Royals (RR) at the M Chinnaswamy Stadium in B… [+2297 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "The Indian Express",
          "title": "Suniel Shetty says he is ‘scared to talk’ because of social media: ‘Abusing my family, calling my daughter a…’ - The Indian Express",
          "description": null,
          "url": "https://indianexpress.com/article/entertainment/bollywood/suniel-shetty-scared-to-talk-social-media-abusing-daughter-athiya-shetty-8570233/",
          "urlToImage": null,
          "publishedAt": "2023-04-22T14:24:47Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "ESPN India"
          },
          "author": "Anirudh Menon",
          "title": "Sweeper keeper, future leader: The Phurba Lachenpa story - ESPN India",
          "description": "Phurba Lachenpa India's #1 sweeper-keeper: he isn't afraid to have the ball at his feet or to race off his line to block a shot.",
          "url": "https://www.espn.in/football/indian-super-league/story/4930174/phurba-lachenpa-goalkeeping-style-sweeper-keeper-mumbai-city-isl-indian-football",
          "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0422%2Fr1162718_1200x675_16%2D9.jpg",
          "publishedAt": "2023-04-22T13:52:40Z",
          "content": "It's the second leg of the first semifinal of the ISL. The stakes are as about as high as they get in Indian football. The Kanteerava stadium in Bengaluru is bouncing; loud and boisterous, this is so… [+6191 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Republic World"
          },
          "author": "Vishal Tiwari",
          "title": "Ravi Shastri gives blunt statement on Virat Kohli & Sourav Ganguly 'no handshake' feud - Republic World",
          "description": "Kohli had unfollowed Ganguly on Instagram immediately after the IPL game against the Delhi Capitals and that Ganguly had returned the favor by doing the same.",
          "url": "https://www.republicworld.com/sports-news/cricket-news/ravi-shastri-gives-blunt-statement-on-virat-kohli-and-sourav-ganguly-no-handshake-feud-articleshow.html",
          "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/bz6teugji90ubn9h_1682168711.jpeg",
          "publishedAt": "2023-04-22T13:16:00Z",
          "content": "IPL 2023: Last week, the 2023 Indian Premier League was marked by controversy as two of India's most prominent cricketing figures, Virat Kohli and Sourav Ganguly, appeared to be at odds. Following th… [+1961 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "Watch: Kuldeep's crazy 'self-troll' reaction as Ponting mentions DC's batting - Hindustan Times",
          "description": "Kuldeep Yadav couldn't suppress his laughter the moment Ricky Ponting began to talk about DC's batting in the game against KKR. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/watch-kuldeep-goes-crazy-in-brutal-self-troll-moment-as-ponting-mentions-dc-s-batting-here-s-how-ganguly-reacted-101682165190594.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/22/1600x900/ponting_kuldeep_1682168381164_1682168386507.png",
          "publishedAt": "2023-04-22T13:02:07Z",
          "content": "After five-successive defeats, Delhi Capitals finally opened their account in the 2023 Indian Premier League earlier this week when they defeated the Kolkata Knight Riders by four wickets. In a game … [+1756 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cricbuzz"
          },
          "author": null,
          "title": "RCB v RR: Batting brawn, PowerPlay smarts and the early advantage | Cricbuzz.com - Cricbuzz - Cricbuzz",
          "description": "The two teams have eerily similar scoring rate in the PowerPlay (9.44). What is shaping up to be another bat-v-bat contest at the Chinnaswamy could come down to who starts better with the ball",
          "url": "https://www.cricbuzz.com/cricket-news/126340/rcb-v-rr-batting-brawn-powerplay-smarts-and-the-early-advantage-cricbuzzcom",
          "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c296203/the-rcb-openers-have-been-in-fine-form-this-season.jpg",
          "publishedAt": "2023-04-22T12:56:45Z",
          "content": "About 24 hours ahead of Sunday's afternoon fixture at the Chinnaswamy stadium, scenes from practice on either side of the pitch typified the venue. On one side, Jos Buttler repeatedly sent balls from… [+5852 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Rediff.com"
          },
          "author": "REDIFF CRICKET",
          "title": "Why RCB Will Wear Green Against RR - Rediff.com",
          "description": "'RCB is the world's first carbon neutral cricket team and the foremost cricket franchise in the world.'",
          "url": "https://www.rediff.com/cricket/report/ipl-2023-why-will-rcb-wear-green-against-rr/20230422.htm",
          "urlToImage": "https://im.rediff.com/cricket/2023/apr/22rcb1.jpg",
          "publishedAt": "2023-04-22T12:53:54Z",
          "content": "IMAGE: RCB's Glenn Maxwell, Virat Kohli, Faf du Plessis and Dinesh Karthik in the green jersey. Photograph: RCB\r\nRoyal Challengers Bangalore will showcase their commitment towards green initiatives w… [+1836 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India.com"
          },
          "author": "Akash Kharade",
          "title": "Watch: RCB Fans Mob Virat Kohli, Anushka Sharma After Lunch Date In Bangalore - Zee News",
          "description": "Watch: MS Dhonis Adorable Moment With T Natrajans Daughter Wins Hearts, Video Goes Viral .@imVkohli and @AnushkaSharma spotted this legendary #CTR Malleshwaram restaurant..crowd chants #RCB #RCB pic.twitter.comtPCocgI1en — A Sharadhaa (@sharadasrinidhi) April…",
          "url": "https://zeenews.india.com/cricket/ipl-2023-virat-kohli-anushka-sharma-get-mobbed-by-rcb-fans-after-luch-date-in-bangalore-ahead-of-rcb-vs-rr-game-watch-2597948.html",
          "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/04/22/1187976-thumb-25.jpg",
          "publishedAt": "2023-04-22T12:29:41Z",
          "content": "Virat Kohli and his wife, Anushka Sharma, were spotted having lunch at CTR Malleshwaram hotel in Bangalore, creating quite a stir among RCB fans. The team had a day off before their upcoming match ag… [+1513 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": "Ashish Pant",
          "title": "KKR look to snap losing streak at home against high-flying CSK - ESPNcricinfo",
          "description": "KKR's season has nosedived after two thrilling wins, while CSK have found ways to win despite not having some of their first-choice players",
          "url": "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/kolkata-knight-riders-vs-chennai-super-kings-33rd-match-1359507/match-preview",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/358500/358541.6.jpg",
          "publishedAt": "2023-04-22T12:26:00Z",
          "content": "PreviewKKR's season has nosedived after two thrilling wins, while CSK have found ways to win despite not having some of their first-choice players"
        }
      ]
    }
    return news
  }
}
