html,
body,
main {
	margin: 0;
	padding: 0;
	display: block;
	width: 100%;
	/*background-color: #FFF0E0;*/
	background: url("../images/wheelbackground.jpg") repeat fixed center center;
	font-family: 'EB Garamond', Serif;
}

a {
	text-decoration: none;	
	color: black;
}		

a:hover {
	color: gray;
}


@font-face {
    font-family: "Kaushan";
    src: url("../Fonts/Kaushan.otf");
}

#cover {
	width:      100%;
	height:     100%; 
	z-index:    400;
	top:        0; 
	left:       0; 
	position:   fixed; 
	background: url("../images/ajax-loader.gif") no-repeat scroll center center #FFF;
}

#cover2 { 
	width: 100%;
	height: 100%;
	bottom: 0;
	left: 0;
	z-index: 10;
	position: fixed;
	background: url("../images/ajax-loader.gif") no-repeat scroll center center #FFF;
	display: none;
}

#head-image-wrap {
    width: 40%;
	left: 27%;
	position: relative;
	float: left;
	padding: 3%;
	padding-bottom: 10px;
}

#introblurb{
    font-family: 'EB Garamond', serif;
	font-size: 14px;
	width: 90%;
	float: left;
	position: relative;
	margin: auto;
	padding: 5%;
	padding-top: 0px;
	text-align: justify;
}


#inithello {
   font-size: 32px;
	font-family: "Kaushan";
	width: 100%;
	margin: auto;
	text-align: center;
	float: left;
	margin: auto;
}

#inithello p {
	margin: 0px 0px 0px 0px;
}


/*------Nav Things--------*/


#nav-wrap {
	position: relative;
	margin: auto;
    z-index: 10;
	width: 100vw;
	height: 15vw;
	padding: 30px 10px 10px 20px;
}

#menu {
	position: absolute;
	width: 100%;
	height: 100%;
}

.menu-item {
    display: inline;
	position: relative;
	float: left;
	width: 14.99vw;
}

.menu-item img {
	position: relative;
	left: 5%;
	width: 90%;
}

main {
	box-sizing: border-box; 
	min-height: 100%;
}

section {
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
}


.container{
	display: none;
	height: auto;
	width: 100%;
}

.sectiontitle {
	font-size: 48px;
	text-align: center;
	font-family: 'Tangerine';
}

.sectiontitle p {
	margin: 0px 0px 10px 0px;
}	

/*Photography and photo-gallery styles*/
.title-desc {
    width: 80%;
	font-size: 10px;
	left: 10%;
	position: relative;
	text-align: justify;
	font-family: 'EB Garamond', serif;
	padding-bottom: 10px;
}

.gallery-cont{
  width: 80%;
  position: relative;
  left: 10%;
  background-color: white;
  padding: 3%;
  margin-bottom: 20px;
}

/*thumb container*/
.galthumbpic{
	width: 50%;
	padding-top: 15px;
}
/*thumb actual image*/
.photothumbimg{
	width: 100%;
}

.galintrotext{
  float: right;
  width: 40%;
  padding-top: 0px;
}

.galintrotexttitle {
	font-size: 17px;
}

.galintrotexttitle p {
	margin: 0px 0px 0px 0px;
}

.galintromaintext {
	font-size: 9px;
}

.galintromaintext p {
	margin: 4px 0px 0px 0px;
}

/*Just a long sentence, make it a bit smaller*/
#travelling {
	font-size: 11px !important;
}

/*Gallery Page Styles*/

.backtogallery {
  position: relative;
  left: 2%;
  padding: 10px 10px 10px 10px;
  font-size: 10px;
} 

.portfoliogalcont {
	width: 100%;
	background: #fff;
	padding: 2%;
	margin-bottom: 2%;
}

.biggal{
	height: auto;
}

.smallgal {
	height: auto;
}

.portfoliogal img {
	width: 80%;
	position: relative;
	left: 10%;
}

.portfoliogalimg img {
	width: 100%;
}

.portfoliogaltextcont {
	font-size: 9px;
	text-align: center;
}

/*GalPops*/

.nyroModalCont {
	overflow: hidden;
}

.galpopcont{
	padding: 3%;
}

.galpoptitle {
	font-size: 4.5vw;
	text-align: center;
}	

.galpopimg {
  width: 80%;
  position: relative;
  left: 10%;
}

.galpopimg img {
	width: 100%;
}

/*Gallery Column Styles, so far very similar but option open for individual styling*/
.brazcol, .adventurecol, .portraiturecol, .lioncol, .wanderingcol {
	width: 30%;
	float: left;
	margin-left: 1.1%;
	margin-right: 1.1%;
}


/*-------Writings Styles------------------------------*/
#writingsthumbcont {
	width: 90vw;
	position: relative;
	left: 5vw;
	height: 40vw;
}

.writingsthumbbox {
  width: 30vw;
  position: relative;
  display: inline;
  float: left;
}

.writingsthumbbox img {
	width: 90%;
	left: 5%;
	position: relative;
}

#writingslewisquote {
  width: 100%; 
  text-align: center;
  font-family: 'Tangerine';
  font-size: 24px;
  margin-top: 50px;
}

.backtowritings {
	position: relative;
	left: 010%;
	font-size: 10px;
	width: 60%;
}

.backtowritings p {
	margin: 0px 0px 30px 0px;
}
/*---------------

			WRITINGS SUBPAGE STYLES
			
			
									----------------------*/
									
/*----------------------Poetry Styles--------------------*/
.poem-title {
  text-align: center;
  font-size: 20px;
}

.poemtext {
  text-align: center;
  font-size: 12px;
}


/*--------------------Short Story Styles-------------------------*/


.shortstory-galintrotext {
	width: 60%;
	float: right;
	padding: 5px;
}


.shortstory-galintromaintext {
	font-size: 8px;
}

.shortstory-galthumbpic {
	width: 35%;
	padding-top: 5%;
}

.clear {
	clear: both;
}

/*---------------Book Pop-up Styles-------------------*/

.bookcontainer  span {
	padding-left: 3em;
}

.bookcontainer {
	background-color: white;
	width: 100%;
	height: 100%;
	padding: 2%;
}

.bookleftpage, .bookrightpage {
	width: 43%;
	height: 85%;	
	float: left;
	position: relative;
	border: 5px solid black;
	padding: 2%;
}

.bookleftheader, .bookrightheader {
	text-align: center;
	padding: 2%;
}

/*-----Title (first) pages of Popups-----*/
.bookleftheader {
	font-size: 2vw;
}

.bookrightheader {
	font-size: 2.2vw;
}

.titleleftpage p, .titlerightpage p {
	text-align: center;
}

.titlelefttitle {
	font-size: 6vw;
}

.titleleftauthor {
	font-size: 3.7vw;
}

.titlerightpage {
	padding-top: 30% !important;
}

.bookmaintext {
  text-align: justify;
 padding: 10%;
 padding-bottom: 2%;
  overflow: hidden;
  height: 70%;
  font-size: 1.4vw;
}


.nyroModalDom {
	width: 100% !important;
	height: 100% !important;
}




/*----------------------Mars Styles--------------------*/

/*News Link Styling*/

#mars p {
	margin: 0px 0px 0px 0px;
}

#news-cont {
	position: relative;
  float: right;
  width: 80px;
  padding: 2%;
}

#newsheader {
	font-size: 12px;
  font-weight: 600;
  text-align: center;
}

#newstextcont {
	  text-align: left;
  font-size: 8px;
  width: 59px;
  position: relative;
  padding-top: 1px;
  left: 11px;
  text-align: left;
}

#newsimgcont {
  width: 60%;
  position: relative;
  left: 20%;
  padding-top: 7px;
}

#newsimgcont img {
	width: 100%;
}

/*Main mars content*/

#marscontent {
	padding: 2%;
	padding-top: 50px;
	font-size: 8px;
}
/*inidividual styling on pics*/
#marspic1cont {
	width: 40%;
	float: left;
	position: relative;
	padding-right: 8px;
	padding-left: 2%;
}

#marspic2cont {
	width: 40%;
	position: relative;
	float: right;
	padding-top: 6%;
	padding-left: 4px;
}

#marspic3cont {
	width: 40%;
	float: left;
	position: relative;
	padding-right: 8px;
	padding-left: 4px;
}
/*fixer for all images*/
.marspic img {
	width: 100%;
}
/*individual texts, assures they are on the correct sides of page*/
#marstext1 {
  position: relative;
  width: 80%;
  padding-left: 2%;
}

#marstext2 {
	position: relative;
	padding-top: 5%;
	padding-left: 2%;
}

#marstext3 {
  position: relative;
  padding-left: 2%;
}

/*her video*/
#marsvid  {
	padding-left: 2%;
	padding-top: 5%;
	padding-bottom: 5%;
	width: 60%;
	position: relative;
	left: 20%;
}

#marsvid iframe {
	width: 100%;
	height: 100%;
}

/*the press email color*/
#media-email {
	color: #6B6865;
}

/*--------------News Page Styles--------------------*/

#newsheadingtext {
	  width: 80%;
	  position: relative;
	  left: 10%;
	  text-align: justify;
	  font-size: 12px;
}

#newscontent {
	padding: 2%;
}

.newslinkbox {
	width: 20%;
	position: relative;	
	float: left;
	font-size: 8.5px;
	padding: 2%;
	margin-bottom: 1%;
	border-radius: 30px;
	margin-right: 1%;
	background-color: #CFC9C9;
	text-align: center;
	opacity: .6;
}

.newslinkbox a:hover {
	color: black;
}


/*-----------------Contact Sizing------------*/

#contactcont {
	background: url(../images/Contactbgd.png) no-repeat scroll center center;
	width: 300px;
	height: 205px;
	position: relative;
	left: 5%;
	background-size: cover;
}

#contactleftcol {
  position: relative;
  width: 20%;
  left: 9%;
  font-size: 6px;
  top: 43%;
}

.contactlinkcont {
	margin-top: 5%;
}
	
.contactlinkcont p {
	margin: 0px 0px 0px 0px;
}

#contactrightcol {
    width: 28%;
  position: relative;
  left: 46%;
  top: 9%;
  height: 40%;
}

form {
	height: 100%;
}

input, textarea {
	width: 100%;
	opacity: .72;
	float: left;
}

input {
	height: 15%;
	outline: none;
	padding: 2px 0px 0px 5px;
	width: 100%;
	border: none;
	color: white;
	font-family: 'EB Garamond', Serif;
	font-size: 18px;
}

*:focus {
	outline: 0;
}

textarea {
	height: 55%;
	outline: none;
	padding: 2px 0px 0px 5px;
	width: 100%;
	resize: none;
	border: none;
	color: white;
	font-family: 'EB Garamond', Serif;
	font-size: 18px;
}

.lighter-input {
	background-color: #998052;
}

.darker-input {
	background-color: #5C4E33;
}

#submitbutton:hover {
	opacity: .9;
}


/*---Placeholder Stylings----*/
input::-webkit-input-placeholder {
   color: white;
   font-size: 8px;
   font-family: 'EB Garamond', Serif;
}

input:-moz-placeholder { /* Firefox 18- */
   color: white;  
    font-size: 8px;
	font-family: 'EB Garamond', Serif;
}

input::-moz-placeholder {  /* Firefox 19+ */
   color: white; 
 font-size: 8px; 
 font-family: 'EB Garamond', Serif;
}

input:-ms-input-placeholder {  
   color: white;  
    font-size: 8px;
	font-family: 'EB Garamond', Serif;
}

textarea::-webkit-input-placeholder {
   color: white;
    font-size: 8px;
	font-family: 'EB Garamond', Serif;
}

textarea:::-moz-placeholder { /* Firefox 18- */
   color: white;  
    font-size: 8px;
	font-family: 'EB Garamond', Serif;
}
textarea::-moz-placeholder {  /* Firefox 19+ */
   color: white; 
 font-size: 8px;  
 font-family: 'EB Garamond', Serif;
}
textarea:-ms-input-placeholder {  
   color: white;  
    font-size: 8px;
	font-family: 'EB Garamond', Serif;
}










/*--------------FOOTER-------------*/
footer {
	margin: auto;
	box-sizing: border-box;
	height: 230px;
	width: 100%;
	text-align: center;
}

#head-image-wrap img{
		width: 100%;		
}

.footer-content {
	width: 150px;
	margin: auto;
	padding-top: 30px;
}

.footer-icons div {
	width: 45px;
	float: left;
	padding-left: 5px;
}

.footer-icons img {
	width: 100%;
}

.footer-links {
	text-align: center;

	font-size: 10px;
	overflow: auto;
	max-height: 150px;
}

.footer-link {
	float: left;
	width: 33.3%;
}

.footer-link a {
}

.footer-text {
	margin: auto;
	padding-top: 25px;
}



/*---------Sent mail styles---------*/


#sentMailSection{
	height: 100%;
	width: 100%;
	background: url("../images/wheelbackground.jpg") no-repeat fixed center center #FFF;
}

#sentMailCont{
	height: 60%;
	width: 60%;
	margin: auto;
	top: 25%;
	position: relative;
}

#sentMailContent{
	font-family: 'FuturaLT-Heavy';
	color: #ffffff;
	text-align: center;
}

#smthx{
	font-size: 4.8vw;
	color: black;
}

#smredir{
	font-size: 2.2vw;
	color: black;
}
