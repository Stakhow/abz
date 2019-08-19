import {ReactComponent as mailIco} from "./media/icons/mail.svg";
import {ReactComponent as phoneIco} from "./media/icons/phone.svg";
import {ReactComponent as cellphoneIco} from "./media/icons/cellphone.svg";

const initialState = {
  mainMenu : [
    {link: "#about", text: "About me"},
    {link: "#relationships", text: "Relationships"},
    {link: "#requirements", text: "Requirements"},
    {link: "#users", text: "Users"},
    {link: "#registration", text: "Sign Up"}
  ],
	fullMenu: [
		[
			{link : "News", text: "News"},
			{link : "Blog", text: "Blog"},
			{link : "Partners", text: "Partners"},
			{link : "Shop", text: "Shop"}
		],
		[
			{link : "Overview", text: "Overview"},
			{link : "Design", text: "Design"},
			{link : "Code", text: "Code"},
			{link : "Collaborate", text: "Collaborate"}
		],
		[
			{link : "Tutorials", text: "Tutorials"},
			{link : "Resources", text: "Resources"},
			{link : "Guides", text: "Guides"},
			{link : "Examples", text: "Examples"}
		],
		[
			{link : "FAQ", text: "FAQ"},
			{link : "Terms", text: "Terms"},
			{link : "Conditions", text: "Conditions"},
			{link : "Help", text: "Help"}
		],
	],

  banner : {
    title : "Test assignment for Frontend Developer position",
    content: [
      "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.",
      "Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!"
    ],
    button: {
      link : "#registration",
      text : "Sign up"
    },
    bgImage: "bg-1-min.jpg"
  },

  about: {
    title: "Let's get ac quainted",
    subtitle: "I am cool frontend developer",
    content: [
      "When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.",
      "Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web."
    ],
    button: {
      link : "#registration",
      text : "Sign up"
    },
    image: "man-mobile.svg"
  },

  relationships : {
    title: "About my relationships with web-development",
    relationshipsItem: [
      {
        title: "I'm in love with HTML",
        img: "html.svg",
        content: ["Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications."]
      },
      {
        title: "CSS is my best friend",
        img: "css.svg",
        content: ["Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation of a document written in a markup language like HTML."]
      },
      {
        title: "JavaScript is my passion",
        img: "javascript.svg",
        content: ["JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."]
      }
    ]
  },
  requirements: {
    title: "General requirements for the test task",
    bgImage: "bg-2-min.jpg",
    content: [
      "Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.",
      "If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.",
      "Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions."
    ],
    image: "man-laptop-v1.svg"
  },
  users: {
    title: "Our cheerful users",
    subtitle: "Attention! Sorting users by registration date",
    loading: true,
  	usersList: [],
    page: null,
    totalPages: null,
  	loadMoreBtn: {
		show: true,
		IsLoading: false
	}
  },
	contacts: [
		{
			link: "work.of.future@gmail.com",
			text: "work.of.future@gmail.com",
			icon: mailIco,
			type: "mail"
		},
		{
			link: "+38 (050) 789 24 98",
			text: "+38 (050) 789 24 98",
			icon: phoneIco,
			type: "tel"
		},
		{
			link: "+38 (095) 556 08 45",
			text: "+38 (095) 556 08 45",
			icon: cellphoneIco,
			type: "tel"
		},
	],
	socialLinks: [
		{
			"link": "https://facebook.com",
			"icon": "facebook.svg"
		},
		{
			"link": "https://linkedin.com",
			"icon": "linkedin.svg"
		},
		{
			"link": "https://instagram.com",
			"icon": "instagram.svg"
		},
		{
			"link": "https://twitter.com",
			"icon": "twitter.svg"
		},
		{
			"link": "https://pinterest.com",
			"icon": "pinterest.svg"
		}
	]
	
	
};

export default initialState;